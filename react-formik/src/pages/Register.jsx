import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../services/ApiService.js";
import { useNavigate } from "react-router-dom";


const schema = Yup.object({
name: Yup.string().required("Required"),
email: Yup.string().email("Invalid").required("Required"),
password: Yup.string().min(6, "Min 6 chars").required("Required"),
});


export default function Register() {
const navigate = useNavigate();
return (
<div className="container py-5" style={{maxWidth: 480}}>
<h3 className="mb-4">Create Account</h3>
<Formik
initialValues={{ name: "", email: "", password: "" }}
validationSchema={schema}
onSubmit={async (values, { setSubmitting, resetForm }) => {
try {
await registerUser(values);
alert("Registered! Please login.");
resetForm();
navigate("/login");
} catch (e) {
alert("Failed: " + e.message);
} finally {
setSubmitting(false);
}
}}
>
{({ isSubmitting }) => (
<Form className="card p-4 shadow-sm">
<div className="mb-3">
<label className="form-label">Name</label>
<Field name="name" className="form-control" />
<div className="text-danger small"><ErrorMessage name="name" /></div>
</div>
<div className="mb-3">
<label className="form-label">Email</label>
<Field name="email" type="email" className="form-control" />
<div className="text-danger small"><ErrorMessage name="email" /></div>
</div>
<div className="mb-3">
<label className="form-label">Password</label>
<Field name="password" type="password" className="form-control" />
<div className="text-danger small"><ErrorMessage name="password" /></div>
</div>
<button disabled={isSubmitting} className="btn btn-primary">Register</button>
</Form>
)}
</Formik>
</div>
);
}