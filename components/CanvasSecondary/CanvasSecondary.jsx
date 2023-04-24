import React, { useEffect, useRef, useState } from "react";
import Matter, {
  Body,
  Common,
  Composites,
  Constraint,
  Events,
  Mouse,
  MouseConstraint,
  Vector,
  World,
} from "matter-js";

const CanvasSecondary = () => {
  const matterContainerRef = useRef(null);
  const THICCNESS = 60;
  const smashRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const matterContainer = matterContainerRef.current;

    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
      element: matterContainer,
      engine: engine,
      options: {
        width: matterContainer.clientWidth,
        height: matterContainer.clientHeight,
        background: "#131314",
        wireframes: false,
        showAngleIndicator: false,
      },
    });

    // var firstStack = Composites.stack(
    //   matterContainer.clientWidth / 2,
    //   matterContainer.clientHeight / 2,
    //   5,
    //   15,
    //   15,
    //   0,
    //   function (x, y) {
    //     return Bodies.rectangle(x, y, 40, 40, {
    //       render: {
    //         strokeStyle: Common.choose(["#00ff7f", "#9333ea", "#ffc400"]),
    //         fillStyle: "transparent",
    //         lineWidth: 5,
    //         chamfer: {
    //           radius: [5, 5, 5, 5],
    //         },
    //       },
    //     });
    //   }
    // );
    var firstStack = Composites.stack(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight / 4 - 21 - 20 * 20,
      10,
      10,
      15,
      0,
      function (x, y) {
        return Bodies.circle(x, y, 20, {
          render: {
            strokeStyle: Common.choose(["#00ff7f", "#9333ea", "#ffc400"]),
            fillStyle: "transparent",
            lineWidth: 2,
          },
        });
      }
    );

    var ground = Bodies.rectangle(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + THICCNESS / 2,
      27184,
      THICCNESS,
      { isStatic: true }
    );

    let leftWall = Bodies.rectangle(
      0 - THICCNESS / 2,
      matterContainer.clientHeight / 2,
      THICCNESS,
      matterContainer.clientHeight * 5,
      {
        isStatic: true,
      }
    );

    let rightWall = Bodies.rectangle(
      matterContainer.clientWidth + THICCNESS / 2,
      matterContainer.clientHeight / 2,
      THICCNESS,
      matterContainer.clientHeight * 5,
      { isStatic: true }
    );

    // add all of the bodies to the world
    Composite.add(engine.world, [ground, leftWall, rightWall, firstStack]);

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(engine.world, mouseConstraint);

    var ball = Bodies.circle(
      matterContainer.clientWidth / 8,
      matterContainer.clientHeight / 3,
      50,
      {
        density: 0.05,
        frictionAir: 0.005,
        render: {
          strokeStyle: "#00e5ff",
          fillStyle: "transparent",
          lineWidth: 5,
        },
      }
    );

    Composite.add(engine.world, ball);

    Composite.add(
      engine.world,
      Constraint.create({
        pointA: {
          x: matterContainer.clientWidth / 2.5,
          y: matterContainer.clientHeight / 4,
        },
        bodyB: ball,
      })
    );

    var holdingThread = Constraint.create({
      pointA: {
        x: 300,
        y: 100,
      },
      bodyB: ball,
    });

    Composite.add(engine.world, holdingThread);

    // allow scroll through the canvas
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    function handleResize() {
      // set canvas size to new values
      render.canvas.width = matterContainer.clientWidth;
      render.canvas.height = matterContainer.clientHeight;

      // reposition ground
      Body.setPosition(
        ground,
        Vector.create(
          matterContainer.clientWidth / 2,
          matterContainer.clientHeight + THICCNESS / 2
        )
      );

      // reposition right wall
      Body.setPosition(
        rightWall,
        Vector.create(
          matterContainer.clientWidth + THICCNESS / 2,
          matterContainer.clientHeight / 2
        )
      );

      Body.setPosition(
        ball,
        Vector.create(
          matterContainer.clientWidth / 8,
          matterContainer.clientHeight / 3
        )
      );
    }

    smashRef.current.addEventListener("click", () => {
      Composite.remove(engine.world, holdingThread);

      overlayRef.current.style.opacity = 0;
      overlayRef.current.style.display = "none";

      smashRef.current.style.opacity = 0;
    });

    // const explosion = (engine, delta) => {
    //   const timeScale = 1000 / 60 / delta;
    //   const bodies = Composite.allBodies(engine.world);

    //   for (let i = 0; i < bodies.length; i++) {
    //     const body = bodies[i];

    //     if (!body.isStatic && body.position.y >= 500) {
    //       // scale force for mass and time applied
    //       const forceMagnitude = 0.05 * body.mass * timeScale;

    //       // apply the force over a single update
    //       Body.applyForce(body, body.position, {
    //         x:
    //           (forceMagnitude + Common.random() * forceMagnitude) *
    //           Common.choose([1, -1]),
    //         y: -forceMagnitude + Common.random() * -forceMagnitude,
    //       });
    //     }
    //   }
    // };

    // let timeScaleTarget = 1;
    // let lastTime = Common.now();

    // Events.on(engine, "afterUpdate", (event) => {
    //   const timeScale = (event.delta || 1000 / 60) / 1000;

    //   // tween the timescale for bullet time slow-mo
    //   engine.timing.timeScale +=
    //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;

    //   // every 2 sec (real time)
    //   if (Common.now() - lastTime >= 2000) {
    //     // flip the timescale
    //     if (timeScaleTarget < 1) {
    //       timeScaleTarget = 1;
    //     } else {
    //       timeScaleTarget = 0;
    //     }

    //     // create some random forces
    //     explosion(engine, event.delta);

    //     // update last time
    //     lastTime = Common.now();
    //   }
    // });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []);

  return (
    <div
      ref={matterContainerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          pointerEvents: "initial",
          height: "100%",
          width: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.5)",
          boxShadow: "0 0 0 100vw rgba(0, 0, 0, 0.2) inset",
          backdropFilter: "blur(10px) brightness(150%) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) brightness(150%) saturate(120%)",
        }}
        ref={overlayRef}
      >
        <button ref={smashRef} className="smash_button">
          <span>Smash!</span>
        </button>
      </div>
    </div>
  );
};

export default CanvasSecondary;
