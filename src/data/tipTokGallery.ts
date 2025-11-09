export interface TipTokGalleryGroup {
  title: string;
  description: string;
  images: string[];
}

const basePath = 'projects/tiptok';

const withBase = (files: string[]): string[] => files.map((file) => `${basePath}/${file}`);

export const tipTokGalleryGroups: TipTokGalleryGroup[] = [
  {
    title: 'Splash & Brand Entry',
    description: 'First-touch moments that introduce TipTok’s identity, hero visuals, and live-commerce proposition.',
    images: withBase([
      '01-Splash-Screen.png',
      '0.jpg',
      'Untitled-1 1@2x.png',
      'Live.jpg',
      'slider 01.png',
      'slider 2.png',
      'slider 3.png'
    ])
  },
  {
    title: 'Onboarding & Access',
    description: 'Authentication, sign-up, and password recovery screens designed for high trust and fast activation.',
    images: withBase([
      'Sign Up.png',
      'Sign Up Error.png',
      'Sign In_Email.png',
      'Sign In_Phone Number.png',
      'OTP Verification.png',
      'OTP Verification_Phone.png',
      '08-Forgot-Password.png',
      '08-Forgot-Password-1.png',
      '08-Forgot-Password_Phone.png',
      'Home .png'
    ])
  },
  {
    title: 'Highlights & Discovery',
    description: 'Hero visuals and discovery flows that communicate TipTok’s live commerce positioning and editorial storytelling.',
    images: withBase([
      'Feed.png',
      'DISCOVER.png',
      '17-Search.png',
      'Detail Page.png',
      'Gift.png'
    ])
  },
  {
    title: 'Profiles & Identity',
    description: 'Account, profile, and community presence flows ensuring creators can manage their brand consistently.',
    images: withBase([
      'Account.jpg',
      'Account-1.jpg',
      'Account-2.jpg',
      '36-Account-02.png',
      'Profile.png',
      'Profile-1.png',
      'Profile-2.png',
      'Audience.png',
      'Members.png',
      'Members 02.png',
      'Members 03.png'
    ])
  },
  {
    title: 'Community & Engagement',
    description: 'Messaging, reactions, and feed interactions that keep conversations active around every drop.',
    images: withBase([
      'Messages.png',
      'Msg Screem.png',
      'Calls.png',
      'Comment on Reel.png',
      'Comments.png',
      'Save Post.png',
      'Save Post-1.png',
      'Save Post-2.png',
      'Create Post.png',
      '19-Post-01.png',
      '20-Post-02.png'
    ])
  },
  {
    title: 'Stories & Creative Tools',
    description: 'Storytelling workflows with advanced creation tools, templates, and editorial layouts.',
    images: withBase([
      'Add Story.png',
      'Add Story-1.png',
      'Add Story 02.png',
      'Add Story 3.png',
      'Create Story.png',
      'Create Story-1.png',
      '42-Story-01.png',
      '42-Story-01-1.png',
      'Frame 3.png',
      'Frame 4.png',
      'Frame 37724.jpg',
      'Frame 37725.jpg',
      'Frame 37726.png',
      'Frame 37727.jpg'
    ])
  },
  {
    title: 'Live Streaming Suite',
    description: 'Full live video flow—from going live to moderating streams and closing the room safely.',
    images: withBase([
      'Live Screen.jpg',
      'Live Screen-1.jpg',
      'LIve Screen 02.jpg',
      'Live Screen 03.jpg',
      'Start Live Broadcast.jpg',
      'Start Live Broadcast/Filter video.jpg',
      'Live Video Call.png',
      'End Stream.png',
      'Stream Ended.png'
    ])
  },
  {
    title: 'Commerce & Monetisation',
    description: 'Shoppable moments, storefront creation, and monetisation mechanics optimized for mobile checkout.',
    images: withBase([
      'Shop Page.png',
      'Shop Page-1.png',
      'Shop Page-2.png',
      'Sell_01.png',
      'Property_Create_list .png',
      'Vehicle_Create .png',
      'Sale_Create .png',
      'Choose listing type.png',
      'Categories.png',
      'Category.png',
      'Category-1.png',
      'Coin Wallet.png',
      'Coin Wallet-1.png',
      'Subcribe .png',
      'Scan QR .png',
      'Scan QR -1.png',
      'Scan QR -2.png',
      'Games.png',
      'Games-1.png',
      'Games-2.png',
      'Games-3.png'
    ])
  },
  {
    title: 'Safety & System UI',
    description: 'Controls, overlays, and micro-interactions that reinforce trust and accessibility.',
    images: withBase([
      'Block Contacts.png',
      'Mask.png',
      'Language.png',
      'Rectangle 901.png',
      'bxs_up-arrow.png',
      'bxs_up-arrow-1.png',
      'bxs_up-arrow-2.png',
      'bxs_up-arrow-3.png',
      'teenyicons_tick-circle-solid.png',
      'vuesax/bold/vuesax/bold/card.svg'
    ])
  }
];
