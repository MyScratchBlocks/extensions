// Name: Block AI
// ID: pangpalgemini
// Description: An AI powered chat bot to help you code in your projects.
// By: TheShovel <https://theshovel.rocks/>
// License: MIT
// Remixed By: MyScratchedAccount

(function () {
  "use strict";
  /**
   * scratchblocks v3.6.4
   * https://scratchblocks.github.io/
   * Make pictures of Scratch blocks from text.
   *
   * Copyright 2013–2024, Tim Radvan
   * @license MIT
   */
  const isPM = Scratch.extensions.isPenguinMod != null;
  var greenFlagColor;
  var aiName;
  var modName;
  if (isPM) {
    //This is because Ian from PenguinMod laughed at me for having pang in Turbowarp >:(
    modName = "MyScratchBlocks";
    aiName = "MyScratchBlocks AI Coding Assistant";
    greenFlagColor = "#4abe55";
  } else {
    modName = "TurboWarp";
    aiName = "Coding AI";
    greenFlagColor = "#4abe55";
  }

  var scratchblocks = (function () {
    "use strict";
    function e(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function t(t) {
      for (var s = 1; s < arguments.length; s++) {
        var i = null != arguments[s] ? arguments[s] : {};
        s % 2
          ? e(Object(i), !0).forEach(function (e) {
              r(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : e(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
      }
      return t;
    }
    function s(e, t) {
      for (var s = 0; s < t.length; s++) {
        var i = t[s];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, h(i.key), i);
      }
    }
    function i(e, t, i) {
      return (
        t && s(e.prototype, t),
        i && s(e, i),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function r(e, t, s) {
      return (
        (t = h(t)) in e
          ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = s),
        e
      );
    }
    function n() {
      return (
        (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                  Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
              }
              return e;
            }),
        n.apply(this, arguments)
      );
    }
    function o(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return c(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        a(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function a(e, t) {
      if (e) {
        if ("string" == typeof e) return c(e, t);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === s && e.constructor && (s = e.constructor.name),
          "Map" === s || "Set" === s
            ? Array.from(e)
            : "Arguments" === s ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
              ? c(e, t)
              : void 0
        );
      }
    }
    function c(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var s = 0, i = Array(t); s < t; s++) i[s] = e[s];
      return i;
    }
    function l(e, t) {
      var s =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!s) {
        if (
          Array.isArray(e) ||
          (s = a(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          s && (e = s);
          var i = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      var n,
        o = !0,
        c = !1;
      return {
        s: function () {
          s = s.call(e);
        },
        n: function () {
          var e = s.next();
          return (o = e.done), e;
        },
        e: function (e) {
          (c = !0), (n = e);
        },
        f: function () {
          try {
            o || null == s.return || s.return();
          } finally {
            if (c) throw n;
          }
        },
      };
    }
    function h(e) {
      var t = (function (e, t) {
        if ("object" != typeof e || null === e) return e;
        var s = e[Symbol.toPrimitive];
        if (void 0 !== s) {
          var i = s.call(e, t || "default");
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == typeof t ? t : t + "";
    }
    var p = { pen: "pen", video: "sensing", music: "sound" },
      u = t(
        t({}, p),
        {},
        {
          tts: "tts",
          translate: "translate",
          microbit: "microbit",
          wedo: "wedo",
          makeymakey: "makeymakey",
          ev3: "ev3",
          boost: "boost",
          gdxfor: "gdxfor",
        },
      ),
      f = { wedo2: "wedo", text2speech: "tts" },
      d = [
        "motion",
        "looks",
        "sound",
        "variables",
        "list",
        "events",
        "control",
        "sensing",
        "operators",
        "custom",
        "custom-arg",
        "extension",
        "grey",
        "obsolete",
      ].concat(o(Object.keys(u)), o(Object.keys(f))),
      g = ["hat", "cap", "stack", "boolean", "reporter", "ring", "cat"],
      V = ["ar", "ckb", "fa", "he"],
      y = /%([0-9]+)/,
      v = /(%[a-zA-Z0-9](?:\.[a-zA-Z0-9]+)?)/,
      b = RegExp(v.source, "g"),
      m = /(@[a-zA-Z]+)/,
      k = RegExp(v.source + "|" + m.source + "| +", "g"),
      A = /^#(?:[0-9a-fA-F]{3}){1,2}?$/;
    function w(e) {
      var t = y.exec(e);
      return t ? +t[1] : 0;
    }
    function O(e) {
      var t = e.split(k).filter(function (e) {
          return e;
        }),
        s = t.filter(function (e) {
          return v.test(e);
        });
      return { spec: e, parts: t, inputs: s, hash: S(e) };
    }
    function S(e) {
      return L(e.replace(b, " _ "));
    }
    function L(e) {
      return e
        .replace(/_/g, " _ ")
        .replace(/ +/g, " ")
        .replace(/[,%?:]/g, "")
        .replace(/ß/g, "ss")
        .replace(/ä/g, "a")
        .replace(/ö/g, "o")
        .replace(/ü/g, "u")
        .replace(". . .", "...")
        .replace(/^…$/, "...")
        .trim()
        .toLowerCase();
    }
    var E = {},
      T = [
        {
          id: "MOTION_MOVESTEPS",
          selector: "forward:",
          spec: "move %1 steps",
          inputs: ["%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_TURNRIGHT",
          selector: "turnRight:",
          spec: "turn @turnRight %1 degrees",
          inputs: ["%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_TURNLEFT",
          selector: "turnLeft:",
          spec: "turn @turnLeft %1 degrees",
          inputs: ["%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_POINTINDIRECTION",
          selector: "heading:",
          spec: "point in direction %1",
          inputs: ["%d.direction"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_POINTTOWARDS",
          selector: "pointTowards:",
          spec: "point towards %1",
          inputs: ["%m.spriteOrMouse"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_GOTOXY",
          selector: "gotoX:y:",
          spec: "go to x:%1 y:%2",
          inputs: ["%n", "%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_GOTO",
          selector: "gotoSpriteOrMouse:",
          spec: "go to %1",
          inputs: ["%m.location"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_GLIDESECSTOXY",
          selector: "glideSecs:toX:y:elapsed:from:",
          spec: "glide %1 secs to x:%2 y:%3",
          inputs: ["%n", "%n", "%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_GLIDETO",
          spec: "glide %1 secs to %2",
          inputs: ["%n", "%m.location"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_CHANGEXBY",
          selector: "changeXposBy:",
          spec: "change x by %1",
          inputs: ["%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_SETX",
          selector: "xpos:",
          spec: "set x to %1",
          inputs: ["%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_CHANGEYBY",
          selector: "changeYposBy:",
          spec: "change y by %1",
          inputs: ["%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_SETY",
          selector: "ypos:",
          spec: "set y to %1",
          inputs: ["%n"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "MOTION_SETROTATIONSTYLE",
          selector: "setRotationStyle",
          spec: "set rotation style %1",
          inputs: ["%m.rotationStyle"],
          shape: "stack",
          category: "motion",
        },
        {
          id: "LOOKS_SAYFORSECS",
          selector: "say:duration:elapsed:from:",
          spec: "say %1 for %2 seconds",
          inputs: ["%s", "%n"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_SAY",
          selector: "say:",
          spec: "say %1",
          inputs: ["%s"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_THINKFORSECS",
          selector: "think:duration:elapsed:from:",
          spec: "think %1 for %2 seconds",
          inputs: ["%s", "%n"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_THINK",
          selector: "think:",
          spec: "think %1",
          inputs: ["%s"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_SHOW",
          selector: "show",
          spec: "show",
          inputs: [],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_HIDE",
          selector: "hide",
          spec: "hide",
          inputs: [],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_SWITCHCOSTUMETO",
          selector: "lookLike:",
          spec: "switch costume to %1",
          inputs: ["%m.costume"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_NEXTCOSTUME",
          selector: "nextCostume",
          spec: "next costume",
          inputs: [],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_NEXTBACKDROP_BLOCK",
          selector: "nextScene",
          spec: "next backdrop",
          inputs: [],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_SWITCHBACKDROPTO",
          selector: "startScene",
          spec: "switch backdrop to %1",
          inputs: ["%m.backdrop"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_SWITCHBACKDROPTOANDWAIT",
          selector: "startSceneAndWait",
          spec: "switch backdrop to %1 and wait",
          inputs: ["%m.backdrop"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_CHANGEEFFECTBY",
          selector: "changeGraphicEffect:by:",
          spec: "change %1 effect by %2",
          inputs: ["%m.effect", "%n"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_SETEFFECTTO",
          selector: "setGraphicEffect:to:",
          spec: "set %1 effect to %2",
          inputs: ["%m.effect", "%n"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_CLEARGRAPHICEFFECTS",
          selector: "filterReset",
          spec: "clear graphic effects",
          inputs: [],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_CHANGESIZEBY",
          selector: "changeSizeBy:",
          spec: "change size by %1",
          inputs: ["%n"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_SETSIZETO",
          selector: "setSizeTo:",
          spec: "set size to %1%",
          inputs: ["%n"],
          shape: "stack",
          category: "looks",
        },
        {
          selector: "comeToFront",
          spec: "go to front",
          inputs: [],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_GOTOFRONTBACK",
          spec: "go to %1 layer",
          inputs: ["%m"],
          shape: "stack",
          category: "looks",
        },
        {
          selector: "goBackByLayers:",
          spec: "go back %1 layers",
          inputs: ["%n"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "LOOKS_GOFORWARDBACKWARDLAYERS",
          spec: "go %1 %2 layers",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "looks",
        },
        {
          id: "SOUND_PLAY",
          selector: "playSound:",
          spec: "start sound %1",
          inputs: ["%m.sound"],
          shape: "stack",
          category: "sound",
        },
        {
          id: "SOUND_CHANGEEFFECTBY",
          spec: "change %1 effect by %2",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "sound",
        },
        {
          id: "SOUND_SETEFFECTO",
          spec: "set %1 effect to %2",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "sound",
        },
        {
          id: "SOUND_CLEAREFFECTS",
          spec: "clear sound effects",
          inputs: [],
          shape: "stack",
          category: "sound",
        },
        {
          id: "SOUND_PLAYUNTILDONE",
          selector: "doPlaySoundAndWait",
          spec: "play sound %1 until done",
          inputs: ["%m.sound"],
          shape: "stack",
          category: "sound",
        },
        {
          id: "SOUND_STOPALLSOUNDS",
          selector: "stopAllSounds",
          spec: "stop all sounds",
          inputs: [],
          shape: "stack",
          category: "sound",
        },
        {
          id: "music.playDrumForBeats",
          selector: "playDrum",
          spec: "play drum %1 for %2 beats",
          inputs: ["%d.drum", "%n"],
          shape: "stack",
          category: "music",
        },
        {
          id: "music.restForBeats",
          selector: "rest:elapsed:from:",
          spec: "rest for %1 beats",
          inputs: ["%n"],
          shape: "stack",
          category: "music",
        },
        {
          id: "music.playNoteForBeats",
          selector: "noteOn:duration:elapsed:from:",
          spec: "play note %1 for %2 beats",
          inputs: ["%d.note", "%n"],
          shape: "stack",
          category: "music",
        },
        {
          id: "music.setInstrument",
          selector: "instrument:",
          spec: "set instrument to %1",
          inputs: ["%d.instrument"],
          shape: "stack",
          category: "music",
        },
        {
          id: "SOUND_CHANGEVOLUMEBY",
          selector: "changeVolumeBy:",
          spec: "change volume by %1",
          inputs: ["%n"],
          shape: "stack",
          category: "sound",
        },
        {
          id: "SOUND_SETVOLUMETO",
          selector: "setVolumeTo:",
          spec: "set volume to %1%",
          inputs: ["%n"],
          shape: "stack",
          category: "sound",
        },
        {
          id: "music.changeTempo",
          selector: "changeTempoBy:",
          spec: "change tempo by %1",
          inputs: ["%n"],
          shape: "stack",
          category: "music",
        },
        {
          selector: "setTempoTo:",
          spec: "set tempo to %1 bpm",
          inputs: ["%n"],
          shape: "stack",
          category: "sound",
        },
        {
          id: "music.setTempo",
          selector: "setTempoTo:",
          spec: "set tempo to %1",
          inputs: ["%n"],
          shape: "stack",
          category: "music",
        },
        {
          id: "pen.clear",
          selector: "clearPenTrails",
          spec: "erase all",
          inputs: [],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.stamp",
          selector: "stampCostume",
          spec: "stamp",
          inputs: [],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.penDown",
          selector: "putPenDown",
          spec: "pen down",
          inputs: [],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.penUp",
          selector: "putPenUp",
          spec: "pen up",
          inputs: [],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.setColor",
          selector: "penColor:",
          spec: "set pen color to %1",
          inputs: ["%c"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.changeHue",
          selector: "changePenHueBy:",
          spec: "change pen color by %1",
          inputs: ["%n"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.setColorParam",
          spec: "set pen %1 to %2",
          inputs: ["%m.color", "%c"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.changeColorParam",
          spec: "change pen %1 by %2",
          inputs: ["%m.color", "%n"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.setHue",
          selector: "setPenHueTo:",
          spec: "set pen color to %1",
          inputs: ["%n"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.changeShade",
          selector: "changePenShadeBy:",
          spec: "change pen shade by %1",
          inputs: ["%n"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.setShade",
          selector: "setPenShadeTo:",
          spec: "set pen shade to %1",
          inputs: ["%n"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.changeSize",
          selector: "changePenSizeBy:",
          spec: "change pen size by %1",
          inputs: ["%n"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "pen.setSize",
          selector: "penSize:",
          spec: "set pen size to %1",
          inputs: ["%n"],
          shape: "stack",
          category: "pen",
        },
        {
          id: "EVENT_WHENFLAGCLICKED",
          selector: "whenGreenFlag",
          spec: "when @greenFlag clicked",
          inputs: [],
          shape: "hat",
          category: "events",
        },
        {
          id: "EVENT_WHENKEYPRESSED",
          selector: "whenKeyPressed",
          spec: "when %1 key pressed",
          inputs: ["%m.key"],
          shape: "hat",
          category: "events",
        },
        {
          id: "EVENT_WHENTHISSPRITECLICKED",
          selector: "whenClicked",
          spec: "when this sprite clicked",
          inputs: [],
          shape: "hat",
          category: "events",
        },
        {
          id: "EVENT_WHENSTAGECLICKED",
          spec: "when stage clicked",
          inputs: [],
          shape: "hat",
          category: "events",
        },
        {
          id: "EVENT_WHENBACKDROPSWITCHESTO",
          selector: "whenSceneStarts",
          spec: "when backdrop switches to %1",
          inputs: ["%m.backdrop"],
          shape: "hat",
          category: "events",
        },
        {
          id: "EVENT_WHENGREATERTHAN",
          selector: "whenSensorGreaterThan",
          spec: "when %1 > %2",
          inputs: ["%m.triggerSensor", "%n"],
          shape: "hat",
          category: "events",
        },
        {
          id: "EVENT_WHENBROADCASTRECEIVED",
          selector: "whenIReceive",
          spec: "when I receive %1",
          inputs: ["%m.broadcast"],
          shape: "hat",
          category: "events",
        },
        {
          id: "EVENT_BROADCAST",
          selector: "broadcast:",
          spec: "broadcast %1",
          inputs: ["%m.broadcast"],
          shape: "stack",
          category: "events",
        },
        {
          id: "EVENT_BROADCASTANDWAIT",
          selector: "doBroadcastAndWait",
          spec: "broadcast %1 and wait",
          inputs: ["%m.broadcast"],
          shape: "stack",
          category: "events",
        },
        {
          id: "CONTROL_WAIT",
          selector: "wait:elapsed:from:",
          spec: "wait %1 seconds",
          inputs: ["%n"],
          shape: "stack",
          category: "control",
        },
        {
          id: "CONTROL_REPEAT",
          selector: "doRepeat",
          spec: "repeat %1",
          inputs: ["%n"],
          shape: "c-block",
          category: "control",
          hasLoopArrow: !0,
        },
        {
          id: "CONTROL_FOREVER",
          selector: "doForever",
          spec: "forever",
          inputs: [],
          shape: "c-block cap",
          category: "control",
          hasLoopArrow: !0,
        },
        {
          id: "CONTROL_IF",
          selector: "doIf",
          spec: "if %1 then",
          inputs: ["%b"],
          shape: "c-block",
          category: "control",
        },
        {
          id: "CONTROL_WAITUNTIL",
          selector: "doWaitUntil",
          spec: "wait until %1",
          inputs: ["%b"],
          shape: "stack",
          category: "control",
        },
        {
          id: "CONTROL_REPEATUNTIL",
          selector: "doUntil",
          spec: "repeat until %1",
          inputs: ["%b"],
          shape: "c-block",
          category: "control",
          hasLoopArrow: !0,
        },
        {
          id: "CONTROL_STOP",
          selector: "stopScripts",
          spec: "stop %1",
          inputs: ["%m.stop"],
          shape: "cap",
          category: "control",
        },
        {
          id: "CONTROL_STARTASCLONE",
          selector: "whenCloned",
          spec: "when I start as a clone",
          inputs: [],
          shape: "hat",
          category: "control",
        },
        {
          id: "CONTROL_CREATECLONEOF",
          selector: "createCloneOf",
          spec: "create clone of %1",
          inputs: ["%m.spriteOnly"],
          shape: "stack",
          category: "control",
        },
        {
          id: "CONTROL_DELETETHISCLONE",
          selector: "deleteClone",
          spec: "delete this clone",
          inputs: [],
          shape: "cap",
          category: "control",
        },
        {
          id: "SENSING_ASKANDWAIT",
          selector: "doAsk",
          spec: "ask %1 and wait",
          inputs: ["%s"],
          shape: "stack",
          category: "sensing",
        },
        {
          id: "videoSensing.videoToggle",
          selector: "setVideoState",
          spec: "turn video %1",
          inputs: ["%m.videoState"],
          shape: "stack",
          category: "video",
        },
        {
          id: "videoSensing.setVideoTransparency",
          selector: "setVideoTransparency",
          spec: "set video transparency to %1%",
          inputs: ["%n"],
          shape: "stack",
          category: "video",
        },
        {
          id: "videoSensing.whenMotionGreaterThan",
          spec: "when video motion > %1",
          inputs: ["%n"],
          shape: "hat",
          category: "video",
        },
        {
          id: "SENSING_RESETTIMER",
          selector: "timerReset",
          spec: "reset timer",
          inputs: [],
          shape: "stack",
          category: "sensing",
        },
        {
          id: "DATA_SETVARIABLETO",
          selector: "setVar:to:",
          spec: "set %1 to %2",
          inputs: ["%m.var", "%s"],
          shape: "stack",
          category: "variables",
        },
        {
          id: "DATA_CHANGEVARIABLEBY",
          selector: "changeVar:by:",
          spec: "change %1 by %2",
          inputs: ["%m.var", "%n"],
          shape: "stack",
          category: "variables",
        },
        {
          id: "DATA_SHOWVARIABLE",
          selector: "showVariable:",
          spec: "show variable %1",
          inputs: ["%m.var"],
          shape: "stack",
          category: "variables",
        },
        {
          id: "DATA_HIDEVARIABLE",
          selector: "hideVariable:",
          spec: "hide variable %1",
          inputs: ["%m.var"],
          shape: "stack",
          category: "variables",
        },
        {
          id: "DATA_ADDTOLIST",
          selector: "append:toList:",
          spec: "add %1 to %2",
          inputs: ["%s", "%m.list"],
          shape: "stack",
          category: "list",
        },
        {
          id: "DATA_DELETEOFLIST",
          selector: "deleteLine:ofList:",
          spec: "delete %1 of %2",
          inputs: ["%d.listDeleteItem", "%m.list"],
          shape: "stack",
          category: "list",
        },
        {
          id: "DATA_DELETEALLOFLIST",
          spec: "delete all of %1",
          inputs: ["%m.list"],
          shape: "stack",
          category: "list",
        },
        {
          id: "MOTION_IFONEDGEBOUNCE",
          selector: "bounceOffEdge",
          spec: "if on edge, bounce",
          inputs: [],
          shape: "stack",
          category: "motion",
        },
        {
          id: "DATA_INSERTATLIST",
          selector: "insert:at:ofList:",
          spec: "insert %1 at %2 of %3",
          inputs: ["%s", "%d.listItem", "%m.list"],
          shape: "stack",
          category: "list",
        },
        {
          id: "DATA_REPLACEITEMOFLIST",
          selector: "setLine:ofList:to:",
          spec: "replace item %1 of %2 with %3",
          inputs: ["%d.listItem", "%m.list", "%s"],
          shape: "stack",
          category: "list",
        },
        {
          id: "DATA_SHOWLIST",
          selector: "showList:",
          spec: "show list %1",
          inputs: ["%m.list"],
          shape: "stack",
          category: "list",
        },
        {
          id: "DATA_HIDELIST",
          selector: "hideList:",
          spec: "hide list %1",
          inputs: ["%m.list"],
          shape: "stack",
          category: "list",
        },
        {
          id: "SENSING_OF_XPOSITION",
          selector: "xpos",
          spec: "x position",
          inputs: [],
          shape: "reporter",
          category: "motion",
        },
        {
          id: "SENSING_OF_YPOSITION",
          selector: "ypos",
          spec: "y position",
          inputs: [],
          shape: "reporter",
          category: "motion",
        },
        {
          id: "SENSING_OF_DIRECTION",
          selector: "heading",
          spec: "direction",
          inputs: [],
          shape: "reporter",
          category: "motion",
        },
        {
          id: "SENSING_OF_COSTUMENUMBER",
          selector: "costumeIndex",
          spec: "costume #",
          inputs: [],
          shape: "reporter",
          category: "looks",
        },
        {
          id: "LOOKS_COSTUMENUMBERNAME",
          selector: "LOOKS_COSTUMENUMBERNAME",
          spec: "costume %1",
          inputs: ["%m"],
          shape: "reporter",
          category: "looks",
        },
        {
          id: "SENSING_OF_SIZE",
          selector: "scale",
          spec: "size",
          inputs: [],
          shape: "reporter",
          category: "looks",
        },
        {
          id: "SENSING_OF_BACKDROPNAME",
          selector: "sceneName",
          spec: "backdrop name",
          inputs: [],
          shape: "reporter",
          category: "looks",
        },
        {
          id: "LOOKS_BACKDROPNUMBERNAME",
          spec: "backdrop %1",
          inputs: ["%m"],
          shape: "reporter",
          category: "looks",
        },
        {
          id: "SENSING_OF_BACKDROPNUMBER",
          selector: "backgroundIndex",
          spec: "backdrop #",
          inputs: [],
          shape: "reporter",
          category: "looks",
        },
        {
          id: "SOUND_VOLUME",
          selector: "volume",
          spec: "volume",
          inputs: [],
          shape: "reporter",
          category: "sound",
        },
        {
          id: "music.getTempo",
          selector: "tempo",
          spec: "tempo",
          inputs: [],
          shape: "reporter",
          category: "music",
        },
        {
          id: "SENSING_TOUCHINGOBJECT",
          selector: "touching:",
          spec: "touching %1?",
          inputs: ["%m.touching"],
          shape: "boolean",
          category: "sensing",
        },
        {
          id: "SENSING_TOUCHINGCOLOR",
          selector: "touchingColor:",
          spec: "touching color %1?",
          inputs: ["%c"],
          shape: "boolean",
          category: "sensing",
        },
        {
          id: "SENSING_COLORISTOUCHINGCOLOR",
          selector: "color:sees:",
          spec: "color %1 is touching %2?",
          inputs: ["%c", "%c"],
          shape: "boolean",
          category: "sensing",
        },
        {
          id: "SENSING_DISTANCETO",
          selector: "distanceTo:",
          spec: "distance to %1",
          inputs: ["%m.spriteOrMouse"],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "SENSING_ANSWER",
          selector: "answer",
          spec: "answer",
          inputs: [],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "SENSING_KEYPRESSED",
          selector: "keyPressed:",
          spec: "key %1 pressed?",
          inputs: ["%m.key"],
          shape: "boolean",
          category: "sensing",
        },
        {
          id: "SENSING_MOUSEDOWN",
          selector: "mousePressed",
          spec: "mouse down?",
          inputs: [],
          shape: "boolean",
          category: "sensing",
        },
        {
          id: "SENSING_MOUSEX",
          selector: "mouseX",
          spec: "mouse x",
          inputs: [],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "SENSING_MOUSEY",
          selector: "mouseY",
          spec: "mouse y",
          inputs: [],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "SENSING_SETDRAGMODE",
          spec: "set drag mode %1",
          inputs: ["%m"],
          shape: "stack",
          category: "sensing",
        },
        {
          id: "SENSING_LOUDNESS",
          selector: "soundLevel",
          spec: "loudness",
          inputs: [],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "videoSensing.videoOn",
          selector: "senseVideoMotion",
          spec: "video %1 on %2",
          inputs: ["%m.videoMotionType", "%m.stageOrThis"],
          shape: "reporter",
          category: "video",
        },
        {
          id: "SENSING_TIMER",
          selector: "timer",
          spec: "timer",
          inputs: [],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "SENSING_OF",
          selector: "getAttribute:of:",
          spec: "%1 of %2",
          inputs: ["%m.attribute", "%m.spriteOrStage"],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "SENSING_CURRENT",
          selector: "timeAndDate",
          spec: "current %1",
          inputs: ["%m.timeAndDate"],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "SENSING_DAYSSINCE2000",
          selector: "timestamp",
          spec: "days since 2000",
          inputs: [],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "SENSING_USERNAME",
          selector: "getUserName",
          spec: "username",
          inputs: [],
          shape: "reporter",
          category: "sensing",
        },
        {
          id: "OPERATORS_ADD",
          selector: "+",
          spec: "%1 + %2",
          inputs: ["%n", "%n"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_SUBTRACT",
          selector: "-",
          spec: "%1 - %2",
          inputs: ["%n", "%n"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_MULTIPLY",
          selector: "*",
          spec: "%1 * %2",
          inputs: ["%n", "%n"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_DIVIDE",
          selector: "/",
          spec: "%1 / %2",
          inputs: ["%n", "%n"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_RANDOM",
          selector: "randomFrom:to:",
          spec: "pick random %1 to %2",
          inputs: ["%n", "%n"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_LT",
          selector: "<",
          spec: "%1 < %2",
          inputs: ["%s", "%s"],
          shape: "boolean",
          category: "operators",
        },
        {
          id: "OPERATORS_EQUALS",
          selector: "=",
          spec: "%1 = %2",
          inputs: ["%s", "%s"],
          shape: "boolean",
          category: "operators",
        },
        {
          id: "OPERATORS_GT",
          selector: ">",
          spec: "%1 > %2",
          inputs: ["%s", "%s"],
          shape: "boolean",
          category: "operators",
        },
        {
          id: "OPERATORS_AND",
          selector: "&",
          spec: "%1 and %2",
          inputs: ["%b", "%b"],
          shape: "boolean",
          category: "operators",
        },
        {
          id: "OPERATORS_OR",
          selector: "|",
          spec: "%1 or %2",
          inputs: ["%b", "%b"],
          shape: "boolean",
          category: "operators",
        },
        {
          id: "OPERATORS_NOT",
          selector: "not",
          spec: "not %1",
          inputs: ["%b"],
          shape: "boolean",
          category: "operators",
        },
        {
          id: "OPERATORS_JOIN",
          selector: "concatenate:with:",
          spec: "join %1 %2",
          inputs: ["%s", "%s"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_LETTEROF",
          selector: "letter:of:",
          spec: "letter %1 of %2",
          inputs: ["%n", "%s"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_LENGTH",
          selector: "stringLength:",
          spec: "length of %1",
          inputs: ["%s"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_MOD",
          selector: "%",
          spec: "%1 mod %2",
          inputs: ["%n", "%n"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_ROUND",
          selector: "rounded",
          spec: "round %1",
          inputs: ["%n"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_MATHOP",
          selector: "computeFunction:of:",
          spec: "%1 of %2",
          inputs: ["%m.mathOp", "%n"],
          shape: "reporter",
          category: "operators",
        },
        {
          id: "OPERATORS_CONTAINS",
          spec: "%1 contains %2?",
          inputs: ["%s", "%s"],
          shape: "boolean",
          category: "operators",
        },
        {
          id: "DATA_ITEMOFLIST",
          selector: "getLine:ofList:",
          spec: "item %1 of %2",
          inputs: ["%d.listItem", "%m.list"],
          shape: "reporter",
          category: "list",
        },
        {
          id: "DATA_ITEMNUMOFLIST",
          spec: "item # of %1 in %2",
          inputs: ["%s", "%m.list"],
          shape: "reporter",
          category: "list",
        },
        {
          id: "DATA_LENGTHOFLIST",
          selector: "lineCountOfList:",
          spec: "length of %1",
          inputs: ["%m.list"],
          shape: "reporter",
          category: "list",
        },
        {
          id: "DATA_LISTCONTAINSITEM",
          selector: "list:contains:",
          spec: "%1 contains %2?",
          inputs: ["%m.list", "%s"],
          shape: "boolean",
          category: "list",
        },
        {
          id: "CONTROL_ELSE",
          spec: "else",
          inputs: [],
          shape: "celse",
          category: "control",
        },
        {
          id: "scratchblocks:end",
          spec: "end",
          inputs: [],
          shape: "cend",
          category: "control",
        },
        {
          id: "scratchblocks:ellipsis",
          spec: ". . .",
          inputs: [],
          shape: "stack",
          category: "grey",
        },
        {
          id: "scratchblocks:addInput",
          spec: "%1 @addInput",
          inputs: ["%n"],
          shape: "ring",
          category: "grey",
        },
        {
          id: "SENSING_USERID",
          spec: "user id",
          inputs: [],
          shape: "reporter",
          category: "obsolete",
        },
        {
          selector: "doIf",
          spec: "if %1",
          inputs: ["%b"],
          shape: "c-block",
          category: "obsolete",
        },
        {
          selector: "doForeverIf",
          spec: "forever if %1",
          inputs: ["%b"],
          shape: "c-block cap",
          category: "obsolete",
        },
        {
          selector: "doReturn",
          spec: "stop script",
          inputs: [],
          shape: "cap",
          category: "obsolete",
        },
        {
          selector: "stopAll",
          spec: "stop all",
          inputs: [],
          shape: "cap",
          category: "obsolete",
        },
        {
          selector: "lookLike:",
          spec: "switch to costume %1",
          inputs: ["%m.costume"],
          shape: "stack",
          category: "obsolete",
        },
        {
          selector: "nextScene",
          spec: "next background",
          inputs: [],
          shape: "stack",
          category: "obsolete",
        },
        {
          selector: "startScene",
          spec: "switch to background %1",
          inputs: ["%m.backdrop"],
          shape: "stack",
          category: "obsolete",
        },
        {
          selector: "backgroundIndex",
          spec: "background #",
          inputs: [],
          shape: "reporter",
          category: "obsolete",
        },
        {
          id: "SENSING_LOUD",
          selector: "isLoud",
          spec: "loud?",
          inputs: [],
          shape: "boolean",
          category: "obsolete",
        },
        {
          id: "text2speech.speakAndWaitBlock",
          spec: "speak %1",
          inputs: ["%s"],
          shape: "stack",
          category: "tts",
        },
        {
          id: "text2speech.setVoiceBlock",
          spec: "set voice to %1",
          inputs: ["%m"],
          shape: "stack",
          category: "tts",
        },
        {
          id: "text2speech.setLanguageBlock",
          spec: "set language to %1",
          inputs: ["%m"],
          shape: "stack",
          category: "tts",
        },
        {
          id: "translate.translateBlock",
          spec: "translate %1 to %2",
          inputs: ["%s", "%m"],
          shape: "reporter",
          category: "translate",
        },
        {
          id: "translate.viewerLanguage",
          spec: "language",
          shape: "reporter",
          category: "translate",
        },
        {
          id: "makeymakey.whenKeyPressed",
          spec: "when %1 key pressed",
          inputs: ["%m"],
          shape: "hat",
          category: "makeymakey",
        },
        {
          id: "makeymakey.whenKeysPressedInOrder",
          spec: "when %1 pressed in order",
          inputs: ["%m"],
          shape: "hat",
          category: "makeymakey",
        },
        {
          id: "microbit.whenButtonPressed",
          spec: "when %1 button pressed",
          inputs: ["%m"],
          shape: "hat",
          category: "microbit",
        },
        {
          id: "microbit.isButtonPressed",
          spec: "%1 button pressed?",
          inputs: ["%m"],
          shape: "boolean",
          category: "microbit",
        },
        {
          id: "microbit.whenGesture",
          spec: "when %1",
          inputs: ["%m"],
          shape: "hat",
          category: "microbit",
        },
        {
          id: "microbit.displaySymbol",
          spec: "display %1",
          inputs: ["%m"],
          shape: "stack",
          category: "microbit",
        },
        {
          id: "microbit.displayText",
          spec: "display text %1",
          inputs: ["%s"],
          shape: "stack",
          category: "microbit",
        },
        {
          id: "microbit.clearDisplay",
          spec: "clear display",
          shape: "stack",
          category: "microbit",
        },
        {
          id: "microbit.whenTilted",
          spec: "when tilted %1",
          inputs: ["%m"],
          shape: "hat",
          category: "microbit",
        },
        {
          id: "microbit.isTilted",
          spec: "tilted %1?",
          inputs: ["%m"],
          shape: "boolean",
          category: "microbit",
        },
        {
          id: "microbit.tiltAngle",
          spec: "tilt angle %1",
          inputs: ["%m"],
          shape: "reporter",
          category: "microbit",
        },
        {
          id: "microbit.whenPinConnected",
          spec: "when pin %1 connected",
          inputs: ["%m"],
          shape: "hat",
          category: "microbit",
        },
        {
          id: "ev3.motorTurnClockwise",
          spec: "motor %1 turn this way for %2 seconds",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "ev3",
        },
        {
          id: "ev3.motorTurnCounterClockwise",
          spec: "motor %1 turn that way for %2 seconds",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "ev3",
        },
        {
          id: "ev3.motorSetPower",
          spec: "motor %1 set power %2%",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "ev3",
        },
        {
          id: "ev3.getMotorPosition",
          spec: "motor %1 position",
          inputs: ["%m"],
          shape: "reporter",
          category: "ev3",
        },
        {
          id: "ev3.whenButtonPressed",
          spec: "when button %1 pressed",
          inputs: ["%m"],
          shape: "hat",
          category: "ev3",
        },
        {
          id: "ev3.whenDistanceLessThan",
          spec: "when distance < %1",
          inputs: ["%n"],
          shape: "hat",
          category: "ev3",
        },
        {
          id: "ev3.whenBrightnessLessThan",
          spec: "when brightness < %1",
          inputs: ["%n"],
          shape: "hat",
          category: "ev3",
        },
        {
          id: "ev3.buttonPressed",
          spec: "button %1 pressed?",
          inputs: ["%m"],
          shape: "boolean",
          category: "ev3",
        },
        {
          id: "ev3.getDistance",
          spec: "distance",
          shape: "reporter",
          category: "ev3",
        },
        {
          id: "ev3.getBrightness",
          spec: "brightness",
          shape: "reporter",
          category: "ev3",
        },
        {
          id: "ev3.beepNote",
          spec: "beep note %1 for %2 secs",
          inputs: ["%d.note", "%n"],
          shape: "stack",
          category: "ev3",
        },
        {
          id: "wedo2.motorOn",
          spec: "turn %1 on",
          inputs: ["%m.motor"],
          shape: "stack",
          category: "wedo",
        },
        {
          id: "wedo2.motorOff",
          spec: "turn %1 off",
          inputs: ["%m.motor"],
          shape: "stack",
          category: "wedo",
        },
        {
          id: "wedo2.startMotorPower",
          spec: "set %1 power to %2",
          inputs: ["%m.motor", "%n"],
          shape: "stack",
          category: "wedo",
        },
        {
          id: "wedo2.setMotorDirection",
          spec: "set %1 direction to %2",
          inputs: ["%m.motor2", "%m.motorDirection"],
          shape: "stack",
          category: "wedo",
        },
        {
          id: "wedo2.whenDistance",
          spec: "when distance %1 %2",
          inputs: ["%m.lessMore", "%n"],
          shape: "hat",
          category: "wedo",
        },
        {
          id: "wedo2.getDistance",
          spec: "distance",
          inputs: [],
          shape: "reporter",
          category: "wedo",
        },
        {
          id: "wedo2.motorOnFor",
          spec: "turn %1 on for %2 seconds",
          inputs: ["%m.motor", "%n"],
          shape: "stack",
          category: "wedo",
        },
        {
          id: "wedo2.setLightHue",
          spec: "set light color to %1",
          inputs: ["%n"],
          shape: "stack",
          category: "wedo",
        },
        {
          id: "wedo2.playNoteFor",
          spec: "play note %1 for %2 seconds",
          inputs: ["%n", "%n"],
          shape: "stack",
          category: "wedo",
        },
        {
          id: "wedo2.whenTilted",
          spec: "when tilted %1",
          inputs: ["%m.xxx"],
          shape: "hat",
          category: "wedo",
        },
        {
          id: "wedo2.isTilted",
          spec: "tilted %1?",
          inputs: ["%m"],
          shape: "boolean",
          category: "wedo",
        },
        {
          id: "wedo2.getTiltAngle",
          spec: "tilt angle %1",
          inputs: ["%m.xxx"],
          shape: "reporter",
          category: "wedo",
        },
        {
          id: "gdxfor.whenGesture",
          spec: "when %1",
          inputs: ["%m"],
          shape: "hat",
          category: "gdxfor",
        },
        {
          id: "gdxfor.whenForcePushedOrPulled",
          spec: "when force sensor %1",
          inputs: ["%m"],
          shape: "hat",
          category: "gdxfor",
        },
        {
          id: "gdxfor.getForce",
          spec: "force",
          shape: "reporter",
          category: "gdxfor",
        },
        {
          id: "gdxfor.whenTilted",
          spec: "when tilted %1",
          inputs: ["%m"],
          shape: "hat",
          category: "gdxfor",
        },
        {
          id: "gdxfor.isTilted",
          spec: "tilted %1?",
          inputs: ["%m"],
          shape: "boolean",
          category: "gdxfor",
        },
        {
          id: "gdxfor.getTilt",
          spec: "tilt angle %1",
          inputs: ["%m"],
          shape: "reporter",
          category: "gdxfor",
        },
        {
          id: "gdxfor.isFreeFalling",
          spec: "falling?",
          shape: "boolean",
          category: "gdxfor",
        },
        {
          id: "gdxfor.getSpin",
          spec: "spin speed %1",
          inputs: ["%m"],
          shape: "reporter",
          category: "gdxfor",
        },
        {
          id: "gdxfor.getAcceleration",
          spec: "acceleration %1",
          inputs: ["%m"],
          shape: "reporter",
          category: "gdxfor",
        },
        {
          id: "boost.motorOnFor",
          spec: "turn motor %1 for %2 seconds",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "boost",
        },
        {
          id: "boost.motorOnForRotation",
          spec: "turn motor %1 for %2 rotations",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "boost",
        },
        {
          id: "boost.motorOn",
          spec: "turn motor %1 on",
          inputs: ["%m"],
          shape: "stack",
          category: "boost",
        },
        {
          id: "boost.motorOff",
          spec: "turn motor %1 off",
          inputs: ["%m"],
          shape: "stack",
          category: "boost",
        },
        {
          id: "boost.setMotorPower",
          spec: "set motor %1 speed to %2%",
          inputs: ["%m", "%n"],
          shape: "stack",
          category: "boost",
        },
        {
          id: "boost.setMotorDirection",
          spec: "set motor %1 direction %2",
          inputs: ["%m", "%m"],
          shape: "stack",
          category: "boost",
        },
        {
          id: "boost.getMotorPosition",
          spec: "motor %1 position",
          inputs: ["%m"],
          shape: "reporter",
          category: "boost",
        },
        {
          id: "boost.whenColor",
          spec: "when %1 brick seen",
          inputs: ["%m"],
          shape: "hat",
          category: "boost",
        },
        {
          id: "boost.seeingColor",
          spec: "seeing %1 brick?",
          inputs: ["%m"],
          shape: "boolean",
          category: "boost",
        },
        {
          id: "boost.whenTilted",
          spec: "when tilted %1",
          inputs: ["%m"],
          shape: "hat",
          category: "boost",
        },
        {
          id: "boost.getTiltAngle",
          spec: "tilt angle %1",
          inputs: ["%m"],
          shape: "reporter",
          category: "boost",
        },
        {
          id: "boost.setLightHue",
          spec: "set light color to %1",
          inputs: ["%n"],
          shape: "stack",
          category: "boost",
        },
      ].map(function (e) {
        if (!e.id) {
          if (!e.selector) throw Error("Missing ID: " + e.spec);
          e.id = "sb2:" + e.selector;
        }
        if (!e.spec) throw Error("Missing spec: " + e.id);
        var t = {
          id: e.id,
          spec: e.spec,
          parts: e.spec.split(k).filter(function (e) {
            return e;
          }),
          selector: e.selector || "sb3:" + e.id,
          inputs: null == e.inputs ? [] : e.inputs,
          shape: e.shape,
          category: e.category,
          hasLoopArrow: !!e.hasLoopArrow,
        };
        if (E[t.id]) throw Error("Duplicate ID: " + t.id);
        return (E[t.id] = t), t;
      }),
      R = {
        "@greenFlag": "⚑",
        "@turnRight": "↻",
        "@turnLeft": "↺",
        "@addInput": "▸",
        "@delInput": "◂",
      },
      C = {};
    function M(e) {
      Object.keys(e).forEach(function (t) {
        return (function (e, t) {
          var s = (t.blocksByHash = {});
          Object.keys(t.commands).forEach(function (e) {
            var i = t.commands[e],
              r = E[e],
              n = S(i);
            s[n] || (s[n] = []), s[n].push(r);
            var o = m.exec(r.spec);
            if (o) {
              var a = o[0],
                c = n.replace(S(a), R[a]);
              s[c] || (s[c] = []), s[c].push(r);
            }
          }),
            (t.nativeAliases = {}),
            Object.keys(t.aliases).forEach(function (e) {
              var i = t.aliases[e],
                r = E[i];
              if (void 0 === r) throw Error("Invalid alias '" + i + "'");
              var n = S(e);
              s[n] || (s[n] = []),
                s[n].push(r),
                t.nativeAliases[i] || (t.nativeAliases[i] = []),
                t.nativeAliases[i].push(e);
            }),
            Object.keys(t.renamedBlocks || {}).forEach(function (e) {
              var s = t.renamedBlocks[e];
              if (!E[s]) throw Error("Unknown ID: " + s);
              var i = E[s],
                r = S(e);
              I.blocksByHash[r] || (I.blocksByHash[r] = []),
                I.blocksByHash[r].push(i);
            }),
            (t.nativeDropdowns = {}),
            Object.keys(t.dropdowns).forEach(function (e) {
              var s = t.dropdowns[e];
              t.nativeDropdowns[s] = e;
            }),
            (t.code = e),
            (C[e] = t);
        })(t, e[t]);
      });
    }
    var I = {
      aliases: {
        "turn ccw %1 degrees": "MOTION_TURNLEFT",
        "turn left %1 degrees": "MOTION_TURNLEFT",
        "turn cw %1 degrees": "MOTION_TURNRIGHT",
        "turn right %1 degrees": "MOTION_TURNRIGHT",
        "when flag clicked": "EVENT_WHENFLAGCLICKED",
        "when gf clicked": "EVENT_WHENFLAGCLICKED",
        "when green flag clicked": "EVENT_WHENFLAGCLICKED",
      },
      renamedBlocks: {
        "say %1 for %2 secs": "LOOKS_SAYFORSECS",
        "think %1 for %2 secs": "LOOKS_THINKFORSECS",
        "play sound %1": "SOUND_PLAY",
        "wait %1 secs": "CONTROL_WAIT",
        clear: "pen.clear",
      },
      definePrefix: ["define"],
      defineSuffix: [],
      ignorelt: ["when distance"],
      math: [
        "abs",
        "floor",
        "ceiling",
        "sqrt",
        "sin",
        "cos",
        "tan",
        "asin",
        "acos",
        "atan",
        "ln",
        "log",
        "e ^",
        "10 ^",
      ],
      name: "English",
      soundEffects: ["pitch", "pan left/right"],
      microbitWhen: ["moved", "shaken", "jumped"],
      osis: ["other scripts in sprite", "other scripts in stage"],
      dropdowns: {},
      commands: {},
    };
    function N(e, t) {
      if (!E[e]) throw Error("Unknown ID: " + e);
      E[e].accepts = t;
    }
    function x(e, t, s) {
      N(e, function (e, t, i) {
        return s(t, i);
      }),
        N(t, function (e, t, i) {
          return !s(t, i);
        });
    }
    function B(e) {
      var t,
        s = [],
        i = l(e.children);
      try {
        for (i.s(); !(t = i.n()).done; ) {
          var r = t.value;
          if (!r.isLabel) return;
          s.push(r.value);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
      return s.join(" ");
    }
    function D(e, t) {
      if (!e) throw Error("Assertion failed! " + (t || ""));
    }
    T.forEach(function (e) {
      I.commands[e.id] = e.spec;
    }),
      M({ en: I }),
      x("OPERATORS_MATHOP", "SENSING_OF", function (e, t) {
        var s = e[0];
        if (s.isInput) {
          var i = s.value;
          return t.math.includes(i);
        }
      }),
      x("SOUND_CHANGEEFFECTBY", "LOOKS_CHANGEEFFECTBY", function (e, t) {
        var s,
          i = l(e);
        try {
          for (i.s(); !(s = i.n()).done; ) {
            var r = s.value;
            if ("dropdown" === r.shape) {
              var n,
                o = r.value,
                a = l(t.soundEffects);
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  if (L(n.value) === L(o)) return !0;
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            }
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        return !1;
      }),
      x("SOUND_SETEFFECTO", "LOOKS_SETEFFECTTO", function (e, t) {
        var s,
          i = l(e);
        try {
          for (i.s(); !(s = i.n()).done; ) {
            var r = s.value;
            if ("dropdown" === r.shape) {
              var n,
                o = r.value,
                a = l(t.soundEffects);
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  if (L(n.value) === L(o)) return !0;
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            }
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        return !1;
      }),
      x("DATA_LENGTHOFLIST", "OPERATORS_LENGTH", function (e, t) {
        var s = e[e.length - 1];
        if (s.isInput) return "dropdown" === s.shape;
      }),
      x("DATA_LISTCONTAINSITEM", "OPERATORS_CONTAINS", function (e, t) {
        var s = e[0];
        if (s.isInput) return "dropdown" === s.shape;
      }),
      x("pen.setColor", "pen.setHue", function (e, t) {
        var s = e[e.length - 1];
        return (s.isInput && s.isColor) || s.isBlock;
      }),
      x("microbit.whenGesture", "gdxfor.whenGesture", function (e, t) {
        var s,
          i = l(e);
        try {
          for (i.s(); !(s = i.n()).done; ) {
            var r = s.value;
            if ("dropdown" === r.shape) {
              var n,
                o = r.value,
                a = l(t.microbitWhen);
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  if (L(n.value) === L(o)) return !0;
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            }
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        return !1;
      }),
      x("ev3.buttonPressed", "microbit.isButtonPressed", function (e, t) {
        var s,
          i = l(e);
        try {
          for (i.s(); !(s = i.n()).done; ) {
            var r = s.value;
            if ("dropdown" === r.shape)
              switch (L(r.value)) {
                case "1":
                case "2":
                case "3":
                case "4":
                  return !0;
              }
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        return !1;
      }),
      (function (e, t) {
        if (!E[e]) throw Error("Unknown ID: " + e);
        E[e].specialCase = t;
      })("CONTROL_STOP", function (e, s, i) {
        var r = s[s.length - 1];
        if (r.isInput) {
          var n = r.value;
          return i.osis.includes(n)
            ? t(t({}, E.CONTROL_STOP), {}, { shape: "stack" })
            : void 0;
        }
      });
    var P = (function () {
        function e(e, t) {
          (this.value = e),
            (this.cls = t || ""),
            (this.el = null),
            (this.height = 12),
            (this.metrics = null),
            (this.x = 0);
        }
        return (
          i(e, [
            {
              key: "isLabel",
              get: function () {
                return !0;
              },
            },
            {
              key: "stringify",
              value: function () {
                return "<" === this.value || ">" === this.value
                  ? this.value
                  : this.value.replace(/([<>[\](){}])/g, "\\$1");
              },
            },
          ]),
          e
        );
      })(),
      F = (function () {
        function e(t) {
          (this.name = t),
            (this.isArrow = "loopArrow" === t),
            D(e.icons[t], "no info for icon " + t);
        }
        return (
          i(
            e,
            [
              {
                key: "isIcon",
                get: function () {
                  return !0;
                },
              },
              {
                key: "stringify",
                value: function () {
                  return R["@" + this.name] || "";
                },
              },
            ],
            [
              {
                key: "icons",
                get: function () {
                  return {
                    greenFlag: !0,
                    stopSign: !0,
                    turnLeft: !0,
                    turnRight: !0,
                    loopArrow: !0,
                    addInput: !0,
                    delInput: !0,
                    list: !0,
                  };
                },
              },
            ],
          ),
          e
        );
      })(),
      z = (function () {
        function e(e, t, s) {
          (this.shape = e),
            (this.value = t),
            (this.menu = s || null),
            (this.isRound = "number" === e || "number-dropdown" === e),
            (this.isBoolean = "boolean" === e),
            (this.isStack = "stack" === e),
            (this.isInset =
              "boolean" === e || "stack" === e || "reporter" === e),
            (this.isColor = "color" === e),
            (this.hasArrow = "dropdown" === e || "number-dropdown" === e),
            (this.isDarker =
              "boolean" === e || "stack" === e || "dropdown" === e),
            (this.isSquare =
              "string" === e || "color" === e || "dropdown" === e),
            (this.hasLabel = !(this.isColor || this.isInset)),
            (this.label = this.hasLabel
              ? new P(t, "literal-" + this.shape)
              : null),
            (this.x = 0);
        }
        return (
          i(e, [
            {
              key: "isInput",
              get: function () {
                return !0;
              },
            },
            {
              key: "stringify",
              value: function () {
                if (this.isColor)
                  return D("#" === this.value[0]), "[" + this.value + "]";
                var e = (this.value ? this.value + "" : "")
                  .replace(/([\]\\])/g, "\\$1")
                  .replace(/ v$/, " \\v");
                return (
                  this.hasArrow && (e += " v"),
                  this.isRound
                    ? "(" + e + ")"
                    : this.isSquare
                      ? "[" + e + "]"
                      : this.isBoolean
                        ? "<>"
                        : this.isStack
                          ? "{}"
                          : e
                );
              },
            },
            {
              key: "translate",
              value: function (e) {
                if (this.hasArrow) {
                  var t = this.menu || this.value;
                  (this.value = t),
                    (this.label = new P(this.value, "literal-" + this.shape));
                }
              },
            },
          ]),
          e
        );
      })(),
      H = (function () {
        function e(e, s, i) {
          D(e),
            (this.info = t({}, e)),
            (this.children = s),
            (this.comment = i || null),
            (this.diff = null);
          var r = this.info.shape;
          (this.isHat = "hat" === r || "cat" === r || "define-hat" === r),
            (this.hasPuzzle =
              "stack" === r || "hat" === r || "cat" === r || "c-block" === r),
            (this.isFinal = /cap/.test(r)),
            (this.isCommand = "stack" === r || "cap" === r || /block/.test(r)),
            (this.isOutline = "outline" === r),
            (this.isReporter = "reporter" === r),
            (this.isBoolean = "boolean" === r),
            (this.isRing = "ring" === r),
            (this.hasScript = /block/.test(r)),
            (this.isElse = "celse" === r),
            (this.isEnd = "cend" === r);
        }
        return (
          i(e, [
            {
              key: "isBlock",
              get: function () {
                return !0;
              },
            },
            {
              key: "stringify",
              value: function (e) {
                var t = null,
                  s = !1,
                  i = this.children
                    .map(function (e) {
                      return (
                        e.isIcon && (s = !0),
                        t || e.isLabel || e.isIcon || (t = e),
                        e.isScript
                          ? "\n" +
                            (function (e) {
                              return e
                                .split("\n")
                                .map(function (e) {
                                  return "  " + e;
                                })
                                .join("\n");
                            })(e.stringify()) +
                            "\n"
                          : e.stringify().trim() + " "
                      );
                    })
                    .join("")
                    .trim(),
                  r = this.info.language;
                if (s && r && this.info.selector) {
                  var n = r.nativeAliases[this.info.id];
                  if (n && n.length) {
                    var o = n[0];
                    return (
                      v.test(o) && t && (o = o.replace(v, t.stringify())), o
                    );
                  }
                }
                var a = e || "";
                return (
                  (!1 === this.info.categoryIsDefault ||
                    ("custom-arg" === this.info.category &&
                      (this.isReporter || this.isBoolean)) ||
                    ("custom" === this.info.category &&
                      "stack" === this.info.shape)) &&
                    (a && (a += " "), (a += this.info.category)),
                  a && (i += " :: " + a),
                  this.hasScript
                    ? i + "\nend"
                    : "reporter" === this.info.shape
                      ? "(" + i + ")"
                      : "boolean" === this.info.shape
                        ? "<" + i + ">"
                        : i
                );
              },
            },
            {
              key: "translate",
              value: function (e, t) {
                var s = this;
                if (!e) throw Error("Missing language");
                var i = this.info.id;
                if (i)
                  if ("PROCEDURES_DEFINITION" !== i) {
                    var r = this.info.language.commands[i],
                      n = e.commands[i];
                    if (n) {
                      var o = O(n),
                        a = this.children.filter(function (e) {
                          return !e.isLabel && !e.isIcon;
                        });
                      t ||
                        a.forEach(function (t) {
                          return t.translate(e);
                        });
                      var c = O(r)
                          .parts.map(function (e) {
                            return w(e);
                          })
                          .filter(function (e) {
                            return e;
                          }),
                        h = 0,
                        p = c.map(function (e) {
                          return (h = Math.max(h, e)), a[e - 1];
                        }),
                        u = a.slice(h);
                      (this.children = o.parts
                        .map(function (e) {
                          if ((e = e.trim())) {
                            var t = w(e);
                            return t
                              ? p[t - 1]
                              : m.test(e)
                                ? new F(e.slice(1))
                                : new P(e);
                          }
                        })
                        .filter(function (e) {
                          return e;
                        })),
                        u.forEach(function (t, i) {
                          1 === i &&
                            "CONTROL_IF" === s.info.id &&
                            s.children.push(new P(e.commands.CONTROL_ELSE)),
                            s.children.push(t);
                        }),
                        (this.info.language = e),
                        (this.info.isRTL = V.includes(e.code)),
                        (this.info.categoryIsDefault = !0);
                    }
                  } else {
                    var f = this.children.find(function (e) {
                      return e.isOutline;
                    });
                    this.children = [];
                    var d,
                      g = l(e.definePrefix);
                    try {
                      for (g.s(); !(d = g.n()).done; ) {
                        var y = d.value;
                        this.children.push(new P(y));
                      }
                    } catch (e) {
                      g.e(e);
                    } finally {
                      g.f();
                    }
                    this.children.push(f);
                    var v,
                      b = l(e.defineSuffix);
                    try {
                      for (b.s(); !(v = b.n()).done; ) {
                        var k = v.value;
                        this.children.push(new P(k));
                      }
                    } catch (e) {
                      b.e(e);
                    } finally {
                      b.f();
                    }
                  }
              },
            },
          ]),
          e
        );
      })(),
      G = (function () {
        function e(e, t) {
          (this.label = new P(e, "comment-label")),
            (this.width = null),
            (this.hasBlock = t);
        }
        return (
          i(e, [
            {
              key: "isComment",
              get: function () {
                return !0;
              },
            },
            {
              key: "stringify",
              value: function () {
                return "// " + this.label.value;
              },
            },
          ]),
          e
        );
      })(),
      U = (function () {
        function e(e) {
          D(e),
            (this.child = e),
            e.isBlock
              ? ((this.shape = e.info.shape), (this.info = e.info))
              : (this.shape = "stack");
        }
        return (
          i(e, [
            {
              key: "isGlow",
              get: function () {
                return !0;
              },
            },
            {
              key: "stringify",
              value: function () {
                return this.child.isBlock
                  ? this.child.stringify("+")
                  : this.child
                      .stringify()
                      .split("\n")
                      .map(function (e) {
                        return "+ " + e;
                      })
                      .join("\n");
              },
            },
            {
              key: "translate",
              value: function (e) {
                this.child.translate(e);
              },
            },
          ]),
          e
        );
      })(),
      j = (function () {
        function e(e) {
          (this.blocks = e),
            (this.isEmpty = !e.length),
            (this.isFinal = !this.isEmpty && e[e.length - 1].isFinal);
        }
        return (
          i(e, [
            {
              key: "isScript",
              get: function () {
                return !0;
              },
            },
            {
              key: "stringify",
              value: function () {
                return this.blocks
                  .map(function (e) {
                    var t = e.stringify();
                    return e.comment && (t += " " + e.comment.stringify()), t;
                  })
                  .join("\n");
              },
            },
            {
              key: "translate",
              value: function (e) {
                this.blocks.forEach(function (t) {
                  return t.translate(e);
                });
              },
            },
          ]),
          e
        );
      })(),
      K = (function () {
        function e(e) {
          this.scripts = e;
        }
        return (
          i(e, [
            {
              key: "stringify",
              value: function () {
                return this.scripts
                  .map(function (e) {
                    return e.stringify();
                  })
                  .join("\n\n");
              },
            },
            {
              key: "translate",
              value: function (e) {
                this.scripts.forEach(function (t) {
                  return t.translate(e);
                });
              },
            },
          ]),
          e
        );
      })();
    function _(e, t, s) {
      var i = [];
      Array.isArray(t[t.length - 1]) && (i = t.pop());
      var r,
        n = [],
        o = l(t);
      try {
        for (o.s(); !(r = o.n()).done; ) {
          var a = r.value;
          a.isLabel
            ? n.push(a.value)
            : a.isIcon
              ? n.push("@" + a.name)
              : n.push("_");
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      var c,
        h,
        p = n.join(" "),
        u = (function (e, t, s, i) {
          var r,
            n = l(i);
          try {
            for (n.s(); !(r = n.n()).done; ) {
              var o = r.value;
              if (Object.prototype.hasOwnProperty.call(o.blocksByHash, e)) {
                var a,
                  c = o.blocksByHash[e],
                  h = l(c);
                try {
                  for (h.s(); !(a = h.n()).done; ) {
                    var p = a.value;
                    if (
                      ("reporter" !== t.shape ||
                        "reporter" === p.shape ||
                        "ring" === p.shape) &&
                      ("boolean" !== t.shape || "boolean" === p.shape) &&
                      (!(c.length > 1 && p.accepts) || p.accepts(t, s, o))
                    )
                      return (
                        p.specialCase && (p = p.specialCase(t, s, o) || p),
                        { type: p, lang: o }
                      );
                  }
                } catch (e) {
                  h.e(e);
                } finally {
                  h.f();
                }
              }
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        })((e.hash = L(p)), e, t, s);
      if (u)
        (c = u.lang),
          (h = u.type),
          (e.language = c),
          (e.isRTL = V.includes(c.code)),
          ("ring" === h.shape ? "reporter" === e.shape : "stack" === e.shape) &&
            (e.shape = h.shape),
          (e.category = h.category),
          (e.categoryIsDefault = !0),
          h.selector && (e.selector = h.selector),
          h.id && (e.id = h.id),
          (e.hasLoopArrow = h.hasLoopArrow),
          ". . ." === h.spec && (t = [new P(". . .")]);
      else {
        var f,
          y = l(s);
        try {
          for (y.s(); !(f = y.n()).done; ) {
            var v = f.value;
            if (W(t, v)) {
              (e.shape = "define-hat"), (e.category = "custom");
              var b = t
                  .splice(
                    v.definePrefix.length,
                    t.length - v.defineSuffix.length,
                  )
                  .map(function (e) {
                    if (e.isInput && e.isBoolean)
                      e = _(
                        {
                          shape: "boolean",
                          argument: "boolean",
                          category: "custom-arg",
                        },
                        [new P("")],
                        s,
                      );
                    else if (
                      !e.isInput ||
                      ("string" !== e.shape && "number" !== e.shape)
                    )
                      (e.isReporter || e.isBoolean) &&
                        e.info.categoryIsDefault &&
                        ((e.info.category = "custom-arg"),
                        (e.info.argument = e.isBoolean ? "boolean" : "number"));
                    else {
                      var t = e.value.split(/ +/g).map(function (e) {
                        return new P(e);
                      });
                      e = _(
                        {
                          shape: "reporter",
                          argument: "string" === e.shape ? "string" : "number",
                          category: "custom-arg",
                        },
                        t,
                        s,
                      );
                    }
                    return e;
                  }),
                k = new H(
                  {
                    shape: "outline",
                    category: "custom",
                    categoryIsDefault: !0,
                    hasLoopArrow: !1,
                  },
                  b,
                );
              t.splice(v.definePrefix.length, 0, k);
              break;
            }
          }
        } catch (e) {
          y.e(e);
        } finally {
          y.f();
        }
      }
      !(function (e, t) {
        var s,
          i = l(t);
        try {
          for (i.s(); !(s = i.n()).done; ) {
            var r = s.value;
            A.test(r)
              ? ((e.color = r), (e.category = ""), (e.categoryIsDefault = !1))
              : d.includes(r)
                ? ((e.category = r), (e.categoryIsDefault = !1))
                : g.includes(r)
                  ? (e.shape = r)
                  : "loop" === r
                    ? (e.hasLoopArrow = !0)
                    : ("+" !== r && "-" !== r) || (e.diff = r);
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
      })(e, i),
        e.hasLoopArrow && t.push(new F("loopArrow"));
      var w = new H(e, t);
      return (
        h && m.test(h.spec) && w.translate(c, !0),
        "+" === e.diff ? new U(w) : ((w.diff = e.diff), w)
      );
    }
    function W(e, t) {
      if (e.length < t.definePrefix.length) return !1;
      if (e.length < t.defineSuffix.length) return !1;
      for (var s = 0; s < t.definePrefix.length; s++) {
        var i = t.definePrefix[s],
          r = e[s];
        if (!r.isLabel || L(r.value) !== L(i)) return !1;
      }
      for (var n = 1; n <= t.defineSuffix.length; n++) {
        var o = t.defineSuffix[t.defineSuffix.length - n],
          a = e[e.length - n];
        if (!a.isLabel || L(a.value) !== L(o)) return !1;
      }
      return !0;
    }
    function Q(e, t) {
      var s,
        i = e[0],
        r = 0;
      function n() {
        i = e[++r];
      }
      function o() {
        return e[r + 1];
      }
      function a() {
        for (var t = r + 1; t < e.length; t++) if (" " !== e[t]) return e[t];
      }
      var c = [];
      function h(e, s) {
        var i = s.filter(function (e) {
          return !e.isLabel;
        }).length;
        return _(
          {
            shape: e,
            category: "reporter" !== e || i ? "obsolete" : "variables",
            categoryIsDefault: !0,
            hasLoopArrow: !1,
          },
          s,
          t,
        );
      }
      function p(e, s) {
        var i =
          (function (e, t) {
            var s,
              i = l(t);
            try {
              for (i.s(); !(s = i.n()).done; ) {
                var r = s.value;
                if (Object.prototype.hasOwnProperty.call(r.nativeDropdowns, e))
                  return r.nativeDropdowns[e];
              }
            } catch (e) {
              i.e(e);
            } finally {
              i.f();
            }
          })(s, t) || s;
        return new z(e, s, i);
      }
      function u(e) {
        for (var t, s = []; i && "\n" !== i; ) {
          if (
            ("<" === i || ">" === i) &&
            ">" === e &&
            1 === s.length &&
            !s[s.length - 1].isLabel
          ) {
            var r = a();
            if ("[" === r || "(" === r || "<" === r || "{" === r) {
              (t = null), s.push(new P(i)), n();
              continue;
            }
          }
          if (i === e) break;
          if ("/" === i && "/" === o() && !e) break;
          switch (i) {
            case "[":
              (t = null), s.push(f());
              break;
            case "(":
              (t = null), s.push(g());
              break;
            case "<":
              (t = null), s.push(V());
              break;
            case "{":
              (t = null), s.push(y());
              break;
            case " ":
            case "\t":
              n(), (t = null);
              break;
            case "◂":
            case "▸":
              s.push(v()), (t = null);
              break;
            case "@":
              n();
              for (var c = ""; i && /[a-zA-Z]/.test(i); ) (c += i), n();
              "cloud" === c
                ? s.push(new P("☁"))
                : s.push(
                    Object.prototype.hasOwnProperty.call(F.icons, c)
                      ? new F(c)
                      : new P("@" + c),
                  ),
                (t = null);
              break;
            case "\\":
              n();
            case ":":
              if (":" === i && ":" === o()) return s.push(b(e)), s;
            default:
              t || s.push((t = new P(""))), (t.value += i), n();
          }
        }
        return s;
      }
      function f() {
        n();
        for (var e = "", t = !1; i && "]" !== i && "\n" !== i; ) {
          if ("\\" === i) {
            if ((n(), "v" === i && (t = !0), !i)) break;
          } else t = !1;
          (e += i), n();
        }
        return (
          "]" === i && n(),
          A.test(e)
            ? new z("color", e)
            : !t && / v$/.test(e)
              ? p("dropdown", e.slice(0, e.length - 2))
              : new z("string", e)
        );
      }
      function d(e) {
        var t = u(e);
        if ((i && "\n" === i && ((s = !0), n()), 0 !== t.length)) {
          if (1 === t.length) {
            var r = t[0];
            if (r.isBlock && (r.isReporter || r.isBoolean || r.isRing))
              return r;
          }
          return h("stack", t);
        }
      }
      function g() {
        if ((n(), " " === i && (n(), "v" === i && ")" === o())))
          return n(), n(), new z("number-dropdown", "");
        var e = u(")");
        if ((i && ")" === i && n(), 0 === e.length)) return new z("number", "");
        if (1 === e.length && e[0].isLabel) {
          var t = e[0].value;
          if (/^[0-9e.-]*$/.test(t)) return new z("number", t);
          if (A.test(t)) return new z("color", t);
        }
        if (
          e.length > 1 &&
          e.every(function (e) {
            return e.isLabel;
          }) &&
          "v" === e[e.length - 1].value
        )
          return (
            e.pop(),
            p(
              "number-dropdown",
              e
                .map(function (e) {
                  return e.value;
                })
                .join(" "),
            )
          );
        var s = h("reporter", e);
        if (s.info && "ring" === s.info.shape) {
          var r = s.children[0];
          r && r.isInput && "number" === r.shape && "" === r.value
            ? (s.children[0] = new z("reporter"))
            : ((r && r.isScript && r.isEmpty) ||
                (r && r.isBlock && !r.children.length)) &&
              (s.children[0] = new z("stack"));
        }
        return s;
      }
      function V() {
        n();
        var e = u(">");
        return (
          i && ">" === i && n(),
          0 === e.length ? new z("boolean") : h("boolean", e)
        );
      }
      function y() {
        n(), (s = !1);
        var e = Z(function () {
            for (; i && "}" !== i; ) {
              var e = d("}");
              if (e) return e;
            }
          }),
          t = [];
        return (
          e.forEach(function (e) {
            t = t.concat(e.blocks);
          }),
          "}" === i && n(),
          s
            ? new j(t)
            : ((function (e, t) {
                if (!e) throw Error("Assertion failed! " + (t || ""));
              })(t.length <= 1),
              t.length ? t[0] : h("stack", []))
        );
      }
      function v() {
        var e = i;
        switch ((n(), e)) {
          case "▸":
            return new F("addInput");
          case "◂":
            return new F("delInput");
          default:
            return;
        }
      }
      function b(e) {
        n(), n();
        for (var t = [], s = ""; i && "\n" !== i && i !== e; ) {
          if (" " === i) s && (t.push(s), (s = ""));
          else {
            if ("/" === i && "/" === o()) break;
            s += i;
          }
          n();
        }
        return s && t.push(s), t;
      }
      function m() {
        var e;
        ("+" !== i && "-" !== i) || ((e = i), n());
        var t = d();
        if ("/" === i && "/" === o()) {
          var s = (function (e) {
            n(), n();
            for (var t = ""; i && "\n" !== i && i !== e; ) (t += i), n();
            return i && "\n" === i && n(), new G(t, !0);
          })();
          if (((s.hasBlock = t && t.children.length), !s.hasBlock)) return s;
          t.comment = s;
        }
        return t && (t.diff = e), t;
      }
      return (
        t.map(function (e) {
          c = c.concat(e.define);
        }),
        function () {
          if (i) return m() || "NL";
        }
      );
    }
    function Z(e) {
      var s = e();
      function i() {
        s = e();
      }
      function r() {
        var e = s;
        if ((i(), e.hasScript))
          for (;;) {
            var t = n();
            if ((e.children.push(new j(t)), !s || !s.isElse)) {
              s && s.isEnd && i();
              break;
            }
            var r,
              o = l(s.children);
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var a = r.value;
                e.children.push(a);
              }
            } catch (e) {
              o.e(e);
            } finally {
              o.f();
            }
            i();
          }
        return e;
      }
      function n() {
        for (var e = []; s; )
          if ("NL" !== s) {
            if (!s.isCommand) return e;
            var t = r(),
              n = "+" === t.diff;
            if ((n && (t.diff = null), n)) {
              var o = e[e.length - 1],
                a = [];
              o &&
                o.isGlow &&
                (e.pop(), (a = o.child.isScript ? o.child.blocks : [o.child])),
                a.push(t),
                e.push(new U(new j(a)));
            } else e.push(t);
          } else i();
        return e;
      }
      return (function () {
        for (; "NL" === s; ) i();
        for (var e = []; s; ) {
          for (var n = []; s && "NL" !== s; ) {
            var o = r(),
              a = "+" === o.diff;
            if (
              (a && (o.diff = null),
              (o.isElse || o.isEnd) &&
                (o = new H(
                  t(t({}, o.info), {}, { shape: "stack" }),
                  o.children,
                )),
              a)
            ) {
              var c = n[n.length - 1],
                l = [];
              c &&
                c.isGlow &&
                (n.pop(), (l = c.child.isScript ? c.child.blocks : [c.child])),
                l.push(o),
                n.push(new U(new j(l)));
            } else if (o.isHat) n.length && e.push(new j(n)), (n = [o]);
            else {
              if (o.isFinal) {
                n.push(o);
                break;
              }
              if (!o.isCommand) {
                n.length && e.push(new j(n)), e.push(new j([o])), (n = []);
                break;
              }
              n.push(o);
            }
          }
          for (n.length && e.push(new j(n)); "NL" === s; ) i();
        }
        return e;
      })();
    }
    function X(e, t) {
      e.isScript
        ? (e.blocks = e.blocks.map(function (e) {
            return X(e, t), t(e) || e;
          }))
        : e.isBlock
          ? (e.children = e.children.map(function (e) {
              return X(e, t), t(e) || e;
            }))
          : e.isGlow && X(e.child, t);
    }
    var Y,
      q,
      J = {
        "append:toList:": 1,
        "deleteLine:ofList:": 1,
        "insert:at:ofList:": 2,
        "setLine:ofList:to:": 1,
        "showList:": 0,
        "hideList:": 0,
      };
    function $(e, s) {
      if ((s = t({ inline: !1, languages: ["en"] }, s)).dialect)
        throw Error("Option 'dialect' no longer supported");
      (e = (e = e.replace(/&lt;/g, "<")).replace(/&gt;/g, ">")),
        s.inline && (e = e.replace(/\n/g, " "));
      var i = s.languages.map(function (e) {
          var t = C[e];
          if (!t) throw Error("Unknown language: '" + e + "'");
          return t;
        }),
        r = Z(Q(e, i));
      return (
        (function (e) {
          var t = Object.create(null),
            s = new Set();
          e.forEach(function (e) {
            var i = new Set();
            X(e, function (e) {
              if (e.isBlock)
                if ("define-hat" === e.info.shape) {
                  var r = e.children.find(function (e) {
                    return e.isOutline;
                  });
                  if (!r) return;
                  var n,
                    o = [],
                    a = [],
                    c = l(r.children);
                  try {
                    for (c.s(); !(n = c.n()).done; ) {
                      var h = n.value;
                      if (h.isLabel) a.push(h.value);
                      else if (h.isBlock) {
                        if (!h.info.argument) return;
                        a.push(
                          { number: "%n", string: "%s", boolean: "%b" }[
                            h.info.argument
                          ],
                        );
                        var p = B(h);
                        o.push(p), i.add(p);
                      }
                    }
                  } catch (e) {
                    c.e(e);
                  } finally {
                    c.f();
                  }
                  var u = a.join(" "),
                    f = S(u),
                    d = { spec: u, names: o };
                  t[f] || (t[f] = d),
                    (e.info.id = "PROCEDURES_DEFINITION"),
                    (e.info.selector = "procDef"),
                    (e.info.call = d.spec),
                    (e.info.names = d.names),
                    (e.info.category = "custom");
                } else if (
                  e.info.categoryIsDefault &&
                  (e.isReporter || e.isBoolean)
                ) {
                  var g = B(e);
                  i.has(g) &&
                    ((e.info.category = "custom-arg"),
                    (e.info.categoryIsDefault = !1),
                    (e.info.selector = "getParam"));
                } else if (
                  Object.prototype.hasOwnProperty.call(J, e.info.selector)
                ) {
                  var V = J[e.info.selector],
                    y = e.children.filter(function (e) {
                      return !e.isLabel;
                    }),
                    v = y[V];
                  v && v.isInput && s.add(v.value);
                }
            });
          }),
            e.forEach(function (e) {
              X(e, function (e) {
                if (
                  e.info &&
                  e.info.categoryIsDefault &&
                  "obsolete" === e.info.category
                ) {
                  var i = t[e.info.hash];
                  i &&
                    ((e.info.selector = "call"),
                    (e.info.call = i.spec),
                    (e.info.names = i.names),
                    (e.info.category = "custom"));
                } else {
                  var r, n;
                  e.isReporter &&
                    "variables" === e.info.category &&
                    e.info.categoryIsDefault &&
                    ((e.info.selector = "readVariable"),
                    (r = B(e)),
                    (n = e.info)),
                    r &&
                      s.has(r) &&
                      ((n.category = "list"),
                      (n.categoryIsDefault = !1),
                      (n.selector = "contentsOfList:"));
                }
              });
            });
        })(r),
        new K(r)
      );
    }
    function ee(e, t) {
      if (!e) throw Error("Assertion failed! " + (t || ""));
    }
    var te = { textContent: !0 },
      se = (function () {
        function e() {}
        return (
          i(e, null, [
            {
              key: "init",
              value: function (t) {
                Y = t.document;
                var s = t.DOMParser;
                (q = new s().parseFromString("<xml></xml>", "application/xml")),
                  (e.XMLSerializer = t.XMLSerializer);
              },
            },
            {
              key: "makeCanvas",
              value: function () {
                return Y.createElement("canvas");
              },
            },
            {
              key: "cdata",
              value: function (e) {
                return q.createCDATASection(e);
              },
            },
            {
              key: "el",
              value: function (t, s) {
                var i = Y.createElementNS("http://www.w3.org/2000/svg", t);
                return e.setProps(i, s);
              },
            },
            {
              key: "setProps",
              value: function (e, t) {
                for (var s in t) {
                  var i = t[s] + "";
                  te[s]
                    ? (e[s] = i)
                    : null != t[s] &&
                      Object.prototype.hasOwnProperty.call(t, s) &&
                      e.setAttributeNS(null, s, i);
                }
                return e;
              },
            },
            {
              key: "withChildren",
              value: function (e, t) {
                var s,
                  i = l(t);
                try {
                  for (i.s(); !(s = i.n()).done; ) {
                    var r = s.value;
                    e.appendChild(r);
                  }
                } catch (e) {
                  i.e(e);
                } finally {
                  i.f();
                }
                return e;
              },
            },
            {
              key: "group",
              value: function (t) {
                return e.withChildren(e.el("g"), t);
              },
            },
            {
              key: "newSVG",
              value: function (t, s, i) {
                return e.el("svg", {
                  version: "1.1",
                  width: t * i,
                  height: s * i,
                  viewBox: "0 0 " + t + " " + s,
                });
              },
            },
            {
              key: "polygon",
              value: function (s) {
                return e.el(
                  "polygon",
                  t(t({}, s), {}, { points: s.points.join(" ") }),
                );
              },
            },
            {
              key: "path",
              value: function (s) {
                return e.el(
                  "path",
                  t(t({}, s), {}, { path: null, d: s.path.join(" ") }),
                );
              },
            },
            {
              key: "text",
              value: function (s, i, r, n) {
                var o = e.el(
                  "text",
                  t(t({}, n), {}, { x: s, y: i, textContent: r }),
                );
                return o;
              },
            },
            {
              key: "symbol",
              value: function (t) {
                return e.el("use", { href: t });
              },
            },
            {
              key: "move",
              value: function (t, s, i) {
                return (
                  e.setProps(i, {
                    transform: "translate(" + t + " " + s + ")",
                  }),
                  i
                );
              },
            },
            {
              key: "translatePath",
              value: function (e, t, s) {
                for (
                  var i = !0, r = s.split(/\s+/), n = [], o = 0;
                  o < r.length;
                  o++
                ) {
                  var a = r[o];
                  if ("A" !== a)
                    /[A-Za-z]/.test(a)
                      ? ee(i, "translatePath: invalid argument")
                      : ((a = +a), (a += i ? e : t), (i = !i)),
                      n.push(a);
                  else {
                    var c = o + 5;
                    for (n.push("A"); o < c; ) n.push(r[++o]);
                  }
                }
                return n.join(" ");
              },
            },
            {
              key: "rect",
              value: function (s, i, r) {
                return e.el(
                  "rect",
                  t(t({}, r), {}, { x: 0, y: 0, width: s, height: i }),
                );
              },
            },
            {
              key: "ellipse",
              value: function (s, i, r) {
                return e.el(
                  "ellipse",
                  t(
                    t({}, r),
                    {},
                    { cx: s / 2, cy: i / 2, rx: s / 2, ry: i / 2 },
                  ),
                );
              },
            },
            {
              key: "arc",
              value: function (e, t, s, i, r, n) {
                return (
                  "L " +
                  e +
                  " " +
                  t +
                  " A " +
                  r +
                  " " +
                  n +
                  " 0 0 1 " +
                  s +
                  " " +
                  i
                );
              },
            },
            {
              key: "arcw",
              value: function (e, t, s, i, r, n) {
                return (
                  "L " +
                  e +
                  " " +
                  t +
                  " A " +
                  r +
                  " " +
                  n +
                  " 0 0 0 " +
                  s +
                  " " +
                  i
                );
              },
            },
            {
              key: "roundedPath",
              value: function (t, s) {
                var i = s / 2;
                return [
                  "M",
                  i,
                  0,
                  e.arc(t - i, 0, t - i, s, i, i),
                  e.arc(i, s, i, 0, i, i),
                  "Z",
                ];
              },
            },
            {
              key: "roundedRect",
              value: function (s, i, r) {
                return e.path(t(t({}, r), {}, { path: e.roundedPath(s, i) }));
              },
            },
            {
              key: "pointedPath",
              value: function (e, t) {
                var s = t / 2;
                return [
                  "M",
                  s,
                  0,
                  "L",
                  e - s,
                  0,
                  e,
                  s,
                  "L",
                  e,
                  s,
                  e - s,
                  t,
                  "L",
                  s,
                  t,
                  0,
                  s,
                  "L",
                  0,
                  s,
                  s,
                  0,
                  "Z",
                ];
              },
            },
            {
              key: "pointedRect",
              value: function (s, i, r) {
                return e.path(t(t({}, r), {}, { path: e.pointedPath(s, i) }));
              },
            },
            {
              key: "getTop",
              value: function (e) {
                return (
                  "M 0 3\n      L 3 0\n      L 13 0\n      L 16 3\n      L 24 3\n      L 27 0\n      L " +
                  (e - 3) +
                  " 0\n      L " +
                  e +
                  " 3"
                );
              },
            },
            {
              key: "getRingTop",
              value: function (e) {
                return (
                  "M 0 3\n      L 3 0\n      L 7 0\n      L 10 3\n      L 16 3\n      L 19 0\n      L " +
                  (e - 3) +
                  " 0\n      L " +
                  e +
                  " 3"
                );
              },
            },
            {
              key: "getRightAndBottom",
              value: function (e, t, s, i) {
                void 0 === i && (i = 0);
                var r = ["L", e, t - 3, "L", e - 3, t];
                return (
                  s &&
                    (r = r.concat([
                      "L",
                      i + 27,
                      t,
                      "L",
                      i + 24,
                      t + 3,
                      "L",
                      i + 16,
                      t + 3,
                      "L",
                      i + 13,
                      t,
                    ])),
                  (r =
                    i > 0
                      ? r.concat(["L", i + 2, t, "L", i, t + 2])
                      : r.concat(["L", i + 3, t, "L", 0, t - 3])).join(" ")
                );
              },
            },
            {
              key: "getArm",
              value: function (e, t) {
                return (
                  "L 15 " +
                  (t - 2) +
                  "\n      L 17 " +
                  t +
                  "\n      L " +
                  (e - 3) +
                  " " +
                  t +
                  "\n      L " +
                  e +
                  " " +
                  (t + 3)
                );
              },
            },
            {
              key: "stackRect",
              value: function (s, i, r) {
                return e.path(
                  t(
                    t({}, r),
                    {},
                    {
                      path: [
                        e.getTop(s),
                        e.getRightAndBottom(s, i, !0, 0),
                        "Z",
                      ],
                    },
                  ),
                );
              },
            },
            {
              key: "capPath",
              value: function (t, s) {
                return [e.getTop(t), e.getRightAndBottom(t, s, !1, 0), "Z"];
              },
            },
            {
              key: "capRect",
              value: function (s, i, r) {
                return e.path(t(t({}, r), {}, { path: e.capPath(s, i) }));
              },
            },
            {
              key: "hatRect",
              value: function (s, i, r) {
                return e.path(
                  t(
                    t({}, r),
                    {},
                    {
                      path: [
                        "M",
                        0,
                        12,
                        e.arc(0, 12, 80, 10, 80, 80),
                        "L",
                        s - 3,
                        10,
                        "L",
                        s,
                        13,
                        e.getRightAndBottom(s, i, !0),
                        "Z",
                      ],
                    },
                  ),
                );
              },
            },
            {
              key: "curve",
              value: function (e, t, s, i, r) {
                var n = (t + i) / 2;
                return (
                  Math.round((e + s) / 2 + (r = r || 0.42) * (i - t)) +
                  " " +
                  Math.round(n - r * (s - e)) +
                  " " +
                  s +
                  " " +
                  i
                );
              },
            },
            {
              key: "procHatBase",
              value: function (s, i, r, n) {
                return (
                  (r = Math.min(0.2, 35 / s)),
                  e.path(
                    t(
                      t({}, n),
                      {},
                      {
                        path: [
                          "M",
                          0,
                          15,
                          "Q",
                          e.curve(0, 15, s, 15, r),
                          e.getRightAndBottom(s, i, !0),
                          "M",
                          -1,
                          13,
                          "Q",
                          e.curve(-1, 13, s + 1, 13, r),
                          "Q",
                          e.curve(s + 1, 13, s, 16, 0.6),
                          "Q",
                          e.curve(s, 16, 0, 16, -r),
                          "Q",
                          e.curve(0, 16, -1, 13, 0.6),
                          "Z",
                        ],
                      },
                    ),
                  )
                );
              },
            },
            {
              key: "procHatCap",
              value: function (t, s, i) {
                return e.path({
                  path: [
                    "M",
                    -1,
                    13,
                    "Q",
                    e.curve(-1, 13, t + 1, 13, i),
                    "Q",
                    e.curve(t + 1, 13, t, 16, 0.6),
                    "Q",
                    e.curve(t, 16, 0, 16, -i),
                    "Q",
                    e.curve(0, 16, -1, 13, 0.6),
                    "Z",
                  ],
                  class: "sb-define-hat-cap",
                });
              },
            },
            {
              key: "procHatRect",
              value: function (t, s, i) {
                var r = s - 52,
                  n = Math.min(0.2, 35 / t);
                return e.move(
                  0,
                  r,
                  e.group([e.procHatBase(t, 52, n, i), e.procHatCap(t, 52, n)]),
                );
              },
            },
            {
              key: "mouthRect",
              value: function (s, i, r, n, o) {
                for (
                  var a = n[0].height,
                    c = [e.getTop(s), e.getRightAndBottom(s, a, !0, 15)],
                    l = 1;
                  l < n.length;
                  l += 2
                ) {
                  var h = l + 2 === n.length;
                  (a += n[l].height - 3), c.push(e.getArm(s, a));
                  var p = !(h && r),
                    u = h ? 0 : 15;
                  (a += n[l + 1].height + 3),
                    c.push(e.getRightAndBottom(s, a, p, u));
                }
                return e.path(t(t({}, o), {}, { path: c }));
              },
            },
            {
              key: "ringRect",
              value: function (s, i, r, n, o, a, c) {
                var l =
                  "reporter" === a
                    ? e.roundedPath
                    : "boolean" === a
                      ? e.pointedPath
                      : e.capPath;
                return e.path(
                  t(
                    t({}, c),
                    {},
                    {
                      path: [
                        "M",
                        8,
                        0,
                        e.arcw(8, 0, 0, 8, 8, 8),
                        e.arcw(0, i - 8, 8, i, 8, 8),
                        e.arcw(s - 8, i, s, i - 8, 8, 8),
                        e.arcw(s, 8, s - 8, 0, 8, 8),
                        "Z",
                        e.translatePath(4, r || 4, l(n, o).join(" ")),
                      ],
                      "fill-rule": "even-odd",
                    },
                  ),
                );
              },
            },
            {
              key: "commentRect",
              value: function (s, i, r) {
                return e.path(
                  t(
                    t({}, r),
                    {},
                    {
                      class: "sb-comment",
                      path: [
                        "M",
                        6,
                        0,
                        e.arc(s - 6, 0, s, 6, 6, 6),
                        e.arc(s, i - 6, s - 6, i, 6, 6),
                        e.arc(6, i, 0, i - 6, 6, 6),
                        e.arc(0, 6, 6, 0, 6, 6),
                        "Z",
                      ],
                    },
                  ),
                );
              },
            },
            {
              key: "commentLine",
              value: function (s, i) {
                return e.move(
                  -s,
                  9,
                  e.rect(s, 2, t(t({}, i), {}, { class: "sb-comment-line" })),
                );
              },
            },
            {
              key: "strikethroughLine",
              value: function (s, i) {
                return e.path(
                  t(
                    t({}, i),
                    {},
                    {
                      path: ["M", 0, 0, "L", s, 0],
                      class: "sb-diff sb-diff-del",
                    },
                  ),
                );
              },
            },
          ]),
          e
        );
      })(),
      ie = (function () {
        function e(e, s) {
          (this.el = se.el(
            "filter",
            t(
              t({}, s),
              {},
              {
                id: e,
                x0: "-50%",
                y0: "-50%",
                width: "200%",
                height: "200%",
              },
            ),
          )),
            (this.highestId = 0);
        }
        return (
          i(e, [
            {
              key: "fe",
              value: function (e, s, i) {
                var r =
                  e.toLowerCase().replace(/gaussian|osite/, "") +
                  "-" +
                  ++this.highestId;
                return (
                  this.el.appendChild(
                    se.withChildren(
                      se.el("fe" + e, t(t({}, s), {}, { result: r })),
                      i || [],
                    ),
                  ),
                  r
                );
              },
            },
            {
              key: "comp",
              value: function (e, s, i, r) {
                return this.fe(
                  "Composite",
                  t(t({}, r), {}, { operator: e, in: s, in2: i }),
                );
              },
            },
            {
              key: "subtract",
              value: function (e, t) {
                return this.comp("arithmetic", e, t, { k2: 1, k3: -1 });
              },
            },
            {
              key: "offset",
              value: function (e, t, s) {
                return this.fe("Offset", { in: s, dx: e, dy: t });
              },
            },
            {
              key: "flood",
              value: function (e, t, s) {
                return this.fe("Flood", {
                  in: s,
                  "flood-color": e,
                  "flood-opacity": t,
                });
              },
            },
            {
              key: "blur",
              value: function (e, t) {
                return this.fe("GaussianBlur", {
                  in: t,
                  stdDeviation: e + " " + e,
                });
              },
            },
            {
              key: "colorMatrix",
              value: function (e, t) {
                return this.fe("ColorMatrix", {
                  in: e,
                  type: "matrix",
                  values: t.join(" "),
                });
              },
            },
            {
              key: "merge",
              value: function (e) {
                this.fe(
                  "Merge",
                  {},
                  e.map(function (e) {
                    return se.el("feMergeNode", { in: e });
                  }),
                );
              },
            },
          ]),
          e
        );
      })(),
      re = (function () {
        function e() {}
        return (
          i(e, null, [
            {
              key: "cssContent",
              get: function () {
                return ".sb-label{font-family:Lucida Grande,Verdana,Arial,DejaVu Sans,sans-serif;font-weight:700;fill:#fff;font-size:10px;word-spacing:1px}.sb-obsolete{fill:#d42828}.sb-motion{fill:#4a6cd4}.sb-looks{fill:#8a55d7}.sb-sound{fill:#bb42c3}.sb-pen{fill:#0e9a6c}.sb-events{fill:#c88330}.sb-control{fill:#e1a91a}.sb-sensing{fill:#2ca5e2}.sb-operators{fill:#5cb712}.sb-variables{fill:#ee7d16}.sb-list{fill:#cc5b22}.sb-custom{fill:#632d99}.sb-custom-arg{fill:#5947b1}.sb-extension{fill:#4b4a60}.sb-grey{fill:#969696}.sb-bevel{filter:url(#bevelFilter)}.sb-input{filter:url(#inputBevelFilter)}.sb-input-number,.sb-input-number-dropdown,.sb-input-string{fill:#fff}.sb-literal-dropdown,.sb-literal-number,.sb-literal-number-dropdown,.sb-literal-string{font-weight:400;font-size:9px;word-spacing:0}.sb-literal-number,.sb-literal-number-dropdown,.sb-literal-string{fill:#000}.sb-darker{filter:url(#inputDarkFilter)}.sb-outline{stroke:#fff;stroke-opacity:.2;stroke-width:2;fill:none}.sb-comment,.sb-define-hat-cap{stroke:#632d99;stroke-width:1;fill:#8e2ec2}.sb-comment{fill:#ffffa5;stroke:#d0d1d2}.sb-comment-line{fill:#ffff80}.sb-comment-label{font-family:Helvetica,Arial,DejaVu Sans,sans-serif;font-weight:700;fill:#5c5d5f;word-spacing:0;font-size:12px}.sb-diff{fill:none;stroke:#000}.sb-diff-ins{stroke-width:2px}.sb-diff-del{stroke-width:3px}";
              },
            },
            {
              key: "makeIcons",
              value: function () {
                return [
                  se.el("path", {
                    d: "M1.504 21L0 19.493 4.567 0h1.948l-.5 2.418s1.002-.502 3.006 0c2.006.503 3.008 2.01 6.517 2.01 3.508 0 4.463-.545 4.463-.545l-.823 9.892s-2.137 1.005-5.144.696c-3.007-.307-3.007-2.007-6.014-2.51-3.008-.502-4.512.503-4.512.503L1.504 21z",
                    fill: greenFlagColor,
                    id: "greenFlag",
                  }),
                  se.el("polygon", {
                    points:
                      "6.3,0.4725 12.516,0.4725 18.585,6.3 18.585,12.495 12.495,18.585 6.3,18.585 0.483,12.495 0.483,6.3  ",
                    fill: "#bb0010",
                    id: "stopSign",
                  }),
                  se.el("path", {
                    d: "M6.724 0C3.01 0 0 2.91 0 6.5c0 2.316 1.253 4.35 3.14 5.5H5.17v-1.256C3.364 10.126 2.07 8.46 2.07 6.5 2.07 4.015 4.152 2 6.723 2c1.14 0 2.184.396 2.993 1.053L8.31 4.13c-.45.344-.398.826.11 1.08L15 8.5 13.858.992c-.083-.547-.514-.714-.963-.37l-1.532 1.172A6.825 6.825 0 0 0 6.723 0z",
                    fill: "#fff",
                    id: "turnRight",
                  }),
                  se.el("path", {
                    d: "M3.637 1.794A6.825 6.825 0 0 1 8.277 0C11.99 0 15 2.91 15 6.5c0 2.316-1.253 4.35-3.14 5.5H9.83v-1.256c1.808-.618 3.103-2.285 3.103-4.244 0-2.485-2.083-4.5-4.654-4.5-1.14 0-2.184.396-2.993 1.053L6.69 4.13c.45.344.398.826-.11 1.08L0 8.5 1.142.992c.083-.547.514-.714.963-.37l1.532 1.172z",
                    fill: "#fff",
                    id: "turnLeft",
                  }),
                  se.el("path", {
                    d: "M0 0L4 4L0 8Z",
                    fill: "#111",
                    id: "addInput",
                  }),
                  se.el("path", {
                    d: "M4 0L4 8L0 4Z",
                    fill: "#111",
                    id: "delInput",
                  }),
                  se.setProps(
                    se.group([
                      se.el("path", {
                        d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",
                        fill: "#000",
                        opacity: "0.3",
                      }),
                      se.move(
                        -1,
                        -1,
                        se.el("path", {
                          d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",
                          fill: "#fff",
                          opacity: "0.9",
                        }),
                      ),
                    ]),
                    { id: "loopArrow" },
                  ),
                  se.setProps(
                    se.group([
                      se.el("rect", {
                        x: "0",
                        y: "0",
                        width: "12",
                        height: "14",
                        fill: "#000",
                        opacity: "0.25",
                      }),
                      se.el("rect", {
                        x: "1",
                        y: "1",
                        width: "1",
                        height: "13",
                        fill: "#fff",
                      }),
                      se.el("rect", {
                        x: "11",
                        y: "1",
                        width: "1",
                        height: "13",
                        fill: "#fff",
                      }),
                      se.el("rect", {
                        x: "2",
                        y: "1",
                        width: "9",
                        height: "1",
                        fill: "#fff",
                      }),
                      se.el("rect", {
                        x: "2",
                        y: "5",
                        width: "9",
                        height: "1",
                        fill: "#fff",
                      }),
                      se.el("rect", {
                        x: "2",
                        y: "9",
                        width: "9",
                        height: "1",
                        fill: "#fff",
                      }),
                      se.el("rect", {
                        x: "2",
                        y: "13",
                        width: "9",
                        height: "1",
                        fill: "#fff",
                      }),
                      se.el("rect", {
                        x: "2",
                        y: "2",
                        width: "9",
                        height: "2",
                        fill: "#ea8d1c",
                      }),
                      se.el("rect", {
                        x: "2",
                        y: "6",
                        width: "9",
                        height: "2",
                        fill: "#ea8d1c",
                      }),
                      se.el("rect", {
                        x: "2",
                        y: "10",
                        width: "9",
                        height: "2",
                        fill: "#ea8d1c",
                      }),
                      se.el("rect", {
                        x: "11",
                        y: "0",
                        width: "1",
                        height: "1",
                        fill: "#ea8d1c",
                      }),
                      se.el("rect", {
                        x: "0",
                        y: "13",
                        width: "1",
                        height: "1",
                        fill: "#ea8d1c",
                      }),
                    ]),
                    { id: "list" },
                  ),
                ];
              },
            },
            {
              key: "makeStyle",
              value: function () {
                var t = se.el("style");
                return t.appendChild(se.cdata(e.cssContent)), t;
              },
            },
            {
              key: "bevelFilter",
              value: function (e, t) {
                var s = new ie(e),
                  i = "SourceAlpha",
                  r = t ? -1 : 1,
                  n = s.blur(1, i);
                return (
                  s.merge([
                    "SourceGraphic",
                    s.comp(
                      "in",
                      s.flood("#fff", 0.15),
                      s.subtract(i, s.offset(+r, +r, n)),
                    ),
                    s.comp(
                      "in",
                      s.flood("#000", 0.7),
                      s.subtract(i, s.offset(-r, -r, n)),
                    ),
                  ]),
                  s.el
                );
              },
            },
            {
              key: "darkFilter",
              value: function (e) {
                var t = new ie(e);
                return (
                  t.merge([
                    "SourceGraphic",
                    t.comp("in", t.flood("#000", 0.2), "SourceAlpha"),
                  ]),
                  t.el
                );
              },
            },
            {
              key: "darkRect",
              value: function (e, t, s, i) {
                return se.setProps(
                  se.group([
                    se.setProps(i, { class: "sb-" + s + " sb-darker" }),
                  ]),
                  { width: e, height: t },
                );
              },
            },
            {
              key: "defaultFontFamily",
              get: function () {
                return "Lucida Grande, Verdana, Arial, DejaVu Sans, sans-serif";
              },
            },
          ]),
          e
        );
      })(),
      ne = re.defaultFontFamily,
      oe = re.makeStyle,
      ae = re.makeIcons,
      ce = re.darkRect,
      le = re.bevelFilter,
      he = re.darkFilter,
      pe = (function () {
        function e(e) {
          n(this, e),
            (this.el = null),
            (this.height = 12),
            (this.metrics = null),
            (this.x = 0);
        }
        return (
          i(
            e,
            [
              {
                key: "isLabel",
                get: function () {
                  return !0;
                },
              },
              {
                key: "draw",
                value: function () {
                  return this.el;
                },
              },
              {
                key: "width",
                get: function () {
                  return this.metrics.width;
                },
              },
              {
                key: "measure",
                value: function () {
                  var t = this.value,
                    s = "sb-" + this.cls;
                  this.el = se.text(0, 10, t, { class: "sb-label " + s });
                  var i = e.metricsCache[s];
                  if (
                    (i || (i = e.metricsCache[s] = Object.create(null)),
                    Object.hasOwnProperty.call(i, t))
                  )
                    this.metrics = i[t];
                  else {
                    var r = /comment-label/.test(this.cls)
                      ? "bold 12px Helvetica, Arial, DejaVu Sans, sans-serif"
                      : /literal/.test(this.cls)
                        ? "normal 9px " + ne
                        : "bold 10px " + ne;
                    this.metrics = i[t] = e.measure(t, r);
                  }
                },
              },
            ],
            [
              {
                key: "measure",
                value: function (t, s) {
                  var i = e.measuring;
                  return (
                    (i.font = s), { width: (i.measureText(t).width + 0.5) | 0 }
                  );
                },
              },
            ],
          ),
          e
        );
      })();
    (pe.metricsCache = {}), (pe.toMeasure = []);
    var ue = (function () {
        function e(t) {
          n(this, t);
          var s = e.icons[this.name];
          if (!s) throw Error("no info for icon: " + this.name);
          n(this, s);
        }
        return (
          i(
            e,
            [
              {
                key: "isIcon",
                get: function () {
                  return !0;
                },
              },
              {
                key: "draw",
                value: function () {
                  return se.symbol("#" + this.name, {
                    width: this.width,
                    height: this.height,
                  });
                },
              },
            ],
            [
              {
                key: "icons",
                get: function () {
                  return {
                    greenFlag: { width: 20, height: 21, dy: -2 },
                    stopSign: { width: 20, height: 20 },
                    turnLeft: { width: 15, height: 12, dy: 1 },
                    turnRight: { width: 15, height: 12, dy: 1 },
                    loopArrow: { width: 14, height: 11 },
                    addInput: { width: 4, height: 8 },
                    delInput: { width: 4, height: 8 },
                    list: { width: 12, height: 14 },
                  };
                },
              },
            ],
          ),
          e
        );
      })(),
      fe = (function () {
        function e(e) {
          n(this, e), e.label && (this.label = be(e.label)), (this.x = 0);
        }
        return (
          i(
            e,
            [
              {
                key: "measure",
                value: function () {
                  this.hasLabel && this.label.measure();
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var s, i;
                  this.hasLabel
                    ? ((i = this.label.draw()),
                      (s = Math.max(
                        14,
                        this.label.width +
                          ("string" === this.shape ||
                          "number-dropdown" === this.shape
                            ? 6
                            : 9),
                      )))
                    : (s = this.isInset ? 30 : this.isColor ? 13 : null),
                    this.hasArrow && (s += 10),
                    (this.width = s);
                  var r = (this.height =
                      this.isRound || this.isColor ? 13 : 14),
                    n = e.shapes[this.shape](s, r);
                  this.isColor
                    ? se.setProps(n, { fill: this.value })
                    : this.isDarker &&
                      ((n = ce(s, r, t.info.category, n)),
                      t.info.color && se.setProps(n, { fill: t.info.color }));
                  var o = se.group([
                    se.setProps(n, {
                      class: "sb-input sb-input-" + this.shape,
                    }),
                  ]);
                  if (this.hasLabel) {
                    var a = this.isRound ? 5 : 4;
                    o.appendChild(se.move(a, 0, i));
                  }
                  if (this.hasArrow) {
                    var c = "dropdown" === this.shape ? 5 : 4;
                    o.appendChild(
                      se.move(
                        s - 10,
                        c,
                        se.polygon({
                          points: [7, 0, 3.5, 4, 0, 0],
                          fill: "#000",
                          opacity: "0.6",
                        }),
                      ),
                    );
                  }
                  return o;
                },
              },
            ],
            [
              {
                key: "shapes",
                get: function () {
                  return {
                    string: se.rect,
                    number: se.roundedRect,
                    "number-dropdown": se.roundedRect,
                    color: se.rect,
                    dropdown: se.rect,
                    boolean: se.pointedRect,
                    stack: se.stackRect,
                    reporter: se.roundedRect,
                  };
                },
              },
            ],
          ),
          e
        );
      })(),
      de = (function () {
        function e(e) {
          n(this, e),
            (this.children = e.children.map(be)),
            (this.comment = this.comment ? be(this.comment) : null),
            Object.prototype.hasOwnProperty.call(f, this.info.category) &&
              (this.info.category = f[this.info.category]),
            Object.prototype.hasOwnProperty.call(p, this.info.category)
              ? (this.info.category = p[this.info.category])
              : Object.prototype.hasOwnProperty.call(u, this.info.category) &&
                (this.info.category = "extension"),
            (this.x = 0),
            (this.width = null),
            (this.height = null),
            (this.firstLine = null),
            (this.innerWidth = null);
        }
        return (
          i(
            e,
            [
              {
                key: "isBlock",
                get: function () {
                  return !0;
                },
              },
              {
                key: "measure",
                value: function () {
                  var e,
                    t = l(this.children);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var s = e.value;
                      s.measure && s.measure();
                    }
                  } catch (e) {
                    t.e(e);
                  } finally {
                    t.f();
                  }
                  this.comment && this.comment.measure();
                },
              },
              {
                key: "drawSelf",
                value: function (t, s, i) {
                  if (i.length > 1)
                    return se.mouthRect(t, s, this.isFinal, i, {
                      class: "sb-" + this.info.category + " sb-bevel",
                    });
                  if ("outline" === this.info.shape)
                    return se.setProps(se.stackRect(t, s), {
                      class: "sb-outline",
                    });
                  if (this.isRing) {
                    var r = this.children[0];
                    if (r && (r.isStack || r.isBlock || r.isScript)) {
                      var n = r.isScript
                        ? "stack"
                        : r.isStack
                          ? r.shape
                          : r.info.shape;
                      return se.ringRect(t, s, r.y, r.width, r.height, n, {
                        class: "sb-" + this.info.category + " sb-bevel",
                      });
                    }
                  }
                  var o = e.shapes[this.info.shape];
                  if (!o) throw Error("no shape func: " + this.info.shape);
                  return o(t, s, {
                    class: "sb-" + this.info.category + " sb-bevel",
                  });
                },
              },
              {
                key: "minDistance",
                value: function (e) {
                  return this.isBoolean
                    ? e.isReporter
                      ? (4 + e.height / 4) | 0
                      : e.isLabel
                        ? (5 + e.height / 2) | 0
                        : e.isBoolean || "boolean" === e.shape
                          ? 5
                          : (2 + e.height / 2) | 0
                    : this.isReporter
                      ? (e.isInput && e.isRound) ||
                        ((e.isReporter || e.isBoolean) && !e.hasScript)
                        ? 0
                        : e.isLabel
                          ? (2 + e.height / 2) | 0
                          : (e.height / 2 - 2) | 0
                      : 0;
                },
              },
              {
                key: "draw",
                value: function () {
                  var t = "define-hat" === this.info.shape,
                    s = this.children,
                    i = e.padding[this.info.shape] || e.padding.null,
                    r = i[0],
                    n = i[1],
                    o = i[2],
                    a = 0,
                    c = function (e) {
                      (this.y = e),
                        (this.width = 0),
                        (this.height = e ? 13 : 16),
                        (this.children = []);
                    },
                    h = 0,
                    p = 0,
                    u = new c(a),
                    f = function (e) {
                      0 === y.length
                        ? (u.height += r + o)
                        : ((u.height += e ? 0 : 2), (u.y -= 1)),
                        (a += u.height),
                        y.push(u);
                    };
                  if (this.info.isRTL) {
                    var d,
                      g = 0,
                      V = function () {
                        s = s
                          .slice(0, g)
                          .concat(s.slice(g, d).reverse())
                          .concat(s.slice(d));
                      };
                    for (d = 0; d < s.length; d++)
                      s[d].isScript && (V(), (g = d + 1));
                    g < d && V();
                  }
                  for (var y = [], v = 0; v < s.length; v++) {
                    var b = s[v];
                    if (((b.el = b.draw(this)), b.isScript && this.isCommand))
                      (this.hasScript = !0),
                        f(),
                        (b.y = a),
                        y.push(b),
                        (p = Math.max(p, Math.max(1, b.width))),
                        (b.height = Math.max(12, b.height) + 3),
                        (a += b.height),
                        (u = new c(a));
                    else if (b.isArrow) u.children.push(b);
                    else {
                      var m = v > 0 ? 30 : 0,
                        k = this.isCommand ? 0 : this.minDistance(b),
                        A = this.isCommand
                          ? b.isBlock || b.isInput
                            ? m
                            : 0
                          : k;
                      A && !y.length && u.width < A - n && (u.width = A - n),
                        (b.x = u.width),
                        (u.width += b.width),
                        (h = Math.max(h, u.width + Math.max(0, k - n))),
                        (u.width += 4),
                        b.isLabel || (u.height = Math.max(u.height, b.height)),
                        u.children.push(b);
                    }
                  }
                  if (
                    (f(!0),
                    (h = Math.max(
                      h + 2 * n,
                      this.isHat || this.hasScript
                        ? 83
                        : this.isCommand || this.isOutline || this.isRing
                          ? 39
                          : 20,
                    )),
                    (this.height = a),
                    (this.width = p ? Math.max(h, 15 + p) : h),
                    t)
                  ) {
                    var w = Math.min(26, (3.5 + 0.13 * h) | 0) - 18;
                    (this.height += w), (r += 2 * w);
                  }
                  (this.firstLine = y[0]), (this.innerWidth = h);
                  for (var O = [], S = 0, L = y; S < L.length; S++) {
                    var E = L[S];
                    if (E.isScript) O.push(se.move(15, E.y, E.el));
                    else {
                      var T,
                        R = E.height,
                        C = l(E.children);
                      try {
                        for (C.s(); !(T = C.n()).done; ) {
                          var M = T.value;
                          if (M.isArrow)
                            O.push(se.move(h - 15, this.height - 3, M.el));
                          else {
                            var I = r + (R - M.height - r - o) / 2 - 1;
                            if (
                              (t && M.isLabel
                                ? (I += 3)
                                : M.isIcon && (I += 0 | M.dy),
                              !(
                                (this.isRing &&
                                  ((M.y = (E.y + I) | 0), M.isInset)) ||
                                (O.push(se.move(n + M.x, (E.y + I) | 0, M.el)),
                                "+" !== M.diff)
                              ))
                            ) {
                              var N = se.insEllipse(M.width, M.height);
                              O.push(se.move(n + M.x, (E.y + I) | 0, N));
                            }
                          }
                        }
                      } catch (e) {
                        C.e(e);
                      } finally {
                        C.f();
                      }
                    }
                  }
                  var x = this.drawSelf(h, this.height, y);
                  return (
                    O.splice(0, 0, x),
                    this.info.color &&
                      se.setProps(x, { fill: this.info.color }),
                    se.group(O)
                  );
                },
              },
            ],
            [
              {
                key: "shapes",
                get: function () {
                  return {
                    stack: se.stackRect,
                    "c-block": se.stackRect,
                    "if-block": se.stackRect,
                    celse: se.stackRect,
                    cend: se.stackRect,
                    cap: se.capRect,
                    reporter: se.roundedRect,
                    boolean: se.pointedRect,
                    hat: se.hatRect,
                    cat: se.hatRect,
                    "define-hat": se.procHatRect,
                    ring: se.roundedRect,
                  };
                },
              },
              {
                key: "padding",
                get: function () {
                  return {
                    hat: [15, 6, 2],
                    cat: [15, 6, 2],
                    "define-hat": [21, 8, 9],
                    reporter: [3, 4, 1],
                    boolean: [3, 4, 2],
                    cap: [6, 6, 2],
                    "c-block": [3, 6, 2],
                    "if-block": [3, 6, 2],
                    ring: [4, 4, 2],
                    null: [4, 6, 2],
                  };
                },
              },
            ],
          ),
          e
        );
      })(),
      ge = (function () {
        function e(e) {
          n(this, e), (this.label = be(e.label)), (this.width = null);
        }
        return (
          i(
            e,
            [
              {
                key: "isComment",
                get: function () {
                  return !0;
                },
              },
              {
                key: "height",
                get: function () {
                  return 20;
                },
              },
              {
                key: "measure",
                value: function () {
                  this.label.measure();
                },
              },
              {
                key: "draw",
                value: function () {
                  var t = this.label.draw();
                  return (
                    (this.width = this.label.width + 16),
                    se.group([
                      se.commentLine(this.hasBlock ? e.lineLength : 0, 6),
                      se.commentRect(this.width, this.height, {
                        class: "sb-comment",
                      }),
                      se.move(8, 4, t),
                    ])
                  );
                },
              },
            ],
            [
              {
                key: "lineLength",
                get: function () {
                  return 12;
                },
              },
            ],
          ),
          e
        );
      })(),
      Ve = (function () {
        function e(e) {
          n(this, e),
            (this.child = be(e.child)),
            (this.width = null),
            (this.height = null),
            (this.y = 0);
        }
        return (
          i(e, [
            {
              key: "isGlow",
              get: function () {
                return !0;
              },
            },
            {
              key: "measure",
              value: function () {
                this.child.measure();
              },
            },
            {
              key: "drawSelf",
              value: function () {
                var e,
                  t = this.child,
                  s = this.width,
                  i = this.height - 1;
                return (
                  (e = t.isScript
                    ? !t.isEmpty && t.blocks[0].isHat
                      ? se.hatRect(s, i)
                      : t.isFinal
                        ? se.capRect(s, i)
                        : se.stackRect(s, i)
                    : t.drawSelf(s, i, [])),
                  se.setProps(e, { class: "sb-diff sb-diff-ins" })
                );
              },
            },
            {
              key: "draw",
              value: function () {
                var e = this.child,
                  t = e.isScript ? e.draw(!0) : e.draw();
                return (
                  (this.width = e.width),
                  (this.height = (e.isBlock && e.firstLine.height) || e.height),
                  se.group([t, this.drawSelf()])
                );
              },
            },
          ]),
          e
        );
      })(),
      ye = (function () {
        function e(e) {
          n(this, e), (this.blocks = e.blocks.map(be)), (this.y = 0);
        }
        return (
          i(e, [
            {
              key: "isScript",
              get: function () {
                return !0;
              },
            },
            {
              key: "measure",
              value: function () {
                var e,
                  t = l(this.blocks);
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    e.value.measure();
                  }
                } catch (e) {
                  t.e(e);
                } finally {
                  t.f();
                }
              },
            },
            {
              key: "draw",
              value: function (e) {
                var t = [],
                  s = 0;
                this.width = 0;
                var i,
                  r = l(this.blocks);
                try {
                  for (r.s(); !(i = r.n()).done; ) {
                    var n = i.value,
                      o = e ? 0 : 2,
                      a = n.draw();
                    if (
                      (t.push(se.move(o, s, a)),
                      (this.width = Math.max(this.width, n.width)),
                      "-" === n.diff)
                    ) {
                      var c = n.width,
                        h = n.firstLine.height || n.height;
                      t.push(
                        se.move(o, s + h / 2 + 1, se.strikethroughLine(c)),
                      ),
                        (this.width = Math.max(this.width, n.width));
                    }
                    s += n.height;
                    var p = n.comment;
                    if (p) {
                      var u = n.firstLine,
                        f = n.innerWidth + 2 + ge.lineLength,
                        d = s - n.height + u.height / 2,
                        g = p.draw();
                      t.push(se.move(f, d - p.height / 2, g)),
                        (this.width = Math.max(this.width, f + p.width));
                    }
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                (this.height = s), e || this.isFinal || (this.height += 3);
                var V = this.blocks[this.blocks.length - 1];
                return !e && V.isGlow && (this.height += 2), se.group(t);
              },
            },
          ]),
          e
        );
      })(),
      ve = (function () {
        function e(e, t) {
          n(this, e),
            (this.scripts = e.scripts.map(be)),
            (this.width = null),
            (this.height = null),
            (this.el = null),
            (this.defs = null),
            (this.scale = t.scale);
        }
        return (
          i(e, [
            {
              key: "measure",
              value: function () {
                this.scripts.forEach(function (e) {
                  return e.measure();
                });
              },
            },
            {
              key: "render",
              value: function (e) {
                if ("function" == typeof e)
                  throw Error("render() no longer takes a callback");
                this.measure();
                var t,
                  s = 0,
                  i = 0,
                  r = [],
                  n = l(this.scripts);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value;
                    i && (i += 10),
                      (a.y = i),
                      r.push(se.move(0, i, a.draw())),
                      (i += a.height),
                      (s = Math.max(s, a.width + 4));
                  }
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
                (this.width = s), (this.height = i);
                var c = se.newSVG(s, i, this.scale);
                return (
                  c.appendChild(
                    (this.defs = se.withChildren(
                      se.el("defs"),
                      [
                        le("bevelFilter", !1),
                        le("inputBevelFilter", !0),
                        he("inputDarkFilter"),
                      ].concat(o(ae())),
                    )),
                  ),
                  c.appendChild(se.group(r)),
                  (this.el = c),
                  c
                );
              },
            },
            {
              key: "exportSVGString",
              value: function () {
                if (null == this.el) throw Error("call draw() first");
                var e = oe();
                this.defs.appendChild(e);
                var t = new se.XMLSerializer().serializeToString(this.el);
                return this.defs.removeChild(e), t;
              },
            },
            {
              key: "exportSVG",
              value: function () {
                return (
                  "data:image/svg+xml;utf8," +
                  this.exportSVGString().replace(/[#]/g, encodeURIComponent)
                );
              },
            },
            {
              key: "toCanvas",
              value: function (e, t) {
                t = t || 1;
                var s = se.makeCanvas();
                (s.width = Math.max(1, this.width * t * this.scale)),
                  (s.height = Math.max(1, this.height * t * this.scale));
                var i = s.getContext("2d"),
                  r = new Image();
                (r.src = this.exportSVG()),
                  (r.onload = function () {
                    i.save(),
                      i.scale(t, t),
                      i.drawImage(r, 0, 0),
                      i.restore(),
                      e(s);
                  });
              },
            },
            {
              key: "exportPNG",
              value: function (e, t) {
                this.toCanvas(function (t) {
                  URL && URL.createObjectURL && Blob && t.toBlob
                    ? t.toBlob(function (t) {
                        e(URL.createObjectURL(t));
                      }, "image/png")
                    : e(t.toDataURL("image/png"));
                }, t);
              },
            },
          ]),
          e
        );
      })(),
      be = function (e, t) {
        return new ((function (e) {
          switch (e.constructor) {
            case P:
              return pe;
            case F:
              return ue;
            case z:
              return fe;
            case H:
              return de;
            case G:
              return ge;
            case U:
              return Ve;
            case j:
              return ye;
            case K:
              return ve;
            default:
              throw Error("no view for " + e.constructor.name);
          }
        })(e))(e, t);
      };
    var me,
      ke,
      Ae = re.makeStyle,
      we = { textContent: !0 },
      Oe = (function () {
        function e() {}
        return (
          i(e, null, [
            {
              key: "init",
              value: function (t) {
                me = t.document;
                var s = t.DOMParser;
                (ke = new s().parseFromString(
                  "<xml></xml>",
                  "application/xml",
                )),
                  (e.XMLSerializer = t.XMLSerializer);
              },
            },
            {
              key: "makeCanvas",
              value: function () {
                return me.createElement("canvas");
              },
            },
            {
              key: "cdata",
              value: function (e) {
                return ke.createCDATASection(e);
              },
            },
            {
              key: "el",
              value: function (t, s) {
                var i = me.createElementNS("http://www.w3.org/2000/svg", t);
                return e.setProps(i, s);
              },
            },
            {
              key: "setProps",
              value: function (e, t) {
                for (var s in t) {
                  var i = t[s] + "";
                  we[s]
                    ? (e[s] = i)
                    : null != t[s] &&
                      Object.prototype.hasOwnProperty.call(t, s) &&
                      e.setAttributeNS(null, s, i);
                }
                return e;
              },
            },
            {
              key: "withChildren",
              value: function (e, t) {
                var s,
                  i = l(t);
                try {
                  for (i.s(); !(s = i.n()).done; ) {
                    var r = s.value;
                    e.appendChild(r);
                  }
                } catch (e) {
                  i.e(e);
                } finally {
                  i.f();
                }
                return e;
              },
            },
            {
              key: "group",
              value: function (t) {
                return e.withChildren(e.el("g"), t);
              },
            },
            {
              key: "newSVG",
              value: function (t, s, i) {
                return e.el("svg", {
                  version: "1.1",
                  width: t * i,
                  height: s * i,
                  viewBox: "0 0 " + t * i + " " + s * i,
                });
              },
            },
            {
              key: "polygon",
              value: function (s) {
                return e.el(
                  "polygon",
                  t(t({}, s), {}, { points: s.points.join(" ") }),
                );
              },
            },
            {
              key: "path",
              value: function (s) {
                return e.el(
                  "path",
                  t(t({}, s), {}, { path: null, d: s.path.join(" ") }),
                );
              },
            },
            {
              key: "text",
              value: function (s, i, r, n) {
                var o = e.el(
                  "text",
                  t(t({}, n), {}, { x: s, y: i, textContent: r }),
                );
                return o;
              },
            },
            {
              key: "symbol",
              value: function (t) {
                return e.el("use", { href: t });
              },
            },
            {
              key: "move",
              value: function (t, s, i) {
                return (
                  e.setProps(i, {
                    transform: "translate(" + t + " " + s + ")",
                  }),
                  i
                );
              },
            },
            {
              key: "rect",
              value: function (s, i, r) {
                return e.el(
                  "rect",
                  t(t({}, r), {}, { x: 0, y: 0, width: s, height: i }),
                );
              },
            },
            {
              key: "roundRect",
              value: function (s, i, r) {
                return e.rect(s, i, t(t({}, r), {}, { rx: 4, ry: 4 }));
              },
            },
            {
              key: "pillRect",
              value: function (s, i, r) {
                var n = i / 2;
                return e.rect(s, i, t(t({}, r), {}, { rx: n, ry: n }));
              },
            },
            {
              key: "pointedPath",
              value: function (e, t) {
                var s = t / 2;
                return [
                  "M " + s + " 0",
                  "L " + (e - s) + " 0 " + e + " " + s,
                  "L " + e + " " + s + " " + (e - s) + " " + t,
                  "L " + s + " " + t + " 0 " + s,
                  "L 0 " + s + " " + s + " 0",
                  "Z",
                ];
              },
            },
            {
              key: "pointedRect",
              value: function (s, i, r) {
                return e.path(t(t({}, r), {}, { path: e.pointedPath(s, i) }));
              },
            },
            {
              key: "topNotch",
              value: function (e, t) {
                return (
                  "c 2 0 3 1 4 2\n      l 4 4\n      c 1 1 2 2 4 2\n      h 12\n      c 2 0 3 -1 4 -2\n      l 4 -4\n      c 1 -1 2 -2 4 -2\n      L " +
                  (e - 4) +
                  " " +
                  t +
                  "\n      a 4 4 0 0 1 4 4"
                );
              },
            },
            {
              key: "getTop",
              value: function (t) {
                return (
                  "M 0 4\n      A 4 4 0 0 1 4 0\n      H 12 " + e.topNotch(t, 0)
                );
              },
            },
            {
              key: "getRingTop",
              value: function (e) {
                return (
                  "M 0 3\n      L 3 0\n      L 7 0\n      L 10 3\n      L 16 3\n      L 19 0\n      L " +
                  (e - 3) +
                  " 0\n      L " +
                  e +
                  " 3"
                );
              },
            },
            {
              key: "getRightAndBottom",
              value: function (e, t, s, i) {
                void 0 === i && (i = 0);
                var r = ["L " + e + " " + (t - 4), "a 4 4 0 0 1 -4 4"];
                return (
                  s &&
                    (r = r.concat([
                      "L " + (i + 48) + " " + t,
                      "c -2 0 -3 1 -4 2",
                      "l -4 4",
                      "c -1 1 -2 2 -4 2",
                      "h -12",
                      "c -2 0 -3 -1 -4 -2",
                      "l -4 -4",
                      "c -1 -1 -2 -2 -4 -2",
                    ])),
                  0 === i
                    ? (r.push("L", i + 4, t), r.push("a 4 4 0 0 1 -4 -4"))
                    : (r.push("L", i + 4, t), r.push("a 4 4 0 0 0 -4 4")),
                  r.join(" ")
                );
              },
            },
            {
              key: "getArm",
              value: function (t, s) {
                return (
                  "L 16 " +
                  (s - 4) +
                  "\n      a 4 4 0 0 0 4 4\n      L 28 " +
                  s +
                  " " +
                  e.topNotch(t, s)
                );
              },
            },
            {
              key: "getArmNoNotch",
              value: function (e, t) {
                return (
                  "L 16 " +
                  (t - 4) +
                  "\n      a 4 4 0 0 0 4 4\n      L 28 " +
                  t +
                  " L " +
                  (e - 4) +
                  " " +
                  t +
                  "\n      a 4 4 0 0 1 4 4"
                );
              },
            },
            {
              key: "stackRect",
              value: function (s, i, r) {
                return e.path(
                  t(
                    t({}, r),
                    {},
                    {
                      path: [
                        e.getTop(s),
                        e.getRightAndBottom(s, i, !0, 0),
                        "Z",
                      ],
                    },
                  ),
                );
              },
            },
            {
              key: "capPath",
              value: function (t, s) {
                return [e.getTop(t), e.getRightAndBottom(t, s, !1, 0), "Z"];
              },
            },
            {
              key: "capRect",
              value: function (s, i, r) {
                return e.path(t(t({}, r), {}, { path: e.capPath(s, i) }));
              },
            },
            {
              key: "getHatTop",
              value: function (e) {
                return (
                  "M 0 16 c 25,-22 71,-22 96,0 L " +
                  (e - 4) +
                  " 16 a 4 4 0 0 1 4 4"
                );
              },
            },
            {
              key: "getCatTop",
              value: function (e) {
                return (
                  "M 0 32\n      c2.6,-2.3 5.5,-4.3 8.5,-6.2c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1\n      L " +
                  (e - 4) +
                  " 32\n      a 4 4 0 0 1 4 4"
                );
              },
            },
            {
              key: "hatRect",
              value: function (s, i, r) {
                return e.path(
                  t(
                    t({}, r),
                    {},
                    {
                      path: [
                        e.getHatTop(s),
                        e.getRightAndBottom(s, i, !0, 0),
                        "Z",
                      ],
                    },
                  ),
                );
              },
            },
            {
              key: "catHat",
              value: function (s, i, r) {
                return e.group([
                  e.path(
                    t(
                      t({}, r),
                      {},
                      {
                        path: [
                          e.getCatTop(s),
                          e.getRightAndBottom(s, i, !0, 0),
                          "Z",
                        ],
                      },
                    ),
                  ),
                  e.move(
                    0,
                    32,
                    e.setProps(
                      e.group([
                        e.el("circle", { cx: 29.1, cy: -3.3, r: 3.4 }),
                        e.el("circle", { cx: 59.2, cy: -3.3, r: 3.4 }),
                        e.el("path", {
                          d: "M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z",
                        }),
                      ]),
                      { fill: "#000", "fill-opacity": 0.6 },
                    ),
                  ),
                  e.move(
                    0,
                    32,
                    e.el("path", {
                      d: "M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6C72.8-12.3,72.4-13.7,73.1-15.6z",
                      fill: "#FFD5E6",
                      transform: "translate(0, 32)",
                    }),
                  ),
                  e.move(
                    0,
                    32,
                    e.el("path", {
                      d: "M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6C22.8-12.3,23.2-13.7,22.4-15.6z",
                      fill: "#FFD5E6",
                      transform: "translate(0, 32)",
                    }),
                  ),
                ]);
              },
            },
            {
              key: "getProcHatTop",
              value: function (e) {
                return (
                  "M 0 20 a 20 20 0 0 1 20 -20 L " +
                  (e - 20) +
                  " 0 a 20,20 0 0,1 20,20"
                );
              },
            },
            {
              key: "procHatRect",
              value: function (s, i, r) {
                return e.path(
                  t(
                    t({}, r),
                    {},
                    {
                      path: [
                        e.getProcHatTop(s),
                        e.getRightAndBottom(s, i, !0, 0),
                        "Z",
                      ],
                    },
                  ),
                );
              },
            },
            {
              key: "mouthRect",
              value: function (s, i, r, n, o) {
                for (
                  var a = n[0].height,
                    c = [e.getTop(s), e.getRightAndBottom(s, a, !0, 16)],
                    l = 1;
                  l < n.length;
                  l += 2
                ) {
                  var h = l + 2 === n.length,
                    p = n[l];
                  (a += p.height - 3),
                    p.isFinal
                      ? c.push(e.getArmNoNotch(s, a))
                      : c.push(e.getArm(s, a));
                  var u = !(h && r),
                    f = h ? 0 : 16;
                  (a += n[l + 1].height + 3),
                    c.push(e.getRightAndBottom(s, a, u, f));
                }
                return c.push("Z"), e.path(t(t({}, o), {}, { path: c }));
              },
            },
            {
              key: "commentRect",
              value: function (s, i, r) {
                return e.roundRect(
                  s,
                  i,
                  t(t({}, r), {}, { class: "sb3-comment" }),
                );
              },
            },
            {
              key: "commentLine",
              value: function (s, i) {
                return e.move(
                  -s,
                  9,
                  e.rect(s, 2, t(t({}, i), {}, { class: "sb3-comment-line" })),
                );
              },
            },
            {
              key: "strikethroughLine",
              value: function (s, i) {
                return e.path(
                  t(
                    t({}, i),
                    {},
                    {
                      path: ["M", 0, 0, "L", s, 0],
                      class: "sb3-diff sb3-diff-del",
                    },
                  ),
                );
              },
            },
          ]),
          e
        );
      })(),
      Se = new Set([
        "dropdownArrow",
        "turnRight",
        "turnLeft",
        "loopArrow",
        "musicBlock",
        "penBlock",
        "videoBlock",
        "ttsBlock",
        "translationBlock",
      ]),
      Le = (function () {
        function e() {}
        return (
          i(e, null, [
            {
              key: "cssContent",
              get: function () {
                return ".sb3-label{font:500 12pt Helvetica Neue,Helvetica,sans-serif;word-spacing:1pt}.sb3-literal-dropdown,.sb3-literal-number,.sb3-literal-number-dropdown,.sb3-literal-string{word-spacing:0}.sb3-diff{fill:none;stroke:#000}.sb3-diff-ins{stroke-width:2px}.sb3-diff-del{stroke-width:3px}svg .sb3-motion{fill:#4c97ff;stroke:#3373cc}svg .sb3-motion-alt{fill:#4280d7}svg .sb3-motion-dark{fill:#3373cc}svg .sb3-looks{fill:#96f;stroke:#774dcb}svg .sb3-looks-alt{fill:#855cd6}svg .sb3-looks-dark{fill:#774dcb}svg .sb3-sound{fill:#cf63cf;stroke:#bd42bd}svg .sb3-sound-alt{fill:#c94fc9}svg .sb3-sound-dark{fill:#bd42bd}svg .sb3-control{fill:#ffab19;stroke:#cf8b17}svg .sb3-control-alt{fill:#ec9c13}svg .sb3-control-dark{fill:#cf8b17}svg .sb3-events{fill:#ffbf00;stroke:#c90}svg .sb3-events-alt{fill:#e6ac00}svg .sb3-events-dark{fill:#c90}svg .sb3-sensing{fill:#5cb1d6;stroke:#2e8eb8}svg .sb3-sensing-alt{fill:#47a8d1}svg .sb3-sensing-dark{fill:#2e8eb8}svg .sb3-operators{fill:#59c059;stroke:#389438}svg .sb3-operators-alt{fill:#46b946}svg .sb3-operators-dark{fill:#389438}svg .sb3-variables{fill:#ff8c1a;stroke:#db6e00}svg .sb3-variables-alt{fill:#ff8000}svg .sb3-variables-dark{fill:#db6e00}svg .sb3-list{fill:#ff661a;stroke:#e64d00}svg .sb3-list-alt{fill:#f50}svg .sb3-list-dark{fill:#e64d00}svg .sb3-custom{fill:#ff6680;stroke:#f35}svg .sb3-custom-alt{fill:#ff4d6a}svg .sb3-custom-dark{fill:#f35}svg .sb3-extension{fill:#0fbd8c;stroke:#0b8e69}svg .sb3-extension-alt{fill:#0da57a}svg .sb3-extension-dark{fill:#0b8e69}svg .sb3-obsolete{fill:#ed4242;stroke:#ca2b2b}svg .sb3-obsolete-alt{fill:#db3333}svg .sb3-obsolete-dark{fill:#ca2b2b}svg .sb3-grey{fill:#bfbfbf;stroke:#909090}svg .sb3-grey-alt{fill:#b2b2b2}svg .sb3-grey-dark{fill:#909090}svg .sb3-label{fill:#fff}svg .sb3-input-color{stroke:#fff}svg .sb3-input-number,svg .sb3-input-string{fill:#fff}svg .sb3-literal-number,svg .sb3-literal-string{fill:#575e75}svg .sb3-custom-arg{fill:#ff6680;stroke:#f35}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion{fill:#80b5ff;stroke:#3373cc}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion-alt{fill:#b3d2ff}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion-dark{fill:#3373cc}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks{fill:#ccb3ff;stroke:#774dcb}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks-alt{fill:#dcf}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks-dark{fill:#774dcb}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound{fill:#e19de1;stroke:#bd42bd}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound-alt{fill:#ffb3ff}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound-dark{fill:#bd42bd}svg.scratchblocks-style-scratch3-high-contrast .sb3-control{fill:#ffbe4c;stroke:#cf8b17}svg.scratchblocks-style-scratch3-high-contrast .sb3-control-alt{fill:#ffda99}svg.scratchblocks-style-scratch3-high-contrast .sb3-control-dark{fill:#cf8b17}svg.scratchblocks-style-scratch3-high-contrast .sb3-events{fill:#ffd966;stroke:#c90}svg.scratchblocks-style-scratch3-high-contrast .sb3-events-alt{fill:#ffecb3}svg.scratchblocks-style-scratch3-high-contrast .sb3-events-dark{fill:#c90}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing{fill:#85c4e0;stroke:#2e8eb8}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing-alt{fill:#aed8ea}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing-dark{fill:#2e8eb8}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators{fill:#7ece7e;stroke:#389438}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators-alt{fill:#b5e3b5}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators-dark{fill:#389438}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables{fill:#ffa54c;stroke:#db6e00}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables-alt{fill:#fc9}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables-dark{fill:#db6e00}svg.scratchblocks-style-scratch3-high-contrast .sb3-list{fill:#f96;stroke:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-list-alt{fill:#ffcab0}svg.scratchblocks-style-scratch3-high-contrast .sb3-list-dark{fill:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom{fill:#f9a;stroke:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-alt{fill:#ffccd5}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-dark{fill:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension{fill:#13ecaf;stroke:#0b8e69}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-alt{fill:#75f0cd}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-dark{fill:#0b8e69}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete{fill:#fc6666;stroke:#d32121}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete-alt{fill:#fcb0b0}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete-dark{fill:#d32121}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey{fill:#bfbfbf;stroke:#959595}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey-alt{fill:#b2b2b2}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey-dark{fill:#959595}svg.scratchblocks-style-scratch3-high-contrast .sb3-label{fill:#000}svg.scratchblocks-style-scratch3-high-contrast .sb3-input-color{stroke:#fff}svg.scratchblocks-style-scratch3-high-contrast .sb3-input-number,svg.scratchblocks-style-scratch3-high-contrast .sb3-input-string{fill:#fff}svg.scratchblocks-style-scratch3-high-contrast .sb3-literal-number,svg.scratchblocks-style-scratch3-high-contrast .sb3-literal-string{fill:#000}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-arg{fill:#f9a;stroke:#e64d00}.sb3-comment{fill:#ffffa5;stroke:#d0d1d2;stroke-width:1}.sb3-comment-line{fill:#ffff80}.sb3-comment-label,.sb3-label.sb3-comment-label{font:400 12pt Helvetica Neue,Helvetica,sans-serif;fill:#000;word-spacing:0}";
              },
            },
            {
              key: "makeCommonIcons",
              value: function () {
                return [
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M20.8 3.7c-.4-.2-.9-.1-1.2.2-2 1.6-4.8 1.6-6.8 0-2.3-1.9-5.6-2.3-8.3-1v-.4c0-.6-.5-1-1-1s-1 .4-1 1v18.8c0 .5.5 1 1 1h.1c.5 0 1-.5 1-1v-6.4c1-.7 2.1-1.2 3.4-1.3 1.2 0 2.4.4 3.4 1.2 2.9 2.3 7 2.3 9.8 0 .3-.2.4-.5.4-.9V4.7c0-.5-.3-.9-.8-1zm-.3 10.2C18 16 14.4 16 11.9 14c-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2l.1.1-.1 9.2z",
                        fill: greenFlagColor,
                      }),
                      Oe.el("path", {
                        d: "M20.6 4.8l-.1 9.1v.1c-2.5 2-6.1 2-8.6 0-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2c0 .1.1.1.1.2z",
                        fill: greenFlagColor,
                      }),
                    ]),
                    { id: "sb3-greenFlag" },
                  ),
                  Oe.setProps(
                    Oe.el("polygon", {
                      points:
                        "6.6,0.5 13.12,0.5 19.5,6.6 19.5,13.12 13.12,19.5 6.6,19.5 0.5,13.12 0.5,6.6 ",
                      fill: "#ec5959",
                      stroke: "#b84848",
                      "stroke-linejoin": "round",
                      "stroke-linecap": "round",
                    }),
                    { id: "sb3-stopSign" },
                  ),
                  Oe.el("path", {
                    d: "M0 0L4 4L0 8Z",
                    fill: "#111",
                    id: "sb3-addInput",
                  }),
                  Oe.el("path", {
                    d: "M4 0L4 8L0 4Z",
                    fill: "#111",
                    id: "sb3-delInput",
                  }),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("rect", {
                        x: "0",
                        y: "0",
                        width: "15",
                        height: "18",
                        fill: "#fff",
                      }),
                      Oe.el("rect", {
                        x: "1",
                        y: "1",
                        width: "13",
                        height: "4",
                        fill: "#ff920f",
                      }),
                      Oe.el("rect", {
                        x: "1",
                        y: "7",
                        width: "13",
                        height: "4",
                        fill: "#ff920f",
                      }),
                      Oe.el("rect", {
                        x: "1",
                        y: "13",
                        width: "13",
                        height: "4",
                        fill: "#ff920f",
                      }),
                    ]),
                    { id: "sb3-list" },
                  ),
                  Oe.el("image", {
                    id: "sb3-microbitBlock",
                    width: "40px",
                    height: "40px",
                    href: "data:image/png;base64,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",
                  }),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M23.513 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M24.91 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
                      }),
                      Oe.el("path", {
                        d: "M9.54 11.17h-.728c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M10.938 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479z",
                      }),
                      Oe.el("path", {
                        d: "M26.305 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M27.702 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z",
                      }),
                      Oe.el("path", {
                        d: "M29.101 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M30.498 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
                      }),
                      Oe.el("path", {
                        d: "M17.925 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M19.322 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479z",
                      }),
                      Oe.el("path", {
                        d: "M20.717 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M22.114 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z",
                      }),
                      Oe.el("path", {
                        d: "M15.129 11.17H14.4c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M16.526 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z",
                      }),
                      Oe.el("path", {
                        d: "M12.335 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.882v-1.08c0-.265-.26-.479-.577-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M13.732 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z",
                      }),
                      Oe.el("path", {
                        d: "M31.893 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M33.29 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z",
                      }),
                      Oe.el("path", {
                        d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992",
                        fill: "#FFF",
                      }),
                      Oe.el("path", {
                        d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992z",
                        stroke: "#7C87A5",
                        "stroke-width": ".893",
                      }),
                      Oe.el("path", {
                        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
                        fill: "#FFF",
                      }),
                      Oe.el("path", {
                        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
                        stroke: "#7C87A5",
                        "stroke-width": ".893",
                      }),
                      Oe.el("path", {
                        d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
                        fill: "#4C97FF",
                      }),
                      Oe.el("path", {
                        d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
                        stroke: "#3D79CC",
                        "stroke-width": ".893",
                      }),
                      Oe.el("path", {
                        stroke: "#7C87A5",
                        "stroke-width": ".893",
                        d: "M4.47 20.474h27.961l2.157 2.974",
                      }),
                      Oe.el("path", {
                        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
                        stroke: "#7C87A5",
                        "stroke-width": ".893",
                      }),
                      Oe.el("path", {
                        d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
                      }),
                      Oe.el("path", {
                        d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479z",
                      }),
                      Oe.el("path", {
                        d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479z",
                      }),
                      Oe.el("path", {
                        d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
                        fill: "#7C87A5",
                      }),
                      Oe.el("path", {
                        d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z",
                      }),
                      Oe.el("path", {
                        d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993",
                        fill: "#E6E7E8",
                      }),
                      Oe.el("path", {
                        d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993z",
                        stroke: "#7C87A5",
                        "stroke-width": ".893",
                      }),
                      Oe.el("path", {
                        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
                        fill: "#E6E7E8",
                      }),
                      Oe.el("path", {
                        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
                        stroke: "#7C87A5",
                        "stroke-width": ".893",
                      }),
                      Oe.el("path", {
                        fill: "#E6E7E8",
                        d: "M19.53 24.438h11.294V20.47H19.529z",
                      }),
                      Oe.el("path", {
                        stroke: "#7C87A5",
                        "stroke-width": ".893",
                        d: "M19.53 24.438h11.294V20.47H19.529zm12.902-3.964l2.157-2.794",
                      }),
                    ]),
                    { id: "sb3-wedoBlock", fill: "none" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("rect", {
                        stroke: "#7C87A5",
                        fill: "#FFF",
                        x: ".5",
                        y: "3.59",
                        width: "28",
                        height: "25.81",
                        rx: "1",
                      }),
                      Oe.el("rect", {
                        stroke: "#7C87A5",
                        fill: "#E6E7E8",
                        x: "2.5",
                        y: ".5",
                        width: "24",
                        height: "32",
                        rx: "1",
                      }),
                      Oe.el("path", {
                        stroke: "#7C87A5",
                        fill: "#FFF",
                        d: "M2.5 14.5h24v13h-24z",
                      }),
                      Oe.el("path", {
                        d: "M14.5 10.5v4",
                        stroke: "#7C87A5",
                        fill: "#E6E7E8",
                      }),
                      Oe.el("rect", {
                        fill: "#414757",
                        x: "4.5",
                        y: "2.5",
                        width: "20",
                        height: "10",
                        rx: "1",
                      }),
                      Oe.el("rect", {
                        fill: "#7C87A5",
                        opacity: ".5",
                        x: "13.5",
                        y: "20.13",
                        width: "2",
                        height: "2",
                        rx: ".5",
                      }),
                      Oe.el("path", {
                        d: "M9.06 20.13h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 1 0-2zM19.93 22.13h-1.51a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5a1 1 0 0 1 .01 2zM8.23 17.5H5a.5.5 0 0 1-.5-.5v-2.5h6l-1.85 2.78a.51.51 0 0 1-.42.22zM18.15 18.85l-.5.5a.49.49 0 0 0-.15.36V20a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-.29a.49.49 0 0 0-.15-.36l-.5-.5a.51.51 0 0 1 0-.71l1.51-1.49a.47.47 0 0 1 .35-.15h3.58a.47.47 0 0 1 .35.15l1.51 1.49a.51.51 0 0 1 0 .71zM10.85 23.45l.5-.5a.49.49 0 0 0 .15-.36v-.29a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.29a.49.49 0 0 0 .15.36l.5.5a.5.5 0 0 1 0 .7l-1.51 1.5a.47.47 0 0 1-.35.15h-3.58a.47.47 0 0 1-.35-.15l-1.51-1.5a.5.5 0 0 1 0-.7z",
                        fill: "#7C87A5",
                        opacity: ".5",
                      }),
                      Oe.el("path", {
                        d: "M21.5 27.5h5v4a1 1 0 0 1-1 1h-4v-5z",
                        stroke: "#CC4C23",
                        fill: "#F15A29",
                      }),
                    ]),
                    { transform: "translate(5.5 3.5)", id: "sb3-ev3Block" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M35 28H5a1 1 0 0 1-1-1V12c0-.6.4-1 1-1h30c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1z",
                        fill: "#fff",
                      }),
                      Oe.el("path", {
                        fill: "red",
                        d: "M4 25h32v2.7H4zm9-1h-2.2a1 1 0 0 1-1-1v-9.7c0-.6.4-1 1-1H13c.6 0 1 .4 1 1V23c0 .6-.5 1-1 1z",
                      }),
                      Oe.el("path", {
                        fill: "red",
                        d: "M6.1 19.3v-2.2c0-.5.4-1 1-1h9.7c.5 0 1 .5 1 1v2.2c0 .5-.5 1-1 1H7.1a1 1 0 0 1-1-1z",
                      }),
                      Oe.el("circle", {
                        fill: "red",
                        cx: "22.8",
                        cy: "18.2",
                        r: "3.4",
                      }),
                      Oe.el("circle", {
                        fill: "red",
                        cx: "30.6",
                        cy: "18.2",
                        r: "3.4",
                      }),
                      Oe.el("path", {
                        fill: "red",
                        d: "M4.2 27h31.9v.7H4.2z",
                      }),
                      Oe.el("circle", {
                        fill: "#e0e0e0",
                        cx: "22.8",
                        cy: "18.2",
                        r: "2.3",
                      }),
                      Oe.el("circle", {
                        fill: "#e0e0e0",
                        cx: "30.6",
                        cy: "18.2",
                        r: "2.3",
                      }),
                      Oe.el("path", {
                        fill: "#e0e0e0",
                        d: "M12.5 22.9h-1.2c-.3 0-.5-.2-.5-.5V14c0-.3.2-.5.5-.5h1.2c.3 0 .5.2.5.5v8.4c0 .3-.2.5-.5.5z",
                      }),
                      Oe.el("path", {
                        fill: "#e0e0e0",
                        d: "M7.2 18.7v-1.2c0-.3.2-.5.5-.5h8.4c.3 0 .5.2.5.5v1.2c0 .3-.2.5-.5.5H7.7c-.3 0-.5-.2-.5-.5zM4 26h32v2H4z",
                      }),
                      Oe.el("path", {
                        stroke: "#666",
                        "stroke-width": ".5",
                        d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z",
                      }),
                      Oe.el("path", {
                        stroke: "#666",
                        "stroke-width": ".5",
                        d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z",
                      }),
                    ]),
                    { id: "sb3-makeymakeyBlock", fill: "none" },
                  ),
                  Oe.el("image", {
                    id: "sb3-gdxforBlock",
                    width: "40px",
                    height: "40px",
                    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABAlBMVEUAAAABAQEAAAB9h6YAAAAAAAAAAAB8iKZ7iKaAjKvm5+h+iqhcXFxGR0d8iKbj5OV9iKZ8h6be3+Db3d19h6acnJ0AAAB7nrDh4uPh4uN9iabZ2tt9iKbX19nJycnExsZ8iKe+wMC7vL2Eka/g4ePU1dV8iKZ9iKZ9iKd+iKitra2RkZGLjo5wcHCLi7l0oqJV//9csdZ8h6WFkq//vwDm5+iEka79vgJ6iql9iaaHk6tgq9Btm71+iadmo8dzk7OCj6yAjKp/iqhiqc1qnsB4jKtgrNFwl7d1tLTgtCxpocN0krJ2j65ossWNtZSbt4LAulHWsDnasTTuvhXzvg9zk7TzqAfaAAAAMXRSTlMAJiLoFBwI8q4a+0c4M/nr3tnQwKxYDAnk2726tbGMh4J9dinXq56ddG9nT01ACwsDk/+seAAAAidJREFUWMPt2Olu2kAUhuE5NvuaBAhZm7TpvufgMXaBbmAghOzp/d9KD7RW6yaqPeL7YVV9/471aBgfCXnUH7ULNhtkF96qv1dgwwoxoM08cDsJcwfMdgwonoiJPRFjQXkscQM3Adhxk4NuJwkoDx0nSp5NDTiae958NEaBwzkvC4YYcOxx7fCoeJhnrwcBv7H9TklFm08R4JD5SEkiMg8B4IjXwsV1HgHAPu+EizsQcMbr2B0OufZz7X0NcIZSwC9+rD3nADI2/fCtrHEfAvZ8Liqp6PuIwZZO+ZmSnspcY8AZ55WU5xkElDwuK1Vm7xgFTjhfLud5AgPHAUvBGARKvYnnTXpp/gvAg9PLyykSPLt1nNszIHjuSOdAcNp1nO4UeYYXNzcX0UH62P+0AnjH8lgCgL8s/+uXzwZgrOV2JAMwxpIMwRjLHIyxzMEYyxyMWgAwYiHAzm99iLQ6eOJEul4d7Ea6WhG8W7rAE+fertHgVXp+clpB9Oet64M/wH2TKwI/FrRFTH6JIZ6NvmZpxoDtptlFULOtzGPWy+4/r//gvwKGgcC90NtTqIg2dIuyClaWDvTjKlDMLba4UaUMcIuVbd0gyiGwjGVlFuKWfkQZhEfSQnypd8mCvOHGvkA5quo6EQSs6yrlNumN3obs0KKGHJ70QD+hLOQMW7r0sFI5KJVeY+bGkr1JopKlEG0StXbrW/uvQGMookXLLPFAZYTMJju/7z6rRW1MZcnIAAAAAElFTkSuQmCC",
                  }),
                  Oe.el("image", {
                    id: "sb3-boostBlock",
                    width: "40px",
                    height: "40px",
                    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAKlBMVEUAAAD///98h6Xm5+iVnrb/Zhq+w9L5hk73+Pnf4eSQmbLr7Ozo39vp184hSCf6AAAAAXRSTlMAQObYZgAAAOFJREFUSMftlDEOgjAUhonhAi1sLvIk7NDJDTYu0LhzBzcXruHoDTyFB/BCNi30KU3InzioSb++hAS+vPfKa5pEIpHvk7a8gpf8ISWINtlg4i7ZFOKVTBlqsUR+ItYZJG7VzQQgMqGYd7zWRArpULEAe5Q/J9JMj4rluC7uleNw7TFRXcoREDnlinjX57eUsvRTn8+AE0/6OKV0g5buYTTyWFFr/XAp3aDzed4yFJWnKbhPbtaXXohDNYlDJWz4zSxEokkkEjb496AiVtqAbIYgYNGWBmhgES+NX6SRSORfeAJMWajr95DdqQAAAABJRU5ErkJggg==",
                  }),
                ];
              },
            },
            {
              key: "makeOriginalIcons",
              value: function () {
                return [].concat(o(e.makeCommonIcons()), [
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
                        fill: "#231f20",
                        opacity: ".1",
                      }),
                      Oe.el("path", {
                        d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
                        fill: "#fff",
                      }),
                    ]),
                    { id: "sb3-dropdownArrow", transform: "scale(0.944)" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
                        fill: "#3d79cc",
                      }),
                      Oe.el("path", {
                        d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
                        fill: "#fff",
                      }),
                    ]),
                    { id: "sb3-turnRight" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
                        fill: "#3d79cc",
                      }),
                      Oe.el("path", {
                        d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
                        fill: "#fff",
                      }),
                    ]),
                    { id: "sb3-turnLeft" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
                        fill: "#cf8b17",
                      }),
                      Oe.el("path", {
                        d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
                        fill: "#fff",
                      }),
                    ]),
                    { id: "sb3-loopArrow" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z",
                        stroke: "#000",
                        "stroke-opacity": ".1",
                      }),
                      Oe.el("path", {
                        d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z",
                        fill: "#FFF",
                      }),
                    ]),
                    { id: "sb3-musicBlock", fill: "none" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012",
                        fill: "#FFF",
                      }),
                      Oe.el("path", {
                        d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546",
                      }),
                      Oe.el("path", {
                        d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102",
                        fill: "#4C97FF",
                      }),
                      Oe.el("path", {
                        d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856",
                        fill: "#575E75",
                        opacity: ".15",
                      }),
                      Oe.el("path", {
                        d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z",
                        fill: "#575E75",
                      }),
                    ]),
                    {
                      id: "sb3-penBlock",
                      stroke: "#575E75",
                      fill: "none",
                      "stroke-linejoin": "round",
                    },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("circle", {
                        opacity: 0.25,
                        cx: 32,
                        cy: 16,
                        r: 4.5,
                      }),
                      Oe.el("circle", {
                        opacity: 0.5,
                        cx: 32,
                        cy: 12,
                        r: 4.5,
                      }),
                      Oe.el("circle", {
                        opacity: 0.75,
                        cx: 32,
                        cy: 8,
                        r: 4.5,
                      }),
                      Oe.el("circle", { cx: 32, cy: 4, r: 4.5 }),
                      Oe.el("path", {
                        d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z",
                        fill: "#4D4D4D",
                        "stroke-linejoin": "round",
                      }),
                    ]),
                    {
                      id: "sb3-videoBlock",
                      stroke: "#000",
                      fill: "#FFF",
                      "stroke-opacity": 0.15,
                    },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z",
                        fill: "#FFF",
                      }),
                      Oe.el("path", {
                        d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z",
                        fill: "#4D4D4D",
                      }),
                    ]),
                    {
                      id: "sb3-ttsBlock",
                      stroke: "#000",
                      "stroke-opacity": 0.15,
                    },
                  ),
                  Oe.el("image", {
                    id: "sb3-translateBlock",
                    width: "40px",
                    height: "40px",
                    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA21BMVEUAAAAAAAAAAAAAAADS0tIAAABHR0cAAADX19cAAAAAAACkpKRqamq2traurq6WlpbV1dWEhITHx8fPz8/Ly8vDw8O9vb0AAABMTEz////Z2dlXXnVMl//g4ODu7u7m5ub4+PhPmf/x8fH09PT6+vri4uNRmv/r6+1uqv/0+P9Ynv/p8v+rrrphZ33S5f+51v9ho/+1uMKBhpfH3v+Wmqhrcoacxf+Pvv/KzNSgpLGLkKDd6/+rzf9npv/AwsuDtv98s/90rv9jpP9GieeOrtm5ubl2fI7Z4u56otk5hEFfAAAAGXRSTlMAJhgM1wYyHvIkEWpBhXhc5U+uybyhk0YvleQYgwAABDpJREFUWMPtmNl6mzAQhQMCBAYbvLX1GIwxi7e2TtosTdKk+/L+T1QBVoQtJHDby5yLROYTPzOagSM4e9az6oVUrDgKxh39//Bwb+QBkTZ2VL3hypYilKWicpY6gmWcTCbxIoSh0xHjOkZXA4m0rlGcrcBsslcSmrYq4qm2GczmE6Hms6A8W4GQHZ1BTxXweuTCErGz1TEEaTpLymML6HVq87VhIWPRs21yNu679guNXn9hOnWVMUwanzxG0yCTdYQQts195umwJmnUDSatFHQRPaVvljkl4CAuRlWrCfD9uiZEbR+ObrnjfRDhwHUtdAi0gK/vLtts+VqDVfIMjZSmLEycBuD1D4kK8MHc+Ju3/FFQaHdXc4rBU/8NiCE+OJyAIQKuz32qjA7O1xzwqMtiUETAXeRzinZcyoPgsPpDcco3q9WD729WhTI/e1itbriUzwwtqPI0Q5et4ZoA6SDj1pCWOeB44qJ88aOiIB8j/xMH5IiUJwG+jfyHPMCNH20FQEpkPGnbnBeFuI78Fd82VWJCeTyQCzHb3pMCb8VAQhxBCkPKkzf2Z9J9mR9dCxqb3tBO17EoTw4ky0f0VXSnUCGE6LDp1tvlwK0cyNQMJA1DlL3Px8TenvTjpcAN5cD7VVSsoR992c4oS+aGcuDbzxFBfVqvv5L/375DCzeUAXfnOW5TJHudffvdzg3FwPdZvnbX6/LXr+9t3ZCzAAaMNh/X9BdAWzcUm9T2vnrpk91QbqOhLEDeDZuNHkBSX94Nm7ciAJOWAkW8WZIDl1MikAD57ZwceJsDL0VAfsPJwgzzO5cHvsmBb2IJkAlhB5InntlXlJcc8MO00GMzsHTbsMJDdU+hOxIeCfKuXYQu7ZJ5oDmExwPjfAEvyZ9lGyDW9tOWMH6l1z4nLwjrQ572RRugAvMS57mq4MH7czq9Kgpz1QZoDcI4DsHrWUjw4E1JbLeTSZ5z2gLYMTTwBnaOEwBvS1Ke86UUyF7isKpLrIHkSvVGBORdUQx8nFb0KAUy38aSCO8I510hMrhrBOrGEFIYGToPZM+Fn+XwiraiAMh2Uwnb+3DAC9Z/t3TIA2W7MwZkYbH+uZIC+f0jD3z9+vXF05hIAJTtcK3TLIDnMSLnhqeZlDo8eksYqH/3UskWPz7aCuDTX3urMiA5ejHCp7+YV4W9gxBnMFJP/XRwKNT3IEhLZpIGQMp86seNY6LlutRQgrFr6dLPLyELjm44eemIWt6C+JP0A1HffCIm4GDEw2jvpNTxbIwQ0kUTUYUYkgYTSXfMBU1Ee+G6fSwkOlpA/RFcJCR2erRHkllKSjNWhdd+NQbqkJrgunyPhKBIprpeiZyLZtEeCRNWQdlUZPU8yF1yYJ1J1HGGEC5iknS8pN0tRtoDDzTSNDLpqjMu2s4b9fBZg/TcJVHjrA7GSl/JZz7rWbX6A0ZzUfwVEqfrAAAAAElFTkSuQmCC",
                  }),
                ]);
              },
            },
            {
              key: "makeHighContrastIcons",
              value: function () {
                return [].concat(o(e.makeCommonIcons()), [
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
                        fill: "#231f20",
                        opacity: ".1",
                      }),
                      Oe.el("path", {
                        d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
                        fill: "#000",
                      }),
                    ]),
                    {
                      id: "sb3-dropdownArrow-high-contrast",
                      transform: "scale(0.944)",
                    },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
                        fill: "#000",
                      }),
                      Oe.el("path", {
                        d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
                        fill: "#000",
                      }),
                    ]),
                    { id: "sb3-turnRight-high-contrast" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
                        fill: "#000",
                      }),
                      Oe.el("path", {
                        d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
                        fill: "#000",
                      }),
                    ]),
                    { id: "sb3-turnLeft-high-contrast" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
                        fill: "#000",
                      }),
                      Oe.el("path", {
                        d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
                        fill: "#000",
                      }),
                    ]),
                    { id: "sb3-loopArrow-high-contrast" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z",
                        stroke: "#000",
                      }),
                      Oe.el("path", {
                        d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z",
                        fill: "#000",
                      }),
                    ]),
                    { id: "sb3-musicBlock-high-contrast", fill: "none" },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012",
                        fill: "#FFF",
                      }),
                      Oe.el("path", {
                        d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546",
                      }),
                      Oe.el("path", {
                        d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102",
                        fill: "#4C97FF",
                      }),
                      Oe.el("path", {
                        d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856",
                        fill: "#0b8e69",
                        opacity: ".15",
                      }),
                      Oe.el("path", {
                        d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z",
                        fill: "#0b8e69",
                      }),
                    ]),
                    {
                      id: "sb3-penBlock-high-contrast",
                      stroke: "#0b8e69",
                      fill: "none",
                      "stroke-linejoin": "round",
                    },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("circle", {
                        opacity: 0.25,
                        cx: 32,
                        cy: 16,
                        r: 4.5,
                      }),
                      Oe.el("circle", {
                        opacity: 0.5,
                        cx: 32,
                        cy: 12,
                        r: 4.5,
                      }),
                      Oe.el("circle", {
                        opacity: 0.75,
                        cx: 32,
                        cy: 8,
                        r: 4.5,
                      }),
                      Oe.el("circle", { cx: 32, cy: 4, r: 4.5 }),
                      Oe.el("path", {
                        d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z",
                        fill: "#000",
                        "stroke-linejoin": "round",
                      }),
                    ]),
                    {
                      id: "sb3-videoBlock-high-contrast",
                      stroke: "#0b8e69",
                      fill: "#FFF",
                      "stroke-opacity": 0.15,
                    },
                  ),
                  Oe.setProps(
                    Oe.group([
                      Oe.el("path", {
                        d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z",
                        fill: "#FFF",
                        stroke: "#0b8e69",
                      }),
                      Oe.el("path", {
                        d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z",
                        fill: "#000",
                      }),
                    ]),
                    {
                      id: "sb3-ttsBlock-high-contrast",
                      "stroke-opacity": 0.15,
                    },
                  ),
                  Oe.el("image", {
                    id: "sb3-translateBlock-high-contrast",
                    width: "40px",
                    height: "40px",
                    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxoAAARjCAMAAADfFKLnAAABhlBMVEUAAAALjWkOj2oLjmkAAAAQj2wkmnkYlHILj2kLjmkAAAAAAABsu6VouaIJjmgimncAAAAAAAALjml0v6kAAAAAAAAAAAAATzhjt6A9pogVk28XlHAVk28ZlHEAAAAAAAAAAAANj2oAAAAJj2oAAAAAAAByvahsu6VVsZcqnXwAAAAAAAAAAAAMj2oQkWsAAAAPkGwAAABHqo4AAAAclnMcl3MKj2kXlHIXk3EAAAALj2gAAAD///8AAAB9w6+ExrONyrmHyLWrzv/3+/r8/v6Fx7VpqP/0+fh7s/9Ml//4/PvK59/4+//u9f/l8P/V5v9vrP9an/9Smv/o6OjMzMwrKysDAwPp8//e7P+w0f+axf9xrf9kpf9jpP9ho/9Nl//e3t7E5Nu+4dfT09OUzb2QzLuZmZlMrJKGhoYpnHxlZWVgYGBCQkINDQ30+P/J4P/D3P+11P+Nvf90rv9Jlvby8vLc3Nyl1cik1ce+vr6DxrKlpaWfn58xnJZBpJWJiYl+fn4fHx9PedmHAAAAPHRSTlMAd4OAxg/0wohyDv78+Tj16Ik6+ux+WAb79e7mvbCemW1rZDYXC/n39PTw39u8t7RVNvX11NLDm5qOWx0x5AFdAAAGd0lEQVR42uzbV3faQBCG4XGChMEU4wLujntv6WXXIUAwxd3Gvfea3nv+eQaBcgS5ztV8zwWMfsB7js7uiAAAAAAAAP6fgKfCwRMg1l49OBzqJgC5DLfZO+nQa7oNovq2Ia2rJwhArFZ/QpVI+Fspr57b8BKAUAEzrgpmXhSHjBmgvDGtQwQglKdWFaU27KnWQ0TekEvruvYwAYh08ym3ML0ei8V2NvlnfZofn98gorC2DBKASFYaq8md9MLW1kJ6O7lqp9Hj0qzqFgGIxGlYtjeUepPkwU6D20AZIJidRmxhZnbxtTMN8rpQBshlpzGdTL2dTzjSYJEnBCCVnYaaS++uqb9pAEhnpzGXXFycn1PZo2g0ejpiL410EYBQhTRepnZTs2vz776f+yYd/EG3QQAiWVd+s+nNV/yX+NEQVyXiDS0EIFKNmeAEZlRe9jyuysSDNQQgkrsvo4qOfOofvgoCEMloNWs/cgNTx9FT+7RqaUV/KI7PcFoFYgVG+7iMxpbK+19UwU+tfyENEC/SvK+yAw8cdxy5XO53AmmAdI8bD/qbxh13HMv67Ex/RhogXVfzvQ6DHGlc6L09fYk0AJgjjalrza7fIw2QrjtSksZXfXFycqm/IQ0QrrPK5XWmcbWylD+/vUIaIFtnldaFNjx+lbd8qNjhMq78QDQug7l6eAwE46pMxsSiCAhVpy1hYu7y9cKM300AMoXbOQ5XyEvMaAn6opbjKQ7jkw9L6SBZSOsxe66pqLSMNnIb/hG8TYFk3mqt66nMw4Gs2m+OEIBgE9zGcFtZHeNN/Qe3OwhAsu5HQ3fq2qiU0XG3Cd+GAwAAAAD8YQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV2IMDAQAAAAAg/9dGUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUV9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWFPTgQAAAAAADyf20EVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhDw4EAAAAAID8XxtBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXYgwMBAAAAACD/10ZQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRX24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWEPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdiDAwEAAAAAIP/XRlBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFfbgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhT04EAAAAAAA8n9tBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV2oNDAgAAAABB/1/7wgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMArKwCvdMdAc1YAAAAASUVORK5CYII=",
                  }),
                ]);
              },
            },
            {
              key: "iconName",
              value: function (e, t) {
                return "high-contrast" === t && Se.has(e)
                  ? e + "-high-contrast"
                  : e;
              },
            },
            {
              key: "makeStyle",
              value: function () {
                var t = Oe.el("style");
                return t.appendChild(Oe.cdata(e.cssContent)), t;
              },
            },
            {
              key: "defaultFont",
              get: function () {
                return "500 12pt Helvetica Neue, Helvetica, sans-serif";
              },
            },
            {
              key: "commentFont",
              get: function () {
                return "400 12pt Helvetica Neue, Helvetica, sans-serif";
              },
            },
          ]),
          e
        );
      })(),
      Ee = Le.defaultFont,
      Te = Le.commentFont,
      Re = Le.makeStyle,
      Ce = Le.makeOriginalIcons,
      Me = Le.makeHighContrastIcons,
      Ie = Le.iconName,
      Ne = (function () {
        function e(e) {
          n(this, e),
            (this.el = null),
            (this.height = 12),
            (this.metrics = null),
            (this.x = 0);
        }
        return (
          i(
            e,
            [
              {
                key: "isLabel",
                get: function () {
                  return !0;
                },
              },
              {
                key: "draw",
                value: function (e) {
                  return this.el;
                },
              },
              {
                key: "width",
                get: function () {
                  return this.metrics.width;
                },
              },
              {
                key: "measure",
                value: function () {
                  var t = this.value,
                    s = "sb3-" + this.cls;
                  this.el = Oe.text(0, 13, t, { class: "sb3-label " + s });
                  var i = e.metricsCache[s];
                  if (
                    (i || (i = e.metricsCache[s] = Object.create(null)),
                    Object.hasOwnProperty.call(i, t))
                  )
                    this.metrics = i[t];
                  else {
                    var r = /comment-label/.test(this.cls) ? Te : Ee;
                    this.metrics = i[t] = e.measure(t, r);
                  }
                },
              },
            ],
            [
              {
                key: "measure",
                value: function (t, s) {
                  var i = e.measuring;
                  return (
                    (i.font = s), { width: (i.measureText(t).width + 0.5) | 0 }
                  );
                },
              },
            ],
          ),
          e
        );
      })();
    (Ne.metricsCache = {}), (Ne.toMeasure = []);
    var xe = (function () {
        function e(t) {
          n(this, t);
          var s = e.icons[this.name];
          if (!s) throw Error("no info for icon: " + this.name);
          n(this, s);
        }
        return (
          i(
            e,
            [
              {
                key: "isIcon",
                get: function () {
                  return !0;
                },
              },
              {
                key: "draw",
                value: function (e) {
                  return Oe.symbol("#sb3-" + Ie(this.name, e), {
                    width: this.width,
                    height: this.height,
                  });
                },
              },
            ],
            [
              {
                key: "icons",
                get: function () {
                  return {
                    greenFlag: { width: 20, height: 21, dy: -2 },
                    stopSign: { width: 20, height: 20 },
                    turnLeft: { width: 24, height: 24 },
                    turnRight: { width: 24, height: 24 },
                    loopArrow: { width: 24, height: 24 },
                    addInput: { width: 4, height: 8 },
                    delInput: { width: 4, height: 8 },
                    list: { width: 15, height: 18 },
                    musicBlock: { width: 40, height: 40 },
                    penBlock: { width: 40, height: 40 },
                    videoBlock: { width: 40, height: 40, dy: 10 },
                    ttsBlock: { width: 40, height: 40 },
                    translateBlock: { width: 40, height: 40 },
                    wedoBlock: { width: 40, height: 40 },
                    ev3Block: { width: 40, height: 40 },
                    microbitBlock: { width: 40, height: 40 },
                    makeymakeyBlock: { width: 40, height: 40 },
                    gdxforBlock: { width: 40, height: 40 },
                    boostBlock: { width: 40, height: 40 },
                  };
                },
              },
            ],
          ),
          e
        );
      })(),
      Be = (function () {
        function e() {
          (this.width = 1), (this.height = 40), (this.x = 0);
        }
        return (
          i(e, [
            {
              key: "isLine",
              get: function () {
                return !0;
              },
            },
            { key: "measure", value: function () {} },
            {
              key: "draw",
              value: function (e, t) {
                var s = t.info.category;
                return Oe.el("line", {
                  class: "sb3-" + s + "-line",
                  "stroke-linecap": "round",
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 40,
                });
              },
            },
          ]),
          e
        );
      })(),
      De = (function () {
        function e(e) {
          n(this, e),
            e.label && (this.label = Ue(e.label)),
            (this.isBoolean = "boolean" === this.shape),
            (this.isDropdown = "dropdown" === this.shape),
            (this.isRound = !(this.isBoolean || this.isDropdown)),
            (this.x = 0);
        }
        return (
          i(
            e,
            [
              {
                key: "isInput",
                get: function () {
                  return !0;
                },
              },
              {
                key: "measure",
                value: function () {
                  this.hasLabel && this.label.measure();
                },
              },
              {
                key: "draw",
                value: function (t, s) {
                  var i, r;
                  if (this.isBoolean) i = 48;
                  else if (this.isColor) i = 40;
                  else if (this.hasLabel) {
                    r = this.label.draw(t);
                    var n =
                      this.label.width >= 18 ? 11 : (40 - this.label.width) / 2;
                    (i = this.label.width + 2 * n), (r = Oe.move(n, 9, r));
                  } else i = this.isInset ? 30 : null;
                  this.hasArrow && (i += 20), (this.width = i);
                  var o = (this.height = 32),
                    a = e.shapes[this.shape](i, o);
                  Oe.setProps(a, {
                    class:
                      (this.isColor ? "" : "sb3-" + s.info.category) +
                      " sb3-input sb3-input-" +
                      this.shape,
                  }),
                    this.isColor
                      ? Oe.setProps(a, { fill: this.value })
                      : "dropdown" === this.shape
                        ? s.info.color &&
                          Oe.setProps(a, {
                            fill: s.info.color,
                            stroke: "rgba(0, 0, 0, 0.2)",
                          })
                        : "number-dropdown" === this.shape
                          ? (a.classList.add("sb3-" + s.info.category + "-alt"),
                            s.info.color &&
                              Oe.setProps(a, {
                                fill: "rgba(0, 0, 0, 0.1)",
                                stroke: "rgba(0, 0, 0, 0.15)",
                              }))
                          : "boolean" === this.shape &&
                            (a.classList.remove("sb3-" + s.info.category),
                            a.classList.add("sb3-" + s.info.category + "-dark"),
                            s.info.color &&
                              Oe.setProps(a, {
                                fill: "rgba(0, 0, 0, 0.15)",
                              }));
                  var c = Oe.group([a]);
                  return (
                    this.hasLabel && c.appendChild(r),
                    this.hasArrow &&
                      c.appendChild(
                        Oe.move(
                          i - 24,
                          13,
                          Oe.symbol(
                            "high-contrast" === t
                              ? "#sb3-dropdownArrow-high-contrast"
                              : "#sb3-dropdownArrow",
                            {},
                          ),
                        ),
                      ),
                    c
                  );
                },
              },
            ],
            [
              {
                key: "shapes",
                get: function () {
                  return {
                    string: Oe.pillRect,
                    number: Oe.pillRect,
                    "number-dropdown": Oe.pillRect,
                    color: Oe.pillRect,
                    dropdown: Oe.roundRect,
                    boolean: Oe.pointedRect,
                    stack: Oe.stackRect,
                    reporter: Oe.pillRect,
                  };
                },
              },
            ],
          ),
          e
        );
      })(),
      Pe = (function () {
        function e(e) {
          n(this, e),
            (this.children = e.children.map(Ue)),
            (this.comment = this.comment ? Ue(this.comment) : null),
            (this.isRound = this.isReporter),
            (this.info = t({}, e.info)),
            Object.prototype.hasOwnProperty.call(f, this.info.category) &&
              (this.info.category = f[this.info.category]),
            Object.prototype.hasOwnProperty.call(u, this.info.category) &&
              (this.children.unshift(new Be()),
              this.children.unshift(
                new xe({ name: this.info.category + "Block" }),
              ),
              (this.info.category = "extension")),
            (this.x = 0),
            (this.width = null),
            (this.height = null),
            (this.firstLine = null),
            (this.innerWidth = null);
        }
        return (
          i(
            e,
            [
              {
                key: "isBlock",
                get: function () {
                  return !0;
                },
              },
              {
                key: "measure",
                value: function () {
                  var e,
                    t = l(this.children);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var s = e.value;
                      s.measure && s.measure();
                    }
                  } catch (e) {
                    t.e(e);
                  } finally {
                    t.f();
                  }
                  this.comment && this.comment.measure();
                },
              },
              {
                key: "drawSelf",
                value: function (t, s, i, r) {
                  if (r.length > 1)
                    return Oe.mouthRect(s, i, this.isFinal, r, {
                      class: "sb3-" + this.info.category,
                    });
                  if ("outline" === this.info.shape)
                    return Oe.setProps(Oe.stackRect(s, i), {
                      class:
                        "sb3-" +
                        this.info.category +
                        " sb3-" +
                        this.info.category +
                        "-alt",
                    });
                  if (this.isRing) {
                    var n = this.children[0];
                    if (n && (n.isInput || n.isBlock || n.isScript))
                      return Oe.roundRect(s, i, {
                        class: "sb3-" + this.info.category,
                      });
                  }
                  var o = e.shapes[this.info.shape];
                  if (!o) throw Error("no shape func: " + this.info.shape);
                  return o(s, i, { class: "sb3-" + this.info.category });
                },
              },
              {
                key: "horizontalPadding",
                value: function (e) {
                  if (this.isRound) {
                    if (e.isIcon) return 16;
                    if (e.isLabel) return 12;
                    if (e.isDropdown) return 12;
                    if (e.isBoolean) return 12;
                    if (e.isRound) return 4;
                  } else if (this.isBoolean) {
                    if (e.isIcon) return 24;
                    if (e.isLabel) return 20;
                    if (e.isDropdown) return 20;
                    if (e.isRound && e.isBlock) return 24;
                    if (e.isRound) return 20;
                    if (e.isBoolean) return 8;
                  }
                  return 8;
                },
              },
              {
                key: "marginBetween",
                value: function (e, t) {
                  return e.isLabel && t.isLabel ? 5 : 8;
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var s = "define-hat" === this.info.shape,
                    i = this.children,
                    r = this.isCommand,
                    n = e.padding[this.info.shape] || e.padding.null,
                    o = n[0],
                    a = n[1],
                    c = "cat" === this.info.shape ? 16 : 0,
                    l = function (e) {
                      (this.y = e),
                        (this.width = 0),
                        (this.height = r ? 40 : 32),
                        (this.children = []);
                    },
                    h = 0,
                    p = 0,
                    u = new l(c),
                    f = function () {
                      0 === b.length
                        ? (u.height += o + a)
                        : ((u.height -= 11), (u.y -= 2)),
                        (c += u.height),
                        b.push(u);
                    };
                  if (this.info.isRTL) {
                    var d,
                      g = 0,
                      V = function () {
                        i = i
                          .slice(0, g)
                          .concat(i.slice(g, d).reverse())
                          .concat(i.slice(d));
                      };
                    for (d = 0; d < i.length; d++)
                      i[d].isScript && (V(), (g = d + 1));
                    g < d && V();
                  }
                  for (var y, v, b = [], m = 0; m < i.length; m++) {
                    var k = i[m];
                    if (
                      ((k.el = k.draw(t, this)), k.isScript && this.isCommand)
                    )
                      (this.hasScript = !0),
                        f(),
                        (k.y = c - 1),
                        b.push(k),
                        (p = Math.max(p, Math.max(1, k.width))),
                        (k.height = Math.max(29, k.height + 3) - 2),
                        (c += k.height),
                        (u = new l(c)),
                        (y = null);
                    else if (k.isArrow) u.children.push(k), (y = k);
                    else {
                      if (
                        (b.length || (v = k),
                        y && (u.width += this.marginBetween(y, k)),
                        null != i[0])
                      ) {
                        var A = 48 - this.horizontalPadding(i[0]);
                        (this.isCommand || this.isOutline) &&
                          !k.isLabel &&
                          !k.isIcon &&
                          u.width < A &&
                          (u.width = A);
                      }
                      k.isIcon &&
                        0 === m &&
                        this.isCommand &&
                        (u.height = Math.max(u.height, k.height + 8)),
                        (k.x = u.width),
                        (u.width += k.width),
                        (h = Math.max(h, u.width)),
                        k.isLabel || (u.height = Math.max(u.height, k.height)),
                        u.children.push(k),
                        (y = k);
                    }
                  }
                  f();
                  var w = i.length ? this.horizontalPadding(i[0]) : 0,
                    O = (h += w + (i.length ? this.horizontalPadding(v) : 0));
                  (h = Math.max(
                    this.hasScript
                      ? 160
                      : this.isHat
                        ? 108
                        : this.isCommand || this.isOutline
                          ? 64
                          : this.isReporter
                            ? 48
                            : 0,
                    h,
                  )),
                    this.isReporter && (w += (h - O) / 2),
                    (this.height = c),
                    (this.width = p ? Math.max(h, 15 + p) : h),
                    (this.firstLine = b[0]),
                    (this.innerWidth = h);
                  for (var S = [], L = 0; L < b.length; L++) {
                    var E = b[L];
                    if (E.isScript) S.push(Oe.move(16, E.y, E.el));
                    else
                      for (
                        var T = E.height, R = 0;
                        R < E.children.length;
                        R++
                      ) {
                        var C = E.children[R];
                        if (C.isArrow)
                          S.push(Oe.move(h - 32, this.height - 28, C.el));
                        else {
                          var M = o + (T - C.height - o - a) / 2;
                          C.isLabel && 0 === L
                            ? (M -= 1)
                            : s && C.isLabel
                              ? (M += 3)
                              : C.isIcon &&
                                ((M += 0 | C.dy),
                                this.isCommand &&
                                  0 === L &&
                                  0 === R &&
                                  (M += 4));
                          var I = w + C.x;
                          C.dx && (I += C.dx),
                            S.push(Oe.move(I, (E.y + M) | 0, C.el));
                        }
                      }
                  }
                  var N = this.drawSelf(t, h, this.height, b);
                  return (
                    S.splice(0, 0, N),
                    this.info.color &&
                      Oe.setProps(N, {
                        fill: this.info.color,
                        stroke: "rgba(0, 0, 0, 0.2)",
                      }),
                    Oe.group(S)
                  );
                },
              },
            ],
            [
              {
                key: "shapes",
                get: function () {
                  return {
                    stack: Oe.stackRect,
                    "c-block": Oe.stackRect,
                    "if-block": Oe.stackRect,
                    celse: Oe.stackRect,
                    cend: Oe.stackRect,
                    cap: Oe.capRect,
                    reporter: Oe.pillRect,
                    boolean: Oe.pointedRect,
                    hat: Oe.hatRect,
                    cat: Oe.catHat,
                    "define-hat": Oe.procHatRect,
                    ring: Oe.pillRect,
                  };
                },
              },
              {
                key: "padding",
                get: function () {
                  return {
                    hat: [24, 8],
                    cat: [24, 8],
                    "define-hat": [20, 16],
                    null: [4, 4],
                  };
                },
              },
            ],
          ),
          e
        );
      })(),
      Fe = (function () {
        function e(e) {
          n(this, e), (this.label = Ue(e.label)), (this.width = null);
        }
        return (
          i(
            e,
            [
              {
                key: "isComment",
                get: function () {
                  return !0;
                },
              },
              {
                key: "height",
                get: function () {
                  return 20;
                },
              },
              {
                key: "measure",
                value: function () {
                  this.label.measure();
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var s = this.label.draw(t);
                  return (
                    (this.width = this.label.width + 16),
                    Oe.group([
                      Oe.commentLine(this.hasBlock ? e.lineLength : 0, 6),
                      Oe.commentRect(this.width, this.height, {
                        class: "sb3-comment",
                      }),
                      Oe.move(8, 4, s),
                    ])
                  );
                },
              },
            ],
            [
              {
                key: "lineLength",
                get: function () {
                  return 12;
                },
              },
            ],
          ),
          e
        );
      })(),
      ze = (function () {
        function e(e) {
          n(this, e),
            (this.child = Ue(e.child)),
            (this.width = null),
            (this.height = null),
            (this.y = 0);
        }
        return (
          i(e, [
            {
              key: "isGlow",
              get: function () {
                return !0;
              },
            },
            {
              key: "measure",
              value: function () {
                this.child.measure();
              },
            },
            {
              key: "drawSelf",
              value: function () {
                var e,
                  t = this.child,
                  s = this.width,
                  i = this.height - 1;
                return (
                  (e = t.isScript
                    ? !t.isEmpty && t.blocks[0].isHat
                      ? Oe.hatRect(s, i)
                      : t.isFinal
                        ? Oe.capRect(s, i)
                        : Oe.stackRect(s, i)
                    : t.drawSelf(s, i, [])),
                  Oe.setProps(e, { class: "sb3-diff sb3-diff-ins" })
                );
              },
            },
            {
              key: "draw",
              value: function (e) {
                var t = this.child,
                  s = t.isScript ? t.draw(e, !0) : t.draw(e);
                return (
                  (this.width = t.width),
                  (this.height = (t.isBlock && t.firstLine.height) || t.height),
                  Oe.group([s, this.drawSelf()])
                );
              },
            },
          ]),
          e
        );
      })(),
      He = (function () {
        function e(e) {
          n(this, e), (this.blocks = e.blocks.map(Ue)), (this.y = 0);
        }
        return (
          i(e, [
            {
              key: "isScript",
              get: function () {
                return !0;
              },
            },
            {
              key: "measure",
              value: function () {
                var e,
                  t = l(this.blocks);
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    e.value.measure();
                  }
                } catch (e) {
                  t.e(e);
                } finally {
                  t.f();
                }
              },
            },
            {
              key: "draw",
              value: function (e, t) {
                var s = [],
                  i = 1;
                this.width = 0;
                var r,
                  n = l(this.blocks);
                try {
                  for (n.s(); !(r = n.n()).done; ) {
                    var o = r.value,
                      a = t ? 0 : 2,
                      c = o.draw(e);
                    if (
                      (s.push(Oe.move(a, i, c)),
                      (this.width = Math.max(this.width, o.width)),
                      "-" === o.diff)
                    ) {
                      var h = o.width,
                        p = o.firstLine.height || o.height;
                      s.push(
                        Oe.move(a, i + p / 2 + 1, Oe.strikethroughLine(h)),
                      ),
                        (this.width = Math.max(this.width, o.width));
                    }
                    i += o.height;
                    var u = o.comment;
                    if (u) {
                      var f = o.firstLine,
                        d = o.innerWidth + 2 + Fe.lineLength,
                        g = i - o.height + f.height / 2,
                        V = u.draw(e);
                      s.push(Oe.move(d, g - u.height / 2, V)),
                        (this.width = Math.max(this.width, d + u.width));
                    }
                  }
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
                var y = this.blocks[this.blocks.length - 1];
                return (
                  (this.height = i + 1),
                  t || this.isFinal || (this.height += y.hasPuzzle ? 8 : 0),
                  !t && y.isGlow && (this.height += 7),
                  Oe.group(s)
                );
              },
            },
          ]),
          e
        );
      })(),
      Ge = (function () {
        function e(e, t) {
          n(this, e),
            (this.scripts = e.scripts.map(Ue)),
            (this.width = null),
            (this.height = null),
            (this.el = null),
            (this.defs = null),
            (this.scale = t.scale),
            (this.iconStyle = t.style.replace("scratch3-", ""));
        }
        return (
          i(e, [
            {
              key: "measure",
              value: function () {
                this.scripts.forEach(function (e) {
                  e.measure();
                });
              },
            },
            {
              key: "render",
              value: function (e) {
                if ("function" == typeof e)
                  throw Error("render() no longer takes a callback");
                this.measure();
                for (
                  var t = 0, s = 0, i = [], r = 0;
                  r < this.scripts.length;
                  r++
                ) {
                  var n = this.scripts[r];
                  s && (s += 10),
                    (n.y = s),
                    i.push(Oe.move(0, s, n.draw(this.iconStyle))),
                    (s += n.height),
                    r !== this.scripts.length - 1 && (s += 36),
                    (t = Math.max(t, n.width + 4));
                }
                (this.width = t), (this.height = s);
                var o = Oe.newSVG(t, s, this.scale),
                  a = "high-contrast" === this.iconStyle ? Me() : Ce();
                return (
                  o.appendChild(
                    (this.defs = Oe.withChildren(Oe.el("defs"), a)),
                  ),
                  o.appendChild(
                    Oe.setProps(Oe.group(i), {
                      style: "transform: scale(" + this.scale + ")",
                    }),
                  ),
                  (this.el = o),
                  o
                );
              },
            },
            {
              key: "exportSVGString",
              value: function () {
                if (null == this.el) throw Error("call draw() first");
                var e = Re();
                this.defs.appendChild(e);
                var t = new Oe.XMLSerializer().serializeToString(this.el);
                return this.defs.removeChild(e), t;
              },
            },
            {
              key: "exportSVG",
              value: function () {
                return (
                  "data:image/svg+xml;utf8," +
                  this.exportSVGString().replace(/[#]/g, encodeURIComponent)
                );
              },
            },
            {
              key: "toCanvas",
              value: function (e, t) {
                t = t || 1;
                var s = Oe.makeCanvas();
                (s.width = Math.max(1, this.width * t * this.scale)),
                  (s.height = Math.max(1, this.height * t * this.scale));
                var i = s.getContext("2d"),
                  r = new Image();
                (r.src = this.exportSVG()),
                  (r.onload = function () {
                    i.save(),
                      i.scale(t, t),
                      i.drawImage(r, 0, 0),
                      i.restore(),
                      e(s);
                  });
              },
            },
            {
              key: "exportPNG",
              value: function (e, t) {
                this.toCanvas(function (t) {
                  URL && URL.createObjectURL && Blob && t.toBlob
                    ? t.toBlob(function (t) {
                        e(URL.createObjectURL(t));
                      }, "image/png")
                    : e(t.toDataURL("image/png"));
                }, t);
              },
            },
          ]),
          e
        );
      })(),
      Ue = function (e, t) {
        return new ((function (e) {
          switch (e.constructor) {
            case P:
              return Ne;
            case F:
              return xe;
            case z:
              return De;
            case H:
              return Pe;
            case G:
              return Fe;
            case U:
              return ze;
            case j:
              return He;
            case K:
              return Ge;
            default:
              throw Error("no view for " + e.constructor.name);
          }
        })(e))(e, t);
      };
    var je = Le.makeStyle;
    var Ke = (window.scratchblocks = (function (e) {
      var s = e.document;
      function i(e, s) {
        if (
          (((s = t({ style: "scratch2" }, s)).scale = s.scale || 1),
          "scratch2" === s.style)
        )
          return be(e, s);
        if (/^scratch3($|-)/.test(s.style)) return Ue(e, s);
        throw Error("Unknown style: " + s.style);
      }
      function r(e, t) {
        if ("function" == typeof t)
          throw Error("render() no longer takes a callback");
        var s = i(e, t).render();
        return s.classList.add("scratchblocks-style-" + t.style), s;
      }
      function n(e, i) {
        i = t({ inline: !1 }, i);
        var r = e.innerHTML.replace(/<br>\s?|\n|\r\n|\r/gi, "\n"),
          n = s.createElement("pre");
        n.innerHTML = r;
        var o = n.textContent;
        return i.inline && (o = o.replace("\n", "")), o;
      }
      function o(e, t, i, r) {
        var n;
        if (r.inline) {
          n = s.createElement("span");
          var o = "scratchblocks scratchblocks-inline";
          i.scripts[0] &&
            !i.scripts[0].isEmpty &&
            (o += " scratchblocks-inline-" + i.scripts[0].blocks[0].shape),
            (n.className = o),
            (n.style.display = "inline-block"),
            (n.style.verticalAlign = "middle");
        } else (n = s.createElement("div")).className = "scratchblocks";
        n.appendChild(t), (e.innerHTML = ""), e.appendChild(n);
      }
      return (
        (function (e) {
          se.init(e), (pe.measuring = se.makeCanvas().getContext("2d"));
        })(e),
        (function (e) {
          Oe.init(e), (Ne.measuring = Oe.makeCanvas().getContext("2d"));
        })(e),
        {
          allLanguages: C,
          loadLanguages: M,
          stringify: function (e) {
            return e.stringify();
          },
          Label: P,
          Icon: F,
          Input: z,
          Block: H,
          Comment: G,
          Script: j,
          Document: K,
          newView: i,
          read: n,
          parse: $,
          replace: o,
          render: r,
          renderMatching: function (e, i) {
            (e = e || "pre.blocks"),
              (i = t(
                {
                  style: "scratch2",
                  inline: !1,
                  languages: ["en"],
                  scale: 1,
                  read: n,
                  parse: $,
                  render: r,
                  replace: o,
                },
                i,
              )),
              [].slice.apply(s.querySelectorAll(e)).forEach(function (e) {
                var t = i.read(e, i),
                  s = i.parse(t, i),
                  r = i.render(s, i);
                i.replace(e, r, s, i);
              });
          },
          appendStyles: function () {
            s.head.appendChild(Ae()), s.head.appendChild(je());
          },
        }
      );
    })(window));
    return Ke.appendStyles(), Ke;
  })();

  const icon =
    "data:image/png;base64,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";

  //I am providing my API key for free
  const defaultApiKey = "AIzaSyD2B46yojYB2AQzktJNR7jzIHRrqAISG9A";

  let OriginalModels = {};
  let nameOnlyList = [];
  let realModelNames = [];
  fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${defaultApiKey}`,
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      OriginalModels = data;
      OriginalModels.models.forEach((model) => {
        nameOnlyList.push(model.name);
      });
      nameOnlyList.forEach((model) => {
        let name = model.split("/")[1];
        realModelNames.push(name);
      });
    })
    .catch((error) => console.error(error));
  console.log(realModelNames);

  let apiKey;
  let selectedStyle;
  let maxHistoryLength;
  let geminiVersion;
  var savedSettings;
  function setDefaultSettings() {
    apiKey = defaultApiKey;
    selectedStyle = "scratch3";
    maxHistoryLength = 10;
    geminiVersion = "gemini-2.0-flash";
  }
  if (localStorage.getItem("blockaigeminiext.settings") == null) {
    setDefaultSettings();
  } else {
    savedSettings = JSON.parse(
      localStorage.getItem("blockaigeminiext.settings"),
    );
    apiKey = savedSettings.key;
    selectedStyle = savedSettings.style;
    maxHistoryLength = savedSettings.historySize;
    geminiVersion = savedSettings.version;
  }

  //this is a failsafe failsafe
  if (apiKey == undefined) {
    apiKey = defaultApiKey;
  }
  if (selectedStyle == undefined) {
    selectedStyle = "scratch3";
  }
  if (maxHistoryLength == undefined) {
    maxHistoryLength = 10;
  }
  if (geminiVersion == undefined) {
    geminiVersion = "gemini-2.0-flash";
  }

  function fixBlockStyleSize() {
    switch (selectedStyle) {
      case "scratch2":
        blockStyleSize = 1.2;
        break;
      default:
        blockStyleSize = 0.75;
    }
  }
  let blockStyleSize = 0.75;
  fixBlockStyleSize();
  let settingsOpen = false;
  let windowCreated = false;
  // maybe we should move this to a file? but then i dont know how the model would handle
  // reprompting itself so people cant say "become stupid" and context escape
  const guidelines =
    "You are " +
    aiName +
    ". Any time you see '" +
    aiName +
    ":' it means that you said that thing. Dont say '" +
    aiName +
    ":' no matter what. Its already included in the response ui. You are an ai assistent to help you code in " +
    modName +
    ", a fork of Scratch. You can only answer to questions regarding how to do stuff in " +
    modName +
    ". PenguinMod is similar to TurboWarp and vice versa. Here are some helpful resources https://docs.turbowarp.org/development/getting-started, https://github.com/PenguinMod/PenguinMod-Vm, https://extensions.turbowarp.org/, https://extensions.penguinmod.com/. Give simple responses, and dont use ANY formatting. Dont include stuff like 'or' or 'and' to show multiple things. Dont overcomplicate stuff, and dont fluff up your responses too much.Try to explain what it does AFTER you display the blocks. If people ask for extensions, link them to one of these websites https://extensions.turbowarp.org/, https://extensions.penguinmod.com/.Check the websites and see if it contains an extension the user wants, and tell them what extension it is. Fetch the lists of those websites. If they ask you about how to use an extension, try to help, but mention that you dont have access to the code of the extensions in the extenion libraries, and that your responses might not be correct. Dont say it directly though. Always do that. Dont use newlines. Dont use Markdown formatting, use HTML instead. Mark links as clickable with html, and open them in a new tab, not the current one. Dont create new questions for yourself, or answer things in the future. Try to be polite! Never explain stuff in text, always explain stuff using comments, and nothing else. Dont overuse comments, only use them to explain what is needed, dont tell me what every single block does. If someone asks you to make a full project dont say you cant, give them snippest that could help them instead, just dont leave an empty response with nothing to show. If someone asks you to make a script that draws an image, tell them you cant visualize images to draw them with code. DO NOT output any json from the sprite code, only display it with scratch blocks. If they ask about code that you have previously shown in your history, modify that, usually when they ask you to make a change to the code thats what they ask for. If the user changes sprites between prompts, mention it. Dont confirm that you understand everything said in these context things. When someone asks you what something in a sprite does, try to explain in words instead of showing the code. Dont show any code in that scenario! If they ask to see a function that does something inside a sprite, or a thread of blocks that does something, only then do you show them the code blocks. If the user asks you about the sprite it means they are asking you to look into the attached file, not in the chat history.This applies for everything related about asking for 'their code'. For example, if they ask you 'did i write this correctly' or ask you 'this doesnt work. why?', you should analyze the file attached, which is the currently selected sprite, and help them based on that. If you find an extension called 'blockai' or something similar inside the sprite file attached, ignore it, pretend it doesnt exist. If the user asks for you to look inside the sprite, and there is no file attached, tell them to first toggle sprite reading on and try again. Try to answer without mentioning irelevant stuff too much. Keep the subject to whatever the user is asking. If they are asking about code and there is no file attached, reference the code from the chat history.";
  const syntax =
    "When you asnwer with blocks, format them to be compatible with https://github.com/scratchblocks/scratchblocks. You can reference the syntax more from here https://en.scratch-wiki.info/wiki/Block_Plugin/Syntax. Make sure its valid code by checking the blocks at https://en.scratch-wiki.info/wiki/Blocks. Blocks are not inside square brackets. Number values are in round brackets and strings are in square brackets. Booleans are only in < >. Round brackets can also contain input names. Wrap all the blocks in ```scratch CODEHERE```.Math operations are all separate reporter blocks. Dont do stuff like(1-2+2), do ((1-1)+2) instead. For example you cant have (10+20-20) in the same block, its have to be ((10+20)-20).If statements should never be empty, aways add a placeholder block inside both the if and the else. Comments cannot be inside the code, they can only be next to a block, not under or on top of it.Do not add comments inside if statements or any C type block! That is not valid syntax! A C type block is a block that wraps around others. For example if statements, forever looks, repeat until and so on. Also, C blocks dont need any square brackets! Dont do if[...]else[...]!!! That is wrong sytax!!! Do if ... else... instead. Place holder blocks should just be ... . Dont do anything else for placeholder blocks. All blocks that do comparison are treated like booleans, and they should therefore be in < >. For example, greated than, equal, smaller than, and, or and so on. Continuations of a C block can never be on the same line. You should not do if < > newline then you should instead do if < > then newline. For special hat blocks like 'when green flag clicked', you should not include any inputs, as the green flag is not an input. Inputs inside blocks dont need to be in any kind of bracket like < >, () or [] if they are already a normal block, that has a bracket. Dont forget that empty if statements still need a < > as a place holder for the sytax to be correct. Try to think in javascript, and then translate that to scratchblocks. Custom blocks cant take a dropdown as an input, they can only have booleans, text and numbers, so define sort list [thing v] is not possible, but [thing],(thing),<thing> are. Effects blocks have the effect name in a dropdown input. For looks effects blocks, its always the effect name and the word 'effect' after. When you are using the 'contains' boolean block, it only has a dropdown if its refering to a list, otherwise, it is a string input. If you pass a list through an input, you dont get an array or a useful format, in custom blocks that require a list for example, you should make the input be the name of the list, and then get its values in the custom block. List blocks can only select the list from a dropdown, so its not lenght of [list] its length of [list v]. Dropdowns can only be strings, not numbers, so (thing v) is not correct, but [thing v] is. Mathematical operations with use the operations and are always like this ([ v]of(number)), for example ([cos v]of(25)), it does not start with mathop though! Its only the function name in a dropdown! Operator blocks dont have to be inside another operator all the time, for example 'or' is <<>or<>>, not <<<>or<>>>, doing that just puts it in an empty boolean block that does nothing.Blocks like (10+10) or (10/10) dont exist, only ((10)+(10)) and ((10)/(10)). To run code inside a clone, you have to use the 'when i start as a clone' hat block. The 'touching' boolean block is structured like <touching[thing v]?>. When you refer to the position of the sprite, the variable name is x position, not just x. Hat blocks never end with 'end', NEVER!. The sprite size is not a variable block. If an item is inside a [ v] that means it is inside a drop down, for example if we have [wall v] the thing selected in the dropdown is wall. You dont need to add newlines after a hat block if the blocks under it connect to the hat block. Don't take into account the block prefixes from JSON input, for example 'data_addtolist' would be just 'addtolist'. If statements always end with 'then' on the first line. Comments cant be inside reporters, they can only be next to a command block. Define blocks dont have to end with 'end'. Clones can only run code under the 'when i start as a clone' hat block or from broadcasts, they cant run any code under the 'when green flag pressed' hat block.";
  const references =
    "Here are reference pieces of code:" +
    JSON.stringify({
      "Simple if then else statement": "if <  > then\n\nelse\n\nend\n",
      "Example of using booleans":
        "if <<mouse down?> and <(costume [number v]) = [1]>> then\n    stamp\nend",
      "Move 10 steps": "move (10) steps\n",
      "Say hi": "say [Hi]",
      "Color inputs": "set pen color to [#1540bf]",
      "Dropdown lists": "stop [all v]\n",
      "Round dropdown lists": "broadcast (start v)\n",
      "When green flag clicked": "when green flag clicked",
      "When this sprite clicked": "when this sprite clicked\n",
      "Turn right": "turn right () degrees",
      "C blocks":
        'C blocks must be closed by typing "end" after the last stack block inside it. However, C blocks at the end of a script will close automatically. For example:\n\nrepeat (10)\n    move (5) steps\n    stamp\nend\nrepeat (10)\n    move (10) steps\n    stamp',
      "Block comments":
        "Comments are created with two slashes: // comment after a block.\n\nmove (10) steps // is that too far?",
      "Custom blocks": "define jump\nrepeat (10)\n    change y by (4)\nend",
      "Custom block arguments":
        "Number, boolean, and string arguments can be added:\n\ndefine jump (height) <gravity on?> [message]",
      "Custom block inputs":
        "If one tries to use an input reporter without making a block definition first, it will appear as a variable.\n\nsay (height) But if it is put below a block definition, it will render as an input reporter:\n\ndefine jump (height)\nsay (input)",
      "List reporters":
        "If one tries to write a list reporter, it will look like a variable reporter, because the plugin has no way of telling them apart.\n\nsay (list of Scratch team members) However, if one has used the list in a list block inside the same <scratchblocks> tag, then it will render correctly:\n\nadd [mres] to [list of Scratch team members v]\nadd [paddle2see] to [list of Scratch team members v]\nadd [harakou] to [list of Scratch team members v]\nsay (list of Scratch team members) If a list block is not wanted or needed inside the same <scratchblocks> tag, :: list can be used:\n\nsay (list of Scratch team members:: list)",
      "Effect blocks":
        "change [effectname v] effect by (25)\nset [geffectnamehost v] effect to (25)",
      "Layer blocks": "go to [front v] layer\ngo [forward v] (5) layers",
      "Looks reporters":
        "(costume [number v])\n(costume [name v])\n(backdrop [number v])\n(backdrop [name v])",
      "Looks effect blocks":
        "change [color v] effect by ()\nchange [fisheye v] effect by ()\nchange [whirl v] effect by ()\nchange [pixelate v] effect by ()\nchange [mosaic v] effect by ()\nchange [brightness v] effect by ()\nchange [ghost v] effect by ()\nchange [saturation v] effect by ()\nchange [red v] effect by ()\nchange [green v] effect by ()\nchange [blue v] effect by ()\nchange [opaque v] effect by ()\nset [color v] effect to ()\nset [fisheye v] effect to ()\nset [whirl v] effect to ()\nset [pixelate v] effect to ()\nset [mosaic v] effect to ()\nset [brightness v] effect to ()\nset [ghost v] effect to ()\nset [saturation v] effect to ()\nset [red v] effect to ()\nset [green v] effect to ()\nset [blue v] effect to ()\nset [opaque v] effect to ()",
      "Reporter 'when' blocks": "when [loudness v] > ()\nwhen [timer v] > ()",
      "Control blocks":
        "if <> then\n...\nend\n\nif <> then\n...\nelse\n...\nend\n\nwait until <>\n\nrepeat until <>\n...\nend\n\nrepeat (0)\n...\nend",
      "Mathematical operation blocks":
        "([abs v]of(number))\n([floor v]of(number))\n([ceiling v]of(number))\n([sqrt v]of(number))\n([sin v]of(number))\n([cos v]of(number))\n([tan v]of(number))\n([asin v]of(number))\n([acos v]of(number))\n([atan v]of(number))\n([log v]of(number))",
      "Comparison blocks":
        "< (0) > (0) >\n< (0) < (0) >\n< (0) = (0) >\n< not < > >\n< < > and < > >\n< < > or < > >",
      "Other operator blocks":
        "<[]contains[]?>\n(()mod())\n(round())\n(pick random()to())\n(length of[])",
      "Hat blocks":
        "when green flag clicked\nwhen [space v] key pressed\nwhen this sprite clicked\nwhen backdrop switches to [backdrop1 v]\nwhen [loudness v] > (10)\nwhen i receive [message1 v]\nwhen i start as a clone",
      "Example hat block use":
        "when [right arrow v] key pressed\nif <touching [wall v]?> then\n\nelse\nchange x by (5)\nend",
      "Create clone": "create clone of (myself v)",
      "List command blocks":
        "add [thing] to [list v]\ndelete (1) of [list v]\ndelete all of [list v]\ninsert [thing] at (1) of [list v]\nreplace item (1) of [list v] with [thing]\nshow list [list v]\nhide list [list v]",
      "List reporter blocks": "(item (1) of [list v])\n(length of [list v])",
      "Sensing blocks": "<touching [sprite v]",
    });
  const context = guidelines + syntax + references;
  let history = [];

  //css stuff

  const basicLabelStyle = `
      color: var(--text-primary, hsla(225, 15%, 40%, 1));
      padding: 5px;
      `;
  const basicWindowStyle =
    `
    max-width: ` +
    screen.width * 0.8 +
    "px;" +
    `
    max-height: ` +
    screen.height * 0.8 +
    "px;" +
    `
    width: 300px;
    height: 400px;
    position: absolute;
    top: 50px;
    min-width: 300px;
    min-height: 400px;
    background-color: var(--ui-secondary, hsla(215, 75%, 95%, 1));
    border: 1px solid var(--ui-primary, hsla(215, 100%, 95%, 1));
    z-index: 1000;
    resize: both;
    overflow: auto;
    flex-direction: column;
    color: black;
    border-radius: 5px;
    display: flex;
    box-shadow: 0px 0px 5px 0px #00000045;
  `;
  var accentColorCSS;
  if (isPM) {
    accentColorCSS = "background-color: rgb(0 195 255 / 73%);";
  } else {
    accentColorCSS = "background-color: var(--menu-bar-background);";
  }
  const basicTitlebarStyle =
    `
    cursor: grab;
    min-height: 20px;
    font-weight: bold;
    width: 100%;
    height: 20px;
    position: sticky;
    font-size: 12px;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;` +
    accentColorCSS +
    `
  `;
  const basicButtonStyle =
    `
    border-color: var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15));
    border-style: solid;
    border-width: 1px;
    color: white;
    border-radius: 5px;
    margin: 5px;
    padding: 5px 10px;
    font-size: 12px
    color: white;
    ` +
    accentColorCSS +
    `
  `;

  const basicInputStyle = `
    border-color: var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15));
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    width: 90%;
    height: 25px;
    outline: none;
    color: var(--text-primary, hsla(225, 15%, 40%, 1));
    background-color: var(--ui-primary, hsla(215, 100%, 95%, 1));
  `;
  function addElementClickEffect(button) {
    button.addEventListener("mousedown", (event) => {
      button.style.transform = "scale(0.95)";
      button.style.transition = "transform 0.05s ease";
    });

    button.addEventListener("mouseup", (event) => {
      button.style.transform = "scale(1)";
      button.style.transition = "transform 0.1s ease";
      setTimeout(() => {
        button.style.transition = "none";
      }, 100);
    });

    button.addEventListener("mouseout", (event) => {
      button.style.transform = "scale(1)";
    });
  }
  function showWindow() {
    if (!windowCreated) {
      createWindow();
      windowCreated = true;
    }
  }
  function hideWindow() {
    if (mainWindow) {
      mainWindow.style.display = "none";
    }
  }
  var promptInput;
  var responseArea;
  var titleBar;
  var sendContextCheck;
  function createWindow() {
    let mainWindow = document.createElement("div");
    mainWindow.id = "main-window";
    mainWindow.style.cssText = basicWindowStyle;
    document.body.appendChild(mainWindow);

    titleBar = document.createElement("div");
    titleBar.id = "main-title-bar";
    titleBar.textContent = aiName + " Chat";
    titleBar.style.cssText = basicTitlebarStyle;
    mainWindow.appendChild(titleBar);
    makeDraggable(mainWindow, titleBar);

    responseArea = document.createElement("div");
    responseArea.style.cssText = `
      padding: 10px;
      flex-grow: 1;
      overflow-x: auto;
      overflow-y: auto;
      color: var(--text-primary, hsla(225, 15%, 40%, 1));
    `;

    mainWindow.appendChild(responseArea);
    let inputContainer = document.createElement("div");
    inputContainer.style.cssText = `
      display: flex;
      align-items: center;
      flex-direction: column;
      top: 999999999px;
      background-color: var(--ui-primary, white);
      padding: 5px;
      position: sticky;
      padding-top: 10px;
    `;
    mainWindow.appendChild(inputContainer);
    let buttonContainer2 = document.createElement("div");
    buttonContainer2.style.cssText = `
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    `;
    inputContainer.appendChild(buttonContainer2);
    promptInput = document.createElement("input");
    promptInput.type = "text";
    promptInput.placeholder = "Type here to ask for help";
    promptInput.style.cssText = basicInputStyle;
    buttonContainer2.appendChild(promptInput);
    addElementClickEffect(promptInput);
    promptInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        sendButton.onclick();
        event.preventDefault();
      }
    });

    let buttonContainer = document.createElement("div");
    buttonContainer.style.cssText = buttonContainer2.style.cssText;
    inputContainer.appendChild(buttonContainer);
    let checkLaber = document.createElement("label");
    checkLaber.textContent = "Read current sprite:";
    checkLaber.style.cssText = basicLabelStyle;
    buttonContainer.appendChild(checkLaber);

    sendContextCheck = document.createElement("input");
    sendContextCheck.type = "checkbox";
    sendContextCheck.style.cssText = basicButtonStyle;
    sendContextCheck.style.width = "25px";
    sendContextCheck.style.height = "25px";
    sendContextCheck.style.cursor = "pointer";
    buttonContainer.appendChild(sendContextCheck);
    sendContextCheck.checked = true;
    addElementClickEffect(sendContextCheck);

    let sendButton = document.createElement("button");
    sendButton.textContent = ">";
    sendButton.style.cssText = basicButtonStyle;
    buttonContainer2.appendChild(sendButton);
    addElementClickEffect(sendButton);
    sendButton.onclick = () => {
      const prompt = promptInput.value;
      getGeminiResponse(prompt);
      promptInput.value = "";
      promptInput.focus();
    };
    let settingsButton = document.createElement("button");
    settingsButton.textContent = "@";
    settingsButton.style.cssText = `
        border-color: transparent;
        bottom: 999999px;
        width: 20px;
        height: 20px;
        position: sticky;
        font-size: 12px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15));`;
    mainWindow.appendChild(settingsButton);
    addElementClickEffect(settingsButton);
    settingsButton.onclick = () => {
      openSettingsWindow();
    };
  }
  let enableExperimental;
  if (savedSettings != undefined) {
    var enabledExperimental = true == savedSettings.experimental;
  } else {
    var enabledExperimental = false;
  }
  function openSettingsWindow() {
    if (settingsOpen) return;
    settingsOpen = true;
    let settingsWindow = document.createElement("div");
    settingsWindow.id = "settings-window";
    settingsWindow.style.cssText = basicWindowStyle;
    document.body.appendChild(settingsWindow);

    let settingsTitleBar = document.createElement("div");
    settingsTitleBar.id = "settings-title-bar";
    settingsTitleBar.style.cssText = basicTitlebarStyle;
    //why does this fix the sticky position not working...this is really stupid
    settingsTitleBar.style.top = "0";
    settingsTitleBar.textContent = aiName + " Settings";
    settingsWindow.appendChild(settingsTitleBar);

    //fix styles? nahhhhhh
    //do this dumb shit instead :tro:
    function makeDivider() {
      let divider = document.createElement("label");
      divider.textContent = "M";
      divider.style.cssText = basicLabelStyle;
      divider.style.color = "transparent";
      settingsWindow.appendChild(divider);
    }
    let apiKeyLabel = document.createElement("label");
    apiKeyLabel.textContent = "API Key:";
    apiKeyLabel.style.cssText = basicLabelStyle;
    settingsWindow.appendChild(apiKeyLabel);

    let apiKeyInput = document.createElement("input");
    apiKeyInput.type = "text";
    apiKeyInput.style.cssText = basicInputStyle;
    settingsWindow.appendChild(apiKeyInput);
    makeDivider();

    let historyLengthLabel = document.createElement("label");
    historyLengthLabel.textContent = "Max History Length:";
    historyLengthLabel.style.cssText = basicLabelStyle;
    settingsWindow.appendChild(historyLengthLabel);
    //!
    let historyLengthWarningLabel = document.createElement("label");
    historyLengthWarningLabel.textContent = "(Recommended: 10)";
    historyLengthWarningLabel.style.cssText = basicLabelStyle;
    settingsWindow.appendChild(historyLengthWarningLabel);

    let historyLengthInput = document.createElement("input");
    historyLengthInput.type = "number";
    historyLengthInput.style.cssText = basicInputStyle;
    settingsWindow.appendChild(historyLengthInput);
    makeDivider();

    let styleLabel = document.createElement("label");
    styleLabel.textContent = "Scratchblocks Style:";
    styleLabel.style.cssText = basicLabelStyle;
    settingsWindow.appendChild(styleLabel);

    let styleSelect = document.createElement("select");
    styleSelect.style.cssText = basicInputStyle;
    const stylesList = ["scratch2", "scratch3", "scratch3-high-contrast"];
    stylesList.forEach((style) => {
      const option = document.createElement("option");
      option.value = style;
      option.textContent = style;
      styleSelect.appendChild(option);
    });
    settingsWindow.appendChild(styleSelect);
    makeDivider();

    let modelLabel = document.createElement("label");
    modelLabel.textContent = "Gemini model:";
    modelLabel.style.cssText = basicLabelStyle;
    settingsWindow.appendChild(modelLabel);

    let modelSelect = document.createElement("select");
    modelSelect.style.cssText = basicInputStyle;
    // should i use realModelNames instead by default...? i dont know...
    // maybe if the api gets better at giving actual working model names LMAO
    let modelList;
    if (enabledExperimental) {
      modelList = realModelNames;
    } else {
      //tested models go here
      modelList = [
        "gemini-2.0-flash",
        "gemini-2.0-flash-lite",
        "gemini-1.5-flash",
      ];
    }

    modelList.forEach((style) => {
      const option = document.createElement("option");
      option.value = style;
      option.textContent = style;
      modelSelect.appendChild(option);
    });
    settingsWindow.appendChild(modelSelect);
    makeDivider();
    let enableExperimentalLabel = document.createElement("label");
    enableExperimentalLabel.textContent = "Display experimental models:";
    enableExperimentalLabel.style.cssText = basicLabelStyle;
    settingsWindow.appendChild(enableExperimentalLabel);

    //implement saving for this vvv
    enableExperimental = document.createElement("input");
    enableExperimental.type = "checkbox";
    enableExperimental.style.cssText = basicButtonStyle;
    enableExperimental.style.width = "25px";
    enableExperimental.style.height = "25px";
    enableExperimental.style.cursor = "pointer";
    settingsWindow.appendChild(enableExperimental);
    enableExperimental.checked = enabledExperimental;
    addElementClickEffect(sendContextCheck);
    let requiresReopenLabel = document.createElement("label");
    requiresReopenLabel.textContent = "(requires to re-open the settings)";
    requiresReopenLabel.style.cssText = basicLabelStyle;
    settingsWindow.appendChild(requiresReopenLabel);
    makeDivider();

    makeDraggable(settingsWindow, settingsTitleBar);

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.style.cssText = basicButtonStyle;
    settingsWindow.appendChild(saveButton);
    addElementClickEffect(saveButton);
    saveButton.onclick = () => {
      enabledExperimental = enableExperimental.checked;
      apiKey = apiKeyInput.value;
      let historyLength = parseInt(historyLengthInput.value);
      if (isNaN(historyLength)) {
        historyLength = 5;
      }
      geminiVersion = modelSelect.value;
      maxHistoryLength = historyLength;
      selectedStyle = styleSelect.value;
      fixBlockStyleSize();
      localStorage.setItem(
        "blockaigeminiext.settings",
        JSON.stringify({
          key: apiKey,
          style: selectedStyle,
          historySize: maxHistoryLength,
          version: geminiVersion,
          experimental: enabledExperimental,
        }),
      );
      settingsOpen = false;
      settingsWindow.remove();
    };

    let defaultsButton = document.createElement("button");
    defaultsButton.textContent = "Reset to default";
    defaultsButton.style.cssText = basicButtonStyle;
    settingsWindow.appendChild(defaultsButton);
    addElementClickEffect(defaultsButton);
    defaultsButton.onclick = () => {
      setDefaultSettings();
      apiKeyInput.value = apiKey;
      historyLengthInput.value = maxHistoryLength;
      styleSelect.value = selectedStyle;
      modelSelect.value = geminiVersion;
    };
    let closeSettings = document.createElement("button");
    closeSettings.textContent = "Cancel";
    closeSettings.style.cssText = basicButtonStyle;
    settingsWindow.appendChild(closeSettings);
    addElementClickEffect(closeSettings);
    closeSettings.onclick = () => {
      settingsOpen = false;
      settingsWindow.remove();
    };
    styleSelect.value = selectedStyle;
    apiKeyInput.value = apiKey;
    historyLengthInput.value = maxHistoryLength;
    modelSelect.value = geminiVersion;
  }
  function makeDraggable(element, handle) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    handle.onmousedown = dragMouseDown;

    // i stole this and slightly modified it. I dont actually know how it works lmao
    function dragMouseDown(e) {
      if (e.button !== 0) return;
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.onclick
      ) {
        return;
      }
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
      //fixes a weird css quirk. This is very stupid code
      //min fix
      if (
        parseInt(element.style.height, 10) <
        parseInt(element.style.minHeight, 10)
      ) {
        element.style.height = element.style.minHeight;
      }
      if (
        parseInt(element.style.width, 10) < parseInt(element.style.minWidth, 10)
      ) {
        element.style.width = element.style.minWidth;
      }
      //max fix
      if (
        parseInt(element.style.height, 10) >
        parseInt(element.style.maxHeight, 10)
      ) {
        element.style.height = element.style.maxHeight;
      }
      if (
        parseInt(element.style.width, 10) > parseInt(element.style.maxWidth, 10)
      ) {
        element.style.width = element.style.maxWidth;
      }
    }

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top =
        Math.min(
          Math.max(element.offsetTop - pos2, 0),
          window.innerHeight - parseInt(element.style.height, 10) - 5,
        ) + "px";
      element.style.left =
        Math.min(
          Math.max(element.offsetLeft - pos1, 0),
          window.innerWidth - parseInt(element.style.width, 10) - 5,
        ) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  async function getGeminiResponse(prompt) {
    const style = document.createElement("style");
    style.textContent = `
        .fade-in {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .fade-in.loaded {
          opacity: 1;
        }
      `;
    document.head.appendChild(style);

    if (!apiKey) {
      responseArea.textContent =
        "API Key not set. Set your Key in the settings.";
      return;
    }
    if (history.length > maxHistoryLength) {
      history.shift();
    }
    console.log(sendContextCheck.checked);
    let uploadUrl;
    let formData;
    if (sendContextCheck.checked) {
      let scriptJson;
      try {
        scriptJson = vm
          .toJSON(vm.editingTarget.id)
          .replace(/control_/i, "")
          .replace(/data_/i, "")
          .replace(/event_/i, "")
          .replace(/looks_/i, "")
          .replace(/motion_/i, "")
          .replace(/operators_/i, "")
          .replace(/procedures_/i, "")
          .replace(/sensing_/i, "")
          .replace(/sound_/i, "");
      } catch (e) {
        console.error("Error getting script JSON:", e);
        generatingTemp = document.getElementById("generating-temp");
        if (generatingTemp) {
          generatingTemp.remove();
        }
        responseArea.innerHTML += `<div><b>${aiName}:</b> Error obtaining script data. Could not include it in the request.</div>`;
        return;
      }

      const scriptBlob = new Blob([scriptJson], { type: "application/json" });
      const scriptFile = new File([scriptBlob], "currentSprite.json", {
        type: "text/plain",
      });

      formData = new FormData();
      formData.append("file", scriptFile);

      uploadUrl = `https://generativelanguage.googleapis.com/upload/v1beta/files?key=${apiKey}`;
    }

    let uploadedFileName;
    const fullPrompt =
      "HasFileAttaced:" +
      sendContextCheck.checked +
      "\n" +
      context +
      " This is your conversation history, do not repeat it in your response!!!: " +
      history +
      " " +
      prompt;

    try {
      let uploadResult;
      responseArea.innerHTML +=
        "<b>You:</b> " +
        promptInput.value +
        "<br><div id='generating-temp'></div>";
      if (sendContextCheck.checked) {
        document.getElementById("generating-temp").textContent =
          "Reading sprite...";
        const uploadResponse = await fetch(uploadUrl, {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          throw new Error(
            `Upload failed: ${uploadResponse.status} ${uploadResponse.statusText} - ${errorText}`,
          );
        }

        uploadResult = await uploadResponse.json();
        if (!uploadResult.file || !uploadResult.file.name) {
          throw new Error("Upload response missing file name.");
        }
        uploadedFileName = uploadResult.file.name;
      }
      let data;
      let generationConfig;
      if (!geminiVersion.includes("2.5")) {
        generationConfig = { enableEnhancedCivicAnswers: true };
      } else {
        generationConfig = {};
      }

      if (sendContextCheck.checked) {
        data = {
          generationConfig: generationConfig,
          contents: [
            {
              parts: [
                { text: fullPrompt },
                {
                  fileData: {
                    mimeType: "text/plain",
                    fileUri: uploadResult.file.uri,
                  },
                },
              ],
            },
          ],
        };
      } else {
        data = {
          generationConfig: generationConfig,
          contents: [
            {
              parts: [{ text: fullPrompt }],
            },
          ],
        };
      }

      document.getElementById("generating-temp").textContent =
        "Generating response...";

      const geminiUrl =
        `https://generativelanguage.googleapis.com/v1beta/models/` +
        geminiVersion +
        `:generateContent?key=${apiKey}`;

      const apiResponse = await fetch(geminiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await apiResponse.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        titleBar.textContent =
          aiName +
          " Chat - " +
          geminiVersion.replace(/gemini-/i, "").replace(/preview-/i, "") +
          " (" +
          Intl.NumberFormat("en", { notation: "compact" }).format(
            result.usageMetadata.totalTokenCount,
          ) +
          "/1M)";
        const responseText = result.candidates[0].content.parts[0].text;
        const responseTextDecoded = responseText.replace(
          /\\u([0-9a-fA-F]{4})/g,
          (match, group1) => String.fromCharCode(parseInt(group1, 16)),
        );
        const responseId = `response-${Date.now()}`;
        let processedResponseText = responseTextDecoded;
        document.getElementById("generating-temp").remove();
        const scratchCodeRegex = /```scratch\n([\s\S]*?)```/g;
        let match;
        let scratchblocksHTML = "";

        const waitForScratchblocks = () => {
          return new Promise((resolve) => {
            const checkInterval = setInterval(() => {
              if (scratchblocks && scratchblocks.renderMatching) {
                clearInterval(checkInterval);
                resolve();
              }
            }, 100);
          });
        };

        await waitForScratchblocks();

        while ((match = scratchCodeRegex.exec(responseText)) !== null) {
          const scratchCode = match[1];
          console.log(scratchCode);
          const pre = document.createElement("pre");
          pre.innerHTML = scratchCode
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
          scratchblocksHTML += pre.outerHTML;
          try {
            if (scratchblocks && scratchblocks.renderMatching) {
            }
            processedResponseText = processedResponseText.replace(match[0], "");
          } catch (e) {
            console.error("Error rendering scratchblocks", e);
          }
        }
        processedResponseText = processedResponseText;
        responseArea.innerHTML +=
          `<div class="${responseId} fade-in\"><b>` +
          aiName +
          `:</b> ${processedResponseText.replace(/([.?!])\\s*(?=[A-Z])/g, "$1<br>")}<br>${scratchblocksHTML}</div>`;
        history.push(
          "<b>Prompt:</b> " +
            prompt +
            "/n" +
            "<b>" +
            aiName +
            ":</b>" +
            responseText,
        );
        const newResponseDiv = responseArea.querySelector(`.${responseId}`);
        if (newResponseDiv) {
          setTimeout(() => {
            newResponseDiv.classList.add("loaded");
            if (scratchblocks && scratchblocks.renderMatching) {
              scratchblocks.renderMatching(`.${responseId} pre`, {
                style: selectedStyle,
                scale: blockStyleSize,
              });
            }
          }, 0);
          responseArea.scrollTop = responseArea.scrollHeight;
        }
      } else {
        responseArea.textContent = "No response from Gemini API.";
      }
    } catch (apiError) {
      responseArea.textContent = `Error fetching response from Gemini API: ${apiError.message}`;
      console.error(responseArea.textContent);
    }
  }
  if (
    (typeof scaffolding == "undefined") &
      (window.location.pathname == "/editor.html") ||
    window.location.pathname == "/editor" ||
    window.location.pathname == "/editor"
  ) {
    showWindow();
  }
  class pangpalgemini {
    getInfo() {
      return {
        id: "pangpalgemini",
        name: "Block AI",
        menuIconURI: icon,
        blocks: [],
      };
    }
  }
  Scratch.extensions.register(new pangpalgemini());
})();
