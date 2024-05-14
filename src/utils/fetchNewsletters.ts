import { NEWSLETTER_ITEMS } from '../mocks/newslettersMock';
import { NewsletterItem } from '../models/newsletters';

export const fetchNewsletters = async (): Promise<NewsletterItem[]> => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NEWSLETTER_ITEMS);
    }, 1000);
  });
};
