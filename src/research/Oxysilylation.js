import React from "react";
import Research from "./Research";
import researchStyles from "./Research.module.css";
import TraditionalEpoxyResin from "./research_images/TraditionalEpoxyResin.png";
import OxysilylationMech from "./research_images/OxysilylationMech.png";
import PRrxn from "./research_images/PRrxn.png";
import OxysilylationSum from "./research_images/OxysilylationSum.png";
import OxysilylationRxns from "./research_images/OxysilylationRxns.png";

function Oxysilylation() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Oxysilylation</div>
      <div className={researchStyles.projTitle}>
        Traditional Epoxy Resin Syntheses
      </div>
      <div className={researchStyles.mainText}>
        Epoxy resins are widely used for applications ranging from
        fibre-reinforced composites for aircraft components, to paints, to
        dental restoratives, to flip-chip underfill, to bonding glues for
        household use. The typical epoxy resin is a two-component mixture where
        one component contains two or more epoxy groups and a hardener that is
        most often a diamine. In some instances, accelerating catalysts can be
        added to promote curing at low temperatures.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "55%" }}
        src={TraditionalEpoxyResin}
      />
      <div className={researchStyles.mainText}>
        Many properties rely on the chemical structure of the epoxy, the
        hardener used, and the ratio of one to the other though this is
        typically 2:1. One of the troubling issues with epoxy resins is their
        susceptibility to moisture uptake leading to mass and volume changes
        coincident with changes in multiple physical properties.
      </div>
      <div className={researchStyles.projTitle}>
        Oxysilylation of Diepoxides – A Novel Approach to Epoxy Resins
      </div>
      <div className={researchStyles.mainText}>
        Our approach employs two components and a catalyst. One component is a
        traditional diepoxide. However, the “hardener” consists of compounds
        containing two or more Si-H groups, and the reaction is affected using
        catalytic amounts of B(C<sub>6</sub>F<sub>5</sub>)<sub>3</sub>. The
        curing reaction adds Si-H across one epoxide C-O bond to form new Si-O
        and C-H bonds coincident with ring-opening. We term this reaction
        oxysilylation.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "60%" }}
        src={OxysilylationMech}
      />
      <div className={researchStyles.mainText}>
        Oxysilylation is also known as Piers-Rubinsztajn reaction:{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "65%" }}
        src={PRrxn}
      />
      <div className={researchStyles.mainText}>
        In this work, linear, 2D to 3D structured epoxy resins are synthesized
        by oxysilylation:{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "75%" }}
        src={OxysilylationSum}
      />
      <div className={researchStyles.mainText}>
        Relationships between properties of these epoxy resins, starting
        materials, reaction rate and different reaction conditions including
        various solvent volumes [in 1:1 vol. mixture of CH<sub>2</sub>Cl
        <sub>2</sub> (DCM) and hexane] and catalyst concentrations are studied.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={OxysilylationRxns}
      />
      <div className={researchStyles.mainText}>
        In summary, reactions of diepoxides with TMDS give linear polymers.
        These reactions are quite rapid and may be useful in the development of
        novel self-curing systems. With low solvent volume (1 mL), diepoxide
        oxysilylations with TMDS give gels/solids that are stable in boiling
        water up to 5 h suggesting good water stability.{" "}
      </div>
      <div className={researchStyles.mainText}>
        For diepoxides with D4H/D5H, the D5H products show much higher molecular
        weights compared to D4H products, and can form gels/solids more easily
        with good water stability.
      </div>
      <div className={researchStyles.mainText}>
        Highly ordered networks can be made through oxysilylation of diepoxides
        with a cubic symmetry Q-cage (OHS). Due to high crosslink density,
        gels/solids form from reactions of diepoxides with OHS and show good
        water stability, solvent affinities, and solvent uptake. The DEO-OHS
        system in particular, can be cast as transparent and flexible thin
        films.{" "}
      </div>
      <div
        className={researchStyles.mainText}
        style={{ paddingTop: "3%", fontWeight: "bold" }}
      >
        For comprehensive analyses and discussions, please see the published
        paper:{" "}
      </div>
      <div className={researchStyles.mainText}>
        <a href="https://doi.org/10.1021/acs.macromol.9b02676" target="_blank">
          Zhang, X.; Yu, M.; Laine, R. M. An Approach to Epoxy Resins:
          Oxysilylation of Epoxides. <em>Macromolecules</em>{" "}
          <strong>2020</strong>, <em>53</em>(6), 2249-2263.
        </a>
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <Oxysilylation />
    </Research>
  );
};
