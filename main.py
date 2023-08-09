from datetime import datetime
import cv2
from pyzbar import pyzbar
import mysql.connector
import qrcode
import json

def generate_qr_code(data, file_name):

    

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=4,
    )

   
    qr.add_data(data)
    qr.make(fit=True)

  
    qr_img = qr.make_image(fill_color="black", back_color="white")

 
    qr_img.save(file_name)
    print("QR code generated and saved as:", file_name)
conn = mysql.connector.connect(host='localhost',
                                                database='barcode',
                                                user='root',
                                                password='',
                                                port='8111')
myCursor = conn.cursor()

query = "SELECT ID, Name, Phone_number, Vehicle_Type, Vehicle_number FROM registration_data WHERE ID > %s"

last_ID = -1

myCursor.execute(query, (last_ID,))

rows = myCursor.fetchall()

row_data = []

for row in rows:
        column1_value = row[1]
        column2_value = row[2]
        column3_value = row[3]
        column4_value = row[4]
        column5_value = row[0]

row_dict = {
            'column1': column1_value,
            'column2': column2_value,
            'column3': column3_value,
            'column4': column4_value
        }
row_data.append(row_dict)
print(row_dict)

for row in row_data:
        column1_value = row['column1']
        column2_value = row['column2']
        column3_value = row['column3']
        column4_value = row['column4']

a = column1_value + '-' + column2_value + '-' + column3_value + '-' + column4_value
data = a
file_name = column1_value + '.png'
x = file_name

generate_qr_code(data, file_name)
with open(x, "rb") as file:
    image_data = file.read()
    print(column1_value)

query2 = 'UPDATE registration_data SET qr_code = %s WHERE ID = %s'
value2 = [image_data, column1_value]
myCursor.execute(query2, value2)
conn.commit()




def scan_qr_code():
    cap = cv2.VideoCapture(0)

    barcode_type = None  

    while True:
       
        ret, frame = cap.read()

        
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        
        barcodes = pyzbar.decode(gray)

        
        for barcode in barcodes:
            
            (x, y, w, h) = barcode.rect
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

            
            barcode_data = barcode.data.decode("utf-8")
            barcode_type = barcode.type

            
            print("Found {} barcode: {}".format(barcode_type, barcode_data))

       
        cv2.imshow("Barcode Scanner", frame)

       
        if barcode_type is not None:
            break

       
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
        
    str = barcode_data
    lista = str.split('-')
    print(lista)
    b = lista[0]
    c = lista[1]
    d = lista[2]
    e = lista[3]
    f = datetime.now().date()
    g = datetime.now().time()


    

    
    cap.release()
    cv2.destroyAllWindows()

    ##allotment
   
    class ParkingLot:
        def __init__(self, num_slots):
            self.num_slots = num_slots
            self.slots = [None] * num_slots

        def allot_slot(self, car_number):
            if None in self.slots:
                slot_index = self.slots.index(None)
                self.slots[slot_index] = car_number
                print(f"Car {car_number} allotted slot {slot_index}")
                conn = mysql.connector.connect(host='localhost',
                                            database='barcode',
                                            user='root',
                                            password='',
                                            port='8111')
                myCursor = conn.cursor()

                myCursor.execute("Insert into qrcode(name, contact, vehicle_type, vehicle_no, date, time) values (%s, %s, %s, %s, %s, %s)",[b, c, d, e, f, g])
                conn.commit()

                print(myCursor.rowcount, "record inserted.")
                 
            else:
                print("No available slots.")

        def park_car(self, car_number):
            if car_number in self.slots:
                self.leave_car(car_number)  # Car is already parked, consider it as leaving
            else:
                self.allot_slot(car_number)


        def leave_car(self, car_number):
            if car_number in self.slots:
                slot_index = self.slots.index(car_number)
                self.slots[slot_index] = None
                print(f"Car {car_number} left from slot {slot_index}")
                conn = mysql.connector.connect(host='localhost',
                                            database='barcode',
                                            user='root',
                                            password='',
                                            port='8111')
                myCursor = conn.cursor()

                delete_query = "DELETE FROM qrcode WHERE vehicle_no = %s"

                specific_value = car_number

# Execute the query
                myCursor.execute(delete_query, (specific_value,))
                conn.commit()
                print(myCursor.rowcount, "record deleted.")
            else:
                print(f"Car {car_number} not found in any slot.")

        def show_status(self):
            print("Parking Lot Status:")
            for i, slot in enumerate(self.slots):
                if slot is None:
                    print(f"Slot {i}: Empty")
                else:
                    print(f"Slot {i}: Car {slot}")

        def save_state(self, filename):
            state = {
                "num_slots": self.num_slots,
                "slots": self.slots
            }
            with open(filename, "w") as file:
                json.dump(state, file)

        def load_state(self, filename):
            try:
                with open(filename, "r") as file:
                    state = json.load(file)
                    self.num_slots = state["num_slots"]
                    self.slots = state["slots"]
            except FileNotFoundError:
                print("No previous state found. Starting with a new parking lot.")


    parking_lot = ParkingLot(5)


    parking_lot.load_state("parking_lot_state.json")

    car_number = e
    parking_lot.park_car(car_number)
    parking_lot.save_state("parking_lot_state.json")

    return barcode_type


detected_barcode_type = scan_qr_code()

if detected_barcode_type is not None:
    print("Detected barcode type outside the function:", detected_barcode_type)
else:
    print("No barcode detected.")

