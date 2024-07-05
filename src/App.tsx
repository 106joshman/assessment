import { useState } from "react";
import "./App.css";
import { VisibilityOff, Visibility } from "@mui/icons-material";
// COMPONENTS
import SvgContainer from "./components/SvgContainer";
// SVGs
import Notification from "./assets/notification.svg";
import Scan from "./assets/scan.svg";
import Send from "./assets/send.svg";
import Receive from "./assets/receive.svg";
import COIN from "./assets/ETH.svg";
import ModalTwo from "./components/ModalTwo";

function App() {
  const [modalOne, setModalOne] = useState(true);
  const [modalTwo, setModalTwo] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [showBal, setShowBal] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBal((prevShowBalance) => !prevShowBalance);
  };

  const openModalTwo = () => {
    setModalOne(false);
    setModalTwo(true);
  };

  const handleBack = () => {
    setModalTwo(false);
    setModalOne(true);
  };
  return (
    <>
      {/* MODAL */}
      {modalOne && (
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className="popModal">
            <div className="modalWrapper">
              <div className="modal">
                {/* TOP */}
                <div className="top">
                  <select>
                    <option value="Wallet name 1">Wallet name 1</option>
                    <option value="Wallet name 2">Wallet name 2</option>
                    <option value="Wallet name 3">Wallet name 3</option>
                  </select>
                  <div className="top-icon">
                    <SvgContainer src={Scan} width={22} height={22} />
                    <SvgContainer src={Notification} width={22} height={22} />
                  </div>
                </div>

                <div className="mid">
                  <div className="left">
                    <p>Total Balance</p>
                    <h4>{showBal ? "$24,498.10" : "*******"}</h4>
                    <button
                      style={{ color: "#9D9D9D" }}
                      onClick={toggleBalanceVisibility}
                    >
                      Hide Balance{" "}
                      {showBal ? (
                        <VisibilityOff sx={{ fontSize: "16px" }} />
                      ) : (
                        <Visibility sx={{ fontSize: "16px" }} />
                      )}
                    </button>
                  </div>
                  <div className="right">
                    <button onClick={openModalTwo}>
                      <SvgContainer src={Send} width={"70%"} /> Send
                    </button>
                    <button>
                      <SvgContainer src={Receive} width={"70%"} />
                      Receive
                    </button>
                  </div>
                </div>

                <div className="last">
                  <ul className="tabList">
                    <li
                      className={
                        activeTab === "tab1" ? "activeTab" : "notActivetab"
                      }
                      onClick={() => setActiveTab("tab1")}
                    >
                      Assets
                    </li>
                    <li
                      className={
                        activeTab === "tab2" ? "activeTab" : "notActivetab"
                      }
                      onClick={() => setActiveTab("tab2")}
                    >
                      History
                    </li>
                    <li
                      className={
                        activeTab === "tab3" ? "activeTab" : "notActivetab"
                      }
                      onClick={() => setActiveTab("tab3")}
                    >
                      NFTs
                    </li>
                  </ul>

                  {activeTab === "tab1" ? (
                    <div>
                      {[...Array(4)].map((_, index) => (
                        <div className="tableRow" key={index}>
                          <div className="">
                            <div className="left-row">
                              <div className="left-img ">
                                <SvgContainer src={COIN} width={"70%"} />
                              </div>
                              <div className="left-txt">
                                <p className="left-up">Etherium</p>
                                <div className="left-down">
                                  <span
                                    style={{
                                      color: "#9D9D9D",
                                      fontSize: "12px",
                                      fontWeight: 500,
                                    }}
                                  >
                                    $1,2389
                                  </span>
                                  <span
                                    style={{
                                      color: "#37B983",
                                      fontWeight: 500,
                                      fontSize: "12px",
                                    }}
                                  >
                                    0.23%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="">
                            <p className="">0.03242142</p>
                            <p
                              style={{
                                color: "#9D9D9D",
                                fontSize: "12px",
                                textAlign: "right",
                                fontWeight: 500,
                                marginTop: "5px",
                              }}
                            >
                              $ 845
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    "No Action"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalTwo && <ModalTwo goBack={handleBack} />}
    </>
  );
}

export default App;
