import React from "react";

const Rules = ({ setActive }) => {
  return (
    <div className="rules taiwand">
      <h1>
        English <br />
        Please read and agree to the rules
      </h1>
      <div>
        <p>
          การจองออนไลน์ต้องชำระเงินล่วงหน้า 50% <br />
          การจองออนไลน์มีให้บริการเป็นภาษาอังกฤษเท่านั้น <br />
          หากคุณต้องการจองเป็นภาษาไทย <br />
          ใช้ Instagram @katy_beauty_salon_bangkok <br />
          หากต้องการยกเลิกหรือกำหนดเวลานัดหมายใหม่ <br />
          โปรดติดต่อผู้ดูแลระบบ <br />
          ทาง Instagram ไม่เกิน <br />
          24 ชั่วโมงก่อนการนัดหมาย <br />
          @katy_beauty_salon_bangkok <br />
          หากไม่แสดงตัวหรือยกเลิกหลัง 24 ชั่วโมง <br />
          จะไม่สามารถขอคืนเงินได้ <br />
          มาสายเกิน 25 นาที <br />
          การนัดหมายของคุณจะถูกยกเลิกโดยอัตโนมัติ <br />
          และจะไม่สามารถขอคืนเงินที่ชำระไว้ล่วงหน้าได้ <br />
          ไม่อนุญาตให้พาผู้มาด้วย <br />
          รวมถึง: ครอบครัว เด็ก เพื่อน <br />
          ไม่อนุญาตให้นำสัตว์เลี้ยงเข้าร้าน <br />
          หากมีข้อสงสัยใดๆ โปรดติดต่อ: <br />
          Instagram @katy_beauty_salon_bangkok
        </p>
      </div>

      <button onClick={() => setActive(false)}>ตกลง</button>
    </div>
  );
};

export default Rules;
