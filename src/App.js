import { darkTheme, Theme, SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

function App() {
  const jsonRpcUrlMap = {
    1: ["https://mainnet.infura.io/v3/77959327e6194749ac3226df0f059099"],
    3: ["https://ropsten.infura.io/v3/77959327e6194749ac3226df0f059099"],
  };

  const feeAddress = "0xcB711b11df50012D1Bc7f750875706ac244cE707";
  const fee = 100;

  const themeW: Theme = {
    ...darkTheme,
    primary: "#fff",
    secondary: "#f0f0f0",
    interactive: "#12292b",
    container: "#1A1B1F",
    module: "#2C2F36",
    accent: "#1A1B1F",
    outline: "#fdc7b6",
    dialog: "#2C2F36",
    fontFamily: '"Inter", sans-serif',
    borderRadius: 0.5,
  };

  return (
    <div className="Uniswap">
      <SwapWidget
        jsonRpcUrlMap={jsonRpcUrlMap}
        convenienceFee={fee}
        convenienceFeeRecipient={feeAddress}
        defaultInputAmount="0.1"
        theme={themeW}
      />
    </div>
  );
}

export default App;
