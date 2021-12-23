import React, { Component } from 'react';
import Navber from './AdminNavbar';
import axios from 'axios';
import Footer from '../Footer';

class Admin extends Component {

  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone_no: "",
      specialisation: '',
      salary: '',
      password: '',
      del_emp_id: '',
      patients: null,
      doctors: null,
      doctor_id: null,
      patient_id: null,
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit1 = this.onSubmit1.bind(this)
    this.onSubmit2 = this.onSubmit2.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit1(e) {
    e.preventDefault();
    const emp = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      address: this.state.address,
      phone_no: this.state.phone_no,
      specialisation: this.state.specialisation,
      salary: this.state.salary,
      password: this.state.password
    }
    axios.post('/admin/register/doctor', emp)
      .then(res => {
        return res.data;
        alert("doctor added successfully")
      })
      .catch(err => console.log(err));
  }

  onSubmit2(e) {
    e.preventDefault();
    axios.post('/admin/delete', { admin_id: this.state.del_emp_id })
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }

  getPatients() {
    axios.get("/admin/patients")
      .then(res => {
        console.log(res.data)
        this.setState({ patients: res.data })
      })
      .catch(err => console.log(`${err}`))
  }

  getDoctors() {
    axios.get("/admin/doctors")
      .then(res => {
        console.log(res.data)
        this.setState({ doctors: res.data })
      })
      .catch(err => console.log(`${err}`))
  }

  submitAssignDoctor() {
    console.log(this.state)
    axios.post('/admin/assign_doctor', { patient_id: this.state.patient_id, doctor_id: this.state.doctor_id})
    .then(res => {
      alert("doctor assigned successfully")
    })
    .catch(err => alert(err.toString()))
  }

  componentDidMount() {
    this.getPatients()
    this.getDoctors()
  }

  render() {
    return (
      <div className="bg-dark">
        <Navber />
        <br />
        <h2 className="text-white" align="center">Administrator Home</h2>
        <h3 className="text-white" align="center">Welcome!</h3>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col">
            <div className="container mx-auto">
              <div className="jumbotron mt-5" style={{ backgroundColor: "#e0e0e0" }}>
                <form noValidate onSubmit={this.onSubmit1} >
                  <div className="col-sm-6">
                    <h2 className="text-primary">Add New Doctor</h2>
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter First Name"
                      value={this.state.first_name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter Last Name"
                      value={this.state.last_name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email Address"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter Address"
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialisation">Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      name="specialisation"
                      placeholder="Enter Specialisation"
                      value={this.state.specialisation}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Salary</label>
                    <input
                      type="text"
                      className="form-control"
                      name="salary"
                      placeholder="Enter Salary Information"
                      value={this.state.salary}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone_no"
                      placeholder="Enter Phone Number"
                      value={this.state.phone_no}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Enter Doctor
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="container mr-3">
              <div className="jumbotron mt-5" style={{ backgroundColor: "#e0e0e0" }}>
                <form noValidate onSubmit={this.onSubmit2} >
                  <div className="col-sm-6">
                    <h3 className="text-primary">Delete Employee Information</h3>
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="name">Employee ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="del_emp_id"
                      placeholder="Enter Employee ID"
                      value={this.state.del_emp_id}
                      onChange={this.onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h4>Assign a patient to a doctor</h4>
          </div>
        </div>

        <div className='row justify-content-center text-center'>
          {/* patient list */}
          <div className="col">
            <div className="container mr-3">
              <div className="jumbotron mt-5" style={{ backgroundColor: "#e0e0e0" }}>
                <div >
                  <div className="col-sm-7">
                    <div>
                      <h4>List of patients registered</h4>
                      <h5>Index - Patient Name - Disease - ID</h5>
                    </div>
                    {
                      this.state.patients &&
                      this.state.patients.map((item, idx) => (
                        <div key={idx} className="text-center">
                          <h5>
                            <span>{idx + 1}</span> -
                            <span> {item.first_name}</span> -
                            <span> {item.disease}</span> -
                            <span > {item.patient_id}</span> -
                            <span><input className='form-control m-1' placeholder="doctor id"
                              onChange={(e) => {
                                this.setState({ doctor_id: e.target.value })
                                this.setState({ patient_id: this.state.patients[idx].patient_id })
                              }}
                            /></span>
                            <span><button
                              type="submit"
                              className="btn btn-sm btn-primary btn-block m-1"
                              onClick={() => (this.submitAssignDoctor())}
                            > Assign Doctor
                            </button></span>
                          </h5>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* doctor list */}

          <div className="col">
            <div className="container mr-3">
              <div className="jumbotron mt-5" style={{ backgroundColor: "#e0e0e0" }}>
                <div >
                  <div className="col-sm-5">
                    <div>
                      <h4>List of doctors available</h4>
                      <h5>Index - Doctor Name - Specialisation - ID</h5>
                    </div>
                    {
                      this.state.doctors &&
                      this.state.doctors.map((item, idx) => (
                        <div className="text-center" style={{width: "100%"}}>
                          <h6>
                            <span>{idx + 1}</span> -
                            <span> {item.first_name}</span> -
                            <span> {item.specialisation}</span> -
                            <span> {item.doctor_id}</span>
                          </h6>
                        </div>
                      ))
                    }
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Admin;