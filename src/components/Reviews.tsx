import Avatar from "./Avatar";
import Rating from "./Rating";

type ReviewssProps = {
  reviews: {
    rating?: number;
    comment?: string;
    reviewserEmail?: string;
    reviewerName?: string;
    date?: Date;
  };
};
export const Reviewss = ({ reviews }: ReviewssProps) => {
  const reviewDate = reviews?.date ? new Date(reviews.date) : "";
  const formattedDate = reviewDate
    ? `${reviewDate.getFullYear()}-${String(reviewDate.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(reviewDate.getDate()).padStart(2, "0")}`
    : "";
  return (
    <>
      <div className="review-container">
        <div>
          <div className="review-container__reviewer">
            <Avatar name={reviews?.reviewerName} />
            <p>{reviews?.reviewerName}</p>
            <p>{formattedDate}</p>
          </div>
        </div>
        <div>
          <div>
            <Rating rating={reviews?.rating} />
          </div>
          <div>
            <p>{reviews?.comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};
