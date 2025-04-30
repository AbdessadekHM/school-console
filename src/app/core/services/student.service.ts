import {Injectable} from '@angular/core';
import {Student} from "../models/student.module";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
      grade: 'A',
      address: '123 Main St, Cityville',
      phoneNumber: '555-123-4567',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 19,
      grade: 'B+',
      address: '456 Oak Ave, Townsburg',
      phoneNumber: '555-987-6543',
      email: 'jane.smith@example.com'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 21,
      grade: 'A-',
      address: '789 Pine Rd, Villageton',
      phoneNumber: '555-456-7890',
      email: 'bob.johnson@example.com'
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 20,
      grade: 'B',
      address: '321 Elm St, Riverside',
      phoneNumber: '555-234-5678',
      email: 'emily.davis@example.com'
    },
    {
      id: 5,
      name: 'Michael Brown',
      age: 22,
      grade: 'A',
      address: '654 Birch Ln, Hilltown',
      phoneNumber: '555-345-6789',
      email: 'michael.brown@example.com'
    },
    {
      id: 6,
      name: 'Sarah Wilson',
      age: 19,
      grade: 'B+',
      address: '987 Cedar Dr, Lakeview',
      phoneNumber: '555-456-7891',
      email: 'sarah.wilson@example.com'
    },
    {
      id: 7,
      name: 'David Lee',
      age: 21,
      grade: 'C+',
      address: '147 Maple Ave, Sunnyvale',
      phoneNumber: '555-567-8901',
      email: 'david.lee@example.com'
    },
    {
      id: 8,
      name: 'Laura Martinez',
      age: 20,
      grade: 'A-',
      address: '258 Spruce St, Brookside',
      phoneNumber: '555-678-9012',
      email: 'laura.martinez@example.com'
    },
    {
      id: 9,
      name: 'Chris Taylor',
      age: 19,
      grade: 'B',
      address: '369 Willow Rd, Greentown',
      phoneNumber: '555-789-0123',
      email: 'chris.taylor@example.com'
    },
    {
      id: 10,
      name: 'Anna Clark',
      age: 22,
      grade: 'A',
      address: '741 Oak St, Fairview',
      phoneNumber: '555-890-1234',
      email: 'anna.clark@example.com'
    },
    {
      id: 11,
      name: 'James White',
      age: 20,
      grade: 'B-',
      address: '852 Pine Ave, Westville',
      phoneNumber: '555-901-2345',
      email: 'james.white@example.com'
    },
    {
      id: 12,
      name: 'Megan Harris',
      age: 21,
      grade: 'A-',
      address: '963 Elm Dr, Northside',
      phoneNumber: '555-012-3456',
      email: 'megan.harris@example.com'
    },
    {
      id: 13,
      name: 'Ryan Walker',
      age: 19,
      grade: 'C',
      address: '159 Cedar Ln, Easttown',
      phoneNumber: '555-123-4568',
      email: 'ryan.walker@example.com'
    },
    {
      id: 14,
      name: 'Sophie Young',
      age: 20,
      grade: 'B+',
      address: '753 Maple Rd, Southburg',
      phoneNumber: '555-234-5679',
      email: 'sophie.young@example.com'
    },
    {
      id: 15,
      name: 'Ethan Allen',
      age: 22,
      grade: 'A',
      address: '486 Birch St, Midtown',
      phoneNumber: '555-345-6780',
      email: 'ethan.allen@example.com'
    },
    {
      id: 16,
      name: 'Olivia King',
      age: 19,
      grade: 'B',
      address: '297 Spruce Ave, Uptown',
      phoneNumber: '555-456-7892',
      email: 'olivia.king@example.com'
    },
    {
      id: 17,
      name: 'Noah Scott',
      age: 21,
      grade: 'A-',
      address: '681 Willow Dr, Downtown',
      phoneNumber: '555-567-8902',
      email: 'noah.scott@example.com'
    },
    {
      id: 18,
      name: 'Isabella Green',
      age: 20,
      grade: 'B+',
      address: '372 Oak Ln, Parkside',
      phoneNumber: '555-678-9013',
      email: 'isabella.green@example.com'
    },
    {
      id: 19,
      name: 'Liam Adams',
      age: 19,
      grade: 'C+',
      address: '546 Pine St, Bayside',
      phoneNumber: '555-789-0124',
      email: 'liam.adams@example.com'
    },
    {
      id: 20,
      name: 'Mia Baker',
      age: 22,
      grade: 'A',
      address: '819 Cedar Ave, Hillcrest',
      phoneNumber: '555-890-1235',
      email: 'mia.baker@example.com'
    },
    {
      id: 21,
      name: 'Lucas Carter',
      age: 20,
      grade: 'B',
      address: '273 Elm Rd, Crestview',
      phoneNumber: '555-901-2346',
      email: 'lucas.carter@example.com'
    },
    {
      id: 22,
      name: 'Ava Nelson',
      age: 21,
      grade: 'A-',
      address: '927 Maple St, Riverbend',
      phoneNumber: '555-012-3457',
      email: 'ava.nelson@example.com'
    },
    {
      id: 23,
      name: 'Mason Wright',
      age: 19,
      grade: 'B+',
      address: '648 Birch Ave, Lakeside',
      phoneNumber: '555-123-4569',
      email: 'mason.wright@example.com'
    }
  ];

  constructor() {
  }

  getStudents(): Student[] {
    return this.students;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex(student => student.id === id);
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log({splice: this.students})
    }

  }
}
