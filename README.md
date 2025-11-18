## প্রশ্ন ১: TypeScript এ Interface আর Type এর মধ্যে পার্থক্য কি?


### মূল পার্থক্যগুলো:

**১. Declaration Merging:**

Interface expand করা যায়, মানে একই নামের interface আবার declare করলে সেটা আগেরটার সাথে মিলে যায়। কিন্তু Type এ এটা করা যায় না। Type দিয়ে same name এ আবার declare করতে গেলে error দেখাবে।

**২. Union এবং Primitive Types:**

Type দিয়ে union types, primitive types এগুলো নিয়ে কাজ করা যায় যেমন "pending" বা "approved" বা "rejected" এর মতো অথবা string বা number এর মতো। এগুলো Interface দিয়ে করা যায় না।

**৩. Extends vs Intersection:**

Interface extends করা straightforward - সরাসরি extends keyword ব্যবহার করা যায়। কিন্তু Type এ intersection (&) operator ব্যবহার করতে হয়।

### কোনটা কখন ব্যবহার করবেন?

- সাধারণত object এর structure define করতে **Interface** ভালো
- Union, intersection বা complex type নিয়ে কাজ করতে হলে **Type** ভালো
- তবে বেশিরভাগ সময় দুইটা দিয়েই একই কাজ করা যায়

---

## প্রশ্ন ২: TypeScript এ `keyof` keyword টা কি কাজে লাগে?

`keyof` হলো TypeScript এর একটা powerful keyword যেটা দিয়ে একটা object এর সব key গুলোকে type হিসেবে নিয়ে আসা যায়।

ধরুন আপনার একটা User object আছে যেটাতে id, name, email, age আছে। এখন যদি একটা function লিখতে চান যেটা User এর যেকোনো property এর value return করবে, তাহলে `keyof` ব্যবহার করতে পারেন।

`keyof User` লিখলে সেটা automatically "id" বা "name" বা "email" বা "age" এই union type এ convert হয়ে যায়। মানে TypeScript নিজেই বুঝে নেয় কোন কোন key আছে।

### কেন এটা দরকার?

- `keyof` ছাড়া আপনাকে manually সব key এর নাম লিখতে হতো
- Object এ নতুন property add করলে সব জায়গায় update করতে হতো না
- TypeScript automatically সব key track করে রাখে
- Code আরো type-safe হয় আর bug কমে যায়

আরেকটা বড় সুবিধা হলো generic type এর সাথে ব্যবহার করলে TypeScript নিশ্চিত করে যে সঠিক property এ সঠিক type এর value set হচ্ছে। যেমন age property তে শুধু number যাবে, string যাবে না।

---