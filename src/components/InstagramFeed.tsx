/* eslint-disable camelcase */
import Card from '@mui/material/Card/Card';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import useInstagramFeed from '../hooks/use-instagram-feed';
import windowSafe from './utils/windowSafe';
import WithHover from './WithHover';

interface InstagramFeedProps {
  instagramAvatar?: StaticImage;
}

export default function InstagramFeed({ instagramAvatar }: InstagramFeedProps) {
  const instagramFeed = useInstagramFeed();

  const Post = useCallback(
    (post: InstagramPost) => {
      const {
        media_type: type,
        media_url: url,
        caption,
        username,
        permalink,
      } = post;

      return (
        <WithHover
          onClick={() =>
            windowSafe?.open(permalink, '_blank', 'noopener,noreferrer')
          }
        >
          <CardCss>
            <HeaderCss>
              <AvatarCss
                src={instagramAvatar?.childImageSharp.fluid.src}
                srcSet={instagramAvatar?.childImageSharp.fluid.srcSet}
                alt=""
              />
              <p style={{ margin: 0 }}>{username}</p>
            </HeaderCss>
            {(type === 'IMAGE' || type === 'CAROUSEL_ALBUM') && (
              <ImageCss src={url} />
            )}
            {type === 'VIDEO' && (
              <div
                dangerouslySetInnerHTML={{
                  __html: `
              <video
              style="width: 100%; height: 300px; object-fit: cover;"
                muted
               autoplay
               loop          
                playsinline
                src="${url}"   
                id="${post.id}"
              />`,
                }}
              />
            )}
            <ContentCss>
              <b style={{ color: '#262626' }}>{username}</b> {caption}
            </ContentCss>
          </CardCss>
        </WithHover>
      );
    },
    [instagramAvatar],
  );

  return (
    <ContainerCss>
      {instagramFeed?.slice(0, 3).map(post => Post(post as InstagramPost))}
    </ContainerCss>
  );
}

const ContainerCss = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
`;

const CardCss = styled(Card)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 18px;
`;

const HeaderCss = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  font-weight: 700;
  color: #262626;
`;

const AvatarCss = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 10px;
`;

const ImageCss = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ContentCss = styled.div`
  padding: 16px;
`;
