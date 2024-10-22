import { useState, useEffect } from 'react';
// import {MiniChart, SingleTicker} from "react-ts-tradingview-widgets";

const AssetRow = ({ asset } : any) => (
    <div className="group relative hover:-mx-8 hover:px-8 transition-all duration-300">
        <div className="flex items-center justify-between py-4 px-6 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
            <div className="flex items-center w-1/4">
                <img src={asset.image} alt={asset.name} className="w-6 h-6 mr-3 rounded-full" />
                <div>
                    <h3 className="font-semibold text-white">{asset.name}</h3>
                    <p className="text-xs text-gray-400">{asset.a_name}</p>
                </div>
            </div>
            <div className="w-1/4 text-left">
                <p className="text-white">${ asset.rate }</p>
            </div>
            <div className="w-1/4 text-left">
                <p className="text-white">{ asset.leverage }</p>
            </div>

            <div className="w-1/4 text-right">
                <button className="bg-zinc-800 text-white px-4 py-3 rounded text-sm hover:bg-zinc-700 transition-colors duration-300">
                    Trade now
                </button>
            </div>
        </div>
    </div>
);

const AssetTable = ({ type } : any) => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchAssets = async () => {
            try {
                const response = await fetch(`https://secure.ebulltradingai.com/api/v1/assets/type/${type}`);
                const data = await response.json();
                setAssets(data);
            } catch (error) {
                console.error('Error fetching assets:', error);
            }
        };

        fetchAssets();
    }, []);

    return (
        <>

            { assets?.length > 0 ? (
                <div className="bg-zinc-900  rounded-xl max-w-7xl mx-auto">
                    <div className="grid grid-cols-7 gap-4 py-4 px-6 text-sm text-gray-400">
                        <div>Asset</div>
                        <div className="text-right">Last Price</div>
                        <div className="text-right">Leverage</div>
                        {/*<div className="text-right">24H Low</div>*/}
                        {/*<div className="text-right">24H Change (%)</div>*/}
                        {/*<div>Trend</div>*/}
                        <div></div>
                    </div>
                    {assets.map((asset : any) => (
                            <AssetRow key={asset.id} asset={asset} />
                    ))}
                </div>

            ) : (
                <div className="flex flex-col space-y-3">

                </div>

            )}


        </>

    );
};

export default AssetTable;
