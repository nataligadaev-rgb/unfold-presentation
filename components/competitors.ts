// Competitor list, with the exact logo crops used in the Figma file.
export type Comp = {
  name: string
  desc: string
  src: string
  bg?: string
  border?: boolean
  he?: boolean
  img?: Record<string, string>
}

const sq = (l: string, t: string, s: string) => ({ left: l, top: t, width: s, height: s })

export const col1: Comp[] = [
  { name: 'Filecheck', desc: 'בדיקת תקינות קבצים לדפוס', src: 'logo-filecheck.png', border: true, img: sq('12.62%', '12.45%', '75.65%') },
  { name: 'ProofQueue', desc: 'אישור קבצים וניהול תיקונים', src: 'logo-proofqueue.png', bg: '#0d6e96', img: { left: '18.13%', top: '16.24%', width: '63.32%', height: '68.42%' } },
  { name: 'Printavo', desc: 'ניהול הזמנות ותהליכי ייצור', src: 'logo-printavo.png', border: true },
  { name: 'PrintNow', desc: 'הזמנות דפוס בהתאמה אישית', src: 'logo-printnow.png', border: true },
  { name: 'Pacdora', desc: 'עיצוב והדמיית אריזות בתלת־ממד', src: 'logo-pacdora.png', bg: '#731eff' },
]
export const col2: Comp[] = [
  { name: 'Cross Print', desc: 'ניהול תהליכי הדפסה', src: 'logo-crossprint.png', border: true, img: sq('12.62%', '12.45%', '75.65%') },
  { name: 'Artwork Proofing', desc: 'בדיקת עיצובים ואישורם', src: 'logo-artworkproofing.png', bg: '#0e5d52', img: sq('8.34%', '2.83%', '84.3%') },
  { name: 'PrintMIS', desc: 'תרגום בקשות, השוואות מחירים', src: 'logo-printmis.png', border: true, bg: '#fff', img: { left: '-0.3%', top: '30.88%', width: '106.28%', height: '38.24%' } },
  { name: 'AutomatePrint', desc: 'ניהול קבצים, הכנה לייצור ודפוס', src: 'logo-automateprint.png', border: true, bg: '#fff', img: sq('5.88%', '5.64%', '86.97%') },
  { name: 'Printsked', desc: 'ניהול הזמנות ואישור קבצים', src: 'logo-printsked.png', bg: '#78c997', img: sq('7.53%', '7.93%', '84.3%') },
]
export const col3: Comp[] = [
  { name: 'B2Cprint', desc: 'עיצוב והזמנת מוצרי דפוס', src: 'logo-b2cprint.png', border: true, bg: '#fff', img: { left: '5.88%', top: '25.61%', width: '100%', height: '48.77%' } },
  { name: 'PrintBlocks', desc: 'ניהול הזמנות ותהליכי ייצור', src: 'logo-printblocks.png', border: true, bg: '#fff', img: sq('17.81%', '8.52%', '70.13%') },
  { name: 'דפוק בקליק', desc: 'פורטל בתי דפוס והשוואות מחיר', src: 'logo-dfus.png', border: true, he: true, img: sq('12.62%', '12.45%', '75.65%') },
  { name: 'עותקים', desc: 'הזמנת הדפסות אונליין', src: 'logo-otkim.png', border: true, he: true, img: { left: '0', top: '22.58%', width: '100%', height: '54.84%' } },
  { name: 'איזיקופי', desc: 'העלאת קבצים, עיצוב והזמנה אונליין', src: 'logo-easycopy.png', border: true, he: true, img: { left: '10.29%', top: '14.71%', width: '79.41%', height: '70.59%' } },
]
export const allComps = [...col1, ...col2, ...col3]
