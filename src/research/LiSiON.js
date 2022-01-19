import React, { useState } from "react";
import Research from "./Research";
import { Link } from "react-router-dom";
import researchStyles from "./Research.module.css";
import LISICONmixture from "./research_images/LISICONmixture.png";
import LiSiONrxnGraph from "./research_images/LiSiONrxnGraph.png";
import LiSiONdata from "./research_images/LiSiONdata.png";
import LiSiONCelgard from "./research_images/LiSiONCelgard.png";
import LTOcomposites from "./research_images/LTOcomposites.png";
import ImgLightbox from "./ImgLightbox";

const images = [
  LISICONmixture,
  LiSiONrxnGraph,
  LiSiONdata,
  LiSiONCelgard,
  LTOcomposites,
];

function LiSiON() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const src = images[index];
  const nextSrc = images[(index + 1) % images.length];
  const prevSrc = images[(index + images.length - 1) % images.length];

  const handleClose = () => setIsOpen(false);
  const handleMovePrev = () =>
    setIndex((index + images.length - 1) % images.length);
  const handleMoveNext = () => setIndex((index + 1) % images.length);

  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title} style={{ textTransform: "none" }}>
        Novel SSEs - Li<sub>x</sub>SiON
      </div>
      <div className={researchStyles.mainText}>
        Li<sup>+</sup>-containing oxynitride amorphous thin films are promising
        materials for electrochemical applications as solid electrolytes due to
        their high ionic conductivity, mechanical stability and chemical
        durability. Most studies focus on LiPON thin films, while only a few
        reports discuss lithium boron oxynitrides LiBON (10<sup>-8</sup> S/cm),
        lithium sulfur oxynitride LiSON (10<sup>-6</sup>-10<sup>-5</sup> S/cm)
        and lithium vanadium oxynitride LiVON (10<sup>-5</sup>-10<sup>-4</sup>{" "}
        S/cm at 330 °C). A number of research groups have explored MSiON (M =
        Li, Na) glass-ceramics by melt mixing Li<sub>2</sub>O or Na<sub>2</sub>
        O, SiO<sub>2</sub> and Si<sub>3</sub>N<sub>4</sub> at 1400-1500 °C/1-3 h
        in BN crucibles under N<sub>2</sub>, and the ambient conductivities of
        M-Si-O-N glasses are only 10<sup>-8</sup>-10
        <sup>-7</sup> S/cm.
      </div>
      <div className={researchStyles.mainText}>
        On the other hand, Li<sub>4</sub>SiO<sub>4</sub>, similar to Li
        <sub>3</sub>PO
        <sub>4</sub>, belong to the LISICON-type SSE family, where Li
        <sup>+</sup> are tetrahedrally coordinated in XO<sub>4</sub> based (X =
        Si or P) units. Li<sub>4</sub>SiO
        <sub>4</sub> by itself, shows negligible ionic conductivity at ambient.
        By mixing Li<sub>4</sub>SiO<sub>4</sub> and Li<sub>3</sub>PO<sub>4</sub>
        , when they have equivalent content, optimum ionic conductivity can be
        achieved. Such improvement is caused by solid solution induced
        structural distortion, where short-range disorder creates 3D
        interconnected conduction pathways for Li<sup>+</sup>, resulting in
        increased Li
        <sup>+</sup> mobility. In addition, as discussed in the{" "}
        <Link to="/research/polymer-syntheses/novel-sses">Intro</Link> and{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          Li
          <sub>x</sub>PON and Li
          <sub>x</sub>SiPON
        </Link>{" "}
        pages, nitridation also improves ionic conductivity, hence the studies
        on N-doped Li
        <sub>3</sub>PO<sub>4</sub> (LiPON glass) and N-doped Li
        <sub>3</sub>PO<sub>4</sub>-Li
        <sub>4</sub>SiO<sub>4</sub> (LiSiPON glass), which also begs the
        question, what about N-doped Li<sub>4</sub>SiO<sub>4</sub>, or LiSiON?
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={images[0]}
        onClick={() => {
          setIndex(0);
          setIsOpen(true);
        }}
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
          <a href="https://doi.org/10.1021/jacs.5b04444" target="_blank">
            Deng, Y.; Eames, C.; Chotard, J. N.; Laleìre, F.; Seznec, V.; Emge,
            S.; Pecher, O.; Grey, C. P.; Masquelier, C.; Islam, M. S. Structural
            and Mechanistic Insights into Fast Lithium-Ion Conduction in Li
            <sub>4</sub>SiO<sub>4</sub>-Li<sub>3</sub>PO<sub>4</sub> Solid
            Electrolytes. <em>J. Am. Chem. Soc.</em> <strong>2015</strong>,{" "}
            <em>137</em>(28), 9136-9145.
          </a>
        </li>
        <li className={researchStyles.reference}>
          <a href="https://doi.org/10.1021/acsaem.9b00415" target="_blank">
            Famprikis, T.; Galipaud, J.; Clemens, O.; Pecquenard, B.; Le Cras,
            F. Composition Dependence of Ionic Conductivity in LiSiPO(N)
            Thin-Film Electrolytes for Solid-State Batteries.{" "}
            <em>ACS Appl. Energy Mater.</em> <strong>2019</strong>, <em>2</em>
            (7), 4782-4791.
          </a>
        </li>
      </ul>
      <div className={researchStyles.mainText} style={{ paddingTop: "2%" }}>
        To the best of our knowledge, there have been no reports on LiSiON as
        solid electrolytes. Given our previous success in developing{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          polymer precursor derived Li<sub>x</sub>PON-like electrolytes
        </Link>
        , we continued to explore the possibility of Li<sub>x</sub>SiON
        oligomer/polymer precursors.
      </div>
      <div className={researchStyles.mainText}>
        Unlike{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          Li<sub>x</sub>PON-like polymer precursors
        </Link>{" "}
        using hazardous chemical (Me<sub>3</sub>Si)<sub>2</sub>NH as the Si
        source, agricultural waste rice hull ash (RHA, combustion product of
        rice husk, produced world-wide in millions of tons/year) is used here
        for Li<sub>x</sub>SiON precursors. As shown in the schematic below,
        silica (SiO<sub>2</sub>), ~90 wt. % in RHA, can be catalytically (alkali
        base) dissolved (20-40 wt. %) in hexylene glycol and distilled directly
        from the reaction mixture as the spirosiloxane [(C<sub>6</sub>H
        <sub>14</sub>O<sub>2</sub>)<sub>2</sub>Si, SP] at 200 °C. SP can then be
        lithiated simply by using controlled amounts of LiNH<sub>2</sub> to
        produce Li<sub>x</sub>SiON (Li/Si, x = 2, 4, and 6) oligomers/polymers.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "85%" }}
        src={images[1]}
        onClick={() => {
          setIndex(1);
          setIsOpen(true);
        }}
      />
      <div className={researchStyles.mainText}>
        It is noteworthy that the other product for the dissolution of SiO
        <sub>2</sub>, silica depleted RHA (SDRHA, ≈ 65 wt.% SiO<sub>2</sub>, 35
        wt.% C), which is a C/Si nanocomposite, can be used as hybrid Li ion
        capacitor electrodes. As a result, such a synthetic approach provides
        environmental advantages including green source, low-cost, low
        temperature, low energy consumption, emission-free, and scalable
        features.
      </div>
      <div className={researchStyles.mainText}>
        Structures and chemical compositions of LixSiON precursors were analyzed
        using MALDI-ToF, FTIR, multi-nuclear NMR, TGA-DTA, XRD, XPS, SEM and
        EDX, followed by EIS for ionic conductivity measurements.
      </div>
      <div className={researchStyles.mainText}>
        Analyzed by MALDI-ToF combined with{" "}
        <a
          href="https://github.com/haveamission/MALDI-Calculation"
          target="_blank"
        >
          MALDI-Calculation
        </a>
        , molecular weights (MWs) of Li<sub>x</sub>SiON precursors seem to
        increase with Li content. It's possible that Li<sup>+</sup> containing
        species exist as clusters in addition to those that interact with O from
        SP, or there may be ring-opening and formation of more Si-NH bonds and
        Li-O-HG bonds, resulting in polymerization.
      </div>
      <div className={researchStyles.mainText}>
        <sup>7</sup>Li NMR suggests that Li<sup>+</sup> ions are well solvated
        and dissociated, and excess Li<sup>+</sup> may exist in clusters,
        correlating to MALDI studies, which is beneficial for electrochemical
        performances.
      </div>
      <div className={researchStyles.mainText}>
        XPS studies (done under vacuum, 10<sup>-9</sup>-10<sup>-7</sup> Torr) on
        precursors dried at different temperatures (RT-100 °C) show that the Li
        content increases with LiNH<sub>2</sub> amounts. However, when x = 6,
        the Li content seems to reach a saturation level. On the other hand, all
        precursors show low N content (0.7-0.9 at.%), suggesting N is not
        stable. This is also confirmed by EDX studies for precursors heated to
        different temperature between 100-400 °C, which show that N at.%
        decreases with the heating temperature.
      </div>
      <div className={researchStyles.mainText}>
        Ionic conductivities of the precursors generally correlate with Li and N
        content. Li<sub>6</sub>SiON heated to 200 °C/2 h/N<sub>2</sub> shows the
        highest conductivity of 8.5 × 10<sup>-6</sup> S/cm, owing to relatively
        high Li and N contents, as well as dense microstructure suggested by
        SEM.
      </div>
      <div className={researchStyles.mainText}>
        Selected representative data are given below.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={images[2]}
        onClick={() => {
          setIndex(2);
          setIsOpen(true);
        }}
      />
      <div className={researchStyles.mainText}>
        To further study electrochemical properties, Celgard separators were
        impregnated with Li<sub>x</sub>SiON polymer precursors forming polymer
        electrolytes (PEs) for electrochemical studies. The PEs show an optimal
        conductivity for Celgard/Li<sub>6</sub>SiON (~6.5 × 10<sup>-6</sup>{" "}
        S/cm) at ambient and low Ea (0.28 eV), which can be ascribed to the high
        Li content and nitridation of the Li<sub>6</sub>SiON precursor.
        Celgard/Li<sub>x</sub>SiON PEs also exhibit high <em>t</em>
        <sub>Li</sub>
        <sup>+</sup> of ~0.7-1 attributed to the polymer framework with low
        anion mobility. Furthermore, the Celgard/Li<sub>6</sub>SiON PE enables
        the assembly of Li symmetric cells with high critical current density of
        3.75 mAh/cm, making it desirable for fast charging applications.
      </div>
      <div className={researchStyles.mainText}>
        A half-cell was also assemble using a sulfur-based cathode (SPAN),
        Celgard/Li<sub>6</sub>SiON PE and Li metal anode, which delivers a
        reversible capacity of ~725 mAh/g at 0.5 C over 50 cycles.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "100%" }}
        src={images[3]}
        onClick={() => {
          setIndex(3);
          setIsOpen(true);
        }}
      />
      <div className={researchStyles.mainText}>
        In a separate set of studies, we show that a facile liquid-feed flame
        spray pyrolysis (LF-FSP) method enables the synthesis of high surface
        area (~38 m<sup>2</sup>/g), phase pure Li<sub>4</sub>Ti<sub>5</sub>O
        <sub>12</sub> (LTO) nanopowders. Pristine LTO (theoretical capacity ~175
        mAh/g) was mixed with selected amounts (5 and 10 wt.%) of LiAlO
        <sub>2</sub> and Li
        <sub>6</sub>
        SiON electrolytes forming LTO-composite anodes, aiming to improve the
        ionic and electronic conductivities by simple ball-milling and
        ultrasonication methods. The microstructure studies show that the
        composite powders are homogeneous with APSs {"<"}
        60 nm.
      </div>
      <div className={researchStyles.mainText}>
        Overall, LTO-composite show improved electrochemical performance,
        especially for LTO + Li<sub>6</sub>SiON (10 wt.%) with reversible
        capacity of 230 and 190 mAh/g at 0.5 and 10 C, and LTO + LiAlO
        <sub>2</sub> (5 wt.%) + Li<sub>6</sub>SiON (10 wt.%), which shows
        reversible capacity of 260 and 140 mAh/g at 0.5 and 10 C.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "100%" }}
        src={images[4]}
        onClick={() => {
          setIndex(4);
          setIsOpen(true);
        }}
      />
      <div className={researchStyles.mainText}>
        Compared to{" "}
        <Link to="/research/polymer-syntheses/novel-sses/lipon">
          Li<sub>x</sub>PON-like polymer precursors
        </Link>
        , although LixSiON precursors show lower ionic conductivities (10
        <sup>-6</sup>-10<sup>-5</sup> vs. 10<sup>-5</sup>-10<sup>-4</sup> S/cm),
        Li<sub>x</sub>SiON syntheses utilize the green source RHA as starting
        material and avoids toxic compounds [OPCl
        <sub>3</sub> and (Me<sub>3</sub>Si)<sub>2</sub>NH]. There is also no
        byproduct produced, making it waste-free with better impurity control.
      </div>
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
            href="https://pubs.rsc.org/en/content/articlehtml/2020/gc/d0gc02580a"
            target="_blank"
          >
            Zhang, X.; Temeche, E.; Laine, R. M. Li<sub>x</sub>SiON (x = 2, 4,
            6): A Novel Solid Electrolyte System Derived from Agricultural
            Waste. <em>Green Chem.</em> <strong>2020</strong>, <em>22</em>(21),
            7491-7505.
          </a>
        </li>
        <li className={researchStyles.reference}>
          <a
            href="https://pubs.acs.org/doi/abs/10.1021/acsapm.1c00192"
            target="_blank"
          >
            Temeche, E.; Zhang, X.; Laine, R. M. Electrochemical Performance of
            Li
            <sub>x</sub>SiON Polymer Electrolytes Derived from an Agriculture
            Waste Product, Rice Hull Ash. <em>ACS Appl. Polym. Mater.</em>{" "}
            <strong>2021</strong>, <em>3</em>(4), 2144-2152.
          </a>
        </li>
        <li className={researchStyles.reference}>
          <a
            href="https://pubs.acs.org/doi/abs/10.1021/acsaem.0c02994"
            target="_blank"
          >
            Temeche, E.; Buch, E.; Zhang, X.; Brandt, T.; Hintennach, A.; Laine,
            R. M. Improved Electrochemical Properties of Li
            <sub>4</sub>Ti<sub>5</sub>O<sub>12</sub> Nanopowders (NPs) via
            Addition of LiAlO<sub>2</sub> and Li<sub>6</sub>SiON Polymer
            Electrolytes, Derived from Agricultural Waste.{" "}
            <em>ACS Appl. Energy Mater.</em> <strong>2021</strong>, <em>4</em>
            (2), 1894-1905.
          </a>
        </li>
      </ol>
      <div className={researchStyles.mainText} style={{ paddingTop: "1.5%" }}>
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Continue reading:{" "}
        </span>
        <span className={researchStyles.mainText}>
          <Link to="/research/polymer-syntheses/novel-sses/next-steps">
            Next Steps
          </Link>
        </span>
      </div>
      <ImgLightbox
        open={isOpen}
        src={src}
        nextSrc={nextSrc}
        prevSrc={prevSrc}
        handleClose={handleClose}
        handleMovePrev={handleMovePrev}
        handleMoveNext={handleMoveNext}
      />
    </div>
  );
}

export default () => {
  return (
    <Research>
      <LiSiON />
    </Research>
  );
};
