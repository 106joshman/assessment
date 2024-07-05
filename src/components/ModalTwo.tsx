import { useState } from "react";
import SvgContainer from "./SvgContainer";
import COIN from "../assets/ETH.svg";
import Back from "../assets/go-back.svg";
import {
  CustomSelectField,
  InputField,
  PrefixSuffixInputField,
} from "./InputFields";

export default function ModalTwo({ goBack }: any) {
  const [activeTab, setActiveTab] = useState("tab1");

  const [formField, setFormField] = useState({
    address: "",
    network: "",
    amount: "",
    username: "",
  });

  const handleChange = (name: string, value: any) => {
    setFormField((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="popModal">
          <div className="modalWrapper">
            <div className="modal">
              <div className="modal-2-top">
                <button className="backBttn" onClick={goBack}>
                  <SvgContainer src={Back} /> Back
                </button>

                <h3>Send Asset</h3>

                <SvgContainer src={COIN} width={32} />
              </div>
              <div className="modal-2-tab">
                <h2>Send Ethereum</h2>

                <ul className="">
                  <li
                    className={
                      activeTab === "tab1"
                        ? "modal-2-activeTab"
                        : "modal-2-notActivetab"
                    }
                    onClick={() => setActiveTab("tab1")}
                  >
                    Wallet Address
                  </li>
                  <li
                    className={
                      activeTab === "tab2"
                        ? "modal-2-activeTab"
                        : "modal-2-notActivetab"
                    }
                    onClick={() => setActiveTab("tab2")}
                  >
                    User Name
                  </li>
                </ul>
                <form className="form" method="post">
                  {activeTab === "tab1" ? (
                    <div className="form">
                      <InputField
                        label={"Ethereum Address"}
                        name={"address"}
                        value={formField.address}
                        type={"text"}
                        onChange={(e: any) =>
                          handleChange("address", e.target.value)
                        }
                        placeholder={"Paste wallet address"}
                      />

                      <CustomSelectField
                        options={[
                          { label: "MTN", value: "MTN" },
                          { label: "GLO", value: "GLO" },
                        ]}
                        label={"Choose Network"}
                        name={"network"}
                        value={formField.network}
                        onChange={(e: any) =>
                          handleChange("network", e.target.value)
                        }
                      />
                    </div>
                  ) : (
                    <div className="">
                      <InputField
                        label={"Enter Zeus Username"}
                        name={"username"}
                        value={formField.username}
                        type={"text"}
                        onChange={(e: any) =>
                          handleChange("username", e.target.value)
                        }
                        placeholder={"Enter your username"}
                      />
                    </div>
                  )}
                  <PrefixSuffixInputField
                    name={"amount"}
                    label={"Amount"}
                    value={formField.amount}
                    onChange={(e: any) =>
                      handleChange("amount", e.target.value)
                    }
                    placeholder={""}
                    showDuration
                    duration="MAX"
                  />
                </form>
              </div>

              <div className="footer">
                <div className="bttnGrp">
                  <button>25%</button>
                  <button>50%</button>
                  <button>75%</button>
                  <button>100%</button>
                </div>
                <p className="span-text">
                  <span
                    style={{ color: "#141414", fontSize: 10, fontWeight: 300 }}
                  >
                    Fee: 0.000000
                  </span>
                  <span
                    style={{ color: "#141414", fontSize: 15, fontWeight: 500 }}
                  >
                    Total: 0.00000000
                  </span>
                </p>
              </div>
              <div className="bttn">
                <button className="sendBttn">Send ETH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
