import React from 'react';
import AboutUsSection from '../AboutUs';
import ClubLifeSection from '../ClubLife';
import ConceptSection from '../Concept';
import FollowUsSection from '../FollowUs';
import Footer from '../Footer';
import Header from '../Header';
import MemberSection from '../Member';

interface IndexProps {
  images: StaticImage[];
}

export default function Index({ images }: IndexProps) {
  return (
    <>
      <Header images={images} />
      <ConceptSection />
      <FollowUsSection />
      <ClubLifeSection images={images} />
      <MemberSection />
      <AboutUsSection />
      <Footer />
    </>
  );
}
