import React, { useEffect, useRef } from "react";
import Matter, {
  Body,
  Common,
  Events,
  Mouse,
  MouseConstraint,
  Vector,
} from "matter-js";

const CanvasHeader = () => {
  const matterContainerRef = useRef(null);
  const THICCNESS = 60;

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

    const smallestRadius = Common.random(8, 16);
    const smallRadius = Common.random(16, 32);
    const largeRadius = Common.random(32, 64);
    const largestRadius = Common.random(64, 72);

    // create bodies and setup the simulation
    for (let i = 0; i < 25; i++) {
      let circle = Bodies.circle(window.innerWidth / 2, -100, smallestRadius, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          strokeStyle: "#ffc400",
          fillStyle: "transparent",
          lineWidth: 5,
        },
      });
      Composite.add(engine.world, circle);
    }

    for (let i = 0; i < 25; i++) {
      let circle = Bodies.circle(window.innerWidth / 2, -100, smallRadius, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.7,
        render: {
          strokeStyle: "#00ff7f",
          fillStyle: "transparent",
          lineWidth: 5,
        },
      });
      Composite.add(engine.world, circle);
    }

    for (let i = 0; i < 25; i++) {
      let circle = Bodies.circle(window.innerWidth / 2, -100, largeRadius, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.6,
        render: {
          strokeStyle: "#00e5ff",
          fillStyle: "transparent",
          lineWidth: 5,
        },
      });
      Composite.add(engine.world, circle);
    }

    for (let i = 0; i < 25; i++) {
      let circle = Bodies.circle(window.innerWidth / 2, -100, largestRadius, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.5,
        render: {
          strokeStyle: "#9333ea",
          fillStyle: "transparent",
          lineWidth: 5,
        },
      });
      Composite.add(engine.world, circle);
    }

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
    Composite.add(engine.world, [ground, leftWall, rightWall]);

    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);

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
    }

    const explosion = (engine, delta) => {
      const timeScale = 1000 / 60 / delta;
      const bodies = Composite.allBodies(engine.world);

      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];

        if (!body.isStatic && body.position.y >= 500) {
          // scale force for mass and time applied
          const forceMagnitude = 0.05 * body.mass * timeScale;

          // apply the force over a single update
          Body.applyForce(body, body.position, {
            x:
              (forceMagnitude + Common.random() * forceMagnitude) *
              Common.choose([1, -1]),
            y: -forceMagnitude + Common.random() * -forceMagnitude,
          });
        }
      }
    };

    let timeScaleTarget = 1;
    let lastTime = Common.now();

    Events.on(engine, "afterUpdate", (event) => {
      const timeScale = (event.delta || 1000 / 60) / 1000;

      // tween the timescale for bullet time slow-mo
      engine.timing.timeScale +=
        (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;

      // every 2 sec (real time)
      if (Common.now() - lastTime >= 2000) {
        // flip the timescale
        if (timeScaleTarget < 1) {
          timeScaleTarget = 1;
        } else {
          timeScaleTarget = 0;
        }

        // create some random forces
        explosion(engine, event.delta);

        // update last time
        lastTime = Common.now();
      }
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []);

  return (
    <div ref={matterContainerRef} style={{ width: "100%", height: "100%" }} />
  );
};

export default CanvasHeader;
