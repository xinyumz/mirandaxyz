import React from "react";
import Research from "./Research";
import researchStyles from "./Research.module.css";
import LFFSP from "./research_images/LFFSP.png";
import NPprocessing from "./research_images/NPprocessing.png";
import ZTAcompositions from "./research_images/ZTAcompositions.png";
import ZTASEMN2H2 from "./research_images/ZTA-SEM-N2H2.png";
import ThickZTAdata from "./research_images/ThickZTAdata.png";
import Si3N4coating from "./research_images/Si3N4coating.png";
import CoatedSi3N4films from "./research_images/CoatedSi3N4films.png";

function Ceramics() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>
        Ceramic Processing -{" "}
        <span style={{ textTransform: "none" }}>ZTA Ceramics</span>
      </div>
      <div className={researchStyles.mainText}>
        Zirconia toughened aluminas (ZTAs) are one of the most important
        engineering ceramics with high melting points, excellent mechanical
        strength and chemical stability, and are commonly used as wear resistant
        and high-temperature components, as prosthetic implants and electric
        circuit substrates.
      </div>
      <div className={researchStyles.mainText}>
        In this work, methods of processing fine-grained, dense, thin,
        free-standing (ZrO<sub>2</sub>)<sub>x</sub>(Al<sub>2</sub>O<sub>3</sub>)
        <sub>1-x</sub> films (x = 0-50 mol. %, ~40 μm thick) by sintering flame
        made nanopowders (NPs) to optimize the <em>t</em>-ZrO2 content,
        sinterability and microstructures under select conditions (1120-1500
        °C/5 h in O<sub>2</sub> or 95%N
        <sub>2</sub>/5%H<sub>2</sub>, short as N<sub>2</sub>/H<sub>2</sub>) were
        explored. In all cases, the final sintered products retain <em>t</em>
        -ZrO
        <sub>2</sub> with average grain sizes (AGSs) of 0.1-1 μm. ZTA film
        thicknesses were increased to ~200 μm to assess potential as electronic
        substrates. Excellent fracture toughness (24 MPa m<sup>1/2</sup>) and
        small AGSs of 0.7 μm were found for ~200 μm thick ZTA films sintered at
        1500 °C/5 h/N<sub>2</sub>/H<sub>2</sub> using a three-step binder
        burnout process. Furthermore, homogeneous ZTA thin films ({"<"}5 μm
        thick) can be sintered on Si3N4 substrates (thickness ≈ 300 μm) to
        provide physical protection against oxidation under extreme conditions
        (1500 °C/1 h/O
        <sub>2</sub>), offering additional practical utility for
        high-temperature ceramics and power electronic substrates.
      </div>
      <div className={researchStyles.projTitle}>
        ZTA Nanopowders and Ceramic Film Processing
      </div>
      <div className={researchStyles.topicTitle}>Nanopowder Production</div>
      <div className={researchStyles.mainText}>
        Nanopowders (NPs) were produced by{" "}
        <a
          href="https://en.wikipedia.org/wiki/Liquid-feed_flame_spray_pyrolysis"
          target="_blank"
        >
          liquid feed-flame spray pyrolysis (LF-FSP)
        </a>
        , which was invented in the Laine group at the University of Michigan.
        It is a single-step continuous synthesis method for producing ceramic
        NPs. Typical metalloorganic precursors in this work include
        metal-carboxylates and metal-atrane compounds. Metalloorganic precursors
        at selected compositions were dissolved in alcohol and fed into an
        atomizing nozzle, and was aerosolized with oxygen into a quartz chamber,
        where it is ignited with methane/oxygen pilot torches on the spray head.
        Initial combustion takes place producing temperatures of ≥1500 °C
        followed by a quenching step that drops the temperature to 300-500 °C
        over 1.5 m to produce NPs. Powders are collected downstream in
        rod-in-tube electrostatic precipitators. The scheme below illustrates
        the LF-FSP apparatus for NP production.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "70%" }}
        src={LFFSP}
      />
      <div className={researchStyles.mainText}>
        As-produced NPs were then dispersed in ethanol by ultrasonication, and
        the supernatant was decanted and allowed to oven dry (60 °C/12 h)
        providing the starting ZrO<sub>2</sub> doped <em>δ</em>-Al<sub>2</sub>O
        <sub>3</sub> NPs. The NPs were then processed following the steps below
        to produce target ceramic films.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "95%" }}
        src={NPprocessing}
      />
      <div className={researchStyles.topicTitle}>Green Film Processing</div>
      <div className={researchStyles.mainText}>
        LF-FSP synthesized NPs were mixed with polymeric additives such as
        binder, plasticizer, curing agent, and dispersant, in a selected solvent
        system by ball-milling with spherical Al<sub>2</sub>O<sub>3</sub> as the
        milling media.
      </div>
      <div className={researchStyles.mainText}>
        After ball-milling, the suspensions were cast on Mylar film using a
        wire-wound rod coater with control thickness to form green films. After
        solvents evaporated, dried green films were uniaxially pressed between
        stainless steel dies at 100 °C at 10 ksi/5-30 min to improve packing
        density.
      </div>
      <div className={researchStyles.topicTitle}>Film Sintering</div>
      <div className={researchStyles.mainText}>
        Green films (typically 5 × 5 mm<sup>2</sup>) were placed between Al
        <sub>2</sub>O<sub>3</sub> substrates and heated to 800 °C/1 h in extra
        dry grade O<sub>2</sub> to remove polymeric additives (binder burnout).
        Subsequently, they were sintered to selected temperatures, times and
        ramp rates, using a tube furnace under controlled gas flow: 1120-1500 °C
        at 1-10 °C/min under O<sub>2</sub> or 95%N<sub>2</sub>/5%H<sub>2</sub>{" "}
        at 60 mL/min. For convenience, 95%N<sub>2</sub>/5%H<sub>2</sub> is
        referred to as N<sub>2</sub>/H<sub>2</sub>.
      </div>
      <div className={researchStyles.projTitle}>ZTA ~40 μm Thin Films</div>
      <div className={researchStyles.mainText}>
        In the first part of study, we investigated the sinterability,
        microstructures and phase compositions of ZTA thin films (~40 μm) with
        varying compositions and sintering conditions starting from (ZrO
        <sub>2</sub>)<sub>x</sub>(Al<sub>2</sub>O<sub>3</sub>)<sub>1-x</sub> (x
        = 0-50 mol.%) NPs by LF-FSP. Studies suggest that 1 wt.% MgO and TiO
        <sub>2</sub> additives improve the sintering behavior, resulting in
        dense films (composition <strong>D</strong>: 10 mol.% ZrO<sub>2</sub>{" "}
        doped Al
        <sub>2</sub>O<sub>3</sub> with 1 wt.% TiO<sub>2</sub> and MgO) with
        final AGSs of 0.5-1 μm at 1500 °C. Comparison of films sintered in O
        <sub>2</sub> and N<sub>2</sub>/H<sub>2</sub> suggests that the N
        <sub>2</sub>/H<sub>2</sub> atmosphere improves film quality coincident
        with higher shrinkages and densities, as well as reductions in AGSs.
      </div>
      <div className={researchStyles.mainText}>
        The table below lists different compositions <strong>A</strong>-
        <strong>D</strong> used in the study.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "65%" }}
        src={ZTAcompositions}
      />
      <div className={researchStyles.mainText}>
        The figure below compares SEM fracture surfaces of films{" "}
        <strong>A</strong>-<strong>D</strong> sintered at 1400-1500 °C/5 h/N
        <sub>2</sub>/H<sub>2</sub>. Films <strong>B</strong> and{" "}
        <strong>C</strong> start to densify at 1400 °C, obvious grain growth can
        be seen at 1500 °C, especially for film B. Films A and D show similar
        sintering behavior, they densify at 1500 °C, and exhibit finer grain
        sizes (0.5-1 μm) than <strong>B</strong> and <strong>C</strong> (≥1 μm).
        TiO<sub>2</sub> promotes grain growth and densification, while MgO tends
        to diffuse to the grain boundaries and limits grain growth. After
        sintering at 1500 °C, all films show some transgranular fracture
        behavior (marked with red arrows) suggesting improved mechanical
        properties.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "95%" }}
        src={ZTASEMN2H2}
      />
      <div className={researchStyles.projTitle}>ZTA ~200 μm Thick Films</div>
      <div className={researchStyles.mainText}>
        For potential applications as power electronic substrates, ZTA film
        thicknesses were increased to 150-250 μm. Since the thin film work show
        that films with composition <strong>D</strong> show small and uniform
        grain sizes (0.5-1 µm), and low porosity, the same composition was used
        for thicker films.
      </div>
      <div className={researchStyles.mainText}>
        Sintered films exhibit hexagonal <em>α</em>-Al<sub>2</sub>O<sub>3</sub>{" "}
        and <em>t</em>-ZrO
        <sub>2</sub> phases, which in principle provide good mechanical
        properties, and was proven by single-edged precracked beam (SEPB) test
        that a high K1C value of ~24 MPa m<sup>1/2</sup> is obtained. By
        investigating the effects of different sintering conditions, we were
        able to sinter crack-free 150-250 μm thick 10 mol.% ZrO<sub>2</sub>{" "}
        doped Al
        <sub>2</sub>O<sub>3</sub> films with AGSs of 0.7 μm by using BN
        insulation between films and Al<sub>2</sub>O<sub>3</sub> substrates with
        a three-step binder burnout procedure.
      </div>
      <div className={researchStyles.mainText}>
        Representative data are given below.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "80%" }}
        src={ThickZTAdata}
      />
      <div className={researchStyles.projTitle}>
        Coating Si<sub>3</sub>N<sub>4</sub> Substrates with ZTA Thin Films
      </div>
      <div className={researchStyles.mainText}>
        Similar to ZTA films, silicon nitride (Si<sub>3</sub>N<sub>4</sub>)
        films are also commonly used in structural applications including
        electronic substrates, owing to their good chemical, physical and
        thermal stabilities, and mechanical properties. However, Si<sub>3</sub>N
        <sub>4</sub> is susceptible to oxidation even at ambient and may
        deteriorate over time. Although a surface oxide/oxynitride layer that
        forms can protect against further oxidation, to withstand
        high-temperature oxidation and/or active oxidation environments,
        additional protection is needed. In this work, we also investigated the
        possibility of applying sintered ZTA thin film ({"<"}5 μm) on Si
        <sub>3</sub>N<sub>4</sub>
        substrates (≈300 μm thick) as protective coating layer against
        oxidation.
      </div>
      <div className={researchStyles.mainText}>
        To coat Si<sub>3</sub>N<sub>4</sub> substrates, ZrO<sub>2</sub> doped{" "}
        <em>δ</em>-Al<sub>2</sub>O<sub>3</sub> NP suspension was first cast on
        one side of Si
        <sub>3</sub>N<sub>4</sub> samples with 25 μm spacers using the coating
        setup shown below. Then the films were thermally pressed at 100 °C
        bottom, 60 °C top, 4 ksi, and followed by sintering in two steps: binder
        burnout at 800 °C/1 h/O<sub>2</sub>; and sintering at 1500 °C/5 h/N
        <sub>2</sub>/H
        <sub>2</sub>. The other side of Si<sub>3</sub>N<sub>4</sub> samples was
        then coated and sintered following the same procedure.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "45%" }}
        src={Si3N4coating}
      />
      <div className={researchStyles.mainText}>
        In conclusion, we found that sintered ZTA coatings ({"<"}5 μm) adhere
        well to Si<sub>3</sub>N<sub>4</sub> substrates and were proven to be
        effective in providing physical protection against oxidation even under
        extreme oxidative conditions (1500 °C/1 h/O<sub>2</sub>). This
        demonstrates an alternate application of ZTA films for high-temperature
        ceramics and power electronic substrates.
      </div>
      <img
        className={researchStyles.image}
        style={{ maxWidth: "95%" }}
        src={CoatedSi3N4films}
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
          href="https://ceramics.onlinelibrary.wiley.com/doi/full/10.1111/jace.17570"
          target="_blank"
        >
          Zhang, X.; Cheng, X.; Jansohn, M.; Niedermaier, M.; Lenk, T.;
          Britting, S.; Schmidt, K.; Laine, R. M. <em>t</em>-ZrO
          <sub>2</sub> Toughened Al<sub>2</sub>O<sub>3</sub> Free-Standing Films
          and as Oxidation Mitigating Thin Films on Silicon Nitride via
          Colloidal Processing of Flame Made Nanopowders (NPs).{" "}
          <em>J. Am. Ceram. Soc.</em> <strong>2021</strong>, <em>104</em>(3),
          1281-1296.
        </a>
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <Ceramics />
    </Research>
  );
};
