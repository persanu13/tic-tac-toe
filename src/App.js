import "./App.css";
import { useState } from "react";
import anime from "animejs";

const Square = ({ info, onClick }) => {
  const style = info === "X" ? "square x" : "square o";
  return (
    <button className={style} onClick={onClick}>
      {info}
    </button>
  );
};
const Border = ({ board, onClick }) => {
  return (
    <div className='board'>
      {board.map((value, key) => {
        return (
          <Square
            info={value}
            key={key}
            onClick={() => {
              onClick(key);
            }}
          />
        );
      })}
    </div>
  );
};

const ScoreBar = ({ isX, score }) => {
  return (
    <div className='scoreBar' id={isX ? "x" : "o"}>
      <span className='x'>X-{score[0]}</span>
      <span className='o'>O-{score[1]}</span>
    </div>
  );
};

const Mazgalit = ({ win }) => {
  if (win === "remiza") {
    anime.set(".mazgalitSVG", {
      display: "block",
    });
    anime({
      targets: ".mazgalitSVG path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1600,
    });
  }
  return (
    <svg
      className='mazgalitSVG'
      width='396'
      height='294'
      viewBox='0 0 396 294'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M52.4052 3.82497C67.2268 3.82497 81.8701 5.546 96.6623 6.40663C149.911 9.50476 203.797 5.58013 257.095 5.48461C294.528 5.41752 331.963 5.48461 369.397 5.48461C372.154 5.48461 393.357 3.71409 380 6.86765C357.809 12.1073 335.309 15.8975 313.061 20.8824C269.207 30.7087 226.508 44.9775 184.255 60.1606C128.322 80.2593 74.4987 105.394 20.3187 129.681C18.9255 130.306 15.2905 132.547 16.815 132.632C20.2221 132.821 32.0532 130.749 33.5037 130.511C53.7359 127.192 73.7584 122.808 93.8962 118.986C140.314 110.175 186.319 105.974 233.491 106.723C236.489 106.77 242.922 107.032 236.994 110.411C216.227 122.248 192.792 130.559 171.162 140.653C144.328 153.176 117.638 165.943 92.2366 181.222C76.7487 190.539 62.2811 201.737 46.5042 210.543C34.6319 217.169 59.5151 208.342 61.9942 207.777C121.344 194.254 181.936 185.836 241.328 172.002C274.587 164.255 310.856 160.81 343.027 149.228C362.474 142.227 302.06 155.492 282.174 161.122C229.788 175.953 175.97 186.742 122.848 198.649C122.369 198.756 106.415 203.787 109.847 204.55C119.758 206.752 133.055 198.611 142.118 196.436C178.57 187.687 217.293 185.665 254.513 182.421C277.738 180.397 347.716 179.747 324.402 179.747C297.262 179.747 270.188 188.043 244.371 195.606C185.759 212.776 130.577 235.287 74.3493 258.672C60.4652 264.447 46.0731 269.673 32.8582 276.929C32.0924 277.349 30.3636 278.7 31.1986 278.957C33.813 279.761 41.2542 273.982 43.1849 273.056C56.3475 266.742 70.7534 263.324 84.8604 259.871C127.867 249.345 171.217 242.923 215.05 237.097C218.794 236.599 254.719 236.328 256.449 230.274C257.883 225.254 242.884 214.63 239.668 211.926C231.353 204.933 222.404 199.235 213.022 193.762C185.713 177.832 158.15 162.104 130.224 147.292C117.108 140.335 103.525 133.436 89.4705 128.483C86.3438 127.381 76.3818 126.639 79.6971 126.639C108.092 126.639 135.579 124.8 163.786 121.291C207.981 115.793 253.552 112.07 297.018 101.928C299.844 101.269 313.163 100.771 306.146 94.7365C300.194 89.6175 290.877 88.5189 283.464 87.5448C267.849 85.4925 252.121 83.0533 236.441 81.6438C187.298 77.2264 137.733 82.3945 88.7329 86.0695C79.1063 86.7915 50.1277 86.8071 59.7813 86.8071C81.9541 86.8071 105.844 77.1818 127.181 71.9625C176.935 59.7926 227.022 48.9271 276.734 36.649C288.477 33.7487 299.862 29.8062 311.217 25.6769C314.003 24.6638 320.092 22.9433 314.076 21.2512C291.639 14.9409 264.635 18.2791 241.789 18.9462C225 19.4363 208.51 22.0495 191.907 24.3861C183.31 25.5961 157.316 27.06 165.999 27.06C207.378 27.06 247.057 14.457 287.89 9.17271C300.488 7.54233 292.299 7.00212 283.096 7.14425C210.407 8.26685 134.983 23.3452 66.0511 46.1459C60.9097 47.8465 3.16907 65.2121 3.16907 67.7212C3.16907 69.0215 52.1572 62.6739 55.54 62.2813C125.43 54.1691 197.408 58.4722 267.606 58.5932C299.447 58.6481 331.312 58.837 363.127 60.2528C366.798 60.4162 388.699 58.9172 392.355 64.402C393.782 66.5422 367.93 71.5938 367.553 71.6859C317.815 83.8442 265.589 93.2538 219.66 116.681C208.263 122.494 197.285 128.838 186.375 135.49C184.456 136.66 179.769 138.39 178.722 140.746C174.427 150.41 194.244 152.467 198.638 152.824C222.15 154.736 245.402 148.166 268.712 146.185C276.613 145.514 300.215 142.548 292.316 143.235C278.049 144.476 263.44 149.551 249.903 153.562C217.485 163.167 183.854 172.431 153.275 187.123C151.975 187.748 116.845 210.581 123.217 211.188C137.57 212.555 152.827 205.698 166.644 203.167C187.946 199.264 209.333 199.663 230.909 199.663C251.63 199.663 272.631 198.825 293.146 202.337C294.341 202.541 322.393 207.883 318.594 210.819C309.868 217.562 296.429 220.645 286.23 223.82C255.285 233.452 224.856 242.794 195.503 256.828C178.734 264.846 161.189 274.362 147.927 287.624C140.258 295.293 166.011 286.78 167.658 286.333C198.524 277.968 229.901 271.184 260.506 261.9C264.845 260.583 292.761 251.796 291.394 251.112'
      />
    </svg>
  );
};

