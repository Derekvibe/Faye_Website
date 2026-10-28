export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  buyerType: string;
  rating: number;
  genreTag: string;
  orderType: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    quote: "This is my third order processed by Favour. She is an absolute delight to work with. Will solicit her services for all of my publication needs.",
    author: "sharon_hilliard",
    buyerType: "Repeat Fiverr Buyer (3 orders)",
    rating: 5,
    genreTag: "Christian / Fiction",
    orderType: "Full Book Editing & Formatting",
  },
  {
    id: "rev-2",
    quote: "I was very happy with the work. It exceeded my expectations. Very quick response time. I would definitely recommend and will use again in the future!!",
    author: "shanna_philpot",
    buyerType: "Fiverr Buyer",
    rating: 5,
    genreTag: "Children's Book",
    orderType: "Line Editing & Proofreading",
  },
  {
    id: "rev-3",
    quote: "Favour did amazing work, thank you! Professional, thorough, and delivered ahead of schedule with clear tracked changes and comments.",
    author: "paragonerin",
    buyerType: "Fiverr Buyer",
    rating: 5,
    genreTag: "Nonfiction",
    orderType: "Developmental & Copy Editing",
  },
  {
    id: "rev-4",
    quote: "Exceptional attention to detail on my Amazon KDP interior formatting. The margins and typography rendered flawlessly across print and Kindle.",
    author: "marcus_author",
    buyerType: "Indie Publisher",
    rating: 5,
    genreTag: "Academic / Nonfiction",
    orderType: "Amazon KDP Paperback & eBook",
  },
  {
    id: "rev-5",
    quote: "She preserved my voice while elevating every sentence. Her tracked suggestions made it so easy to follow and learn. 10/10 recommendation!",
    author: "elena_w",
    buyerType: "Debut Novelist",
    rating: 5,
    genreTag: "Historical Fiction",
    orderType: "Comprehensive Editing Package",
  },
  {
    id: "rev-6",
    quote: "From book cover concept to final upload-ready PDF, Favour took all the stress out of publishing my first book.",
    author: "david_k_books",
    buyerType: "Fiverr Buyer",
    rating: 5,
    genreTag: "Inspirational / Memoir",
    orderType: "Cover Design & Interior Formatting",
  },
];
