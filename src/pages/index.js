import React from "react"

import Testimonials from "../components/testimonials"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="SoundCloudFlare - Rap battles and DDoS attacks" />
    <div>
      <h3>Stay woke</h3>
      <ul style={{listStyleType: `none` }}>
        <li><h4 style={{ color: `#f50` }}>Enjoy offline, ad-free music, including mumble rap!</h4></li>
        <li><h4 style={{ color: `#f50` }}>Listen to over 150 million tracks from literally dozens of musicians</h4></li>
        <li><h4 style={{ color: `#f50` }}>SoundCloudFlare provides a safe space to create, find fans, and connect with other 'artists'</h4></li>
      </ul>
      <h3>Stay up</h3>
      <ul style={{listStyleType: `none` }}>
        <li><h4 style={{ color: `#f50` }}>With almost 92% availability we bet you won't notice any outages</h4></li>
        <li><h4 style={{ color: `#f50` }}>Computers are tricky, but we keep things simple by recognizing that it's all just 1s and 0s</h4></li>
        <li><h4 style={{ color: `#f50` }}>The SoundCloudFlare network spans hundreds of cities; administration is really difficult, but you're worth it!</h4></li>
      </ul>
      <h3>Reject the status quo</h3>
      <ul style={{listStyleType: `none` }}>
        <li><h4 style={{ color: `#f50` }}>We fully support freedom of speech, but don't push it</h4></li>
        <li><h4 style={{ color: `#f50` }}>We don't let protocol standards hold us back from performance improvements</h4></li>
      </ul>
    </div>
    <Testimonials />
    <div>
      <h3>Try it today</h3>
      <ul style={{listStyleType: `none` }}>
        <li><h4 style={{ color: `#f50` }}>For early access email access@soundcloudflare.com</h4></li>
        <li><h4 style={{ color: `#f50` }}>To upload a mixtape email fire@soundcloudflare.com</h4></li>
        <li><h4 style={{ color: `#f50` }}>For faster service mail your local member of Congress</h4></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
