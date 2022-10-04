import React from 'react';
import AboutUsSection from '../AboutUs';
import ClubLifeSection from '../ClubLife';
import ConceptSection from '../Concept';
import FollowUsSection from '../FollowUs';
import Footer from '../Footer';
import Header from '../Header';
import MemberSection from '../Member';
import Navbar from '../Navbar';

interface IndexProps {
  documents: StaticImage[];
  images: StaticImage[];
}

export default function Index({ images }: IndexProps) {
  return (
    <>
      <Navbar images={images} />
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