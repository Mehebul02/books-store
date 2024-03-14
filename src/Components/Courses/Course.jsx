import PropTypes from 'prop-types';
const Course = ({item}) => {
    const {photo}=item
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

Course.propTypes = {
    item:PropTypes.array.isRequired
};

export default Course;