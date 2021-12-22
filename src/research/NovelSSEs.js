import React from "react";
import Research from "./Research";
import { Link } from "react-router-dom";
import researchStyles from "./Research.module.css";
import ISEstructures from "./research_images/ISEstructures.png";
import LiPONsimu from "./research_images/LiPONsimu.png";
import PrecursorOverview from "./research_images/PrecursorOverview.png";

function SSEs() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Novel Solid-State Electrolytes</div>
      <div className={researchStyles.subtitle} style={{ paddingTop: "1%" }}>
        Introduction
      </div>
      <div className={researchStyles.mainText}>
        Conventional lithium-ion batteries (LIBs) rely on flammable organic
        liquid electrolytes due to their high ionic conductivity and excellent
        wetting of electrode surfaces. However, they often suffer from
        inadequate electrochemical and thermal stabilities giving rise to
        inherent safety risks and restrained operating temperatures.
        Non-flammable, solid-state electrolytes (SSEs) offer an escape from such
        problems offering potential for wider operating temperatures, higher
        energy-densities, and simplification in the cell design.{" "}
      </div>
      <div className={researchStyles.mainText}>
        There are two general classes of SSEs for LIBs: polymer and inorganic
        solid electrolytes. A brief introduction to polymer electrolytes (PEs)
        is given in the{" "}
        <Link to="/research/polymer-syntheses">Polymer Syntheses</Link> page.
        Therefore, the following section introduces inorganic solid electrolytes
        (ISEs).
      </div>
      <div className={researchStyles.mainText}>
        ISEs, typically ceramics, provide greater electrochemical stability
        window and transference numbers (<em>t</em>
        <sub>Li</sub>
        <sup>+</sup>), enhanced thermal and chemical stabilities, and diminished
        flammability compared to PEs. However, due to low fracture toughness and
        ductility, ceramic electrolytes often show poor interfacial contact with
        electrodes and fail to meet requirements for fabricating thin and
        flexible films in practical applications. In addition, fabrication costs
        for ISEs are typically high, e.g. solid-state reactions, high
        temperature sintering and gas phase deposition, limiting bulk production
        for commercialization.
      </div>
      <div className={researchStyles.mainText}>
        Common types of ISEs include garnet, perovskite, sodium super ion
        conductor (NASICON) and lithium super ion conductor (LISICON)
        crystalline electrolytes and glassy electrolytes such as lithium
        phosphorus oxynitride (LiPON). Representative structures for crystalline
        electrolytes are shown below.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={ISEstructures}
      />
      <div className={researchStyles.projTitle}>LISICON and LiPON SSEs</div>
      <div className={researchStyles.topicTitle}>
        LISICON - γ-Li<sub>3</sub>PO<sub>4</sub>
      </div>
      <div className={researchStyles.mainText}>
        LISICON-type SSEs are commonly used and studied. Typical LISICON-type
        compounds crystallize into structures similar to γ-Li<sub>3</sub>PO
        <sub>4</sub> with an orthorhombic unit cell and Pnma space group, where
        all cations are tetrahedrally coordinated. The Li<sup>+</sup> ions
        located in LiO4 tetrahedra diffuse between these tetrahedra and
        interstitial sites located in the PO<sub>4</sub> network. Including Li
        <sub>3</sub>
        PO<sub>4</sub>, Li<sub>4</sub>SiO<sub>4</sub>, Li<sub>5</sub>AlO
        <sub>4</sub>, Li<sub>4±x</sub>Si<sub>1-x</sub>X<sub>x</sub>O<sub>4</sub>{" "}
        (X = P, Al, or Ge), etc., they all belong to the LISICON family. In
        general, LISICON-type of SSEs have good chemical and electrochemical
        stability, but relatively low ionic conductivities (~10<sup>-6</sup>{" "}
        S/cm) compared to other oxide solid electrolytes (e.g. Garnet-type SSEs
        show conductivities up to 10<sup>-4</sup>-10<sup>-3</sup> S/cm).
      </div>
      <div className={researchStyles.topicTitle}>
        LiPON glass - N-doped defective γ-Li<sub>3</sub>PO<sub>4</sub>
      </div>
      <div className={researchStyles.mainText}>
        LiPON is a type of amorphous Li<sup>+</sup> SSE. In principle, LiPON can
        be considered a Li<sup>+</sup> defective γ-Li<sub>3</sub>PO<sub>4</sub>{" "}
        with O partially substituted by N, with an example composition of Li
        <sub>2.94</sub>PO<sub>3.3</sub>N<sub>0.31</sub>. In general, the ionic
        conductivity of LiPON thin films increases significantly while the
        activation energy (E<sub>a</sub>) for Li diffusion decreases with the
        atom percentage (at.%) of N incorporated in the structure. Studies found
        that N-doping forms PO<sub>3</sub>N as apical N (N<sub>a</sub>) and
        double-coordinated N<sub>d</sub> bridge:{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "90%" }}
        src={LiPONsimu}
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
          <a href="https://doi.org/10.1016/j.ssi.2020.115329" target="_blank">
            Li, J.; Lai, W. Structure and Ionic Conduction Study on Li
            <sub>3</sub>
            PO<sub>4</sub> and LiPON (Lithium Phosphorous Oxynitride) with the
            Density-Functional Tight-Binding (DFTB) Method.{" "}
            <em>Solid State Ion.</em> <strong>2020</strong>, <em>351</em>,
            115329.
          </a>
        </li>
        <li className={researchStyles.reference}>
          <a
            href="https://doi.org/10.1021/acs.chemmater.8b02812"
            target="_blank"
          >
            Lacivita, V.; Artrith, N.; Ceder, G. Structural and Compositional
            Factors That Control the Li-Ion Conductivity in LiPON Electrolytes.{" "}
            <em>Chem. Mater.</em> <strong>2018</strong>, <em>30</em>(20),
            7077-7090.
          </a>
        </li>
      </ul>
      <div className={researchStyles.mainText} style={{ paddingTop: "2%" }}>
        The overall ionic conductivity is correlated with the amount of disorder
        and therefore amorphous LiPON exhibits higher conductivities than
        crystalline γ-Li<sub>3</sub>PO<sub>4</sub>, and Nd bridging increases
        the connectivity which enables amorphous LiPON to act as a single-ion
        conductor. In general, ionic conductivities for LiPON glasses are up to
        10<sup>-6</sup>-10<sup>-5</sup> S/cm at RT, which is still lower than
        what's required ({">"}
        10<sup>-4</sup> S/cm) for all-solid-state-batteries (ASSBs). As a
        result, LiPON is typically applied as thin films (thickness {"<"}5μm).
      </div>
      <div className={researchStyles.mainText}>
        LiPON thin films are generally processed by gas phase deposition
        methods, such as RF magnetron sputtering, ion beam assisted deposition
        (IBAD), metalorganic-chemical vapor deposition (MOCVD), etc. Low
        deposition rates (typically {"<"}100 nm/min) and specialized apparatus
        required for gas phase depositions drive up the fabrication cost for
        large, homogeneous composition targets at commodity scales.{" "}
      </div>
      <div className={researchStyles.projTitle}>
        Polymer Precursors derived Novel SSEs
      </div>
      <div className={researchStyles.mainText}>
        Different from traditional gas phase deposition methods, we explored
        polymer synthesis methods of preparing LiPON-like and Li<sub>x</sub>SiON
        (based on N-doped LISICON-type SSEs) polymer precursors that exhibit
        ambient conductivities of ~10<sup>-5</sup> S/cm, providing a novel, low
        cost, low temperature and scalable approach towards SSEs. Especially for
        Li<sub>x</sub>SiON precursors which are derived from agricultural waste,
        rice hull ash, a green synthesis method has established.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "75%" }}
        src={PrecursorOverview}
      />
      <div className={researchStyles.mainText}>
        Click to see more details for each project:
        <div className={researchStyles.list}>
          <ul>
            <li>
              <Link to="/research/polymer-syntheses/novel-sses/lipon">
                Li<sub>x</sub>PON and Li<sub>x</sub>SiPON
              </Link>
            </li>
            <li>
              <Link to="/research/polymer-syntheses/novel-sses/lision">
                Li<sub>x</sub>SiON
              </Link>
            </li>
            <li>
              <Link to="/research/polymer-syntheses/novel-sses/next-steps">
                Next Steps
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <SSEs />
    </Research>
  );
};
