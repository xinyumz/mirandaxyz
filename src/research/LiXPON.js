import React from "react";
import Research from "./Research";
import { Link } from "react-router-dom";
import researchStyles from "./Research.module.css";
import LiSiPONliterature from "./research_images/LiSiPONliterature.jpeg";
import LiXPONsyntheses from "./research_images/LiXPONsyntheses.png";
import LiXPONstructure from "./research_images/LiXPONstructure.png";
import LiXPONdata from "./research_images/LiXPONdata.png";
import LiXPONcelgard from "./research_images/LiXPONcelgard.png";
import LiXPONPEO from "./research_images/LiXPONPEO.png";
import LiXPONsummary from "./research_images/LiXPONsummary.png";

function LiXPON() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title} style={{ textTransform: "none" }}>
        Novel SSEs - Li<sub>x</sub>PON and Li<sub>x</sub>SiPON
      </div>
      <div className={researchStyles.mainText}>
        Most solid-state electrolytes (SSEs) suffer from low ionic
        conductivities, a limited stability window, or form irreversible
        reduction (e.g. NASICON-type SSEs) on cycling or lithium dendrite growth
        along grain boundaries (e.g. garnet-type SSEs) leading to short
        circuiting. Fortunately, amorphous lithium phosphorus oxynitride (LiPON)
        glasses have been found to offer protection against both processes.
      </div>
      <div className={researchStyles.mainText}>
        LiPON is one of the most commonly employed solid-state electrolytes
        owing to its broad electrochemical stability window (0-5 V vs. Li
        <sup>+</sup>/Li), high critical current density ({">"}10 mA/cm
        <sup>2</sup>), and negligible electronic conductivity (10<sup>-13</sup>{" "}
        S/cm). It is also resistant against dendrite penetration and wets well
        with Li metal. However, due to its limited ionic conductivity (typically
        up to ~10<sup>-6</sup> S/cm), its application is restricted to thin-film
        batteries with limited energy densities and capacities.{" "}
      </div>
      <div className={researchStyles.mainText}>
        Silicon-containing LiPON (or LiSiPON) has also attracted attention due
        to its increased ionic conductivity induced by Si doping, as suggested
        by the figure below. Generally, with Si doping, ionic conductivities of
        LiSiPON are up to ~10<sup>-5</sup> S/cm vs. 10
        <sup>-6</sup> S/cm for LiPON. Note that the effect of nitridation is
        discussed in the{" "}
        <Link to="/research/polymer-syntheses/novel-sses">Intro</Link> page.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "50%" }}
        src={LiSiPONliterature}
      />
      <div
        className={researchStyles.mainText}
        style={{
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#1a5276",
          marginTop: "-2%",
          marginBottom: 0,
        }}
      >
        Reference:
      </div>
      <div className={researchStyles.reference}>
        <a href="https://doi.org/10.1021/acsaem.9b00415" target="_blank">
          Famprikis, T.; Galipaud, J.; Clemens, O.; Pecquenard, B.; Le Cras, F.
          Composition Dependence of Ionic Conductivity in LiSiPO(N) Thin-Film
          Electrolytes for Solid-State Batteries.{" "}
          <em>ACS Appl. Energy Mater.</em> <strong>2019</strong>, <em>2</em>(7),
          4782-4791.
        </a>
      </div>
      <div className={researchStyles.mainText} style={{ paddingTop: "2%" }}>
        Unfortunately, to date LiPON glasses are fabricated through gas phase
        deposition methods, which generally have low deposition rates (typically{" "}
        {"<"}100 nm/min) and require specialized apparatus. As a result,
        fabrication of large and homogeneous composition targets is costly at
        commodity scales. Thus, there are considerable economic and performance
        mandates driving the search for easier processing routes to the same
        materials especially for the practical processing of ASSBs. The use of
        chemical precursor routes to the same materials seems to offer
        considerable potential to solve these issues.
      </div>
      <div className={researchStyles.mainText}>
        Our designed approach uses easily available starting materials, either
        OPCl<sub>3</sub> or (Cl<sub>2</sub>P=N)<sub>3</sub> with NaNH
        <sub>2</sub> or (Me<sub>3</sub>Si)
        <sub>2</sub>NH. The resulting precursors are typically oligomers or low
        molecular weight (MW) polymers derived from lithiation of OP(NH
        <sub>2</sub>)<sub>3-x</sub>(NH)
        <sub>x</sub>, OP(NH
        <sub>2</sub>)<sub>3-x</sub>(NHSiMe<sub>3</sub>)<sub>x</sub> and (P=N)
        <sub>3</sub>
        (NHSiMe<sub>3</sub>)<sub>6-x</sub>(NH)<sub>x</sub>, respectively (see
        the schematic below). Selected amounts of LiNH<sub>2</sub> provide
        varying degrees of lithiation and Li<sup>+</sup> conducting properties
        commensurate with Li<sup>+</sup>
        content. Overall, the Li<sub>x</sub>PON and Li<sub>x</sub>SiPON
        precursors mimic LiPON and LiSiPON glasses respectively, while Li
        <sub>x</sub>SiPHN precursors explore new possibilities of fully
        replacing O with N.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "100%" }}
        src={LiXPONsyntheses}
      />
      <div className={researchStyles.mainText}>
        In-depth characterization of these precursors provides detailed analyses
        of various structural components, and Li<sup>+</sup> environments. A
        diverse set of analytical methods were used including GPC, TGA,
        MALDI-ToF, NMR and XPS. Furthermore, FTIR, XRD, SEM-EDX and EIS
        characterization was conducted on all precursors following heating to
        100-600 °C, as phase and compositional changes are anticipated to
        influence materials' processing methods and conductivities.
      </div>
      <div className={researchStyles.mainText}>
        By using MALDI-ToF combined with the program{" "}
        <a
          href="https://github.com/haveamission/MALDI-Calculation"
          target="_blank"
        >
          MALDI-Calculation
        </a>
        , we conclude that all precursors show MWs of 1-2 kDa. Their
        representative predicted structures and MW summaries are given below.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "65%" }}
        src={LiXPONstructure}
      />
      <div className={researchStyles.mainText}>
        TGA-DTA studies show the precursors are thermally stable to 150-200 °C.
        FTIR spectra fit well with traditional LiPON glasses synthesized by gas
        phase methods. <sup>7</sup>Li NMR suggests that Li
        <sup>+</sup> ions in these precursors are well solvated and dissociated,
        which is beneficial for their electrochemical performances. The
        structures of Si (C) containing precursors were further investigated by{" "}
        <sup>1</sup>H, <sup>13</sup>C and <sup>29</sup>Si NMR studies, which
        suggest that Si doping was achieved by bonding NH-SiMe<sub>3</sub> with
        P=O or P-N=P onto the polymer backbone.
      </div>
      <div className={researchStyles.mainText}>
        XRD, XPS and EDX studies show all precursors exhibit higher N/P ratios
        (1-3) compared to traditional LiPON glasses via gas phase deposition (
        {"<"}
        1), and there seems to be a correlation between the N/P ratio and{" "}
        <sup>7</sup>Li NMR chemical shift (δ<sub>Li</sub>). N/P ratio is an
        indicator of the degree of nitridation. As discussed in the{" "}
        <Link to="/research/polymer-syntheses/novel-sses">Intro</Link> page,
        ionic conductivity generally increases with the degree of nitridation
        (or N/P ratio).
      </div>
      <div className={researchStyles.mainText}>
        In general, the room temperature (RT) ionic conductivities (σ
        <sub>RT</sub>) of polymer precursor pellets seem to follow the trend of
        Li<sub>2</sub>SiPHN {">"} Li<sub>6</sub>SiPON {">"} Li<sub>3</sub>PON{" "}
        {">"} Li<sub>6</sub>PON {">"} Li<sub>3</sub>SiPON, largely correlating
        to their N/P ratios. A maximum conductivity of 2.7 × 10<sup>-4</sup>{" "}
        S/cm at RT is achieved for Li<sub>2</sub>SiPHN after heating at 400 °C/2
        h/N
        <sub>2</sub>. Representative data are given below.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "100%" }}
        src={LiXPONdata}
      />
      <div className={researchStyles.mainText}>
        To further study electrochemical properties, these LiPON emulating
        polymer precursors were coated with Celgard separators fabricating
        polymer electrolytes and used as stable interface between Li metals for
        symmetrical cells, and Li and a sulfur-based cathode (SPAN) for half
        cells. Polymer electrolytes impregnated in/on Celgard exhibit Li
        <sup>+</sup>
        conductivities up to ~1 × 10<sup>-5</sup> S/cm at RT, correlating with
        the Li content and N/P ratio. High Li transference number (<em>t</em>
        <sub>Li</sub>
        <sup>+</sup>) of {">"}0.7 are exhibited for all precursors, comparable
        to inorganic solid electrolytes. The SPAN/Celgard + Li<sub>6</sub>
        SiPON/Li half-cell exhibits an initial capacity of 2000 mAh/gsulfur and
        excellent cycle performance at 0.25 and 0.5 C rate over 120 cycles at RT
        with stable capacity of ~750 mAh/gsulfur and columbic efficiency (CE) of
        ~92 %.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "70%" }}
        src={LiXPONcelgard}
      />
      <div className={researchStyles.mainText}>
        The possibility of using the polymer precursors (60 wt.%) as active
        fillers in PEO matrix forming solid polymer electrolyte films (SPE) was
        also explored. PEO solid-solution films exhibit enhanced ionic
        conductivities of ~0.1-2 × 10<sup>-3</sup> S/cm at ambient, a maximum
        ionic conductivity of 2.8 × 10<sup>-3</sup> S/cm is achieved for the
        60PEO/Li<sub>3</sub>SiPON, and all films show <em>t</em>
        <sub>Li</sub>
        <sup>+</sup> ≥ 0.5 (typically PEs show <em>t</em>
        <sub>Li</sub>
        <sup>+</sup> {"<"} 0.5). The enhancement in conductivity the PE films
        can be ascribed to the suppression of the PEO crystallinity and
        increased N/P ratio. Improved <em>t</em>
        <sub>Li</sub>
        <sup>+</sup> indicates that anion mobility is limited due to the polymer
        precursor bulky backbone, especially for Li<sub>2</sub>SiPHN (<em>t</em>
        <sub>Li</sub>
        <sup>+</sup> ≈ 0.8). In addition to the enhanced ionic conductivities
        vs. traditional PEO electrolytes, these active polymer precursor fillers
        offer improved stability against Li metal at higher current densities.
        Galvanostatic cycling of the SPAN/PEs/Li cell shows discharge capacities
        of 1000 mAh/gsulfur at 0.25 C and 800 mAh/gsulfur at 1 C. The cell also
        shows high-capacity retention over 100 cycles with ~100 % coulombic
        efficiency.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "75%" }}
        src={LiXPONPEO}
      />
      <div className={researchStyles.mainText}>
        In summary, compared to traditional gas phase deposition methods,
        although our polymer precursor synthesis route provides less precise
        compositional control while also uses hazardous chemicals, it does offer
        a fast, scalable, low-cost and low-temperature fabrication, beneficial
        for commodity scale production while showing improved conductivities.
        The graph below compares the two approaches: advantages in{" "}
        <strong>green</strong> and disadvantages in <strong>orange</strong>.{" "}
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "75%" }}
        src={LiXPONsummary}
      />
      <div
        className={researchStyles.mainText}
        style={{
          paddingTop: "2.5%",
          fontStyle: "italic",
          fontWeight: "bold",
          marginBottom: "2.5%",
        }}
      >
        Detailed description, analyses and discussions are reported in the
        following papers:
      </div>
      <ol className={researchStyles.list}>
        <li className={researchStyles.reference}>
          <a
            href="https://doi.org/10.1021/acs.macromol.0c00254"
            target="_blank"
          >
            Zhang, X.; Temeche, E.; Laine, R. M. Design, Synthesis, and
            Characterization of Polymer Precursors to Li<sub>x</sub>PON and Li
            <sub>x</sub>SiPON Glasses: Materials That Enable All-Solid-State
            Batteries (ASBs). <em>Macromolecules</em> <strong>2020</strong>,{" "}
            <em>53</em>(7), 2702-2712.
          </a>
        </li>
        <li className={researchStyles.reference}>
          <a href="https://doi.org/10.1021/acsami.0c03341" target="_blank">
            Temeche, E.; Zhang, X.; Laine, R. M. Polymer Precursor Derived Li
            <sub>x</sub>PON Electrolytes: Toward Li-S Batteries.{" "}
            <em>ACS Appl. Mater. Interfaces</em> <strong>2020</strong>,{" "}
            <em>12</em>(18), 20548-20562.
          </a>
        </li>
        <li className={researchStyles.reference}>
          <a
            href="https://pubs.acs.org/doi/abs/10.1021/acsami.0c06196"
            target="_blank"
          >
            Temeche, E.; Zhang, X.; Laine, R. M. Solid Electrolytes for Li-S
            Batteries: Solid Solutions of Poly(Ethylene Oxide) with Li
            <sub>x</sub>
            PON- and Li<sub>x</sub>SiPON-Based Polymers.{" "}
            <em>ACS Appl. Mater. Interfaces</em> <strong>2020</strong>,{" "}
            <em>12</em>(27), 30353-30364.
          </a>
        </li>
      </ol>
      <div className={researchStyles.mainText} style={{ paddingTop: "1.5%" }}>
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Continue reading:{" "}
        </span>
        <span className={researchStyles.mainText}>
          <Link to="/research/polymer-syntheses/novel-sses/lision">
            Li<sub>x</sub>SiON Polymer Precursors
          </Link>
        </span>
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <LiXPON />
    </Research>
  );
};
