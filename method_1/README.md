# METHOD ที่ 1 จากเว็บไซต์ healthcare
ในวิธีแรกนี้เป็นวิธีดึงที่มาจากเว็บไซต์อย่าง [วัคซีนโควิด 19 (healthcare)](https://healthcare.skho.moph.go.th/vaccine-covid19/check.html) 
![PROBLEM1](../images/METHOD_1_PROBLEM_01.png)

โดยวิธีดึงนั้น จะใช้วิธีการดึงจาก API ที่หลังจากเราได้หลังกรอกข้อมูลเลข บชช. แล้ว ระบบจะทำการส่งคำขอ เพื่อขอข้อมูลวัคซีนมา
![PROBLEM2](../images/METHOD_1_PROBLEM_02.png)

แต่ว่า แทนที่จะดึงสถานะกลับมา กลายเป็นดึงข้อมูลทั้งชื่อ ที่อยู่ โรงพยาบาล ประวัติรับวัคซีน และอื่น ๆ ที่ใช้กับแอพ "หมอพร้อม" เกือบทั้งหมด
![PROBLEM3](../images/METHOD_1_PROBLEM_03.png)

## วิธีการดึง
วิธีการดึงนั้นจำเป็นต้องมีโปรแกรมอย่าง Postman หรือ Thunder Client เพื่อทำการนำไปขอข้อมูล
![01](../images/01.png)

จากนั้นทำการดึง URL ดังนี้ `https://healthcare.skho.moph.go.th/vaccine-covid19/api-vc-1.php`
และทำการตั้งการส่งข้อมูลเป็น POST
![02](../images/02.png)

ต่อไปทำการตั้งไปที่ Body เลือกเป็น `form-data` และในช่อง `cid` กรอกเลข บชช.
![03](../images/03.png)

สุดท้ายทำการกด `"Send"` เพื่อส่งขอข้อมูล
![04](../images/04.png)