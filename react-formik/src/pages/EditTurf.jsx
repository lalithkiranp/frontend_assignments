import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTurf, updateTurf } from "../services/ApiService.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const schema = Yup.object({
title: Yup.string().required("Required"),
location: Yup.string().required("Required"),
price: Yup.number().positive().required("Required"),
description: Yup.string().required("Required"),
});


export default function EditTurf() {
const { id } = useParams();
const navigate = useNavigate();
const [initial, setInitial] = useState(null);


useEffect(() => {
(async () => setInitial(await getTurf(id)))();
}, [id]);


if (!initial) return <div className="container py-4">Loading...</div>;
return (
<div className="container py-4" style={{maxWidth: 640}}>
<h4 className="mb-3">Edit Turf</h4>
<Formik
initialValues={{
title: initial.title,
location: initial.location,
price: initial.price,
description: initial.description,
}}
validationSchema={schema}
onSubmit={async (values) => {
await updateTurf(id, { ...values, price: Number(values.price) });
navigate("/admin");
}}
>
<Form className="card p-4 shadow-sm">
<div className="mb-2">
<label className="form-label">Title</label>
<Field name="title" className="form-control" />
<div className="text-danger small"><ErrorMessage name="title" /></div>
</div>
<div className="mb-2">
<label className="form-label">Location</label>
<Field name="location" className="form-control" />
<div className="text-danger small"><ErrorMessage name="location" /></div>
</div>
<div className="mb-2">
<label className="form-label">Price</label>
<Field name="price" type="number" className="form-control" />
<div className="text-danger small"><ErrorMessage name="price" /></div>
</div>
<div className="mb-3">
<label className="form-label">Description</label>
<Field as="textarea" name="description" className="form-control" rows="3" />
<div className="text-danger small"><ErrorMessage name="description" /></div>
</div>
<div className="d-flex gap-2">
<button className="btn btn-primary">Save</button>
<button type="button" className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Cancel</button>
</div>
</Form>
</Formik>
</div>
);
}