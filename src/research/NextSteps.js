import React from "react";
import Research from "./Research";
import { Link } from "react-router-dom";
import researchStyles from "./Research.module.css";
import PrecursorCoating from "./research_images/PrecursorCoating.png";
import PrecursorCeramicData from "./research_images/PrecursorCeramicData.png";
import PrecursorBufferLayer from "./research_images/PrecursorBufferLayer.png";
import LiSiONPEO from "./research_images/LiSiON+PEO.png";
import LiSiONPEOdata from "./research_images/LiSiON+PEOdata.png";
import LiSiOsynthesis from "./research_images/LiSiOsynthesis.png";
import LiSiOconductivity from "./research_images/LiSiOconductivity.png";
import NaSystemsSynthesis from "./research_images/NaSystemsSynthesis.png";
import NaSystemsData from "./research_images/NaSystemsData.png";

function NextSteps() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Next Steps on SSE Studies</div>
      <div className={researchStyles.mainText}>
        Studies on polymer syntheses derived novel solid electrolytes open a new
        gate for research on SSEs for ASSBs. There are still much more to be
        done going forward. Below, a few possible near-future research
        objectives on the syntheses, applications and improvement for
        electrolytes derived from polymer syntheses are described.
      </div>
      <div className={researchStyles.projTitle}>
        Polymer Precursor Coated SSE Thin Films
      </div>
      <div className={researchStyles.mainText}>
        Li metal dendrite formation resulting from nonuniform Li deposition is a
        well-established problem when cycling lithium-ion batteries (LIBs),
        which can lead to short circuiting wherein the dendrites penetrate the
        electrolyte layer and bridge to the cathode. Inorganic (ceramic) SSEs or
        ISEs were originally thought to offer a mechanical solution by blocking
        dendrite growth, but in fact they generally suffer from low fracture
        toughness and ductility, resulting in poor interfacial contact with
        electrodes. In fact, many ISEs are susceptible to dendrite penetration
        along grain boundaries, which also leads to short-circuiting [e.g.,
        garnet-type LLZO (Li<sub>7</sub>La<sub>3</sub>Zr<sub>2</sub>O
        <sub>12</sub>)].
      </div>
      <div className={researchStyles.mainText}>
        One solution to these problems is LiPON glasses. As introduced in the{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          Li
          <sub>x</sub>PON and Li<sub>x</sub>SiPON
        </Link>{" "}
        page, they appear to resist dendrite penetration and wet with Li metal.
        However, LiPON glasses typically suffer from poor conductivities (10
        <sup>-8</sup>-10
        <sup>-6</sup> S/cm) compared to, for example, LLZO (10<sup>-4</sup>-10
        <sup>-3</sup> S/cm), and they must be introduced as interface materials
        at thicknesses of 50-200 nm to offer practical Li<sup>+</sup> cycling.
        Consequently, LiPON thin films are typically fabricated through gas
        phase deposition methods.
      </div>
      <div className={researchStyles.mainText}>
        Our{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          polymer syntheses derived Li<sub>x</sub>PON-like precursors
        </Link>{" "}
        offer a facile, low-cost alternative for the application of thin ceramic
        films. Furthermore, polymer precursors can be applied in a liquid
        format, which gives rise to the possibility of using scalable LiPON-like
        polymer precursors as coating materials that can act as binder/or
        adhesives for ceramic electrolytes, offering the potential to serve as
        an interface buffer layer between electrolyte and electrode.
      </div>
      <div className={researchStyles.mainText}>
        Initial studies investigated a series of ceramic electrolyte substrates
        including{" "}
        <a
          href="https://pubs.acs.org/doi/10.1021/acsami.0c13021?ref=pdf"
          target="_blank"
        >
          LiAlO<sub>2</sub>
        </a>{" "}
        (20-30 μm thick) and{" "}
        <a
          href="https://doi.org/10.1016/j.jpowsour.2014.07.029"
          target="_blank"
        >
          Li
          <sub>1.7</sub>Al<sub>0.3</sub>Ti<sub>1.7</sub>Si<sub>0.4</sub>P
          <sub>2.6</sub>O<sub>12</sub>
        </a>{" "}
        (LATSP, ~25 μm thick) thin films derived from flame-synthesized
        nanopowders. These sintered substrates were dip-coated in the desired
        LiPON-like precursor solution (~0.1 g/mL in THF) using copper wire to
        suspend the sample. The coated films were dried (100 °C/12 h/vacuum),
        followed by heating to selected temperatures (400-600 °C/2 h) under N
        <sub>2</sub>.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={PrecursorCoating}
      />
      <div className={researchStyles.mainText}>
        Coated LiAlO<sub>2</sub> and LATSP films generally show dense and
        uniform coatings (~5 μm) with a well-defined interface between the
        coating and the substrate. Some coated films show the polymer precursor
        percolating into the LATSP substrate, resulting in a denser
        microstructure, and can be beneficial for ionic conduction.
      </div>
      <div className={researchStyles.mainText}>
        All coated films generally show conductivities of 10<sup>-5</sup>-10
        <sup>-4</sup> S/cm, similar to{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          Li<sub>x</sub>PON-like polymer precursors
        </Link>
        , suggesting their dominant contribution for Li<sup>+</sup> conduction.
        It's possible that the coating penetrates pores introducing Li
        <sup>+</sup> conducting pathways not available before coating.
      </div>
      <div className={researchStyles.mainText}>
        Although LiPON-like precursor coatings reduce the conductivity of LATSP
        by almost an order of magnitude, significant improvement in conductivity
        (up to four orders of magnitude) for LiAlO<sub>2</sub> is exhibited.
        This is important as LiAlO<sub>2</sub> substrates are much less costly
        substitutes.
      </div>
      <div className={researchStyles.mainText}>
        The graph below shows representative SEM fracture surface
        microstructures and ambient ionic conductivities of coated SSE
        substrates heated to 400 °C/2 h/N<sub>2</sub>.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "90%" }}
        src={PrecursorCeramicData}
      />
      <div className={researchStyles.mainText}>
        The more important application of polymer precursor coatings is that
        they might offer improved interfacial properties that can lower
        interfacial resistance and stabilize the interfacial performance of
        ASSBs. As shown in the figure below for LTO/Li<sub>3</sub>SiPON/LiAlO
        <sub>2</sub> heated to 400 °C/2 h/N<sub>2</sub>, clear bonding between
        the SSE LiAlO
        <sub>2</sub> substrate and the anode LTO via Li<sub>3</sub>SiPON
        precursor coating is formed, and the resulting coating interface appears
        dense and uniform. Future studies should focus on the use of these
        polymer precursors for bonding between thin film ceramics and to
        assemble symmetrical and half-cells for electrochemical performance.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={PrecursorBufferLayer}
      />
      <div className={researchStyles.projTitle}>
        Li<sub>x</sub>SiON Precursor Solid Solutions with PEO
      </div>
      <div className={researchStyles.mainText}>
        Similar to the study on{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          Li<sub>x</sub>PON-like polymer precursor
        </Link>{" "}
        solid solutions with PEO, Li<sub>x</sub>SiON-PEO solid solution polymer
        electrolyte (PE) films should also be investigated. Indeed, such PE
        films can be made by mixing Li<sub>x</sub>SiON precursor with 60 wt.%
        PEO (M<sub>w</sub> = 900 kDa), and transparent and dense films form,
        especially for 60PEO/Li<sub>4</sub>SiON and Li<sub>6</sub>SiON PE films.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "60%" }}
        src={LiSiONPEO}
      />
      <div className={researchStyles.mainText}>
        Preliminary studies show that melting temperature (T<sub>m</sub>) and
        crystallinity (χ<sub>c'</sub>%) decrease for 60PEO/Li<sub>x</sub>SiON PE
        films compared to pristine PEO. The 60PEO/Li<sub>6</sub>SiON films show
        the highest conductivity of ~10<sup>-4</sup> S/cm at ambient
        temperature, despite higher Tm and crystallinity compared to 60PEO/Li
        <sub>2</sub>SiON and Li<sub>4</sub>SiON films, which can be ascribed to
        its higher Li content.
      </div>
      <div className={researchStyles.mainText}>
        Future work should focus on electrochemical characterization of 60PEO/Li
        <sub>x</sub>SiON PE films assembled in symmetrical and half cell forms
        towards ASSBs.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "65%" }}
        src={LiSiONPEOdata}
      />
      <div className={researchStyles.projTitle}>
        Li<sub>x</sub>SiO System - Silica Dissolution with Ethylene Glycol
      </div>
      <div className={researchStyles.mainText}>
        Li<sub>x</sub>SiON precursors were synthesized by reacting spirosiloxane
        (SP) distilled from rice hull ash (RHA) with LiNH<sub>2</sub>. The
        reaction between SiO<sub>2</sub> in RHA with a sterically hindered diol,
        hexylene glycol, in the presence of catalytic amount of an alkali base
        forms distillable SP with a spirocyclic structure.
      </div>
      <div className={researchStyles.mainText}>
        Previously, our group reported similar reactions of fumed silica with
        ethylene glycol (EGH<sub>2</sub>) and an alkali base:
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={LiSiOsynthesis}
      />
      <div
        className={researchStyles.mainText}
        style={{
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#1a5276",
          marginTop: "-1.5%",
          marginBottom: "2%",
        }}
      >
        References:
      </div>
      <ul className={researchStyles.list}>
        <li className={researchStyles.reference}>
          <a href="https://doi.org/10.1038/353642a0" target="_blank">
            Laine, R. M.; Blohowiak, K. Y.; Robinson, T. R.; Hoppe, M. L.;
            Nardi, P.; Kampf, J.; Uhm, J. Synthesis of Pentacoordinate Silicon
            Complexes from SiO<sub>2</sub>. <em>Nature</em>{" "}
            <strong>1991</strong>, <em>353</em>(6345), 642-644.
          </a>
        </li>
        <li className={researchStyles.reference}>
          <a href="https://doi.org/10.1002/anie.201506838" target="_blank">
            Laine, R. M.; Furgal, J. C.; Doan, P.; Pan, D.; Popova, V.; Zhang,
            X. Avoiding Carbothermal Reduction: Distillation of Alkoxysilanes
            from Biogenic, Green, and Sustainable Sources.{" "}
            <em>Angew. Chem. - Int. Ed.</em> <strong>2016</strong>, <em>55</em>
            (3), 1065-1069.
          </a>
        </li>
      </ul>
      <div className={researchStyles.mainText} style={{ paddingTop: "2%" }}>
        One can envision that if an intermediate amount of alkali base is used,
        e.g., 40 mol. % of SiO<sub>2</sub>, a mixture of metal glycolate
        silicate salt with Si(EG)<sub>2</sub> polymer will form, which is
        analogous to a solid polymer electrolyte (SPE) system (lithium salt in
        polymer matrix). Therefore, as an initial study, a set of reactions were
        explored using selected amounts of LiOH (20, 40 and 60 mol.% to SiO
        <sub>2</sub>), and they are denoted as Li<sub>x</sub>SiO (Li/Si = x =
        0.2, 0.4 and 0.6). Here, fumed SiO<sub>2</sub> is used.
      </div>
      <div className={researchStyles.mainText}>
        As shown in the figure below, ambient ionic conductivity (σ<sub>RT</sub>
        ) improves when the Li content (Li/Si ratio) increases from 0.2 to 0.4,
        but decreases slightly when it further increases to 0.6. It's noteworthy
        that when the LiOH amount increases to 60 mol.%, the reaction mixture no
        longer forms transparent solution, unlike the Li<sub>0.2</sub>SiO and Li
        <sub>0.4</sub>SiO syntheses, but rather a suspension. The slight
        decrease in conductivity for Li<sub>0.6</sub>SiO suggests that insoluble
        solids in the SPE impede Li
        <sup>+</sup> mobility, as the polymer matrix facilitates Li<sup>+</sup>{" "}
        conduction.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "40%" }}
        src={LiSiOconductivity}
      />
      <div className={researchStyles.mainText}>
        Overall, the Li<sub>x</sub>SiO system shows limited ionic conductivities
        (≤10<sup>-6</sup> S/cm), and generally lower than the{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lision">
          Li<sub>x</sub>SiON system
        </Link>
        . Improving the conductivity and fabricating processable solid
        electrolyte membranes for ASSBs assembly remain as future work. It is
        also important to optimize the synthesis procedure so that RHA can be
        used as the starting material, achieving a green synthetic method
        similar to the Li
        <sub>x</sub>SiON SSE system.
      </div>
      <div className={researchStyles.projTitle}>Sodium-Based Systems</div>
      <div className={researchStyles.mainText}>
        LIBs have been the electricity storage system of choice since the
        successful commercialization in 1991, owing to their high energy
        density, compact and lightweight designs, and excellent cycle life
        compared to other rechargeable battery technologies. Unfortunately, the
        high demand for lithium has outpaced the capability of raw material
        supplies as a result of the increased growth of lithium-based systems.
        LIBs are becoming too expensive for stationary, large-scale electrical
        energy storage. Therefore, it is necessary to develop new energy storage
        technologies, and sodium-ion batteries (SIBs) have been recognized as
        promising alternatives due to the natural abundance of sodium and its
        similar intercalation chemistry to lithium.
      </div>
      <div className={researchStyles.mainText}>
        Initial efforts on Na-based systems investigated syntheses of Na
        <sub>x</sub>SiPON and Na<sub>x</sub>SiON precursors, similar to previous
        studies on{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          Li<sub>x</sub>SiPON
        </Link>{" "}
        and{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lision">
          Li<sub>x</sub>SiON precursors
        </Link>
        . Here, we simply replace LiNH
        <sub>2</sub> used for the lithiation step to NaNH
        <sub>2</sub> for sodiation, see below.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "100%" }}
        src={NaSystemsSynthesis}
      />
      <div className={researchStyles.mainText}>
        For Na<sub>x</sub>SiPON precursors, the Na<sub>3</sub>SiPON precursor
        solutions were coated on{" "}
        <a href="https://doi.org/10.1039/C8TA02907E" target="_blank">
          Na<sub>1.67</sub>Al<sub>10.33</sub>Mg
          <sub>0.67</sub>O<sub>17</sub>
        </a>{" "}
        (NAMO, SSE for SIBs) films following the same procedure discussed above.
        The coated films were treated at 400 °C/2 h/N<sub>2</sub>, SEMs show the
        average coating thickness is 7.5 μm, and the coating surface appears to
        be overall uniform with some agglomerates. The maximum ambient ionic
        conductivity was found to be ~6 × 10<sup>-7</sup> S/cm.
      </div>
      <div className={researchStyles.mainText}>
        For Na
        <sub>x</sub>SiON (x = 2, 4) precursors, they were impregnated onto
        Celgard separators showing ambient conductivity of ~10<sup>-6</sup>{" "}
        S/cm.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "90%" }}
        src={NaSystemsData}
      />
      <div className={researchStyles.mainText}>
        Overall, promising results are obtained. Future work should continue the
        investigation of different precursor compositions of Na-based systems,
        optimization of precursor syntheses as well as their electrochemical
        performance, and fabrication of symmetrical cells, half cells, and
        eventually full cells for practical applications.
      </div>
      <div
        className={researchStyles.mainText}
        style={{
          paddingTop: "2.5%",
          fontStyle: "italic",
          fontWeight: "bold",
          marginBottom: "0.5%",
        }}
      >
        For more detailed description, please see Chapter 6 of my dissertation:
      </div>
      <div className={researchStyles.reference}>
        <a href="https://dx.doi.org/10.7302/2762" target="_blank">
          Zhang, X. Novel Solid Electrolytes Derived From Polymer Syntheses.
          Ph.D. Dissertation, University of Michigan, Ann Arbor, MI, 2021.
        </a>
      </div>
      <div className={researchStyles.mainText} style={{ paddingTop: "1.5%" }}>
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Continue reading:{" "}
        </span>
        <span className={researchStyles.mainText}>
          <Link to="/research/polymer-syntheses/m-hmds">M-HMDS</Link>
        </span>
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <NextSteps />
    </Research>
  );
};
