# Formspree Setup Guide

## Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Choose "React" as the integration type
3. Enter your form name (e.g., "Contact Form - oddeven.space")
4. Copy the Form ID (it looks like: `xpznvqko` or similar)

## Step 3: Configure Your Form
1. Open `src/components/Contact.tsx`
2. Find line 7: `const [state, handleFormspreeSubmit] = useForm("YOUR_FORM_ID");`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. Example: `const [state, handleFormspreeSubmit] = useForm("xpznvqko");`

## Step 4: Set Up Email Notifications
1. In your Formspree dashboard, go to your form settings
2. Click on "Notifications" tab
3. Add your email address where you want to receive form submissions
4. Customize the email template if desired

## Step 5: Test Your Form
1. Deploy your website or test locally
2. Fill out the contact form
3. Submit the form
4. Check your email for the form submission

## Form Fields Being Sent
Your form will send the following data to your email:
- **Name**: Client's full name
- **Email**: Client's email address
- **Company**: Client's company name (optional)
- **Service**: Selected service from dropdown
- **Message**: Client's message

## Free Plan Limits
- 50 submissions per month
- Basic email notifications
- Spam filtering

## Upgrade Options
- Pro Plan: 1000 submissions/month
- Business Plan: 10000 submissions/month
- Custom integrations and advanced features

## Troubleshooting
- If form doesn't work, check the Form ID is correct
- Verify your email in Formspree dashboard
- Check browser console for any errors
- Make sure form fields have proper `name` attributes

## Security Features
- Automatic spam protection
- SSL encryption
- GDPR compliant
- No sensitive data stored
