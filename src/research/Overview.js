import React from "react";
import Research from "./Research";
import { Link } from "react-router-dom";
import researchStyles from "./Research.module.css";

function Overview() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Overview</div>
      <div className={researchStyles.mainText}>
        Throughout my time at University of Michigan as a graduate student, I
        worked in the Laine lab focusing primarily on novel solid-state
        electrolytes (SSEs) for lithium-ion batteries (LIBs) derived from
        polymer syntheses along with other projects, including oxysilylation,
        reactions between metal chlorides with hexamethyldisilazane (M-HMDS)
        towards metal nitride precursors, and zirconia toughened alumina (ZTA)
        ceramics.
      </div>
      <div className={researchStyles.subtitle}>Motivation and Objectives</div>
      <div className={researchStyles.mainText}>
        Replacing traditional combustion-based energy sources, i.e., fossil
        fuels, with clean and reliable energy supply is one of the most
        important research goals for the 21st century. Electrochemical energy
        storage/conversion systems, including LIBs, electrochemical capacitors
        (ECs), and fuel cells (FCs), have thus drawn great interest. LIBs are
        becoming the most important electrochemical storage system owing to
        their high energy densities (~250 Wh/kg), providing an escape from
        consumption of fossil fuels. However, current LIBs with flammable
        organic liquid electrolytes suffer from poor electrochemical and thermal
        stabilities that can lead to severe thermal runaway accidents.
        All-solid-state batteries (ASSBs) are regarded as a fundamental solution
        to address the safety issue by applying non-flammable SSEs. Therefore,
        the research objectives are to develop novel polymeric SSE materials
        through polymer synthesis methods with low-cost, scalable and
        environmentally friendly features, establish new chemistries for
        synthesizing polymer precursors towards SSEs, optimize electrochemical
        performance and fabricate ASSBs.
      </div>
      <div className={researchStyles.note}>
        <div>Notes: click on titles below for detailed description.</div>
        <div>*Most important projects.</div>
      </div>
      <div className={researchStyles.subtitle}>
        <Link to="/research/polymer_syntheses">Polymer Syntheses</Link>
      </div>
      <div className={researchStyles.projTitle}>
        <Link to="/research/polymer_syntheses/oxysilylation">
          1. Oxysilylation
        </Link>
      </div>
      <div className={researchStyles.mainText}>
        I started with exploring nanocomposites by oxysilylation of [HSiMe
        <sub>2</sub>O(SiO)<sub>1.5</sub>]<sub>8</sub> (OHS) crosslinked via
        ring-opening of epoxy groups. The linkages containing ether oxygens may
        facilitate Li<sup>+</sup> transport, while the 3-D ordered
        organic-inorganic hybrid structure of silsesquioxane cages (SQs, RSiO
        <sub>1.5</sub>) offers mechanical stability. Oxysilylations of different
        diepoxides with TMDS [O(SiMe<sub>2</sub>H)<sub>2</sub>], OHS, D
        <sub>4</sub>H and D<sub>5</sub>H [(CH<sub>3</sub>SiHO)
        <sub>4,5</sub>] catalyzed by B(C
        <sub>6</sub>F<sub>5</sub>)<sub>3</sub> at ambient were studied. Although
        flexible transparent films were successfully cast, they failed to offer
        ionic conductivity with LiClO<sub>4</sub> impregnation due to the rigid
        structure. Nevertheless, a novel synthesis of self-reinforced epoxy
        resin nanocomposites was established.
      </div>
      <div className={researchStyles.projTitle}>
        <Link to="/research/polymer_syntheses/novel_sses">
          2. Novel SSEs<sup>*</sup>
        </Link>
      </div>
      <div className={researchStyles.topicTitle}>
        Li<sub>x</sub>PON and Li<sub>x</sub>SiPON
      </div>
      <div className={researchStyles.mainText}>
        I continued to investigate polymer precursor electrolytes based on
        lithium phosphorous oxynitride (LiPON) glasses. LiPON glasses form
        lithium dendrite impenetrable interfaces at electrodes offering the
        potential to replace liquid electrolytes. Unfortunately, to date such
        materials are introduced only via gas phase deposition. The design and
        synthesis of easily scaled, low-temperature, solution processable
        inorganic polymers containing LiPON/LiSiPON elements were established.
        We were able to produce Li<sub>x</sub>PON/Li<sub>x</sub>SiPON
        oligomers/polymers with superior electrochemical performance compared to
        traditional LiPON glasses, and nearly all-solid-state Li-S batteries
        were assembled using polymer precursors impregnated Celgard or solid
        solutions with polyethylene oxide (PEO), which provided an optimized
        capacity of ~1000 mAh/gsulfur (at 0.25-1 C) retaining coulombic
        efficiency of ~100 % over 100 cycles.
      </div>
      <div className={researchStyles.topicTitle}>
        Li<sub>x</sub>SiON
      </div>
      <div className={researchStyles.mainText}>
        Another set of Li<sub>x</sub>SiON (Li/Si = x = 2, 4, 6) oligomer/polymer
        precursors derived from agricultural waste rice hull ash (RHA) were also
        studied, providing a green route towards ASSBs. The synthesized Li
        <sub>x</sub>SiON oligomers/polymers show that Li content can be easily
        controlled by LiNH
        <sub>2</sub> amounts correlating with Li<sup>+</sup> conductivity, and
        Li<sub>6</sub>SiON exhibits the highest ambient conductivity of ~10
        <sup>-5</sup> S/cm. Nearly ASSBs were assembled with Li<sub>6</sub>SiON
        impregnated Celgard, which delivered a reversible capacity of ~725 mAh/g
        at 0.5 C over 50 cycles.
      </div>
      <div className={researchStyles.topicTitle}>Next Steps</div>
      <div className={researchStyles.mainText}>
        Based on the work on polymer precursor electrolytes, next steps going
        forward include but not limited to the following.
        <div className={researchStyles.list}>
          <ul>
            <li>
              Li<sub>x</sub>SiON precursor solid solutions with PEO.{" "}
            </li>
            <li>
              Li<sub>x</sub>SiO system derived from the Li<sub>x</sub>SiON
              precursors.
            </li>
            <li>
              Use polymer precursor electrolytes as coatings on inorganic SSEs
              to serve as buffer layers while improving their mechanical
              properties and interfacial contact with electrodes.{" "}
            </li>
            <li>
              Sodium-based systems such as Na<sub>x</sub>PON, Na<sub>x</sub>
              SiPON and Na<sub>x</sub>SiON for sodium ion batteries.
            </li>
          </ul>
        </div>
      </div>
      <div className={researchStyles.projTitle}>
        <Link to="/research/polymer_syntheses/m_hmds">3. M-HMDS</Link>
      </div>
      <div className={researchStyles.mainText}></div>
      <div className={researchStyles.subtitle}>
        <Link to="/research/ceramics">Ceramic Processing</Link>
      </div>
      <div className={researchStyles.projTitle}>
        <Link to="/research/ceramics">ZTA Ceramics</Link>
      </div>
      <div className={researchStyles.mainText}></div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <Overview />
    </Research>
  );
};
