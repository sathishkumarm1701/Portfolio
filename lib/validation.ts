import { z } from 'zod';

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional().refine(
    (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
    'Invalid phone number'
  ),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
  category: z.enum(['project', 'job', 'collaboration', 'general', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Blog post validation
export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  author: z.string(),
  date: z.string(),
  readTime: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  image: z.string(),
  featured: z.boolean().optional(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;

// Validation helper
export function validateContactForm(data: unknown) {
  try {
    return contactFormSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message };
    }
    return { error: 'Validation failed' };
  }
}
