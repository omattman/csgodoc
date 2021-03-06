import React from "react";
import styled from "@emotion/styled";
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward";

import HomepageSection from "./homepage-section";
import GuidesSection from "../guides/guides-section";
import { GuidesIcon } from "../../assets/icons";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";

const Sections = styled(`div`)`
  display: flex;
  flex-direction: column;

  ${mediaQueries.md} {
    flex-direction: row;
    margin: 0 -${p => p.theme.space[2]} ${p => p.theme.space[4]};
  }
`;

const Section = styled(GuidesSection)`
  box-shadow: ${p => p.theme.shadows.raised};
  border-radius: ${p => p.theme.radii[2]}px;
  margin-bottom: ${p => p.theme.space[6]};
  padding: ${p => p.theme.space[6]};

  ${mediaQueries.md} {
    margin: 0 ${p => p.theme.space[2]} 0;
    padding: ${p => p.theme.space[6]};

    :last-child {
      align-self: stretch;
    }
  }
`;

const HomepageDocs = () => (
  <HomepageSection
    sectionName="Guides"
    sectionIcon={GuidesIcon}
    title="Utility Guides"
    introduction="We provide you with the best collection of utility guides."
    links={[
      {
        label: `Explore the Guides`,
        to: `/guides/`,
        icon: ArrowForwardIcon
      }
    ]}
  >
    <Sections>
      <Section
        title="Inferno"
        description="Terrorists are attempting to blow up two critical gas pipelines through part of a small village. Counter-Terrorists: Prevent the terrorists from destroying the pipelines."
        links={[{ label: `Browse Guides`, to: `/guides/inferno/` }]}
        onHomepage={true}
      />
      <Section
        title="Train"
        description="map description"
        links={[{ label: `Browse Guides`, to: `/guides/train/` }]}
      />
      <Section
        title="Mirage"
        description="map description"
        links={[{ label: `Browse Guides`, to: `/guides/mirage/` }]}
      />
    </Sections>
    <Sections>
      <Section
        title="Nuke"
        description="map description"
        links={[{ label: `Browse Guides`, to: `/guides/nuke/` }]}
      />
      <Section
        title="Overpass"
        description="map description"
        links={[{ label: `Browse Guides`, to: `/guides/overpass/` }]}
      />
      <Section
        title="Vertigo"
        description="map description"
        links={[{ label: `Browse Guides`, to: `/guides/vertigo/` }]}
      />
    </Sections>
  </HomepageSection>
);

export default HomepageDocs;
