# HTTPConnectionOptionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DnsResolution** | Pointer to [**DnsResolutionEnum**](DnsResolutionEnum.md) | DNS resolution policy: force IPv4 or both (IPv4 and IPv6) when connecting.  * &#x60;both&#x60; - Both * &#x60;force_ipv4&#x60; - Force IPv4 | [optional] [default to BOTH]
**TransportPolicy** | Pointer to [**TransportPolicyEnum**](TransportPolicyEnum.md) | Transport protocol policy: preserve current scheme, force HTTP, or force HTTPS.  * &#x60;preserve&#x60; - Preserve * &#x60;force_https&#x60; - Force HTTPS * &#x60;force_http&#x60; - Force HTTP | [optional] [default to PRESERVE]
**HttpVersionPolicy** | Pointer to [**HttpVersionPolicyEnum**](HttpVersionPolicyEnum.md) | Defines the HTTP version preference for outbound connections (e.g., HTTP/1.1).  * &#x60;http1_1&#x60; - HTTP/1.1 | [optional] [default to HTTP1_1]
**Host** | Pointer to **string** | Optional custom host used to override the default target hostname during connection. | [optional] [default to "${host}"]
**PathPrefix** | Pointer to **string** | Optional prefix to add to all request paths (e.g., &#39;/v1&#39;). | [optional] [default to ""]
**FollowingRedirect** | Pointer to **bool** | If true, automatically follows HTTP redirects from the target server. | [optional] [default to false]
**RealIpHeader** | Pointer to **string** | Header name used to forward the original client IP address. | [optional] [default to "X-Real-IP"]
**RealPortHeader** | Pointer to **string** | Header name used to forward the original client port. | [optional] [default to "X-Real-PORT"]

## Methods

### NewHTTPConnectionOptionsRequest

`func NewHTTPConnectionOptionsRequest() *HTTPConnectionOptionsRequest`

NewHTTPConnectionOptionsRequest instantiates a new HTTPConnectionOptionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHTTPConnectionOptionsRequestWithDefaults

`func NewHTTPConnectionOptionsRequestWithDefaults() *HTTPConnectionOptionsRequest`

NewHTTPConnectionOptionsRequestWithDefaults instantiates a new HTTPConnectionOptionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDnsResolution

`func (o *HTTPConnectionOptionsRequest) GetDnsResolution() DnsResolutionEnum`

GetDnsResolution returns the DnsResolution field if non-nil, zero value otherwise.

### GetDnsResolutionOk

`func (o *HTTPConnectionOptionsRequest) GetDnsResolutionOk() (*DnsResolutionEnum, bool)`

GetDnsResolutionOk returns a tuple with the DnsResolution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDnsResolution

`func (o *HTTPConnectionOptionsRequest) SetDnsResolution(v DnsResolutionEnum)`

SetDnsResolution sets DnsResolution field to given value.

### HasDnsResolution

`func (o *HTTPConnectionOptionsRequest) HasDnsResolution() bool`

HasDnsResolution returns a boolean if a field has been set.

### GetTransportPolicy

`func (o *HTTPConnectionOptionsRequest) GetTransportPolicy() TransportPolicyEnum`

GetTransportPolicy returns the TransportPolicy field if non-nil, zero value otherwise.

### GetTransportPolicyOk

`func (o *HTTPConnectionOptionsRequest) GetTransportPolicyOk() (*TransportPolicyEnum, bool)`

GetTransportPolicyOk returns a tuple with the TransportPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportPolicy

`func (o *HTTPConnectionOptionsRequest) SetTransportPolicy(v TransportPolicyEnum)`

SetTransportPolicy sets TransportPolicy field to given value.

### HasTransportPolicy

`func (o *HTTPConnectionOptionsRequest) HasTransportPolicy() bool`

HasTransportPolicy returns a boolean if a field has been set.

### GetHttpVersionPolicy

`func (o *HTTPConnectionOptionsRequest) GetHttpVersionPolicy() HttpVersionPolicyEnum`

GetHttpVersionPolicy returns the HttpVersionPolicy field if non-nil, zero value otherwise.

### GetHttpVersionPolicyOk

`func (o *HTTPConnectionOptionsRequest) GetHttpVersionPolicyOk() (*HttpVersionPolicyEnum, bool)`

GetHttpVersionPolicyOk returns a tuple with the HttpVersionPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpVersionPolicy

`func (o *HTTPConnectionOptionsRequest) SetHttpVersionPolicy(v HttpVersionPolicyEnum)`

SetHttpVersionPolicy sets HttpVersionPolicy field to given value.

### HasHttpVersionPolicy

`func (o *HTTPConnectionOptionsRequest) HasHttpVersionPolicy() bool`

HasHttpVersionPolicy returns a boolean if a field has been set.

### GetHost

`func (o *HTTPConnectionOptionsRequest) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *HTTPConnectionOptionsRequest) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *HTTPConnectionOptionsRequest) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *HTTPConnectionOptionsRequest) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetPathPrefix

`func (o *HTTPConnectionOptionsRequest) GetPathPrefix() string`

GetPathPrefix returns the PathPrefix field if non-nil, zero value otherwise.

### GetPathPrefixOk

`func (o *HTTPConnectionOptionsRequest) GetPathPrefixOk() (*string, bool)`

GetPathPrefixOk returns a tuple with the PathPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPathPrefix

`func (o *HTTPConnectionOptionsRequest) SetPathPrefix(v string)`

SetPathPrefix sets PathPrefix field to given value.

### HasPathPrefix

`func (o *HTTPConnectionOptionsRequest) HasPathPrefix() bool`

HasPathPrefix returns a boolean if a field has been set.

### GetFollowingRedirect

`func (o *HTTPConnectionOptionsRequest) GetFollowingRedirect() bool`

GetFollowingRedirect returns the FollowingRedirect field if non-nil, zero value otherwise.

### GetFollowingRedirectOk

`func (o *HTTPConnectionOptionsRequest) GetFollowingRedirectOk() (*bool, bool)`

GetFollowingRedirectOk returns a tuple with the FollowingRedirect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowingRedirect

`func (o *HTTPConnectionOptionsRequest) SetFollowingRedirect(v bool)`

SetFollowingRedirect sets FollowingRedirect field to given value.

### HasFollowingRedirect

`func (o *HTTPConnectionOptionsRequest) HasFollowingRedirect() bool`

HasFollowingRedirect returns a boolean if a field has been set.

### GetRealIpHeader

`func (o *HTTPConnectionOptionsRequest) GetRealIpHeader() string`

GetRealIpHeader returns the RealIpHeader field if non-nil, zero value otherwise.

### GetRealIpHeaderOk

`func (o *HTTPConnectionOptionsRequest) GetRealIpHeaderOk() (*string, bool)`

GetRealIpHeaderOk returns a tuple with the RealIpHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRealIpHeader

`func (o *HTTPConnectionOptionsRequest) SetRealIpHeader(v string)`

SetRealIpHeader sets RealIpHeader field to given value.

### HasRealIpHeader

`func (o *HTTPConnectionOptionsRequest) HasRealIpHeader() bool`

HasRealIpHeader returns a boolean if a field has been set.

### GetRealPortHeader

`func (o *HTTPConnectionOptionsRequest) GetRealPortHeader() string`

GetRealPortHeader returns the RealPortHeader field if non-nil, zero value otherwise.

### GetRealPortHeaderOk

`func (o *HTTPConnectionOptionsRequest) GetRealPortHeaderOk() (*string, bool)`

GetRealPortHeaderOk returns a tuple with the RealPortHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRealPortHeader

`func (o *HTTPConnectionOptionsRequest) SetRealPortHeader(v string)`

SetRealPortHeader sets RealPortHeader field to given value.

### HasRealPortHeader

`func (o *HTTPConnectionOptionsRequest) HasRealPortHeader() bool`

HasRealPortHeader returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


