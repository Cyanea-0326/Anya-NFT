// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// openzeppelin内のコントラクトを継承
// 参照
// https://docs.openzeppelin.com/contracts/4.x/api/utils#Counters
contract NewContract is ERC721URIStorage {
    using Counters for Counters.Counter;
    // _tokenIdsを初期化
    Counters.Counter private _tokenIds;
    // NFT トークンの名前とそのシンボルを渡す
    constructor() ERC721("AnyaNFT", "SPY") {
    console.log("This is my NFT contract.");
  }

// 参照
// https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721URIStorage
    function NFT() public {
    uint256 nftId = _tokenIds.current();
    // メモ：msg.senderはコントラクト動かしたwallet addressの値
    _safeMint(msg.sender, nftId);
    _setTokenURI(nftId, 
    "https://api.npoint.io/61b9f658512c586ed1cc"
    );
    // NFTがいつ誰に作成されたかを確認します。
    console.log("An NFT w/ ID %s has been minted to %s", nftId, msg.sender);
    _tokenIds.increment();
  }
}