export default function About() {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-2xl mx-auto p-3 text-center'>
          <div>
            <h1 className='text-3xl font font-semibold text-center my-7'>
              About Gul&apos;s Blog
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
                Welcome to Gul&apos;s Blog! Created by Turdugul Okonbaeva, this
                blog serves as a personal platform to share stories and 
                experiences of self-taught programmers. It delves into 
                coding discipline, personal growth, and the journey of learning
                and mastering technology.
              </p>
  
              <p>
                On this blog, you&apos;ll find weekly articles and tutorials
                about web development, software engineering, and programming languages.
                As a self-taught career changer from education to tech, 
                Gul shares hes learning journey and insights into new technologies. 
                Visit often for fresh updates!
              </p>
  
              <p>
                This website is created using Next.js and{' '}
                <a
                  href='https://go.clerk.com/fgJHKlt'
                  target='_blank'
                  className='text-teal-500 hover:underline'
                >
                  Clerk
                </a>
                .
              </p>
  
              <p>
              Feel free to join the conversation in the comments!
              You can like, reply, and connect with other readers.
              We believe that learning together helps everyone grow and improve.
    
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }