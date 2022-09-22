    
    
    //　NFTのMintと待機
    // スクリプト分ける
    const minting = await mint.NFT();
    await minting.wait();
    console.log("Minted NFT");
