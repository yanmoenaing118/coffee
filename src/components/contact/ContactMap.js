import React from "react";
import Map from "react-map-gl";
import styled from "styled-components";
import { MaxWidth } from "components/MaxWidth";

const MAPBOX_KEY =
  "pk.eyJ1IjoieWFubW9lbmFpbmcxMTgiLCJhIjoiY2wxaHo0cHlqMDlvYzNpcWx0ejlya2s0YiJ9.7NtOIgcLgjHhQC_3Qm8Rfw";

const Section = styled.section`
  padding-bottom: 8rem;
`;

const Wrapper = styled(MaxWidth)`
  height: 480px;
`;

export default function ContactMap() {
  return (
    <Section>
      <Wrapper>
        <Map
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/yanmoenaing118/cl1ksjzel000314s6pmvsqff6"
          mapboxAccessToken={MAPBOX_KEY}
        />
      </Wrapper>
    </Section>
  );
}
