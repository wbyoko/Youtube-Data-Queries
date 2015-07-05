var pages = module.exports = {};

pages.homepage = {
	videos: [],
	playlists: []
};

pages.homepage.videos.push({
	"query":".item-section .yt-lockup-video",
	"attrs":{
		"id":{
			"attr":"data-context-item-id"
		},
		"title":{
			"query":".yt-lockup-title a"
		},
		"author":{
			"query":".yt-lockup-byline a"
		},
		"channel":{
			"query":".yt-lockup-byline a",
			"attr":"data-ytid"
		}
	}
});

pages.homepage.playlists.push({
	"query":".item-section .yt-lockup-playlist",
	"attrs":{
		"id":{
			"query":"a.yt-pl-thumb-link",
			"attr":"href",
			"regex":"list=(.*)$"
		},
		"title":{
			"query":".yt-lockup-title a"
		},
		"author":{
			"query":".yt-lockup-byline a"
		},
		"channel":{
			"query":".yt-lockup-byline a",
			"attr":"data-ytid"
		}
	}
});

pages.video = {
	videos: []
};

pages.video.videos.push({
    "attrs":{
        "id":{
            "query":"meta[itemprop=videoId]",
            "attr":"content"
        },
        "title":{
            "query":"meta[itemprop=name]",
            "attr":"content"
        },
        "author":{
            "query":".yt-user-info"
        },
        "channel":{
            "query":"meta[itemprop=channelId]",
            "attr":"content"
        }
    }
});

pages.video.videos.push({
    "query":".video-list-item",
    "attrs":{
        "id":{
            "query":".yt-uix-simple-thumb-wrap",
            "attr":"data-vid"
        },
        "title":{
            "query":"span.title"
        },
        "author":{
            "query":"span.attribution",
            "regex":"by (.*)$"
        },
        "channel":{
            "query":"span.attribution span",
            "attr":"data-ytid"
        }
    }
});

pages.search = {
	videos: pages.homepage.videos,
	playlists: pages.homepage.playlists,
	channels: []
};

pages.search.channels.push({
    "query":".yt-lockup-channel",
    "attrs":{
        "author":{
            "query":".yt-lockup-byline a"
        },
        "channel":{
            "query":".yt-lockup-byline a",
            "attr":"data-ytid"
        }
    }
});

pages.playlist = {
    playlists: [],
    videos: []
};

pages.playlist.videos.push({
    "query":".pl-video",
    "attrs":{
        "id":{
            "attr":"data-video-id"
        },
        "title":{
            "attr":"data-title"
        },
        "author":{
            "query":".pl-video-owner a"
        },
        "channel":{
            "query":".pl-video-owner a",
            "attr":"data-ytid"
        }
    }
});

pages.playlist.playlists.push({
    "attrs":{
        "id":{
            "query":"a.playlist-play-all",
            "attr":"href",
            "regex":"list=(.*)$"
        },
        "title":{
            "query":".pl-header-title"
        },
        "author":{
            "query":".pl-header-details a"
        },
        "channel":{
            "query":".pl-header-details a",
            "attr":"data-ytid"
        }
    }
});

pages.channel = {
    channels: [],
    videos: []
};

pages.channel.channels.push({
    "attrs":{
        "title":{
            "query":"meta[itemprop=name]",
            "attr":"content"
        },
        "author":{
            "query":"meta[itemprop=name]",
            "attr":"content"
        },
        "channel":{
            "query":"meta[itemprop=channelId]",
            "attr":"content"
        }
    }
});

pages.channel.channels.push({
    "query":".branded-page-related-channels-item",
    "attrs":{
        "title":{
            "query":".yt-lockup-title a"
        },
        "author":{
            "query":".yt-lockup-title a"
        },
        "channel":{
            "attr":"data-external-id"
        }
    }
});

pages.channel.videos.push({
    "query":".video-player-view-component",
    "attrs":{
        "id":{
            "query":".video-detail .title a",
            "attr":"href",
            "regex":"v=(.*)$"
        },
        "title":{
            "query":".video-detail .title a"
        }
    }
});

pages.channel.videos.push({
    "query":".yt-lockup-video",
    "attrs":{
        "id":{
            "attr":"data-context-item-id"
        },
        "title":{
            "query":".yt-lockup-title a"
        }
    }
});