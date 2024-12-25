import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tab/tabDep";
import {
  cryptoData,
  stocksData,
  commoditiesData,
  etfData,
  bondData,
} from "./cite";
import { forexData } from "./cite";
import { indicesData } from "./cite";

const platformTabs = () => {
  return (
    <div>
      <Tabs defaultValue="crypto" className="">
        <TabsList className="md:px-5">
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="stocksData">stocksData</TabsTrigger>
          <TabsTrigger value="forexData">ForexData</TabsTrigger>
          <TabsTrigger value="indexData">IndexData</TabsTrigger>
          <TabsTrigger value="commodity">CommodityData</TabsTrigger>
          <TabsTrigger value="eTFData">ETFData</TabsTrigger>
          <TabsTrigger value="bondData">BondData</TabsTrigger>
        </TabsList>
        <TabsContent value="crypto" className="w-full">
          <section className="max-h-96 max-w-full w-full overflow-auto">
            <div className="divide-y divide-gray-100 ">
              {cryptoData.map((crypto, index) => (
                <div
                  key={index}
                  className="flex justify-between hover:bg-blue-50 px-4"
                >
                  <div className="flex items-center text-gray-700 my-2">
                    <div className="me-2">
                      <img
                        src="/citationinvest/tabs/BTCUSDT.svg"
                        className="rounded-full w-10"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text- text-gray-800">BTCUSDT</h2>
                      <p className="text-xs text-gray-600">BITCOIN/TETHERUS</p>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <h2 className="text- text-gray-800">{crypto.price}</h2>
                    </div>
                    <div className="ms-5 sm:ms-10 text-red-500">
                      <h2>{crypto.changePercent}</h2>
                      <h2>{crypto.changeValue}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value="stocksData" className="w-full">
          <section className="max-h-96 max-w-full w-full overflow-auto">
            <div className="divide-y divide-gray-100 ">
              {stocksData.map((stock, index) => (
                <div
                  key={index}
                  className="flex justify-between hover:bg-blue-50 px-4"
                >
                  <div className="flex items-center text-gray-700 my-2">
                    <div className="me-2">
                      <img
                        src="/citationinvest/tabs/BTCUSDT.svg"
                        className="rounded-full w-10"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text- text-gray-800">{stock.symbol}</h2>
                      <p className="text-xs text-gray-600">
                        {stock.companyName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <h2 className="text- text-gray-800">{stock.price}</h2>
                    </div>
                    <div className="ms-5 sm:ms-10 text-red-500">
                      <h2>{stock.changePercent}</h2>
                      <h2>{stock.changeValue}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value="forexData" className="w-full">
          <section className="max-h-96 max-w-full w-full overflow-auto">
            <div className="divide-y divide-gray-100 ">
              {forexData.map((forex, index) => (
                <div
                  key={index}
                  className="flex justify-between hover:bg-blue-50 px-4"
                >
                  <div className="flex items-center text-gray-700 my-2">
                    <div className="me-2">
                      <img
                        src="/citationinvest/tabs/BTCUSDT.svg"
                        className="rounded-full w-10"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text- text-gray-800">{forex.symbol}</h2>
                      <p className="text-xs text-gray-600">{forex.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <h2 className="text- text-gray-800">{forex.price}</h2>
                    </div>
                    <div className="ms-5 sm:ms-10 text-red-500">
                      <h2>{forex.changePercent}</h2>
                      <h2>{forex.changeValue}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value="indexData" className="w-full">
          <section className="max-h-96 max-w-full w-full overflow-auto">
            <div className="divide-y divide-gray-100 ">
              {indicesData.map((indexdata, index) => (
                <div
                  key={index}
                  className="flex justify-between hover:bg-blue-50 px-4"
                >
                  <div className="flex items-center text-gray-700 my-2">
                    <div className="me-2">
                      <img
                        src="/citationinvest/tabs/BTCUSDT.svg"
                        className="rounded-full w-10"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text- text-gray-800">
                        {indexdata.symbol}
                      </h2>
                      <p className="text-xs text-gray-600">{indexdata.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <h2 className="text- text-gray-800">{indexdata.price}</h2>
                    </div>
                    <div className="ms-5 sm:ms-10 text-red-500">
                      <h2>{indexdata.changePercent}</h2>
                      <h2>{indexdata.changeValue}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value="commodity" className="w-full">
          <section className="max-h-96 max-w-full w-full overflow-auto">
            <div className="divide-y divide-gray-100 ">
              {commoditiesData.map((commodity, index) => (
                <div
                  key={index}
                  className="flex justify-between hover:bg-blue-50 px-4"
                >
                  <div className="flex items-center text-gray-700 my-2">
                    <div className="me-2">
                      <img
                        src="/citationinvest/tabs/BTCUSDT.svg"
                        className="rounded-full w-10"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text- text-gray-800">
                        {commodity.symbol}
                      </h2>
                      <p className="text-xs text-gray-600">{commodity.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <h2 className="text- text-gray-800">{commodity.price}</h2>
                    </div>
                    <div className="ms-5 sm:ms-10 text-red-500">
                      <h2>{commodity.changePercent}</h2>
                      <h2>{commodity.changeValue}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value="eTFData" className="w-full">
          <section className="max-h-96 max-w-full w-full overflow-auto">
            <div className="divide-y divide-gray-100 ">
              {etfData.map((etf, index) => (
                <div
                  key={index}
                  className="flex justify-between hover:bg-blue-50 px-4"
                >
                  <div className="flex items-center text-gray-700 my-2">
                    <div className="me-2">
                      <img
                        src="/citationinvest/tabs/BTCUSDT.svg"
                        className="rounded-full w-10"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text- text-gray-800">{etf.symbol}</h2>
                      <p className="text-xs text-gray-600">{etf.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <h2 className="text- text-gray-800">{etf.price}</h2>
                    </div>
                    <div className="ms-5 sm:ms-10 text-red-500">
                      <h2>{etf.changePercent}</h2>
                      <h2>{etf.changeValue}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value="bondData" className="w-full">
          <section className="max-h-96 max-w-full w-full overflow-auto">
            <div className="divide-y divide-gray-100 ">
              {bondData.map((bond, index) => (
                <div
                  key={index}
                  className="flex justify-between hover:bg-blue-50 px-4"
                >
                  <div className="flex items-center text-gray-700 my-2">
                    <div className="me-2">
                      <img
                        src="/citationinvest/tabs/BTCUSDT.svg"
                        className="rounded-full w-10"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text- text-gray-800">{bond.symbol}</h2>
                      <p className="text-xs text-gray-600">{bond.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <h2 className="text- text-gray-800">{bond.price}</h2>
                    </div>
                    <div className="ms-5 sm:ms-10 text-red-500">
                      <h2>{bond.changePercent}</h2>
                      <h2>{bond.changeValue}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default platformTabs;
