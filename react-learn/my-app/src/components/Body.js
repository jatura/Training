import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignature,faLeaf,faCakeCandles,faPalette,faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default function Body(){
    return (
        <main>
            <h1 className="main-head">FUN FACT ABOUT ME</h1>
            <div className="main-list">
                <section id="list1"><FontAwesomeIcon icon={ faSignature } size="3x" className="icon" /><span className="list-detail"> ชื่อ จตุรา ลิขิตรัตนพร ซึ่ง จตุรา แปลว่าฉลาดปราดเปรื่อง มีคนชอบถามเพราะมีคำว่า จตุ ที่แปลว่า 4 อยู่ แต่เหมือนความหมายจะไม่เกี่ยวอะไรกับเลข 4 เลย</span></section>
                <section id="list2"><FontAwesomeIcon icon={ faLeaf } size="3x" className="icon" /><span className="list-detail">ชื่อเล่นชื่อ ใบตอง เมื่อก่อนเคยรู้สึกว่าชื่อโหล แต่พอขึ้นมหาลัยถ้าพึ่งแนะนำตัวหรือพึ่งรู้จักกัน จะโดนเรียกผิดว่าใบเตยบ่อยมาก</span></section>
                <section id="list3"><FontAwesomeIcon icon={ faCakeCandles } size="3x" className="icon" /><span className="list-detail">เกิดวันที่ 10 เดือน 10 เพราะเลขสวยก็เลยรู้สึกมาตลอดว่ามันพิเศษ แล้วชอบมีความบังเอิญเกิดขึ้นกับคนรอบๆตัว อย่างเพื่อนที่สนิทเกิดวันที่ 9 เดือน 9 กับ 11 เดือน 11</span></section>
                <section id="list4"><FontAwesomeIcon icon={ faPalette } size="3x" className="icon" /><span className="list-detail">ชอบศิลปะ ชอบอะไรสวยๆงามๆ ตอนม.ปลายเคยอยากเรียนสถาปัตย์ แต่เพราะเหตุผลบางอย่างก็เลยมาจบที่ Biomed Eng. แบบงงๆ</span></section>
                <section id="list5"><FontAwesomeIcon icon={ faBookOpen } size="3x" className="icon" /><span className="list-detail">เป็นคนที่ติดหนังสือมากๆ (โดยเฉพาะหนังสือนิยาย) ตั้งแต่เด็กจนโตก็ยังเหมือนเดิม เพิ่มเติมคือเปลี่ยนมาอ่านแบบอิเล็กทรอนิกส์แทน</span></section>
            </div>
        </main>
    )
}