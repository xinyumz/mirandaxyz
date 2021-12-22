import React from "react";
import Research from "./Research";
import { Link } from "react-router-dom";
import researchStyles from "./Research.module.css";
import SPE from "./research_images/SPE.png";
import Oxysilylation from "./research_images/Oxysilylation.png";
import LiXPONs from "./research_images/LiXPONs.png";

function PolymerSyntheses() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Polymer Syntheses</div>
      <div className={researchStyles.mainText}>
        The primary subject of my research focuses on polymer syntheses towards
        novel solid-state electrolytes (SSEs) for lithium-ion batteries (LIBs).
        The story starts with polymer electrolytes.
      </div>
      <div className={researchStyles.mainText}>
        There are two major groups of polymer electrolytes (PEs), solid polymer
        electrolytes (SPEs) and gel polymer electrolytes (GPEs). A SPE typically
        consists of a polymer matrix impregnated with lithium salts, and a GPE
        typically consists of SPE (polymer-salt system) with liquid plasticizer
        or solvent. Generally, SPEs provide features including safety, easy
        fabrication, low-cost, high energy density, good electrochemical
        stability, and excellent compatibility with lithium salts. However, they
        also exhibit poor ambient ionic conductivities of 10<sup>-8</sup>-10
        <sup>-4</sup> S/cm. In contrast, the conductivities of GPEs can reach 10
        <sup>-3</sup> S/cm, but poor mechanical strength and poor interfacial
        properties often arise due to the incorporation of a liquid phase.{" "}
      </div>
      <div className={researchStyles.mainText}>
        {" "}
        Ion transport in PEs is typically achieved by breaking/forming
        electrostatic interaction between alkali-metal cations (M
        <sup>+</sup>) with ether oxygen (EO) atoms along the polymer backbone,
        through either intrachain or interchain hoping. Polyethers [e.g.,
        poly(ethylene oxide) (PEO)] with strong electron-donor character are
        known for their ability to complex M<sup>+</sup>. Ionic conduction is
        generally attributed to the amorphous polymer phase and the presence of
        free volume above the glass transition temperature (T<sub>g</sub>). M
        <sup>+</sup> transport is facilitated by segmental motion of polymer
        chains along with M<sup>+</sup> intra/inter-segmental hopping.{" "}
      </div>
      <div className={researchStyles.mainText}>
        In some cases, ionic conductivity is also reported in the crystalline
        domains of the polymer electrolyte, where polymer chains fold into
        cylindrical tunnels that permit M<sup>+</sup> diffusion via ion hopping,
        while the anions are separated from the cations located outside these
        tunnels. But ion transport is typically constrained in crystalline
        domains, and it is widely accepted that reducing crystallinity is key to
        increasing ionic conductivity in polymer electrolytes.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "50%" }}
        src={SPE}
      />
      <div className={researchStyles.projTitle}>Polymer Matrices</div>
      <div className={researchStyles.mainText}>
        PEO is the most studied polymer matrix for PEs owing to its flexible
        ethylene oxide segments and ether oxygen atoms with lone electron pairs
        that readily interact with Li<sup>+</sup> ions, facilitating Li
        <sup>+</sup> transport. It also has advantages such as low toxicity,
        easy fabrication and low cost. In fundamental PEO based PEs, a lithium
        salt is dissolved in the PEO matrix by coordination between the Li
        <sup>+</sup> ions and the ether oxygen in the polymer chains. However,
        PEO is a semi-crystalline polymer with T<sub>g</sub> ≈ -65 °C and at
        room temperature (RT), the amorphous phase with limited interchain
        mobility aids ion transportation. Consequently, PEO based electrolytes
        typically show poor ionic conductivities of 10<sup>-8</sup>-10
        <sup>-4</sup> S/cm at ambient, and only show good conductivity (up to 10
        <sup>-3</sup> S/cm) above the melting point (~65 °C), in which case the
        PEO electrolyte becomes a gel electrolyte rather than a SSE. The PEO gel
        can gradually diffuse across the porous solid electrolyte interphase
        (SEI) layer and can lead to a continuous loss of lithium from the
        cathode. Therefore, suppression of PEO crystallinity is essential for
        PEO-based electrolytes. In addition, PEO electrolytes generally show low
        ionic transference numbers (<em>t</em>
        <sub>Li</sub>
        <sup>+</sup>) of 0.2-0.5, which can result in concentration
        overpotential, promoting uneven Li plating and dendrite formation.{" "}
      </div>
      <div className={researchStyles.mainText}>
        There are various strategies to solve these issues, such as addition of
        plasticizer and/or nanofiller, polymer blends, and designing copolymers
        with PEO blocks/oligomers including linear, grafted, and crosslinked
        structures. All of which aim to strengthen the matrix structure while
        decreasing crystallinity.{" "}
      </div>
      <div className={researchStyles.topicTitle}>
        <Link to="/research/polymer-syntheses/oxysilylation">
          Oxysilylation
        </Link>
      </div>
      <div className={researchStyles.mainText}>
        In my approach, organic/inorganic hybrid nanocomposite silsesquioxane
        cage [HSiMe
        <sub>2</sub>O(SiO)<sub>1.5</sub>]<sub>8</sub> (OHS) crosslinked by EO
        containing oligomers were investigated. The initial goal was to develop
        materials with 3-D networked structures through oxysilylation that offer
        excellent structural and chemical stabilities, good mechanical
        properties and ionic conductivities. Although the resulting products
        failed to facilitate ionic transport, by investigating various reactions
        between different diepoxides and Si-H containing compounds under
        different reaction conditions, a novel and simple approach to
        self-reinforced epoxy resin nanocomposites was established.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={Oxysilylation}
      />
      <div className={researchStyles.projTitle}>Lithium Salts</div>
      <div className={researchStyles.mainText}>
        Another aspect of PEs is lithium salts, and the most important
        requirement for lithium salts is good solubility in the polymer matrix.
        Generally, the bulkier the anion, the higher the ionic conductivity, as
        larger anions more easily dissociate in the polymer matrix leaving free
        Li<sup>+</sup> ions to interact with polar groups along the polymer
        backbone, facilitating ionic transport. Therefore, Li salts with
        delocalized anion and low basicity are preferred. Commonly used lithium
        salts include LiClO<sub>4</sub>, LiPF<sub>6</sub>, LiAsF<sub>6</sub>,
        LiBF<sub>4</sub>, LiCF<sub>3</sub>SO<sub>3</sub> (LiTf), LiN(SO
        <sub>2</sub>F)
        <sub>2</sub> (LiFSI), LiN(CF<sub>3</sub>SO<sub>2</sub>)<sub>2</sub>{" "}
        (LiTFSI), LiN(SO<sub>2</sub>C<sub>2</sub>F<sub>5</sub>)<sub>2</sub>{" "}
        (LiBETI), etc.{" "}
      </div>
      <div className={researchStyles.mainText}>
        It is known that the addition of a Li salt reduces PEO crystallinity and
        significantly reduces T<sub>g</sub> resulting in enhanced mobility of EO
        segments and ionic conductivity. But a major drawback for polymer-salt
        systems is that as cations bind to the polymer matrix, anions can move
        faster which increases ionic conductivity, resulting in lower <em>t</em>
        <sub>Li</sub>
        <sup>+</sup>. The migration of anions to the anode induces serious
        concentration polarization, which can lead to a substantial decay in
        conductivity. Therefore, such PEs are also called bi-ionic conductors.
        To minimize polarization, a common method is to develop single-ion
        conducting PEs by anchoring anions to the polymer backbone.{" "}
      </div>
      <div className={researchStyles.topicTitle}>
        <Link to="/research/polymer-syntheses/novel-sses">
          Polymer Precursors – novel SSEs/polymeric lithium salts
        </Link>
      </div>

      <div className={researchStyles.mainText}>
        Recent efforts have targeted the synthesis of polymeric lithium salts as
        single-ion conductors. As a major part of my research, Li
        <sub>x</sub>
        PON, Li<sub>x</sub>SiPON and Li<sub>x</sub>SiON polymeric electrolytes
        based on lithium superionic conductor (LISICON) type inorganic solid
        electrolytes were synthesized. When impregnated in/on Celgard
        separators, these polymer/oligomer electrolytes show conductivities
        approaching 10<sup>-5</sup> S/cm at RT and with <em>t</em>
        <sub>Li</sub>
        <sup>+</sup> of 0.7-1. When mixed with PEO (60 wt.%), these polymer
        electrolytes act as polymeric Li salts forming SPEs with high ambient
        conductivities up to ~3×10
        <sup>-3</sup> S/cm and <em>t</em>
        <sub>Li</sub>
        <sup>+</sup> up to 0.8.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "35%" }}
        src={LiXPONs}
      />
      <div className={researchStyles.projTitle}>
        <Link to="/research/polymer-syntheses/m-hmds">M-HMDS</Link>
      </div>
      <div className={researchStyles.mainText}>
        Inspired by the work on Li<sub>x</sub>SiPON polymeric electrolytes, as a
        separate project, I studied reactions of metal chlorides with
        hexamethyldisilazane [HMDS, (Me<sub>3</sub>Si)<sub>2</sub>NH] in THF or
        ACN at low temperatures (RT to 60 °C/N<sub>2</sub>), which provides a
        simple, novel, scalable and general route to metal nitride precursors.
        Such reactions have received scant attention in the literature. The work
        focused primarily on the Al-HMDS precursor by reaction of AlCl
        <sub>3</sub> with HMDS (mole ratio = 1:3), which produces AlN when
        heated to 1600 °C/4 h/N
        <sub>2</sub>. On heating to 800-1200 °C/4 h/N<sub>2</sub>, the precursor
        transforms to an amorphous, oxygen-sensitive powder with very high
        surface areas (&gt;200 m<sup>2</sup>/g) indicating nanosized particles.
        The investigation was also extended via proof of principle studies to
        other metal chloride systems, including Zn-, Cu-, Fe- and Bi-HMDS. The
        formed precursors are volatile, offering the potential utility as
        gas-phase deposition precursors for their corresponding metal nitrides.{" "}
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <PolymerSyntheses />
    </Research>
  );
};
