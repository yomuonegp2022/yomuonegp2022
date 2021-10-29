import * as React from "react"
import { useState, useEffect } from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const movList = ["sm32979272", "sm36956086", "sm32981144", "sm32981038", "sm32980928", "sm32980686", "sm32979241", "sm32977967", "sm32979161", "sm32848401", "sm32979347", "sm32982342", "sm32983788", "sm32980711", "sm32978658", "sm32981919", "sm32971282", "sm32979401", "sm32907232", "sm32960563", "sm32945255", "sm32901673", "sm32976924", "sm32979248", "sm32978294", "sm32983589", "sm32977247", "sm32986564", "sm32979265", "sm32923882", "sm32981799", "sm32980333", "sm32983495", "sm34872215", "sm34750025", "sm34888664", "sm34889093", "sm34889721", "sm34724543", "sm34772748", "sm34888609", "sm34889213", "sm34795770", "sm34747131", "sm34880632", "sm34798882", "sm34886491", "sm34886811", "sm34826353", "sm34884418", "sm34890326", "sm34883729", "sm34890531", "sm34888594", "sm34891041", "sm34884339", "sm34887734", "sm34889449", "sm34888709", "sm34888171", "sm34889055", "sm34890483", "sm34785854", "sm34889266", "sm34889631", "sm34887506", "sm34888761", "sm34883605", "sm34889116", "sm34889975", "sm34887091", "sm34893655", "sm34888009", "sm34887961", "sm34892590", "sm34888534", "sm34894767", "sm36499123", "sm36479793", "sm36602056", "sm36606005", "sm36601979", "sm36601433", "sm36602376", "sm36491600", "sm36601969", "sm36571618", "sm36540373", "sm36447947", "sm36600899", "sm36587269", "sm36601082", "sm36596946", "sm36601586", "sm36607545", "sm36606100", "sm36594648", "sm36602168", "sm36587843", "sm36606819", "sm36601987", "sm36601767", "sm36602003", "sm36605603", "sm36605465", "sm36601362", "sm36599429", "sm36602407", "sm36602084", "sm36601714", "sm36569441", "sm36569368", "sm36601989", "sm36580579", "sm36603263", "sm38517079", "sm38521880", "sm38516016", "sm38516060", "sm38386654", "sm38518122", "sm38516817", "sm38514174", "sm38515875", "sm38503060", "sm38517062", "sm38505196", "sm38349424", "sm38514425", "sm38492962", "sm38511886", "sm38519354", "sm38517024", "sm38516717", "sm38515140", "sm38516976", "sm38519591", "sm38520668", "sm38517016", "sm38518504", "sm38516548", "sm38512327", "sm38521623", "sm38520131", "sm38502030", "sm38519014", "sm38513411", "sm38517590", "sm38515322"]
  const [mov, setMov] =useState("sm9");
  const [key, setkey] =useState("");

  useEffect(() => {
    setMov(movList[Math.floor(Math.random() * movList.length)])
  },[]);

  return (
    <Layout title="ページが見つかりません">
      <Seo title="404" />
      <h1>404: Not Found</h1>
      <p style={{marginBottom: `3rem`}}>お探しのページは、移動または削除された可能性があります。</p>
      <h3>過去大会作品紹介</h3>
        {<p>
          <div style={{width: `100%`}}>
            <div class="wrapper" style={{paddingBottom: `56.25%`}}>
              <iframe allowfullscreen="allowfullscreen" allow="autoplay" src={`https://embed.nicovideo.jp/watch/${mov}?oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1`} style={{position: `absolute`, width: `100%`, height: `100%`, border: `none`,}}></iframe>
            </div>
          </div>
        </p>}
    </Layout>
  )
}

export default NotFoundPage
