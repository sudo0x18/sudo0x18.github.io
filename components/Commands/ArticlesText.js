"use client";
import { TbPoint } from "react-icons/tb";
import { MediumUserName } from '@/utils/data';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

export default function ArticlesText({ props }) {
    const fetcher = (...args) => fetch(...args)
        .then(
            (res) => {
                return res.json();
            }
        ).then((data) => {
            let arrData = [];
            if (data.status == "ok") {
                if (data.items?.length > 0) {
                    data.items.forEach((item) => {
                        arrData.push({
                            title: item.title,
                            link: item.link,
                            description: item.description
                        })
                    })
                }
            }
            return arrData;
        });

    const { data, error, isLoading } = useSWR(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MediumUserName}`, fetcher)
    return (
        <div>
            <div className='font-bold'>✍️ Chekout My Latest Medium Blog Posts</div>
            <br />
            {
                isLoading ? <>Loading posts....</>: data && data.length > 0 && data.map((item, index) => {
                    var arr = item.link.split('?');
                    arr.pop();
                    item.description = item.description.replace(/<[^>]*>?/gm, '');
                    item.description = item.description.slice(0, 300);

                    return (
                        <div key={index}>
                            <div className="flex items-center">
                                <TbPoint />
                                <Link className='font-medium text-blue-600 dark:text-blue-400 hover:underline' href={arr[0]} target="_blank">{item.title}</Link>
                                <br />
                            </div>
                            <div>{item.description} ...</div>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}
