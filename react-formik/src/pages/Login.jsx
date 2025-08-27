import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { login } from "../services/ApiService.js";
import { useNavigate } from "react-router-dom";


const schema = Yup.object({
email: Yup.string().email("Invalid").required("Required"),
password: Yup.string().required("Required"),
});


export default function Login() {
const navigate = useNavigate();
return (
<div className="container py-5" style={{maxWidth: 480}}>
<h3 className="mb-4">Login</h3>
<Formik
initialValues={{ email: "", password: "" }}
validationSchema={schema}
onSubmit={async (values, { setSubmitting }) => {
try {
const user = await login(values.email, values.password);
if (user.role === "admin") navigate("/admin");
else navigate("/user");
} catch (e) {
alert("Login failed: " + e.message);
} finally {
setSubmitting(false);
}
}}
>
{({ isSubmitting }) => (
<Form className="card p-4 shadow-sm">
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
<button disabled={isSubmitting} className="btn btn-primary">Login</button>
</Form>
)}
</Formik>
</div>
);
}