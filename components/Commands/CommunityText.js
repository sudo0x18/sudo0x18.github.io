import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CommunityText() {
    return (
        <div>
            <div class="flex items-center gap-4">
                {/* <Image
                    src={`/cyberversecommunity.jpg`}
                    width={500}
                    height={500}
                    class="w-12 h-12 rounded-full"
                    alt="CyberVerse Community"
                /> */}
                <img src={`/cyberversecommunity.jpg`} width={500} height={500} className='w-12 h-12 rounded-full' alt="" loading='lazy'/>
                <div class="font-medium dark:text-white">
                    <div>CyberVerse Community</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Founder | Jan 2022</div>
                </div>
            </div>
            <br />
            <div className='ml-4'>
                I have initiated a Cyber Security community to spread awareness and help
                people to get started into the field of Cyber Security. Our community
                contains more then 600 people in Community Group. The main aim of an
                initiative is to educate people in right way and help them to learn to make
                cyber world more secure.
                <br />
                <br />
                We are a leading cybersecurity community connecting professionals in the field.
                <br />
                At CyberVerse, we foster collaboration, learning, and innovation among cybersecurity enthusiasts, students, and professionals. With a growing membership of peope, our vibrant community spans India and beyond.
                <br />
                Join us for exclusive webinars, workshops, and discussions featuring industry experts. Access the latest cybersecurity resources, news, and job opportunities. Connect with like-minded professionals, expand your network, and stay updated on industry trends.
                <br />
                <br />
                <u>Our Vision</u>: To create a collaborative ecosystem where cybersecurity enthusiasts, students, and professionals come together to drive innovation, share knowledge, and shape the future of cybersecurity.
                <br />
                <br />
                <u>Our Mission</u>: To empower individuals in their cybersecurity journey by providing a learning, networking, and professional growth platform. We aim to foster a community-driven environment that promotes collaboration, knowledge sharing, and continuous development.
                <br />
                <br />
                <u>Our Goal</u>: Empower cybersecurity enthusiasts, students, and professionals through collaboration, learning, and networking.
                <br />
                <br />
                Join the Verse of CyberVerse Community
                <br />
                <br />
                🔒 Vibrant Discord community dedicated to cybersecurity.
                <br />
                👨‍💻 Connect with experts, enthusiasts, and learners in the field.
                <br />
                📚 Access valuable resources, stay updated on trends, and discuss cutting-edge technologies.
                <br />
                🤝 Network, collaborate on projects, and explore opportunities.
                <br />
                🌟 Introduce yourself, familiarize with guidelines, and be part of something bigger!
                <br />
                <br />
                <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href="https://discord.gg/586pe59D9K" target="_blank">https://discord.gg/586pe59D9K</Link>
            </div>
        </div>
    )
}
