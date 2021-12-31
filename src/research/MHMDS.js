import React from "react";
import Research from "./Research";
import { Link } from "react-router-dom";
import researchStyles from "./Research.module.css";
import AlHMDSsynthesis from "./research_images/Al-HMDSsynthesis.png";
import AlHMDSstructures from "./research_images/Al-HMDSstructures.png";
import AlHMDStable from "./research_images/Al-HMDStable.png";
import AlHMDSdata from "./research_images/Al-HMDSdata.png";
import AlHMDSpolymer from "./research_images/AlHMDS+polymer.png";
import MHMDSstructures from "./research_images/M-HMDSstructures.png";
import MHMDSdecompositions from "./research_images/MHMDSdecompositions.png";

function MHMDS() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>M-HMDS</div>
      <div className={researchStyles.mainText}>
        Metal nitrides are intensely investigated because they can offer high
        melting points, excellent corrosion resistance, high hardness,
        electronic and magnetic properties superior to the corresponding
        metals/metal oxides. Thus, they are used in multiple diverse
        applications including refractory materials, semiconductors, electronic
        devices and energy storage/conversion systems.
      </div>
      <div className={researchStyles.mainText}>
        Common metal nitride syntheses use gas phase deposition or chemical
        routes. As mentioned for{" "}
        <Link to="/research/polymer-syntheses/novel-sses">
          Novel SSEs studies
        </Link>
        , gas phase depositions methods generally require specialized and
        expensive equipment with relatively low production rates (generally{" "}
        {"<"}100 nm/min), limiting the ability to scale for industrial
        applications. In contrast, chemical routes are more versatile and allow
        production of a broader range of metal nitrides. However, it is
        difficult to achieve impurity-free products with optimal morphology
        control, and toxic precursors are often used.
      </div>
      <div className={researchStyles.mainText}>
        Traditional chemical syntheses for metal nitrides involve
        high-temperature reactions (800-2000 °C) of parent metals, metal oxides,
        or other metal precursors with selected N sources, typically N
        <sub>2</sub>/NH<sub>3</sub>.
      </div>
      <div className={researchStyles.mainText}>
        Here, simple, novel and scalable reactions of metal chlorides (MCl
        <sub>x</sub>) with hexamethyldisilazane [HMDS, (Me<sub>3</sub>Si)
        <sub>2</sub>NH] in THF or ACN at low temperatures (ambient to 60 °C/N
        <sub>2</sub>) to produce metal nitride precursors, M(NHSiMe<sub>3</sub>)
        <sub>x</sub> (denoted as M-HMDS for convenience) were explored. For
        example, the synthesis of Al-HMDS precursor towards AlN is as follows.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "55%" }}
        src={AlHMDSsynthesis}
      />
      <div className={researchStyles.mainText}>
        The byproduct Me<sub>3</sub>SiCl (boiling point = 57 °C) can be removed
        easily along with THF/ACN and excess HMDS by drying at 80 °C/1 h/vacuum
        (vac). The dried Al-HMDS precursor can be further heated to 1600 °C/4
        h/N
        <sub>2</sub> in a tube furnace to produce AlN.
      </div>
      <div className={researchStyles.mainText}>
        This work focuses primarily on the Al-HMDS precursor as well as produced
        AlN. It was further extended via proof of principle studies to other
        metal chloride systems, including Zn-HMDS, Cu-HMDS, Fe-HMDS and Bi-HMDS.
        These formed precursors are volatile, offering the potential utility as
        gas-phase deposition precursors for their corresponding metal nitrides.
      </div>
      <div className={researchStyles.projTitle}>Al-HMDS</div>
      <div className={researchStyles.mainText}>
        Structures and molecular weights (MWs) of the synthesized the Al-HMDS
        precursor were analyzed by MALDI-ToF and{" "}
        <a
          href="https://github.com/haveamission/MALDI-Calculation"
          target="_blank"
        >
          MALDI-Calculation
        </a>
        . Overall, structures of the Al-HMDS precursor contain 2-4 units with
        Al-N bonds, suggesting oligomers and/or cyclomers with Al-N backbones.
        Some peaks also indicate -Cl inclusion and complexes with THF,
        consistent with NMR and EDX studies. Examples of predicted structures
        are as follows.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "70%" }}
        src={AlHMDSstructures}
      />
      <div className={researchStyles.mainText}>
        The synthesized Al-HMDS precursor was heated to different temperatures
        (800-1600 °C/4 h/N<sub>2</sub>). BET analyses show that Al-HMDS heated
        to 800° or 1200 °C show similar high specific surface areas (SSAs) {">"}
        200 m<sup>2</sup>/g. On heating to 1600 °C, the resulting powders
        exhibit a much-reduced SSA of 28 m<sup>2</sup>/g coincident with grain
        growth. The high SSAs at 800° and 1200 °C indicate small pore sizes (4-5
        nm) and average particle sizes (APSs) of ~20 nm.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "65%" }}
        src={AlHMDStable}
      />
      <div className={researchStyles.mainText}>
        XRD data for lower temperatures show primarily amorphous materials and
        only at 1600 °C are clear crystalline peaks for AlN observed, see below.
        When heated to 1600 °C/2 h/N<sub>2</sub>, a mixture of α-Al<sub>2</sub>O
        <sub>3</sub> and wurtzite AlN phases are exhibited, and the AlN phase
        intensity increases with prolonged heating (1600 °C/4 h/N<sub>2</sub>).
        The presence of Al<sub>2</sub>O<sub>3</sub> is likely due to moisture
        uptake as Al-HMDS shows high SSAs, making it highly susceptible to
        oxidation.
      </div>
      <div className={researchStyles.mainText}>
        <sup>27</sup>Al MAS NMR spectra show that after drying at 80 °C/1 h/vac,
        Al is primarily present in [AlO<sub>6</sub>] units with a small amount
        of [AlO
        <sub>5</sub>] units. The [AlO<sub>5</sub>] peak intensity increased
        after heating to 800 °C/4 h/N<sub>2</sub>. After heating to 1600 °C/4
        h/N
        <sub>2</sub>, a large peak at 114 ppm occurs, indicating AlN. Another
        peak at 14 ppm suggests [AlO<sub>6</sub>] units, but with different [AlO
        <sub>6</sub>] peak positions and narrower characteristics, indicating
        that the Al environment is more symmetrical for Al-HMDS heated to 1600
        °C, likely a result of increased crystallinity, corresponding to XRD.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "65%" }}
        src={AlHMDSdata}
      />
      <div className={researchStyles.mainText}>
        Overall, process optimization needs further attention to eliminate Al
        <sub>2</sub>O<sub>3</sub>; however, this approach is proven valid to
        produce high surface area AlN powder and should offer the potential for
        making coatings. The high surface areas are indicative of nanoscale
        particles. As a result, the heated Al-HMDS powders can also be used as
        additives to polymer matrices to modify their thermal stabilities,
        offering another potential application.
      </div>
      <div className={researchStyles.projTitle}>Polymer Matrix + Al-HMDS</div>
      <div className={researchStyles.mainText}>
        Previously studied polymers, DGEBA-TMDS and DEO-OHS, were used as
        matrices, see the{" "}
        <Link to="/research/polymer-syntheses/oxysilylation">
          Oxysilylation
        </Link>{" "}
        page. Selected amounts (5, 10, and 25 wt.%) of Al-HMDS powders heated to
        800 °C/4 h/N<sub>2</sub> were added to the matrices.
      </div>
      <div className={researchStyles.mainText}>
        DGEBA-TMDS + 0-25 wt.% Al-HMDS composites are all viscous liquids. In
        general, with Al-HMDS addition, decomposition temperatures (T
        <sub>d5%</sub>) increases slightly (increments of ~5 °C), except for 25
        wt.% Al-HMDS, and ceramic yield (CY) increases with the Al-HMDS amount.
      </div>
      <div className={researchStyles.mainText}>
        DEO-OHS + 0-25 wt.% Al-HMDS composites form black, flexible films. With
        10 wt.% Al-HMDS, T<sub>d5%</sub> shows an ~100 °C increment, suggesting
        significant improvement in the polymer's thermal stability. However,
        when the Al-HMDS content is further increased to 25 wt.%, both T
        <sub>d5%</sub> and CY decrease, lower than the pristine DEO-OHS. It is
        likely that the large amount of Al-HMDS impedes reaction between DEO and
        OHS as the catalyst likely binds preferentially to nitrogen, leaving
        considerable amounts of unreacted Si-H groups, resulting in less rigid
        structures with poorer thermal stabilities. This also explains the
        slight T<sub>d5%</sub> decrease for DGEBA-TMDS + 25 wt.% Al-HMDS.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "75%" }}
        src={AlHMDSpolymer}
      />
      <div className={researchStyles.mainText}>
        In conclusion, flexible solid films with Al-HMDS (800 °C/4 h/N
        <sub>2</sub>) powders added to DEO-OHS were successfully cast,
        effectively modifying the thermal stabilities of polymer matrices with
        controlled loadings.
      </div>
      <div className={researchStyles.projTitle}>Other M-HMDS</div>
      <div className={researchStyles.mainText}>
        Other metal chloride systems were also briefly explored including
        Zn-HMDS, Cu-HMDS, Fe-HMDS and Bi-HMDS, as potential precursors to
        corresponding metal nitrides. MALDI study indicates oligomers/cyclomers
        with M-N bonds, similar to Al-HMDS. TGA-DTA suggests that these M-HMDS
        precursors are volatile when heated (typically 500-700 °C), providing
        the potential to be used as gas-phase deposition precursors for their
        corresponding metal nitrides.
      </div>
      <div className={researchStyles.mainText}>
        Examples of predicted structures of M-HMDS precursors:
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "75%" }}
        src={MHMDSstructures}
      />
      <div className={researchStyles.mainText}>
        Example thermal decomposition pathways for M-HMDS precursors:
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "85%" }}
        src={MHMDSdecompositions}
      />
      <div
        className={researchStyles.mainText}
        style={{
          paddingTop: "2.5%",
          fontStyle: "italic",
          fontWeight: "bold",
          marginBottom: "0.5%",
        }}
      >
        For comprehensive analyses and discussions, please see the published
        paper:
      </div>
      <div className={researchStyles.reference}>
        <a
          href="https://ceramics.onlinelibrary.wiley.com/doi/10.1111/jace.18271"
          target="_blank"
        >
          Zhang, X.; Yu, M.; Indris, S.; Laine, R. M. Reactions of Metal
          Chlorides with Hexamethyldisilazane. Novel Precursors to Aluminum
          Nitride and Beyond. <em>J. Am. Ceram. Soc.</em> <strong>2021</strong>,{" "}
          <em>xx</em>(x), xxxx.
        </a>
      </div>
      <div className={researchStyles.mainText} style={{ paddingTop: "1.5%" }}>
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Next project:{" "}
        </span>
        <span className={researchStyles.mainText}>
          <Link to="/research/ceramics">Ceramic Processing - ZTA Ceramics</Link>
        </span>
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <MHMDS />
    </Research>
  );
};
