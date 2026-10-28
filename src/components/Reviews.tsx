import { ArrowUpRight } from "lucide-react";
import { reviewsData } from "@/data/reviewsData";
import styles from "./Reviews.module.css";

const fiverrProfileUrl = "https://www.fiverr.com/sellers/faye_edit01";

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className="wrap">
        <div className={styles.heading}>
          <div className={styles.intro}>
            <p className="eyebrow">Kind words</p>
            <h2>Authors trust me with their stories.</h2>
            <p className={styles.description}>
              A selection of feedback from authors I’ve helped bring their books
              closer to publication.
            </p>
          </div>

          <div className={styles.rating} aria-label="Rated 4.8 out of 5 on Fiverr">
            <span className={styles.ratingValue}>4.8</span>
            <span className={styles.ratingDetails}>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span>74 Fiverr reviews</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {reviewsData.map((review, index) => (
            <article
              className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
              key={review.id}
            >
              <div className={styles.cardTop}>
                <span className={styles.quoteMark} aria-hidden="true">
                  “
                </span>
                <span className={styles.source}>Fiverr review</span>
              </div>

              <blockquote className={styles.quote}>{review.quote}</blockquote>

              <footer className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.author.charAt(0).toUpperCase()}
                </span>
                <span className={styles.authorDetails}>
                  <strong>{review.author}</strong>
                  <span>{review.country}</span>
                </span>
              </footer>
            </article>
          ))}
        </div>

        <div className={styles.linkWrap}>
          <a
            className={styles.profileLink}
            href={fiverrProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all 74 reviews on Fiverr
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
