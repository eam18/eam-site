import React from 'react'
import Link from 'gatsby-link'

import styles from './fine-print.module.less'

const FinePrint = () => (
  <div className={styles.container}>
    <p>&copy; 2026 Empire Asset Management Company | 101 Crawfords Corner Road, Suite 3128 Holmdel NJ 07733 | 888-417-8050 | <a href='mailto:info@empiream.com'>info@empiream.com</a></p>
    <p>Member FINRA / SIPC | <a href='https://brokercheck.finra.org/' target='_blank'>FINRA's BrokerCheck</a> | <Link to='/clients-rights'>Client's Rights &amp; Protections</Link></p>
  </div>
)

FinePrint.displayName = 'FinePrint'
export default FinePrint
