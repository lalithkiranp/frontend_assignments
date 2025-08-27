export default function TurfCard({ turf, onAdd }) {
return (
<div className="card h-100 shadow-sm">
<div className="card-body d-flex flex-column">
<h5 className="card-title">{turf.title}</h5>
<p className="card-text text-muted mb-1">{turf.location}</p>
<p className="card-text flex-grow-1">{turf.description}</p>
<div className="d-flex justify-content-between align-items-center">
<span className="fw-bold">₹{turf.price}</span>
{onAdd && (
<button className="btn btn-primary" onClick={() => onAdd(turf)}>Add to Cart</button>
)}
</div>
</div>
</div>
);
}