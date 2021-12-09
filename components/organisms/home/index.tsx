import { About, Carousel, Container } from '@/components';
import React, { PropsWithChildren } from 'react';
import { Features } from './features';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { ShowCase } from '@/components/molecules/showcase';
import { FileField, HomepageContent } from '@/generated/schema';

type HomeOrganismProps = PropsWithChildren<{
  content: HomepageContent;
}>;

export const HomeOrganism = ({ content }: HomeOrganismProps) => {
  return (
    <>
      <Carousel items={content.homepage?.carousel as any} />
      <Features items={content.homepage?.features as any} />
      <ShowCase
        title={content.homepage?.productsTitle ?? undefined}
        products={content.allProducts as any}
      />
      <About
        leftText={content.homepage?.aboutSideText ?? ''}
        description={content?.homepage?.aboutText || ''}
        title={content?.homepage?.aboutTitle || ''}
        leftImage={content?.homepage?.aboutBanner as FileField}
      />
    </>
  );
};