const Linie = ({ win, winSituation }) => {
  if (win === "X" || win === "O") {
    switch (winSituation) {
      case 0:
        anime.set(".linieSVG", {
          display: "block",
          rotateZ: "-90deg",
          translateX: "70px",
          translateY: "0",
          scaleX: "1.2",
          scaleY: "1",
        });
        break;
      case 1:
        anime.set(".linieSVG", {
          display: "block",
          rotateZ: "-90deg",
          translateX: "-5px",
          translateY: "0px",
          scaleX: "1.2",
          scaleY: "1",
        });
        break;
      case 2:
        anime.set(".linieSVG", {
          display: "block",
          rotateZ: "-90deg",
          translateX: "-90px",
          translateY: "0px",
          scaleX: "1.2",
          scaleY: "1",
        });
        break;
      case 3:
        anime.set(".linieSVG", {
          display: "block",
          rotateZ: "0deg",
          translateX: "-80px",
          translateY: "5px",
          scaleX: "1.2",
          scaleY: "1",
        });
        break;
      case 4:
        anime.set(".linieSVG", {
          display: "block",
          rotateZ: "0deg",
          translateX: "0px",
          translateY: "5px",
          scaleX: "1.2",
          scaleY: "1",
        });
        break;
      case 5:
        anime.set(".linieSVG", {
          display: "block",
          rotateZ: "0deg",
          translateX: "80px",
          translateY: "5px",
          scaleX: "1.2",
          scaleY: "1",
        });
        break;
      case 6:
        anime.set(".linieSVG", {
          display: "block",
          rotateZ: "-45deg",
          translateX: "-2px",
          translateY: "5px",
          scaleX: "1.2",
          scaleY: "1.35",
        });
        break;
      case 7:
        anime.set(".linieSVG", {
          display: "block",
          rotateZ: "45deg",
          translateX: "2px",
          translateY: "5px",
          scaleX: "1.2",
          scaleY: "1.35",
        });
        break;
    }
    anime({
      targets: ".linieSVG path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 400,
    });
  }
  return (
    <svg
      className='linieSVG'
      width='24'
      height='362'
      viewBox='0 0 24 362'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.99999 5C5.99999 17.5119 5.06209 30.3868 6.77777 42.7778C8.37517 54.3146 9.74211 65.8996 11.2222 77.4444C12.5576 87.8604 12.0032 98.4223 13 108.889C16.2589 143.107 16 177.826 16 212.222C16 244.899 19 277.366 19 310C19 325.667 19 341.333 19 357'
        stroke={win === "X" ? "var(--colorX)" : "var(--colorO)"}
      />
    </svg>
  );
};

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setX] = useState(true);
  const [win, setWin] = useState(false);
  const [score, setScore] = useState([0, 0]);
  const [winSituation, setWinSituation] = useState([null]);
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //functi
  const isWin = (board) => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];
      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        const new_score = [score[0], score[1]];
        board[x] === "X" ? new_score[0]++ : new_score[1]++;
        setScore(new_score);
        setWinSituation(i);
        return board[x];
      }
    }
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) return false;
    }
    return "remiza";
  };

  const click = (id) => {
    if (!win) {
      const updateBoard = board.map((value, idBoard) => {
        if (id === idBoard && value === null) {
          setX(!isX);
          return isX ? "X" : "O";
        } else {
          return value;
        }
      });
      setBoard(updateBoard);
      setWin(isWin(updateBoard));
    }
  };
  const reset = () => {
    setBoard(Array(9).fill(null));
    setWin(false);
    anime.set(".linieSVG", {
      display: "none",
      rotateZ: "0deg",
      translateX: "0px",
      translateY: "0px",
      scaleX: "1",
      scaleY: "1",
    });
    anime.set(".mazgalitSVG", {
      display: "none",
    });
  };
  //return
  return (
    <div className='app'>
      
      <ScoreBar isX={isX} score={score} />
      <Border board={board} onClick={click} />
      <button className='reset' onClick={reset}>
        RESET
      </button>
      <Linie win={win} winSituation={winSituation} />
      <Mazgalit win={win} />
    </div>
  );
}
