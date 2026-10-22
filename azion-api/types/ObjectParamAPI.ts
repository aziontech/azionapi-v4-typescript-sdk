import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AWS4HMAC } from '../models/AWS4HMAC';
import { AWS4HMACAttributes } from '../models/AWS4HMACAttributes';
import { AWS4HMACAttributesRequest } from '../models/AWS4HMACAttributesRequest';
import { AWS4HMACRequest } from '../models/AWS4HMACRequest';
import { AWS4HMACTypeEnum } from '../models/AWS4HMACTypeEnum';
import { AWSKinesisFirehoseEndpoint } from '../models/AWSKinesisFirehoseEndpoint';
import { AWSKinesisFirehoseEndpointAttributes } from '../models/AWSKinesisFirehoseEndpointAttributes';
import { AWSKinesisFirehoseEndpointAttributesRequest } from '../models/AWSKinesisFirehoseEndpointAttributesRequest';
import { AWSKinesisFirehoseEndpointAttributesTypeEnum } from '../models/AWSKinesisFirehoseEndpointAttributesTypeEnum';
import { AWSKinesisFirehoseEndpointRequest } from '../models/AWSKinesisFirehoseEndpointRequest';
import { Account } from '../models/Account';
import { AccountInfo } from '../models/AccountInfo';
import { AccountInfoRequest } from '../models/AccountInfoRequest';
import { AccountRequest } from '../models/AccountRequest';
import { Address } from '../models/Address';
import { AddressLoadBalancerModule } from '../models/AddressLoadBalancerModule';
import { AddressLoadBalancerModuleRequest } from '../models/AddressLoadBalancerModuleRequest';
import { AddressModules } from '../models/AddressModules';
import { AddressModulesRequest } from '../models/AddressModulesRequest';
import { AddressRequest } from '../models/AddressRequest';
import { AggregatedField } from '../models/AggregatedField';
import { AggregatedFieldRequest } from '../models/AggregatedFieldRequest';
import { AlgType } from '../models/AlgType';
import { Application } from '../models/Application';
import { ApplicationAcceleratorModule } from '../models/ApplicationAcceleratorModule';
import { ApplicationAcceleratorModuleRequest } from '../models/ApplicationAcceleratorModuleRequest';
import { ApplicationCriterionArgument } from '../models/ApplicationCriterionArgument';
import { ApplicationCriterionArgumentRequest } from '../models/ApplicationCriterionArgumentRequest';
import { ApplicationCriterionField } from '../models/ApplicationCriterionField';
import { ApplicationCriterionFieldRequest } from '../models/ApplicationCriterionFieldRequest';
import { ApplicationCriterionFieldVariableEnum } from '../models/ApplicationCriterionFieldVariableEnum';
import { ApplicationModules } from '../models/ApplicationModules';
import { ApplicationModulesRequest } from '../models/ApplicationModulesRequest';
import { ApplicationRequest } from '../models/ApplicationRequest';
import { ApplicationRequestPhaseRuleEngineOrder } from '../models/ApplicationRequestPhaseRuleEngineOrder';
import { ApplicationResponse } from '../models/ApplicationResponse';
import { ApplicationResponsePhaseRuleEngineOrderRequest } from '../models/ApplicationResponsePhaseRuleEngineOrderRequest';
import { AzureBlobStorageEndpoint } from '../models/AzureBlobStorageEndpoint';
import { AzureBlobStorageEndpointAttributes } from '../models/AzureBlobStorageEndpointAttributes';
import { AzureBlobStorageEndpointAttributesRequest } from '../models/AzureBlobStorageEndpointAttributesRequest';
import { AzureBlobStorageEndpointAttributesTypeEnum } from '../models/AzureBlobStorageEndpointAttributesTypeEnum';
import { AzureBlobStorageEndpointRequest } from '../models/AzureBlobStorageEndpointRequest';
import { AzureMonitorEndpoint } from '../models/AzureMonitorEndpoint';
import { AzureMonitorEndpointAttributes } from '../models/AzureMonitorEndpointAttributes';
import { AzureMonitorEndpointAttributesRequest } from '../models/AzureMonitorEndpointAttributesRequest';
import { AzureMonitorEndpointAttributesTypeEnum } from '../models/AzureMonitorEndpointAttributesTypeEnum';
import { AzureMonitorEndpointRequest } from '../models/AzureMonitorEndpointRequest';
import { BaseQuery } from '../models/BaseQuery';
import { BaseQueryRequest } from '../models/BaseQueryRequest';
import { BehaviorArgs } from '../models/BehaviorArgs';
import { BehaviorArgsAttributes } from '../models/BehaviorArgsAttributes';
import { BehaviorArgsAttributesValue } from '../models/BehaviorArgsAttributesValue';
import { BehaviorCapture } from '../models/BehaviorCapture';
import { BehaviorCaptureMatchGroupsAttributes } from '../models/BehaviorCaptureMatchGroupsAttributes';
import { BehaviorNoArgs } from '../models/BehaviorNoArgs';
import { BehaviorNoArgsTypeEnum } from '../models/BehaviorNoArgsTypeEnum';
import { BigQueryEndpoint } from '../models/BigQueryEndpoint';
import { BigQueryEndpointAttributes } from '../models/BigQueryEndpointAttributes';
import { BigQueryEndpointAttributesRequest } from '../models/BigQueryEndpointAttributesRequest';
import { BigQueryEndpointAttributesTypeEnum } from '../models/BigQueryEndpointAttributesTypeEnum';
import { BigQueryEndpointRequest } from '../models/BigQueryEndpointRequest';
import { Brand } from '../models/Brand';
import { BrandRequest } from '../models/BrandRequest';
import { BrowserCacheModule } from '../models/BrowserCacheModule';
import { BrowserCacheModuleBehaviorEnum } from '../models/BrowserCacheModuleBehaviorEnum';
import { BrowserCacheModuleRequest } from '../models/BrowserCacheModuleRequest';
import { Bucket } from '../models/Bucket';
import { BucketCreate } from '../models/BucketCreate';
import { BucketCreateRequest } from '../models/BucketCreateRequest';
import { BucketCreateResponse } from '../models/BucketCreateResponse';
import { BucketObject } from '../models/BucketObject';
import { BuildContextField } from '../models/BuildContextField';
import { BuildContextFieldRequest } from '../models/BuildContextFieldRequest';
import { CacheModule } from '../models/CacheModule';
import { CacheModuleRequest } from '../models/CacheModuleRequest';
import { CacheSetting } from '../models/CacheSetting';
import { CacheSettingRequest } from '../models/CacheSettingRequest';
import { CacheSettingResponse } from '../models/CacheSettingResponse';
import { CacheSettingsApplicationAcceleratorModule } from '../models/CacheSettingsApplicationAcceleratorModule';
import { CacheSettingsApplicationAcceleratorModuleRequest } from '../models/CacheSettingsApplicationAcceleratorModuleRequest';
import { CacheSettingsCacheModule } from '../models/CacheSettingsCacheModule';
import { CacheSettingsCacheModuleBehaviorEnum } from '../models/CacheSettingsCacheModuleBehaviorEnum';
import { CacheSettingsCacheModuleRequest } from '../models/CacheSettingsCacheModuleRequest';
import { CacheSettingsModules } from '../models/CacheSettingsModules';
import { CacheSettingsModulesRequest } from '../models/CacheSettingsModulesRequest';
import { CacheSettingsTieredCacheModule } from '../models/CacheSettingsTieredCacheModule';
import { CacheSettingsTieredCacheModuleRequest } from '../models/CacheSettingsTieredCacheModuleRequest';
import { CacheVaryByCookiesModule } from '../models/CacheVaryByCookiesModule';
import { CacheVaryByCookiesModuleRequest } from '../models/CacheVaryByCookiesModuleRequest';
import { CacheVaryByDevicesModule } from '../models/CacheVaryByDevicesModule';
import { CacheVaryByDevicesModuleBehaviorEnum } from '../models/CacheVaryByDevicesModuleBehaviorEnum';
import { CacheVaryByDevicesModuleRequest } from '../models/CacheVaryByDevicesModuleRequest';
import { CacheVaryByMethodEnum } from '../models/CacheVaryByMethodEnum';
import { CacheVaryByQuerystringModule } from '../models/CacheVaryByQuerystringModule';
import { CacheVaryByQuerystringModuleRequest } from '../models/CacheVaryByQuerystringModuleRequest';
import { Certificate } from '../models/Certificate';
import { CertificateRequest } from '../models/CertificateRequest';
import { CertificateResponse } from '../models/CertificateResponse';
import { CertificateRevocationList } from '../models/CertificateRevocationList';
import { CertificateRevocationListResponse } from '../models/CertificateRevocationListResponse';
import { CertificateSigningRequest } from '../models/CertificateSigningRequest';
import { ChatThread } from '../models/ChatThread';
import { ChatThreadRequest } from '../models/ChatThreadRequest';
import { Chunk } from '../models/Chunk';
import { CiphersEnum } from '../models/CiphersEnum';
import { CloneApplicationRequest } from '../models/CloneApplicationRequest';
import { CloneFirewallRequest } from '../models/CloneFirewallRequest';
import { CloneWAFRequest } from '../models/CloneWAFRequest';
import { CodeEnum } from '../models/CodeEnum';
import { ConditionalEnum } from '../models/ConditionalEnum';
import { Connector } from '../models/Connector';
import { ConnectorHTTP } from '../models/ConnectorHTTP';
import { ConnectorHTTPAttributes } from '../models/ConnectorHTTPAttributes';
import { ConnectorHTTPAttributesRequest } from '../models/ConnectorHTTPAttributesRequest';
import { ConnectorHTTPRequest } from '../models/ConnectorHTTPRequest';
import { ConnectorLiveIngest } from '../models/ConnectorLiveIngest';
import { ConnectorLiveIngestAttributes } from '../models/ConnectorLiveIngestAttributes';
import { ConnectorLiveIngestAttributesRequest } from '../models/ConnectorLiveIngestAttributesRequest';
import { ConnectorLiveIngestRequest } from '../models/ConnectorLiveIngestRequest';
import { ConnectorRequest } from '../models/ConnectorRequest';
import { ConnectorResponse } from '../models/ConnectorResponse';
import { ConnectorStorage } from '../models/ConnectorStorage';
import { ConnectorStorageAttributes } from '../models/ConnectorStorageAttributes';
import { ConnectorStorageAttributesRequest } from '../models/ConnectorStorageAttributesRequest';
import { ConnectorStorageRequest } from '../models/ConnectorStorageRequest';
import { Content } from '../models/Content';
import { ContentRequest } from '../models/ContentRequest';
import { ContentTypeEnum } from '../models/ContentTypeEnum';
import { ContinuousDeployment } from '../models/ContinuousDeployment';
import { ContinuousDeploymentListResponse } from '../models/ContinuousDeploymentListResponse';
import { ContinuousDeploymentRequest } from '../models/ContinuousDeploymentRequest';
import { ContinuousDeploymentResponse } from '../models/ContinuousDeploymentResponse';
import { CreateAccountRequest } from '../models/CreateAccountRequest';
import { CreateBrandRequest } from '../models/CreateBrandRequest';
import { CreateOrganizationRequest } from '../models/CreateOrganizationRequest';
import { CreateResellerRequest } from '../models/CreateResellerRequest';
import { CreateWorkspaceRequest } from '../models/CreateWorkspaceRequest';
import { Credential } from '../models/Credential';
import { CredentialCreateRequest } from '../models/CredentialCreateRequest';
import { CredentialResponse } from '../models/CredentialResponse';
import { Credit } from '../models/Credit';
import { CreditRequest } from '../models/CreditRequest';
import { CreditResponse } from '../models/CreditResponse';
import { CriterionOperatorEnum } from '../models/CriterionOperatorEnum';
import { CustomPage } from '../models/CustomPage';
import { CustomPageRequest } from '../models/CustomPageRequest';
import { CustomPageResponse } from '../models/CustomPageResponse';
import { DNSSEC } from '../models/DNSSEC';
import { DNSSECRequest } from '../models/DNSSECRequest';
import { DNSSECResponse } from '../models/DNSSECResponse';
import { Dashboard } from '../models/Dashboard';
import { DashboardListResponse } from '../models/DashboardListResponse';
import { DashboardRequest } from '../models/DashboardRequest';
import { DashboardResponse } from '../models/DashboardResponse';
import { DataSource } from '../models/DataSource';
import { DataSourceEnum } from '../models/DataSourceEnum';
import { DataStream } from '../models/DataStream';
import { DataStreamRequest } from '../models/DataStreamRequest';
import { DataStreamResponse } from '../models/DataStreamResponse';
import { DatabaseDetail } from '../models/DatabaseDetail';
import { DatabaseDetailResponse } from '../models/DatabaseDetailResponse';
import { DatabaseRequest } from '../models/DatabaseRequest';
import { DatadogEndpoint } from '../models/DatadogEndpoint';
import { DatadogEndpointAttributes } from '../models/DatadogEndpointAttributes';
import { DatadogEndpointAttributesRequest } from '../models/DatadogEndpointAttributesRequest';
import { DatadogEndpointAttributesTypeEnum } from '../models/DatadogEndpointAttributesTypeEnum';
import { DatadogEndpointRequest } from '../models/DatadogEndpointRequest';
import { DefaultDeploymentStrategy } from '../models/DefaultDeploymentStrategy';
import { DefaultDeploymentStrategyAttrs } from '../models/DefaultDeploymentStrategyAttrs';
import { DefaultDeploymentStrategyAttrsRequest } from '../models/DefaultDeploymentStrategyAttrsRequest';
import { DefaultDeploymentStrategyRequest } from '../models/DefaultDeploymentStrategyRequest';
import { DelegationSigner } from '../models/DelegationSigner';
import { DeleteResponse } from '../models/DeleteResponse';
import { DeploymentStrategyDefaultDeploymentStrategy } from '../models/DeploymentStrategyDefaultDeploymentStrategy';
import { DeploymentStrategyDefaultDeploymentStrategyRequest } from '../models/DeploymentStrategyDefaultDeploymentStrategyRequest';
import { DeploymentStrategyShared } from '../models/DeploymentStrategyShared';
import { DeviceGroup } from '../models/DeviceGroup';
import { DeviceGroupRequest } from '../models/DeviceGroupRequest';
import { DeviceGroupResponse } from '../models/DeviceGroupResponse';
import { DnsResolutionEnum } from '../models/DnsResolutionEnum';
import { Document } from '../models/Document';
import { DocumentRequest } from '../models/DocumentRequest';
import { ElasticsearchEndpoint } from '../models/ElasticsearchEndpoint';
import { ElasticsearchEndpointAttributes } from '../models/ElasticsearchEndpointAttributes';
import { ElasticsearchEndpointAttributesRequest } from '../models/ElasticsearchEndpointAttributesRequest';
import { ElasticsearchEndpointAttributesTypeEnum } from '../models/ElasticsearchEndpointAttributesTypeEnum';
import { ElasticsearchEndpointRequest } from '../models/ElasticsearchEndpointRequest';
import { EmbeddingModelEnum } from '../models/EmbeddingModelEnum';
import { EngineVersionEnum } from '../models/EngineVersionEnum';
import { ErrorResponse } from '../models/ErrorResponse';
import { Execution } from '../models/Execution';
import { ExecutionEnvironmentEnum } from '../models/ExecutionEnvironmentEnum';
import { ExecutionListResponse } from '../models/ExecutionListResponse';
import { ExecutionResponse } from '../models/ExecutionResponse';
import { ExecutionScript } from '../models/ExecutionScript';
import { ExecutionScriptListResponse } from '../models/ExecutionScriptListResponse';
import { ExecutionScriptResponse } from '../models/ExecutionScriptResponse';
import { Executor } from '../models/Executor';
import { ExecutorResponse } from '../models/ExecutorResponse';
import { Favorite } from '../models/Favorite';
import { FavoriteRequest } from '../models/FavoriteRequest';
import { Firewall } from '../models/Firewall';
import { FirewallBehavior } from '../models/FirewallBehavior';
import { FirewallBehaviorArgs } from '../models/FirewallBehaviorArgs';
import { FirewallBehaviorArgsRequest } from '../models/FirewallBehaviorArgsRequest';
import { FirewallBehaviorModeEnum } from '../models/FirewallBehaviorModeEnum';
import { FirewallBehaviorNoArgs } from '../models/FirewallBehaviorNoArgs';
import { FirewallBehaviorNoArgsRequest } from '../models/FirewallBehaviorNoArgsRequest';
import { FirewallBehaviorNoArgsTypeEnum } from '../models/FirewallBehaviorNoArgsTypeEnum';
import { FirewallBehaviorObjectArgs } from '../models/FirewallBehaviorObjectArgs';
import { FirewallBehaviorObjectArgsAttributes } from '../models/FirewallBehaviorObjectArgsAttributes';
import { FirewallBehaviorObjectArgsRequest } from '../models/FirewallBehaviorObjectArgsRequest';
import { FirewallBehaviorObjectArgsRequestAttributes } from '../models/FirewallBehaviorObjectArgsRequestAttributes';
import { FirewallBehaviorRequest } from '../models/FirewallBehaviorRequest';
import { FirewallBehaviorRunFunctionAttributes } from '../models/FirewallBehaviorRunFunctionAttributes';
import { FirewallBehaviorRunFunctionAttributesRequest } from '../models/FirewallBehaviorRunFunctionAttributesRequest';
import { FirewallBehaviorSetCustomResponseAttributes } from '../models/FirewallBehaviorSetCustomResponseAttributes';
import { FirewallBehaviorSetCustomResponseAttributesRequest } from '../models/FirewallBehaviorSetCustomResponseAttributesRequest';
import { FirewallBehaviorSetRateLimitAttributes } from '../models/FirewallBehaviorSetRateLimitAttributes';
import { FirewallBehaviorSetRateLimitAttributesRequest } from '../models/FirewallBehaviorSetRateLimitAttributesRequest';
import { FirewallBehaviorSetRateLimitAttributesTypeEnum } from '../models/FirewallBehaviorSetRateLimitAttributesTypeEnum';
import { FirewallBehaviorSetWafAttributes } from '../models/FirewallBehaviorSetWafAttributes';
import { FirewallBehaviorSetWafAttributesRequest } from '../models/FirewallBehaviorSetWafAttributesRequest';
import { FirewallCriterionArgument } from '../models/FirewallCriterionArgument';
import { FirewallCriterionArgumentRequest } from '../models/FirewallCriterionArgumentRequest';
import { FirewallCriterionField } from '../models/FirewallCriterionField';
import { FirewallCriterionFieldRequest } from '../models/FirewallCriterionFieldRequest';
import { FirewallCriterionFieldVariableEnum } from '../models/FirewallCriterionFieldVariableEnum';
import { FirewallFunctionInstance } from '../models/FirewallFunctionInstance';
import { FirewallFunctionInstanceArgs } from '../models/FirewallFunctionInstanceArgs';
import { FirewallFunctionInstanceRequest } from '../models/FirewallFunctionInstanceRequest';
import { FirewallFunctionInstanceResponse } from '../models/FirewallFunctionInstanceResponse';
import { FirewallModule } from '../models/FirewallModule';
import { FirewallModuleRequest } from '../models/FirewallModuleRequest';
import { FirewallModules } from '../models/FirewallModules';
import { FirewallModulesRequest } from '../models/FirewallModulesRequest';
import { FirewallRequest } from '../models/FirewallRequest';
import { FirewallResponse } from '../models/FirewallResponse';
import { FirewallRule } from '../models/FirewallRule';
import { FirewallRuleEngineOrderRequest } from '../models/FirewallRuleEngineOrderRequest';
import { FirewallRuleRequest } from '../models/FirewallRuleRequest';
import { FirewallRuleResponse } from '../models/FirewallRuleResponse';
import { Folder } from '../models/Folder';
import { FolderListResponse } from '../models/FolderListResponse';
import { FolderRequest } from '../models/FolderRequest';
import { FolderResponse } from '../models/FolderResponse';
import { Function } from '../models/Function';
import { FunctionAzionForm } from '../models/FunctionAzionForm';
import { FunctionDefaultArgs } from '../models/FunctionDefaultArgs';
import { FunctionInstance } from '../models/FunctionInstance';
import { FunctionInstanceRequest } from '../models/FunctionInstanceRequest';
import { FunctionInstanceResponse } from '../models/FunctionInstanceResponse';
import { FunctionModule } from '../models/FunctionModule';
import { FunctionModuleRequest } from '../models/FunctionModuleRequest';
import { FunctionResponse } from '../models/FunctionResponse';
import { Functions } from '../models/Functions';
import { FunctionsRequest } from '../models/FunctionsRequest';
import { Grant } from '../models/Grant';
import { GrantRequest } from '../models/GrantRequest';
import { Group } from '../models/Group';
import { GroupMembers } from '../models/GroupMembers';
import { GroupMembersRequest } from '../models/GroupMembersRequest';
import { GroupRequest } from '../models/GroupRequest';
import { HMAC } from '../models/HMAC';
import { HMACRequest } from '../models/HMACRequest';
import { HTTPConnectionOptions } from '../models/HTTPConnectionOptions';
import { HTTPConnectionOptionsRequest } from '../models/HTTPConnectionOptionsRequest';
import { HTTPModules } from '../models/HTTPModules';
import { HTTPModulesRequest } from '../models/HTTPModulesRequest';
import { HttpPostEndpoint } from '../models/HttpPostEndpoint';
import { HttpPostEndpointAttributes } from '../models/HttpPostEndpointAttributes';
import { HttpPostEndpointAttributesRequest } from '../models/HttpPostEndpointAttributesRequest';
import { HttpPostEndpointAttributesTypeEnum } from '../models/HttpPostEndpointAttributesTypeEnum';
import { HttpPostEndpointRequest } from '../models/HttpPostEndpointRequest';
import { HttpProtocol } from '../models/HttpProtocol';
import { HttpProtocolRequest } from '../models/HttpProtocolRequest';
import { HttpVersionPolicyEnum } from '../models/HttpVersionPolicyEnum';
import { ImageProcessorModule } from '../models/ImageProcessorModule';
import { ImageProcessorModuleRequest } from '../models/ImageProcessorModuleRequest';
import { InfrastructureEnum } from '../models/InfrastructureEnum';
import { InputDataSource } from '../models/InputDataSource';
import { InputDataSourceAttributes } from '../models/InputDataSourceAttributes';
import { InputDataSourceAttributesRequest } from '../models/InputDataSourceAttributesRequest';
import { InputDataSourceAttributesTypeEnum } from '../models/InputDataSourceAttributesTypeEnum';
import { InputDataSourceRequest } from '../models/InputDataSourceRequest';
import { InputInputDataSourceAttributes } from '../models/InputInputDataSourceAttributes';
import { InputInputDataSourceAttributesRequest } from '../models/InputInputDataSourceAttributesRequest';
import { InputShared } from '../models/InputShared';
import { Integration } from '../models/Integration';
import { IntegrationListResponse } from '../models/IntegrationListResponse';
import { IntegrationResponse } from '../models/IntegrationResponse';
import { JSONAPIErrorObject } from '../models/JSONAPIErrorObject';
import { JSONAPIErrorSource } from '../models/JSONAPIErrorSource';
import { KBAskRequest } from '../models/KBAskRequest';
import { KBAskResponse } from '../models/KBAskResponse';
import { KBQueryRequest } from '../models/KBQueryRequest';
import { KBQueryResponse } from '../models/KBQueryResponse';
import { KBQueryResult } from '../models/KBQueryResult';
import { KafkaEndpoint } from '../models/KafkaEndpoint';
import { KafkaEndpointAttributes } from '../models/KafkaEndpointAttributes';
import { KafkaEndpointAttributesRequest } from '../models/KafkaEndpointAttributesRequest';
import { KafkaEndpointAttributesTypeEnum } from '../models/KafkaEndpointAttributesTypeEnum';
import { KafkaEndpointRequest } from '../models/KafkaEndpointRequest';
import { KnowledgeBase } from '../models/KnowledgeBase';
import { KnowledgeBaseRequest } from '../models/KnowledgeBaseRequest';
import { LargeFileCacheModule } from '../models/LargeFileCacheModule';
import { LargeFileCacheModuleRequest } from '../models/LargeFileCacheModuleRequest';
import { LayerEnum } from '../models/LayerEnum';
import { LibraryReportRequest } from '../models/LibraryReportRequest';
import { LimitByEnum } from '../models/LimitByEnum';
import { LoadBalancerModule } from '../models/LoadBalancerModule';
import { LoadBalancerModuleConfig } from '../models/LoadBalancerModuleConfig';
import { LoadBalancerModuleConfigRequest } from '../models/LoadBalancerModuleConfigRequest';
import { LoadBalancerModuleRequest } from '../models/LoadBalancerModuleRequest';
import { LockoutPolicy } from '../models/LockoutPolicy';
import { LockoutPolicyRequest } from '../models/LockoutPolicyRequest';
import { LockoutPolicyResponse } from '../models/LockoutPolicyResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { MFAToken } from '../models/MFAToken';
import { MTLS } from '../models/MTLS';
import { MTLSConfig } from '../models/MTLSConfig';
import { MTLSConfigRequest } from '../models/MTLSConfigRequest';
import { MTLSRequest } from '../models/MTLSRequest';
import { Message } from '../models/Message';
import { MessageRequest } from '../models/MessageRequest';
import { MethodEnum } from '../models/MethodEnum';
import { MinimumVersionEnum } from '../models/MinimumVersionEnum';
import { ModeEnum } from '../models/ModeEnum';
import { ModelRecord } from '../models/ModelRecord';
import { Namespace } from '../models/Namespace';
import { NamespaceCreateRequest } from '../models/NamespaceCreateRequest';
import { NamespaceList } from '../models/NamespaceList';
import { NetworkList } from '../models/NetworkList';
import { NetworkListRequest } from '../models/NetworkListRequest';
import { NetworkListResponse } from '../models/NetworkListResponse';
import { NetworkListSummary } from '../models/NetworkListSummary';
import { NetworkListTypeEnum } from '../models/NetworkListTypeEnum';
import { NodeGroups } from '../models/NodeGroups';
import { NodeGroupsById } from '../models/NodeGroupsById';
import { NodeGroupsByIdRequest } from '../models/NodeGroupsByIdRequest';
import { NodeGroupsRequest } from '../models/NodeGroupsRequest';
import { NodeServiceBind } from '../models/NodeServiceBind';
import { NodeServices } from '../models/NodeServices';
import { NodeServicesRequest } from '../models/NodeServicesRequest';
import { Nodes } from '../models/Nodes';
import { NodesRequest } from '../models/NodesRequest';
import { ObjectResponseAsyncData } from '../models/ObjectResponseAsyncData';
import { ObjectResponseData } from '../models/ObjectResponseData';
import { Order } from '../models/Order';
import { OrderRequest } from '../models/OrderRequest';
import { OrderResponse } from '../models/OrderResponse';
import { Organization } from '../models/Organization';
import { OrganizationRequest } from '../models/OrganizationRequest';
import { OriginIPACL } from '../models/OriginIPACL';
import { OriginIPACLRequest } from '../models/OriginIPACLRequest';
import { OriginShieldConfig } from '../models/OriginShieldConfig';
import { OriginShieldConfigRequest } from '../models/OriginShieldConfigRequest';
import { OriginShieldModule } from '../models/OriginShieldModule';
import { OriginShieldModuleRequest } from '../models/OriginShieldModuleRequest';
import { OriginTypeEnum } from '../models/OriginTypeEnum';
import { Output } from '../models/Output';
import { OutputRequest } from '../models/OutputRequest';
import { OutputTypeEnum } from '../models/OutputTypeEnum';
import { PageBase } from '../models/PageBase';
import { PageConnector } from '../models/PageConnector';
import { PageConnectorAttributes } from '../models/PageConnectorAttributes';
import { PageConnectorAttributesRequest } from '../models/PageConnectorAttributesRequest';
import { PageConnectorRequest } from '../models/PageConnectorRequest';
import { PageRequestBase } from '../models/PageRequestBase';
import { PaginatedAccountList } from '../models/PaginatedAccountList';
import { PaginatedApplicationList } from '../models/PaginatedApplicationList';
import { PaginatedBucketList } from '../models/PaginatedBucketList';
import { PaginatedCacheSettingList } from '../models/PaginatedCacheSettingList';
import { PaginatedCertificateList } from '../models/PaginatedCertificateList';
import { PaginatedCertificateRevocationList } from '../models/PaginatedCertificateRevocationList';
import { PaginatedChatThreadList } from '../models/PaginatedChatThreadList';
import { PaginatedChunkList } from '../models/PaginatedChunkList';
import { PaginatedConnectorList } from '../models/PaginatedConnectorList';
import { PaginatedContinuousDeploymentListResponseList } from '../models/PaginatedContinuousDeploymentListResponseList';
import { PaginatedCredentialList } from '../models/PaginatedCredentialList';
import { PaginatedCustomPageList } from '../models/PaginatedCustomPageList';
import { PaginatedDashboardListResponseList } from '../models/PaginatedDashboardListResponseList';
import { PaginatedDataSourceList } from '../models/PaginatedDataSourceList';
import { PaginatedDataStreamList } from '../models/PaginatedDataStreamList';
import { PaginatedDatabaseDetailList } from '../models/PaginatedDatabaseDetailList';
import { PaginatedDeviceGroupList } from '../models/PaginatedDeviceGroupList';
import { PaginatedDocumentList } from '../models/PaginatedDocumentList';
import { PaginatedEdgeFunctionList } from '../models/PaginatedEdgeFunctionList';
import { PaginatedExecutionListResponseList } from '../models/PaginatedExecutionListResponseList';
import { PaginatedExecutionScriptListResponseList } from '../models/PaginatedExecutionScriptListResponseList';
import { PaginatedFavoriteList } from '../models/PaginatedFavoriteList';
import { PaginatedFirewallFunctionInstanceList } from '../models/PaginatedFirewallFunctionInstanceList';
import { PaginatedFirewallList } from '../models/PaginatedFirewallList';
import { PaginatedFirewallRuleList } from '../models/PaginatedFirewallRuleList';
import { PaginatedFolderListResponseList } from '../models/PaginatedFolderListResponseList';
import { PaginatedFunctionInstanceList } from '../models/PaginatedFunctionInstanceList';
import { PaginatedGrantList } from '../models/PaginatedGrantList';
import { PaginatedGroupList } from '../models/PaginatedGroupList';
import { PaginatedIntegrationListResponseList } from '../models/PaginatedIntegrationListResponseList';
import { PaginatedKnowledgeBaseList } from '../models/PaginatedKnowledgeBaseList';
import { PaginatedMessageList } from '../models/PaginatedMessageList';
import { PaginatedNetworkListSummaryList } from '../models/PaginatedNetworkListSummaryList';
import { PaginatedNodeGroupsByIdList } from '../models/PaginatedNodeGroupsByIdList';
import { PaginatedNodeGroupsList } from '../models/PaginatedNodeGroupsList';
import { PaginatedNodeServicesList } from '../models/PaginatedNodeServicesList';
import { PaginatedNodesList } from '../models/PaginatedNodesList';
import { PaginatedPaymentHistoryList } from '../models/PaginatedPaymentHistoryList';
import { PaginatedPaymentMethodResponseList } from '../models/PaginatedPaymentMethodResponseList';
import { PaginatedPlatformListResponseList } from '../models/PaginatedPlatformListResponseList';
import { PaginatedPolicyList } from '../models/PaginatedPolicyList';
import { PaginatedRecordList } from '../models/PaginatedRecordList';
import { PaginatedReportListResponseList } from '../models/PaginatedReportListResponseList';
import { PaginatedRepositoryListResponseList } from '../models/PaginatedRepositoryListResponseList';
import { PaginatedRequestPhaseRuleList } from '../models/PaginatedRequestPhaseRuleList';
import { PaginatedResponsePhaseRuleList } from '../models/PaginatedResponsePhaseRuleList';
import { PaginatedRowListResponseList } from '../models/PaginatedRowListResponseList';
import { PaginatedServiceResourceList } from '../models/PaginatedServiceResourceList';
import { PaginatedServiceTokenList } from '../models/PaginatedServiceTokenList';
import { PaginatedServicesList } from '../models/PaginatedServicesList';
import { PaginatedTOTPDeviceList } from '../models/PaginatedTOTPDeviceList';
import { PaginatedTemplateList } from '../models/PaginatedTemplateList';
import { PaginatedToolList } from '../models/PaginatedToolList';
import { PaginatedUserList } from '../models/PaginatedUserList';
import { PaginatedWAFList } from '../models/PaginatedWAFList';
import { PaginatedWAFRuleList } from '../models/PaginatedWAFRuleList';
import { PaginatedWorkloadDeploymentList } from '../models/PaginatedWorkloadDeploymentList';
import { PaginatedWorkloadList } from '../models/PaginatedWorkloadList';
import { PaginatedZoneList } from '../models/PaginatedZoneList';
import { Pagination } from '../models/Pagination';
import { PatchedAccountRequest } from '../models/PatchedAccountRequest';
import { PatchedApplicationRequest } from '../models/PatchedApplicationRequest';
import { PatchedBrandRequest } from '../models/PatchedBrandRequest';
import { PatchedBucketRequest } from '../models/PatchedBucketRequest';
import { PatchedCacheSettingRequest } from '../models/PatchedCacheSettingRequest';
import { PatchedCertificate } from '../models/PatchedCertificate';
import { PatchedCertificateRevocationList } from '../models/PatchedCertificateRevocationList';
import { PatchedChatThreadRequest } from '../models/PatchedChatThreadRequest';
import { PatchedConnectorHTTPRequest } from '../models/PatchedConnectorHTTPRequest';
import { PatchedConnectorLiveIngestRequest } from '../models/PatchedConnectorLiveIngestRequest';
import { PatchedConnectorRequest } from '../models/PatchedConnectorRequest';
import { PatchedConnectorStorageRequest } from '../models/PatchedConnectorStorageRequest';
import { PatchedContinuousDeploymentRequest } from '../models/PatchedContinuousDeploymentRequest';
import { PatchedCustomPageRequest } from '../models/PatchedCustomPageRequest';
import { PatchedDNSSECRequest } from '../models/PatchedDNSSECRequest';
import { PatchedDashboardRequest } from '../models/PatchedDashboardRequest';
import { PatchedDataStreamRequest } from '../models/PatchedDataStreamRequest';
import { PatchedDeviceGroupRequest } from '../models/PatchedDeviceGroupRequest';
import { PatchedFirewallFunctionInstanceRequest } from '../models/PatchedFirewallFunctionInstanceRequest';
import { PatchedFirewallRequest } from '../models/PatchedFirewallRequest';
import { PatchedFirewallRuleRequest } from '../models/PatchedFirewallRuleRequest';
import { PatchedFolderRequest } from '../models/PatchedFolderRequest';
import { PatchedFunctionInstanceRequest } from '../models/PatchedFunctionInstanceRequest';
import { PatchedFunctionsRequest } from '../models/PatchedFunctionsRequest';
import { PatchedGrantRequest } from '../models/PatchedGrantRequest';
import { PatchedGroupRequest } from '../models/PatchedGroupRequest';
import { PatchedKnowledgeBaseRequest } from '../models/PatchedKnowledgeBaseRequest';
import { PatchedNetworkListRequest } from '../models/PatchedNetworkListRequest';
import { PatchedNodesRequest } from '../models/PatchedNodesRequest';
import { PatchedOrganizationRequest } from '../models/PatchedOrganizationRequest';
import { PatchedPartialUpdateRequest } from '../models/PatchedPartialUpdateRequest';
import { PatchedPolicyRequest } from '../models/PatchedPolicyRequest';
import { PatchedRecordRequest } from '../models/PatchedRecordRequest';
import { PatchedRequestPhaseRule } from '../models/PatchedRequestPhaseRule';
import { PatchedResellerRequest } from '../models/PatchedResellerRequest';
import { PatchedResponsePhaseRuleRequest } from '../models/PatchedResponsePhaseRuleRequest';
import { PatchedServiceTokenUpdateRequest } from '../models/PatchedServiceTokenUpdateRequest';
import { PatchedServicesRequest } from '../models/PatchedServicesRequest';
import { PatchedTemplateRequest } from '../models/PatchedTemplateRequest';
import { PatchedToolRequest } from '../models/PatchedToolRequest';
import { PatchedUpdateZoneRequest } from '../models/PatchedUpdateZoneRequest';
import { PatchedUserRequest } from '../models/PatchedUserRequest';
import { PatchedVersionCreateRequest } from '../models/PatchedVersionCreateRequest';
import { PatchedWAFRequest } from '../models/PatchedWAFRequest';
import { PatchedWAFRuleRequest } from '../models/PatchedWAFRuleRequest';
import { PatchedWorkloadDeploymentRequest } from '../models/PatchedWorkloadDeploymentRequest';
import { PatchedWorkloadRequest } from '../models/PatchedWorkloadRequest';
import { PatchedWorkspaceRequest } from '../models/PatchedWorkspaceRequest';
import { PaymentHistory } from '../models/PaymentHistory';
import { PaymentMethod } from '../models/PaymentMethod';
import { PaymentMethodRequest } from '../models/PaymentMethodRequest';
import { PaymentMethodResponse } from '../models/PaymentMethodResponse';
import { Platform } from '../models/Platform';
import { PlatformListResponse } from '../models/PlatformListResponse';
import { Policy } from '../models/Policy';
import { PolicyRequest } from '../models/PolicyRequest';
import { PolicyResponse } from '../models/PolicyResponse';
import { PolicyRule } from '../models/PolicyRule';
import { PolicyRuleCondition } from '../models/PolicyRuleCondition';
import { PolicyRuleConditionRequest } from '../models/PolicyRuleConditionRequest';
import { PolicyRuleRequest } from '../models/PolicyRuleRequest';
import { Protocols } from '../models/Protocols';
import { ProtocolsRequest } from '../models/ProtocolsRequest';
import { Publisher } from '../models/Publisher';
import { PublisherRequest } from '../models/PublisherRequest';
import { Purge } from '../models/Purge';
import { PurgeRequest } from '../models/PurgeRequest';
import { PurgeResponse } from '../models/PurgeResponse';
import { QRadarEndpoint } from '../models/QRadarEndpoint';
import { QRadarEndpointAttributes } from '../models/QRadarEndpointAttributes';
import { QRadarEndpointAttributesRequest } from '../models/QRadarEndpointAttributesRequest';
import { QRadarEndpointAttributesTypeEnum } from '../models/QRadarEndpointAttributesTypeEnum';
import { QRadarEndpointRequest } from '../models/QRadarEndpointRequest';
import { RecommendationRequest } from '../models/RecommendationRequest';
import { RecordRequest } from '../models/RecordRequest';
import { RecordResponse } from '../models/RecordResponse';
import { RegionEnum } from '../models/RegionEnum';
import { Report } from '../models/Report';
import { ReportListResponse } from '../models/ReportListResponse';
import { ReportRequest } from '../models/ReportRequest';
import { ReportResponse } from '../models/ReportResponse';
import { RepositoryListResponse } from '../models/RepositoryListResponse';
import { RequestPhaseBehavior } from '../models/RequestPhaseBehavior';
import { RequestPhaseBehaviorRequest } from '../models/RequestPhaseBehaviorRequest';
import { RequestPhaseRule } from '../models/RequestPhaseRule';
import { RequestPhaseRuleRequest } from '../models/RequestPhaseRuleRequest';
import { RequestPhaseRuleResponse } from '../models/RequestPhaseRuleResponse';
import { Reseller } from '../models/Reseller';
import { ResellerRequest } from '../models/ResellerRequest';
import { ResponseAccount } from '../models/ResponseAccount';
import { ResponseAccountInfo } from '../models/ResponseAccountInfo';
import { ResponseAsyncAccount } from '../models/ResponseAsyncAccount';
import { ResponseAsyncAccountInfo } from '../models/ResponseAsyncAccountInfo';
import { ResponseAsyncChatThread } from '../models/ResponseAsyncChatThread';
import { ResponseAsyncDeleteChatThread } from '../models/ResponseAsyncDeleteChatThread';
import { ResponseAsyncDeleteDocument } from '../models/ResponseAsyncDeleteDocument';
import { ResponseAsyncDeleteKnowledgeBase } from '../models/ResponseAsyncDeleteKnowledgeBase';
import { ResponseAsyncDeleteMessage } from '../models/ResponseAsyncDeleteMessage';
import { ResponseAsyncDeleteNodeServiceBind } from '../models/ResponseAsyncDeleteNodeServiceBind';
import { ResponseAsyncDeleteNodes } from '../models/ResponseAsyncDeleteNodes';
import { ResponseAsyncDeleteServices } from '../models/ResponseAsyncDeleteServices';
import { ResponseAsyncDeleteTool } from '../models/ResponseAsyncDeleteTool';
import { ResponseAsyncDocument } from '../models/ResponseAsyncDocument';
import { ResponseAsyncKnowledgeBase } from '../models/ResponseAsyncKnowledgeBase';
import { ResponseAsyncMessage } from '../models/ResponseAsyncMessage';
import { ResponseAsyncNodeGroupsById } from '../models/ResponseAsyncNodeGroupsById';
import { ResponseAsyncNodeServices } from '../models/ResponseAsyncNodeServices';
import { ResponseAsyncNodes } from '../models/ResponseAsyncNodes';
import { ResponseAsyncServices } from '../models/ResponseAsyncServices';
import { ResponseAsyncTool } from '../models/ResponseAsyncTool';
import { ResponseBucketObject } from '../models/ResponseBucketObject';
import { ResponseChatThread } from '../models/ResponseChatThread';
import { ResponseDeleteChatThread } from '../models/ResponseDeleteChatThread';
import { ResponseDeleteDocument } from '../models/ResponseDeleteDocument';
import { ResponseDeleteFavorite } from '../models/ResponseDeleteFavorite';
import { ResponseDeleteGrant } from '../models/ResponseDeleteGrant';
import { ResponseDeleteGroup } from '../models/ResponseDeleteGroup';
import { ResponseDeleteKnowledgeBase } from '../models/ResponseDeleteKnowledgeBase';
import { ResponseDeleteMessage } from '../models/ResponseDeleteMessage';
import { ResponseDeleteServiceToken } from '../models/ResponseDeleteServiceToken';
import { ResponseDeleteTool } from '../models/ResponseDeleteTool';
import { ResponseDeleteUser } from '../models/ResponseDeleteUser';
import { ResponseDocument } from '../models/ResponseDocument';
import { ResponseFavorite } from '../models/ResponseFavorite';
import { ResponseGrant } from '../models/ResponseGrant';
import { ResponseGroup } from '../models/ResponseGroup';
import { ResponseGroupMembers } from '../models/ResponseGroupMembers';
import { ResponseKnowledgeBase } from '../models/ResponseKnowledgeBase';
import { ResponseListAccount } from '../models/ResponseListAccount';
import { ResponseListFavorite } from '../models/ResponseListFavorite';
import { ResponseListGrant } from '../models/ResponseListGrant';
import { ResponseListGroup } from '../models/ResponseListGroup';
import { ResponseListNodeGroupsById } from '../models/ResponseListNodeGroupsById';
import { ResponseListNodeServices } from '../models/ResponseListNodeServices';
import { ResponseListNodes } from '../models/ResponseListNodes';
import { ResponseListServiceToken } from '../models/ResponseListServiceToken';
import { ResponseListServices } from '../models/ResponseListServices';
import { ResponseListUser } from '../models/ResponseListUser';
import { ResponseLogin } from '../models/ResponseLogin';
import { ResponseMessage } from '../models/ResponseMessage';
import { ResponsePhaseBehavior } from '../models/ResponsePhaseBehavior';
import { ResponsePhaseBehaviorRequest } from '../models/ResponsePhaseBehaviorRequest';
import { ResponsePhaseRule } from '../models/ResponsePhaseRule';
import { ResponsePhaseRuleRequest } from '../models/ResponsePhaseRuleRequest';
import { ResponsePhaseRuleResponse } from '../models/ResponsePhaseRuleResponse';
import { ResponsePublisher } from '../models/ResponsePublisher';
import { ResponseRetrieveAccount } from '../models/ResponseRetrieveAccount';
import { ResponseRetrieveAccountInfo } from '../models/ResponseRetrieveAccountInfo';
import { ResponseRetrieveChatThread } from '../models/ResponseRetrieveChatThread';
import { ResponseRetrieveDocument } from '../models/ResponseRetrieveDocument';
import { ResponseRetrieveGrant } from '../models/ResponseRetrieveGrant';
import { ResponseRetrieveGroup } from '../models/ResponseRetrieveGroup';
import { ResponseRetrieveGroupMembers } from '../models/ResponseRetrieveGroupMembers';
import { ResponseRetrieveKnowledgeBase } from '../models/ResponseRetrieveKnowledgeBase';
import { ResponseRetrieveMessage } from '../models/ResponseRetrieveMessage';
import { ResponseRetrieveNodeServiceBind } from '../models/ResponseRetrieveNodeServiceBind';
import { ResponseRetrieveNodes } from '../models/ResponseRetrieveNodes';
import { ResponseRetrievePublisher } from '../models/ResponseRetrievePublisher';
import { ResponseRetrieveServiceToken } from '../models/ResponseRetrieveServiceToken';
import { ResponseRetrieveServices } from '../models/ResponseRetrieveServices';
import { ResponseRetrieveTool } from '../models/ResponseRetrieveTool';
import { ResponseRetrieveUser } from '../models/ResponseRetrieveUser';
import { ResponseRetrieveUserInfo } from '../models/ResponseRetrieveUserInfo';
import { ResponseServiceToken } from '../models/ResponseServiceToken';
import { ResponseServiceTokenCreate } from '../models/ResponseServiceTokenCreate';
import { ResponseServiceTokenRenew } from '../models/ResponseServiceTokenRenew';
import { ResponseTool } from '../models/ResponseTool';
import { ResponseUser } from '../models/ResponseUser';
import { ResponseUserInfo } from '../models/ResponseUserInfo';
import { Row } from '../models/Row';
import { RowListResponse } from '../models/RowListResponse';
import { RowRequest } from '../models/RowRequest';
import { RowResponse } from '../models/RowResponse';
import { RuleIdEnum } from '../models/RuleIdEnum';
import { RulesetsEnum } from '../models/RulesetsEnum';
import { RuntimeEnum } from '../models/RuntimeEnum';
import { S3Endpoint } from '../models/S3Endpoint';
import { S3EndpointAttributes } from '../models/S3EndpointAttributes';
import { S3EndpointAttributesRequest } from '../models/S3EndpointAttributesRequest';
import { S3EndpointAttributesTypeEnum } from '../models/S3EndpointAttributesTypeEnum';
import { S3EndpointRequest } from '../models/S3EndpointRequest';
import { SQLResult } from '../models/SQLResult';
import { SQLResultResponse } from '../models/SQLResultResponse';
import { SQLStatementsRequest } from '../models/SQLStatementsRequest';
import { SensitivityEnum } from '../models/SensitivityEnum';
import { ServerRoleEnum } from '../models/ServerRoleEnum';
import { ServiceResource } from '../models/ServiceResource';
import { ServiceResourceId } from '../models/ServiceResourceId';
import { ServiceResourceIdRequest } from '../models/ServiceResourceIdRequest';
import { ServiceResourceRequest } from '../models/ServiceResourceRequest';
import { ServiceToken } from '../models/ServiceToken';
import { ServiceTokenCreate } from '../models/ServiceTokenCreate';
import { ServiceTokenCreateRequest } from '../models/ServiceTokenCreateRequest';
import { ServiceTokenRenew } from '../models/ServiceTokenRenew';
import { ServiceTokenRenewRequest } from '../models/ServiceTokenRenewRequest';
import { ServiceTokenUpdateRequest } from '../models/ServiceTokenUpdateRequest';
import { Services } from '../models/Services';
import { ServicesRequest } from '../models/ServicesRequest';
import { SessionTimeoutPolicy } from '../models/SessionTimeoutPolicy';
import { SessionTimeoutPolicyRequest } from '../models/SessionTimeoutPolicyRequest';
import { SessionTimeoutPolicyResponse } from '../models/SessionTimeoutPolicyResponse';
import { SplunkEndpoint } from '../models/SplunkEndpoint';
import { SplunkEndpointAttributes } from '../models/SplunkEndpointAttributes';
import { SplunkEndpointAttributesRequest } from '../models/SplunkEndpointAttributesRequest';
import { SplunkEndpointAttributesTypeEnum } from '../models/SplunkEndpointAttributesTypeEnum';
import { SplunkEndpointRequest } from '../models/SplunkEndpointRequest';
import { StateCacheModule } from '../models/StateCacheModule';
import { StateCacheModuleRequest } from '../models/StateCacheModuleRequest';
import { StateEnum } from '../models/StateEnum';
import { StateExecutedResponse } from '../models/StateExecutedResponse';
import { StatusEnum } from '../models/StatusEnum';
import { SuccessObjectOperation } from '../models/SuccessObjectOperation';
import { SuccessObjectOperationAsync } from '../models/SuccessObjectOperationAsync';
import { TLSWorkload } from '../models/TLSWorkload';
import { TLSWorkloadRequest } from '../models/TLSWorkloadRequest';
import { TOTPDevice } from '../models/TOTPDevice';
import { TOTPDeviceList } from '../models/TOTPDeviceList';
import { TOTPDeviceResponse } from '../models/TOTPDeviceResponse';
import { TOTPVerificationRequest } from '../models/TOTPVerificationRequest';
import { Template } from '../models/Template';
import { TemplateRequest } from '../models/TemplateRequest';
import { TemplateResponse } from '../models/TemplateResponse';
import { ThreatEnum } from '../models/ThreatEnum';
import { ThresholdsConfigField } from '../models/ThresholdsConfigField';
import { ThresholdsConfigFieldRequest } from '../models/ThresholdsConfigFieldRequest';
import { Token } from '../models/Token';
import { TokenPair } from '../models/TokenPair';
import { TokenPairResponse } from '../models/TokenPairResponse';
import { TokenRequest } from '../models/TokenRequest';
import { TokenResponse } from '../models/TokenResponse';
import { Tool } from '../models/Tool';
import { ToolKBLink } from '../models/ToolKBLink';
import { ToolRequest } from '../models/ToolRequest';
import { TopologyEnum } from '../models/TopologyEnum';
import { Transform } from '../models/Transform';
import { TransformFilterWorkloads } from '../models/TransformFilterWorkloads';
import { TransformFilterWorkloadsAttributes } from '../models/TransformFilterWorkloadsAttributes';
import { TransformFilterWorkloadsAttributesRequest } from '../models/TransformFilterWorkloadsAttributesRequest';
import { TransformFilterWorkloadsAttributesTypeEnum } from '../models/TransformFilterWorkloadsAttributesTypeEnum';
import { TransformFilterWorkloadsRequest } from '../models/TransformFilterWorkloadsRequest';
import { TransformRenderTemplate } from '../models/TransformRenderTemplate';
import { TransformRenderTemplateAttributes } from '../models/TransformRenderTemplateAttributes';
import { TransformRenderTemplateAttributesRequest } from '../models/TransformRenderTemplateAttributesRequest';
import { TransformRenderTemplateAttributesTypeEnum } from '../models/TransformRenderTemplateAttributesTypeEnum';
import { TransformRenderTemplateRequest } from '../models/TransformRenderTemplateRequest';
import { TransformRequest } from '../models/TransformRequest';
import { TransformSampling } from '../models/TransformSampling';
import { TransformSamplingAttributes } from '../models/TransformSamplingAttributes';
import { TransformSamplingAttributesRequest } from '../models/TransformSamplingAttributesRequest';
import { TransformSamplingAttributesTypeEnum } from '../models/TransformSamplingAttributesTypeEnum';
import { TransformSamplingRequest } from '../models/TransformSamplingRequest';
import { TransformShared } from '../models/TransformShared';
import { TransformTransformFilterWorkloadsAttributes } from '../models/TransformTransformFilterWorkloadsAttributes';
import { TransformTransformFilterWorkloadsAttributesRequest } from '../models/TransformTransformFilterWorkloadsAttributesRequest';
import { TransformTransformRenderTemplateAttributes } from '../models/TransformTransformRenderTemplateAttributes';
import { TransformTransformRenderTemplateAttributesRequest } from '../models/TransformTransformRenderTemplateAttributesRequest';
import { TransformTransformSamplingAttributes } from '../models/TransformTransformSamplingAttributes';
import { TransformTransformSamplingAttributesRequest } from '../models/TransformTransformSamplingAttributesRequest';
import { TransportPolicyEnum } from '../models/TransportPolicyEnum';
import { TriggerEnum } from '../models/TriggerEnum';
import { UpdateAccountInfoDetailsRequest } from '../models/UpdateAccountInfoDetailsRequest';
import { UpdateUserInfoRequest } from '../models/UpdateUserInfoRequest';
import { UpdateZoneRequest } from '../models/UpdateZoneRequest';
import { User } from '../models/User';
import { UserInfo } from '../models/UserInfo';
import { UserInfoRequest } from '../models/UserInfoRequest';
import { UserLoginMethodResponse } from '../models/UserLoginMethodResponse';
import { UserRequest } from '../models/UserRequest';
import { VerificationEnum } from '../models/VerificationEnum';
import { VersionArchiveRequest } from '../models/VersionArchiveRequest';
import { VersionBuildRequest } from '../models/VersionBuildRequest';
import { VersionCancelRequest } from '../models/VersionCancelRequest';
import { VersionCreateRequest } from '../models/VersionCreateRequest';
import { WAF } from '../models/WAF';
import { WAFEngineSettingsAttributesField } from '../models/WAFEngineSettingsAttributesField';
import { WAFEngineSettingsAttributesFieldRequest } from '../models/WAFEngineSettingsAttributesFieldRequest';
import { WAFEngineSettingsField } from '../models/WAFEngineSettingsField';
import { WAFEngineSettingsFieldRequest } from '../models/WAFEngineSettingsFieldRequest';
import { WAFEngineSettingsFieldTypeEnum } from '../models/WAFEngineSettingsFieldTypeEnum';
import { WAFExceptionCondition } from '../models/WAFExceptionCondition';
import { WAFExceptionConditionRequest } from '../models/WAFExceptionConditionRequest';
import { WAFExceptionGenericCondition } from '../models/WAFExceptionGenericCondition';
import { WAFExceptionGenericConditionMatchEnum } from '../models/WAFExceptionGenericConditionMatchEnum';
import { WAFExceptionGenericConditionRequest } from '../models/WAFExceptionGenericConditionRequest';
import { WAFExceptionSpecificConditionOnName } from '../models/WAFExceptionSpecificConditionOnName';
import { WAFExceptionSpecificConditionOnNameMatchEnum } from '../models/WAFExceptionSpecificConditionOnNameMatchEnum';
import { WAFExceptionSpecificConditionOnNameRequest } from '../models/WAFExceptionSpecificConditionOnNameRequest';
import { WAFExceptionSpecificConditionOnValue } from '../models/WAFExceptionSpecificConditionOnValue';
import { WAFExceptionSpecificConditionOnValueMatchEnum } from '../models/WAFExceptionSpecificConditionOnValueMatchEnum';
import { WAFExceptionSpecificConditionOnValueRequest } from '../models/WAFExceptionSpecificConditionOnValueRequest';
import { WAFRequest } from '../models/WAFRequest';
import { WAFResponse } from '../models/WAFResponse';
import { WAFRule } from '../models/WAFRule';
import { WAFRuleOperatorEnum } from '../models/WAFRuleOperatorEnum';
import { WAFRuleRequest } from '../models/WAFRuleRequest';
import { WAFRuleResponse } from '../models/WAFRuleResponse';
import { Workload } from '../models/Workload';
import { WorkloadDeployment } from '../models/WorkloadDeployment';
import { WorkloadDeploymentRequest } from '../models/WorkloadDeploymentRequest';
import { WorkloadDeploymentResponse } from '../models/WorkloadDeploymentResponse';
import { WorkloadRequest } from '../models/WorkloadRequest';
import { WorkloadResponse } from '../models/WorkloadResponse';
import { Workspace } from '../models/Workspace';
import { WorkspaceRequest } from '../models/WorkspaceRequest';
import { Zone } from '../models/Zone';
import { ZoneRequest } from '../models/ZoneRequest';
import { ZoneResponse } from '../models/ZoneResponse';

import { ObservableAIStudioChatThreadsApi } from "./ObservableAPI";
import { AIStudioChatThreadsApiRequestFactory, AIStudioChatThreadsApiResponseProcessor} from "../apis/AIStudioChatThreadsApi";

export interface AIStudioChatThreadsApiCreateChatThreadRequest {
    /**
     * 
     * @type ChatThreadRequest
     * @memberof AIStudioChatThreadsApicreateChatThread
     */
    chatThreadRequest?: ChatThreadRequest
}

export interface AIStudioChatThreadsApiDestroyAChatThreadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChatThreadsApidestroyAChatThread
     */
    threadId: number
}

export interface AIStudioChatThreadsApiListChatThreadsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioChatThreadsApilistChatThreads
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioChatThreadsApilistChatThreads
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChatThreadsApilistChatThreads
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChatThreadsApilistChatThreads
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioChatThreadsApilistChatThreads
     */
    search?: string
}

export interface AIStudioChatThreadsApiPartialUpdateChatThreadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChatThreadsApipartialUpdateChatThread
     */
    threadId: number
    /**
     * 
     * @type PatchedChatThreadRequest
     * @memberof AIStudioChatThreadsApipartialUpdateChatThread
     */
    patchedChatThreadRequest?: PatchedChatThreadRequest
}

export interface AIStudioChatThreadsApiRetriveChatThreadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChatThreadsApiretriveChatThread
     */
    threadId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioChatThreadsApiretriveChatThread
     */
    fields?: string
}

export interface AIStudioChatThreadsApiUpdateChatThreadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChatThreadsApiupdateChatThread
     */
    threadId: number
    /**
     * 
     * @type ChatThreadRequest
     * @memberof AIStudioChatThreadsApiupdateChatThread
     */
    chatThreadRequest?: ChatThreadRequest
}

export class ObjectAIStudioChatThreadsApi {
    private api: ObservableAIStudioChatThreadsApi

    public constructor(configuration: Configuration, requestFactory?: AIStudioChatThreadsApiRequestFactory, responseProcessor?: AIStudioChatThreadsApiResponseProcessor) {
        this.api = new ObservableAIStudioChatThreadsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new chat thread for your account.
     * Create a chat thread
     * @param param the request object
     */
    public createChatThreadWithHttpInfo(param: AIStudioChatThreadsApiCreateChatThreadRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseChatThread | ResponseAsyncChatThread>> {
        return this.api.createChatThreadWithHttpInfo(param.chatThreadRequest,  options).toPromise();
    }

    /**
     * Create a new chat thread for your account.
     * Create a chat thread
     * @param param the request object
     */
    public createChatThread(param: AIStudioChatThreadsApiCreateChatThreadRequest = {}, options?: ConfigurationOptions): Promise<ResponseChatThread | ResponseAsyncChatThread> {
        return this.api.createChatThread(param.chatThreadRequest,  options).toPromise();
    }

    /**
     * Destruction of a specific chat thread in your account.
     * Destroy a chat thread
     * @param param the request object
     */
    public destroyAChatThreadWithHttpInfo(param: AIStudioChatThreadsApiDestroyAChatThreadRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDeleteChatThread | ResponseAsyncDeleteChatThread>> {
        return this.api.destroyAChatThreadWithHttpInfo(param.threadId,  options).toPromise();
    }

    /**
     * Destruction of a specific chat thread in your account.
     * Destroy a chat thread
     * @param param the request object
     */
    public destroyAChatThread(param: AIStudioChatThreadsApiDestroyAChatThreadRequest, options?: ConfigurationOptions): Promise<ResponseDeleteChatThread | ResponseAsyncDeleteChatThread> {
        return this.api.destroyAChatThread(param.threadId,  options).toPromise();
    }

    /**
     * List all chat threads owned by your account.
     * List chat threads
     * @param param the request object
     */
    public listChatThreadsWithHttpInfo(param: AIStudioChatThreadsApiListChatThreadsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedChatThreadList>> {
        return this.api.listChatThreadsWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all chat threads owned by your account.
     * List chat threads
     * @param param the request object
     */
    public listChatThreads(param: AIStudioChatThreadsApiListChatThreadsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedChatThreadList> {
        return this.api.listChatThreads(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing chat thread without affecting other fields.
     * Partially update a chat thread
     * @param param the request object
     */
    public partialUpdateChatThreadWithHttpInfo(param: AIStudioChatThreadsApiPartialUpdateChatThreadRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseChatThread | ResponseAsyncChatThread>> {
        return this.api.partialUpdateChatThreadWithHttpInfo(param.threadId, param.patchedChatThreadRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing chat thread without affecting other fields.
     * Partially update a chat thread
     * @param param the request object
     */
    public partialUpdateChatThread(param: AIStudioChatThreadsApiPartialUpdateChatThreadRequest, options?: ConfigurationOptions): Promise<ResponseChatThread | ResponseAsyncChatThread> {
        return this.api.partialUpdateChatThread(param.threadId, param.patchedChatThreadRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific chat thread in your account.
     * Retrieve details from a chat thread
     * @param param the request object
     */
    public retriveChatThreadWithHttpInfo(param: AIStudioChatThreadsApiRetriveChatThreadRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveChatThread>> {
        return this.api.retriveChatThreadWithHttpInfo(param.threadId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific chat thread in your account.
     * Retrieve details from a chat thread
     * @param param the request object
     */
    public retriveChatThread(param: AIStudioChatThreadsApiRetriveChatThreadRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveChatThread> {
        return this.api.retriveChatThread(param.threadId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing chat thread. This replaces the entire chat thread with the new data provided.
     * Update a chat thread
     * @param param the request object
     */
    public updateChatThreadWithHttpInfo(param: AIStudioChatThreadsApiUpdateChatThreadRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseChatThread | ResponseAsyncChatThread>> {
        return this.api.updateChatThreadWithHttpInfo(param.threadId, param.chatThreadRequest,  options).toPromise();
    }

    /**
     * Update an existing chat thread. This replaces the entire chat thread with the new data provided.
     * Update a chat thread
     * @param param the request object
     */
    public updateChatThread(param: AIStudioChatThreadsApiUpdateChatThreadRequest, options?: ConfigurationOptions): Promise<ResponseChatThread | ResponseAsyncChatThread> {
        return this.api.updateChatThread(param.threadId, param.chatThreadRequest,  options).toPromise();
    }

}

import { ObservableAIStudioChunksApi } from "./ObservableAPI";
import { AIStudioChunksApiRequestFactory, AIStudioChunksApiResponseProcessor} from "../apis/AIStudioChunksApi";

export interface AIStudioChunksApiListChunksRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChunksApilistChunks
     */
    documentId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChunksApilistChunks
     */
    kbId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioChunksApilistChunks
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioChunksApilistChunks
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChunksApilistChunks
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioChunksApilistChunks
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioChunksApilistChunks
     */
    search?: string
}

export class ObjectAIStudioChunksApi {
    private api: ObservableAIStudioChunksApi

    public constructor(configuration: Configuration, requestFactory?: AIStudioChunksApiRequestFactory, responseProcessor?: AIStudioChunksApiResponseProcessor) {
        this.api = new ObservableAIStudioChunksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all chunks owned by your account.
     * List chunks
     * @param param the request object
     */
    public listChunksWithHttpInfo(param: AIStudioChunksApiListChunksRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedChunkList>> {
        return this.api.listChunksWithHttpInfo(param.documentId, param.kbId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all chunks owned by your account.
     * List chunks
     * @param param the request object
     */
    public listChunks(param: AIStudioChunksApiListChunksRequest, options?: ConfigurationOptions): Promise<PaginatedChunkList> {
        return this.api.listChunks(param.documentId, param.kbId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

}

import { ObservableAIStudioDocumentsApi } from "./ObservableAPI";
import { AIStudioDocumentsApiRequestFactory, AIStudioDocumentsApiResponseProcessor} from "../apis/AIStudioDocumentsApi";

export interface AIStudioDocumentsApiCreateDocumentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApicreateDocument
     */
    kbId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApicreateDocument
     */
    name?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApicreateDocument
     */
    description?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApicreateDocument
     */
    type?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApicreateDocument
     */
    sourceUri?: string
    /**
     * 
     * Defaults to: undefined
     * @type { [key: string]: any; }
     * @memberof AIStudioDocumentsApicreateDocument
     */
    chunkStrategy?: { [key: string]: any; }
}

export interface AIStudioDocumentsApiDestroyADocumentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApidestroyADocument
     */
    documentId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApidestroyADocument
     */
    kbId: number
}

export interface AIStudioDocumentsApiListDocumentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApilistDocuments
     */
    kbId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApilistDocuments
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApilistDocuments
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApilistDocuments
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApilistDocuments
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApilistDocuments
     */
    search?: string
}

export interface AIStudioDocumentsApiRetriveDocumentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApiretriveDocument
     */
    documentId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApiretriveDocument
     */
    kbId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApiretriveDocument
     */
    fields?: string
}

export interface AIStudioDocumentsApiUpdateDocumentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApiupdateDocument
     */
    documentId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioDocumentsApiupdateDocument
     */
    kbId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApiupdateDocument
     */
    name?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApiupdateDocument
     */
    description?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApiupdateDocument
     */
    type?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioDocumentsApiupdateDocument
     */
    sourceUri?: string
    /**
     * 
     * Defaults to: undefined
     * @type { [key: string]: any; }
     * @memberof AIStudioDocumentsApiupdateDocument
     */
    chunkStrategy?: { [key: string]: any; }
}

export class ObjectAIStudioDocumentsApi {
    private api: ObservableAIStudioDocumentsApi

    public constructor(configuration: Configuration, requestFactory?: AIStudioDocumentsApiRequestFactory, responseProcessor?: AIStudioDocumentsApiResponseProcessor) {
        this.api = new ObservableAIStudioDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new document for your account.
     * Create a document
     * @param param the request object
     */
    public createDocumentWithHttpInfo(param: AIStudioDocumentsApiCreateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDocument | ResponseAsyncDocument>> {
        return this.api.createDocumentWithHttpInfo(param.kbId, param.name, param.description, param.type, param.sourceUri, param.chunkStrategy,  options).toPromise();
    }

    /**
     * Create a new document for your account.
     * Create a document
     * @param param the request object
     */
    public createDocument(param: AIStudioDocumentsApiCreateDocumentRequest, options?: ConfigurationOptions): Promise<ResponseDocument | ResponseAsyncDocument> {
        return this.api.createDocument(param.kbId, param.name, param.description, param.type, param.sourceUri, param.chunkStrategy,  options).toPromise();
    }

    /**
     * Destruction of a specific document in your account.
     * Destroy a document
     * @param param the request object
     */
    public destroyADocumentWithHttpInfo(param: AIStudioDocumentsApiDestroyADocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteDocument | ResponseDeleteDocument>> {
        return this.api.destroyADocumentWithHttpInfo(param.documentId, param.kbId,  options).toPromise();
    }

    /**
     * Destruction of a specific document in your account.
     * Destroy a document
     * @param param the request object
     */
    public destroyADocument(param: AIStudioDocumentsApiDestroyADocumentRequest, options?: ConfigurationOptions): Promise<ResponseAsyncDeleteDocument | ResponseDeleteDocument> {
        return this.api.destroyADocument(param.documentId, param.kbId,  options).toPromise();
    }

    /**
     * List all documents owned by your account.
     * List documents
     * @param param the request object
     */
    public listDocumentsWithHttpInfo(param: AIStudioDocumentsApiListDocumentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedDocumentList>> {
        return this.api.listDocumentsWithHttpInfo(param.kbId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all documents owned by your account.
     * List documents
     * @param param the request object
     */
    public listDocuments(param: AIStudioDocumentsApiListDocumentsRequest, options?: ConfigurationOptions): Promise<PaginatedDocumentList> {
        return this.api.listDocuments(param.kbId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieve details from a specific document in your account.
     * Retrieve details from a document
     * @param param the request object
     */
    public retriveDocumentWithHttpInfo(param: AIStudioDocumentsApiRetriveDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveDocument>> {
        return this.api.retriveDocumentWithHttpInfo(param.documentId, param.kbId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific document in your account.
     * Retrieve details from a document
     * @param param the request object
     */
    public retriveDocument(param: AIStudioDocumentsApiRetriveDocumentRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveDocument> {
        return this.api.retriveDocument(param.documentId, param.kbId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing document. This replaces the entire document with the new data provided.
     * Update a document
     * @param param the request object
     */
    public updateDocumentWithHttpInfo(param: AIStudioDocumentsApiUpdateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDocument | ResponseAsyncDocument>> {
        return this.api.updateDocumentWithHttpInfo(param.documentId, param.kbId, param.name, param.description, param.type, param.sourceUri, param.chunkStrategy,  options).toPromise();
    }

    /**
     * Update an existing document. This replaces the entire document with the new data provided.
     * Update a document
     * @param param the request object
     */
    public updateDocument(param: AIStudioDocumentsApiUpdateDocumentRequest, options?: ConfigurationOptions): Promise<ResponseDocument | ResponseAsyncDocument> {
        return this.api.updateDocument(param.documentId, param.kbId, param.name, param.description, param.type, param.sourceUri, param.chunkStrategy,  options).toPromise();
    }

}

import { ObservableAIStudioKnowledgeBasesApi } from "./ObservableAPI";
import { AIStudioKnowledgeBasesApiRequestFactory, AIStudioKnowledgeBasesApiResponseProcessor} from "../apis/AIStudioKnowledgeBasesApi";

export interface AIStudioKnowledgeBasesApiAskKnowledgeBaseRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioKnowledgeBasesApiaskKnowledgeBase
     */
    kbId: number
    /**
     * 
     * @type KBAskRequest
     * @memberof AIStudioKnowledgeBasesApiaskKnowledgeBase
     */
    kBAskRequest: KBAskRequest
}

export interface AIStudioKnowledgeBasesApiCreateKnowledgeBaseRequest {
    /**
     * 
     * @type KnowledgeBaseRequest
     * @memberof AIStudioKnowledgeBasesApicreateKnowledgeBase
     */
    knowledgeBaseRequest: KnowledgeBaseRequest
}

export interface AIStudioKnowledgeBasesApiDestroyAKnowledgeBaseRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioKnowledgeBasesApidestroyAKnowledgeBase
     */
    kbId: string
}

export interface AIStudioKnowledgeBasesApiListKnowledgeBasesRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioKnowledgeBasesApilistKnowledgeBases
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioKnowledgeBasesApilistKnowledgeBases
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioKnowledgeBasesApilistKnowledgeBases
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioKnowledgeBasesApilistKnowledgeBases
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioKnowledgeBasesApilistKnowledgeBases
     */
    search?: string
}

export interface AIStudioKnowledgeBasesApiPartialUpdateKnowledgeBaseRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioKnowledgeBasesApipartialUpdateKnowledgeBase
     */
    kbId: string
    /**
     * 
     * @type PatchedKnowledgeBaseRequest
     * @memberof AIStudioKnowledgeBasesApipartialUpdateKnowledgeBase
     */
    patchedKnowledgeBaseRequest?: PatchedKnowledgeBaseRequest
}

export interface AIStudioKnowledgeBasesApiQueryChunkFromKnowledgeBaseRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioKnowledgeBasesApiqueryChunkFromKnowledgeBase
     */
    kbId: number
    /**
     * 
     * @type KBQueryRequest
     * @memberof AIStudioKnowledgeBasesApiqueryChunkFromKnowledgeBase
     */
    kBQueryRequest: KBQueryRequest
}

export interface AIStudioKnowledgeBasesApiRetriveKnowledgeBaseRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioKnowledgeBasesApiretriveKnowledgeBase
     */
    kbId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioKnowledgeBasesApiretriveKnowledgeBase
     */
    fields?: string
}

export interface AIStudioKnowledgeBasesApiUpdateKnowledgeBaseRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioKnowledgeBasesApiupdateKnowledgeBase
     */
    kbId: string
    /**
     * 
     * @type KnowledgeBaseRequest
     * @memberof AIStudioKnowledgeBasesApiupdateKnowledgeBase
     */
    knowledgeBaseRequest: KnowledgeBaseRequest
}

export class ObjectAIStudioKnowledgeBasesApi {
    private api: ObservableAIStudioKnowledgeBasesApi

    public constructor(configuration: Configuration, requestFactory?: AIStudioKnowledgeBasesApiRequestFactory, responseProcessor?: AIStudioKnowledgeBasesApiResponseProcessor) {
        this.api = new ObservableAIStudioKnowledgeBasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Ask a question. The agent will use RAG over this knowledge base and answer with context.
     * Ask the knowledge base
     * @param param the request object
     */
    public askKnowledgeBaseWithHttpInfo(param: AIStudioKnowledgeBasesApiAskKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<KBAskResponse>> {
        return this.api.askKnowledgeBaseWithHttpInfo(param.kbId, param.kBAskRequest,  options).toPromise();
    }

    /**
     * Ask a question. The agent will use RAG over this knowledge base and answer with context.
     * Ask the knowledge base
     * @param param the request object
     */
    public askKnowledgeBase(param: AIStudioKnowledgeBasesApiAskKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<KBAskResponse> {
        return this.api.askKnowledgeBase(param.kbId, param.kBAskRequest,  options).toPromise();
    }

    /**
     * Create a new knowledge base for your account.
     * Create a knowledge base
     * @param param the request object
     */
    public createKnowledgeBaseWithHttpInfo(param: AIStudioKnowledgeBasesApiCreateKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase>> {
        return this.api.createKnowledgeBaseWithHttpInfo(param.knowledgeBaseRequest,  options).toPromise();
    }

    /**
     * Create a new knowledge base for your account.
     * Create a knowledge base
     * @param param the request object
     */
    public createKnowledgeBase(param: AIStudioKnowledgeBasesApiCreateKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase> {
        return this.api.createKnowledgeBase(param.knowledgeBaseRequest,  options).toPromise();
    }

    /**
     * Destruction of a specific knowledge base in your account.
     * Destroy a knowledge base
     * @param param the request object
     */
    public destroyAKnowledgeBaseWithHttpInfo(param: AIStudioKnowledgeBasesApiDestroyAKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteKnowledgeBase | ResponseDeleteKnowledgeBase>> {
        return this.api.destroyAKnowledgeBaseWithHttpInfo(param.kbId,  options).toPromise();
    }

    /**
     * Destruction of a specific knowledge base in your account.
     * Destroy a knowledge base
     * @param param the request object
     */
    public destroyAKnowledgeBase(param: AIStudioKnowledgeBasesApiDestroyAKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<ResponseAsyncDeleteKnowledgeBase | ResponseDeleteKnowledgeBase> {
        return this.api.destroyAKnowledgeBase(param.kbId,  options).toPromise();
    }

    /**
     * List all knowledge bases owned by your account.
     * List knowledge bases
     * @param param the request object
     */
    public listKnowledgeBasesWithHttpInfo(param: AIStudioKnowledgeBasesApiListKnowledgeBasesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedKnowledgeBaseList>> {
        return this.api.listKnowledgeBasesWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all knowledge bases owned by your account.
     * List knowledge bases
     * @param param the request object
     */
    public listKnowledgeBases(param: AIStudioKnowledgeBasesApiListKnowledgeBasesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedKnowledgeBaseList> {
        return this.api.listKnowledgeBases(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing knowledge base without affecting other fields.
     * Partially update a knowledge base
     * @param param the request object
     */
    public partialUpdateKnowledgeBaseWithHttpInfo(param: AIStudioKnowledgeBasesApiPartialUpdateKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase>> {
        return this.api.partialUpdateKnowledgeBaseWithHttpInfo(param.kbId, param.patchedKnowledgeBaseRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing knowledge base without affecting other fields.
     * Partially update a knowledge base
     * @param param the request object
     */
    public partialUpdateKnowledgeBase(param: AIStudioKnowledgeBasesApiPartialUpdateKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase> {
        return this.api.partialUpdateKnowledgeBase(param.kbId, param.patchedKnowledgeBaseRequest,  options).toPromise();
    }

    /**
     * Query a specific chunk from a knowledge base in your account.
     * Query a chunk from a knowledge base
     * @param param the request object
     */
    public queryChunkFromKnowledgeBaseWithHttpInfo(param: AIStudioKnowledgeBasesApiQueryChunkFromKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<KBQueryResponse>> {
        return this.api.queryChunkFromKnowledgeBaseWithHttpInfo(param.kbId, param.kBQueryRequest,  options).toPromise();
    }

    /**
     * Query a specific chunk from a knowledge base in your account.
     * Query a chunk from a knowledge base
     * @param param the request object
     */
    public queryChunkFromKnowledgeBase(param: AIStudioKnowledgeBasesApiQueryChunkFromKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<KBQueryResponse> {
        return this.api.queryChunkFromKnowledgeBase(param.kbId, param.kBQueryRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific knowledge base in your account.
     * Retrieve details from a knowledge base
     * @param param the request object
     */
    public retriveKnowledgeBaseWithHttpInfo(param: AIStudioKnowledgeBasesApiRetriveKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveKnowledgeBase>> {
        return this.api.retriveKnowledgeBaseWithHttpInfo(param.kbId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific knowledge base in your account.
     * Retrieve details from a knowledge base
     * @param param the request object
     */
    public retriveKnowledgeBase(param: AIStudioKnowledgeBasesApiRetriveKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveKnowledgeBase> {
        return this.api.retriveKnowledgeBase(param.kbId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing knowledge base. This replaces the entire knowledge base with the new data provided.
     * Update a knowledge base
     * @param param the request object
     */
    public updateKnowledgeBaseWithHttpInfo(param: AIStudioKnowledgeBasesApiUpdateKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase>> {
        return this.api.updateKnowledgeBaseWithHttpInfo(param.kbId, param.knowledgeBaseRequest,  options).toPromise();
    }

    /**
     * Update an existing knowledge base. This replaces the entire knowledge base with the new data provided.
     * Update a knowledge base
     * @param param the request object
     */
    public updateKnowledgeBase(param: AIStudioKnowledgeBasesApiUpdateKnowledgeBaseRequest, options?: ConfigurationOptions): Promise<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase> {
        return this.api.updateKnowledgeBase(param.kbId, param.knowledgeBaseRequest,  options).toPromise();
    }

}

import { ObservableAIStudioMessagesApi } from "./ObservableAPI";
import { AIStudioMessagesApiRequestFactory, AIStudioMessagesApiResponseProcessor} from "../apis/AIStudioMessagesApi";

export interface AIStudioMessagesApiCreateMessageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApicreateMessage
     */
    threadId: number
    /**
     * 
     * @type MessageRequest
     * @memberof AIStudioMessagesApicreateMessage
     */
    messageRequest: MessageRequest
}

export interface AIStudioMessagesApiDestroyAMessageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApidestroyAMessage
     */
    messageId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApidestroyAMessage
     */
    threadId: number
}

export interface AIStudioMessagesApiListMessagesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApilistMessages
     */
    threadId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioMessagesApilistMessages
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioMessagesApilistMessages
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApilistMessages
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApilistMessages
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioMessagesApilistMessages
     */
    search?: string
}

export interface AIStudioMessagesApiRetriveMessageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApiretriveMessage
     */
    messageId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApiretriveMessage
     */
    threadId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioMessagesApiretriveMessage
     */
    fields?: string
}

export interface AIStudioMessagesApiUpdateMessageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApiupdateMessage
     */
    messageId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioMessagesApiupdateMessage
     */
    threadId: number
    /**
     * 
     * @type MessageRequest
     * @memberof AIStudioMessagesApiupdateMessage
     */
    messageRequest: MessageRequest
}

export class ObjectAIStudioMessagesApi {
    private api: ObservableAIStudioMessagesApi

    public constructor(configuration: Configuration, requestFactory?: AIStudioMessagesApiRequestFactory, responseProcessor?: AIStudioMessagesApiResponseProcessor) {
        this.api = new ObservableAIStudioMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new message for your account.
     * Create a message
     * @param param the request object
     */
    public createMessageWithHttpInfo(param: AIStudioMessagesApiCreateMessageRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseMessage | ResponseAsyncMessage>> {
        return this.api.createMessageWithHttpInfo(param.threadId, param.messageRequest,  options).toPromise();
    }

    /**
     * Create a new message for your account.
     * Create a message
     * @param param the request object
     */
    public createMessage(param: AIStudioMessagesApiCreateMessageRequest, options?: ConfigurationOptions): Promise<ResponseMessage | ResponseAsyncMessage> {
        return this.api.createMessage(param.threadId, param.messageRequest,  options).toPromise();
    }

    /**
     * Destruction of a specific message in your account.
     * Destroy a message
     * @param param the request object
     */
    public destroyAMessageWithHttpInfo(param: AIStudioMessagesApiDestroyAMessageRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDeleteMessage | ResponseAsyncDeleteMessage>> {
        return this.api.destroyAMessageWithHttpInfo(param.messageId, param.threadId,  options).toPromise();
    }

    /**
     * Destruction of a specific message in your account.
     * Destroy a message
     * @param param the request object
     */
    public destroyAMessage(param: AIStudioMessagesApiDestroyAMessageRequest, options?: ConfigurationOptions): Promise<ResponseDeleteMessage | ResponseAsyncDeleteMessage> {
        return this.api.destroyAMessage(param.messageId, param.threadId,  options).toPromise();
    }

    /**
     * List all messages owned by your account.
     * List messages
     * @param param the request object
     */
    public listMessagesWithHttpInfo(param: AIStudioMessagesApiListMessagesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedMessageList>> {
        return this.api.listMessagesWithHttpInfo(param.threadId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all messages owned by your account.
     * List messages
     * @param param the request object
     */
    public listMessages(param: AIStudioMessagesApiListMessagesRequest, options?: ConfigurationOptions): Promise<PaginatedMessageList> {
        return this.api.listMessages(param.threadId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieve details from a specific message in your account.
     * Retrieve details from a message
     * @param param the request object
     */
    public retriveMessageWithHttpInfo(param: AIStudioMessagesApiRetriveMessageRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveMessage>> {
        return this.api.retriveMessageWithHttpInfo(param.messageId, param.threadId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific message in your account.
     * Retrieve details from a message
     * @param param the request object
     */
    public retriveMessage(param: AIStudioMessagesApiRetriveMessageRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveMessage> {
        return this.api.retriveMessage(param.messageId, param.threadId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing message. This replaces the entire message with the new data provided.
     * Update a message
     * @param param the request object
     */
    public updateMessageWithHttpInfo(param: AIStudioMessagesApiUpdateMessageRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseMessage | ResponseAsyncMessage>> {
        return this.api.updateMessageWithHttpInfo(param.messageId, param.threadId, param.messageRequest,  options).toPromise();
    }

    /**
     * Update an existing message. This replaces the entire message with the new data provided.
     * Update a message
     * @param param the request object
     */
    public updateMessage(param: AIStudioMessagesApiUpdateMessageRequest, options?: ConfigurationOptions): Promise<ResponseMessage | ResponseAsyncMessage> {
        return this.api.updateMessage(param.messageId, param.threadId, param.messageRequest,  options).toPromise();
    }

}

import { ObservableAIStudioToolsApi } from "./ObservableAPI";
import { AIStudioToolsApiRequestFactory, AIStudioToolsApiResponseProcessor} from "../apis/AIStudioToolsApi";

export interface AIStudioToolsApiAddKnowledgeBaseToAToolRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApiaddKnowledgeBaseToATool
     */
    toolId: number
    /**
     * 
     * @type ToolRequest
     * @memberof AIStudioToolsApiaddKnowledgeBaseToATool
     */
    toolRequest: ToolRequest
}

export interface AIStudioToolsApiCreateToolRequest {
    /**
     * 
     * @type ToolRequest
     * @memberof AIStudioToolsApicreateTool
     */
    toolRequest: ToolRequest
}

export interface AIStudioToolsApiDestroyAToolRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApidestroyATool
     */
    toolId: number
}

export interface AIStudioToolsApiListKnowledgeBasesLinkedToAToolRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApilistKnowledgeBasesLinkedToATool
     */
    toolId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioToolsApilistKnowledgeBasesLinkedToATool
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioToolsApilistKnowledgeBasesLinkedToATool
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApilistKnowledgeBasesLinkedToATool
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApilistKnowledgeBasesLinkedToATool
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioToolsApilistKnowledgeBasesLinkedToATool
     */
    search?: string
}

export interface AIStudioToolsApiListToolsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioToolsApilistTools
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioToolsApilistTools
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApilistTools
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApilistTools
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioToolsApilistTools
     */
    search?: string
}

export interface AIStudioToolsApiPartialUpdateToolRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApipartialUpdateTool
     */
    toolId: number
    /**
     * 
     * @type PatchedToolRequest
     * @memberof AIStudioToolsApipartialUpdateTool
     */
    patchedToolRequest?: PatchedToolRequest
}

export interface AIStudioToolsApiRemoveKnowledgeBaseFromAToolRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApiremoveKnowledgeBaseFromATool
     */
    kbId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApiremoveKnowledgeBaseFromATool
     */
    toolId: number
}

export interface AIStudioToolsApiRetriveToolRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApiretriveTool
     */
    toolId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AIStudioToolsApiretriveTool
     */
    fields?: string
}

export interface AIStudioToolsApiUpdateToolRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AIStudioToolsApiupdateTool
     */
    toolId: number
    /**
     * 
     * @type ToolRequest
     * @memberof AIStudioToolsApiupdateTool
     */
    toolRequest: ToolRequest
}

export class ObjectAIStudioToolsApi {
    private api: ObservableAIStudioToolsApi

    public constructor(configuration: Configuration, requestFactory?: AIStudioToolsApiRequestFactory, responseProcessor?: AIStudioToolsApiResponseProcessor) {
        this.api = new ObservableAIStudioToolsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new knowledge base to a specific tool for your account.
     * Add a knowledge base to a tool
     * @param param the request object
     */
    public addKnowledgeBaseToAToolWithHttpInfo(param: AIStudioToolsApiAddKnowledgeBaseToAToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<ToolKBLink>> {
        return this.api.addKnowledgeBaseToAToolWithHttpInfo(param.toolId, param.toolRequest,  options).toPromise();
    }

    /**
     * Add a new knowledge base to a specific tool for your account.
     * Add a knowledge base to a tool
     * @param param the request object
     */
    public addKnowledgeBaseToATool(param: AIStudioToolsApiAddKnowledgeBaseToAToolRequest, options?: ConfigurationOptions): Promise<ToolKBLink> {
        return this.api.addKnowledgeBaseToATool(param.toolId, param.toolRequest,  options).toPromise();
    }

    /**
     * Create a new tool for your account.
     * Create a tool
     * @param param the request object
     */
    public createToolWithHttpInfo(param: AIStudioToolsApiCreateToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncTool | ResponseTool>> {
        return this.api.createToolWithHttpInfo(param.toolRequest,  options).toPromise();
    }

    /**
     * Create a new tool for your account.
     * Create a tool
     * @param param the request object
     */
    public createTool(param: AIStudioToolsApiCreateToolRequest, options?: ConfigurationOptions): Promise<ResponseAsyncTool | ResponseTool> {
        return this.api.createTool(param.toolRequest,  options).toPromise();
    }

    /**
     * Destruction of a specific tool in your account.
     * Destroy a tool
     * @param param the request object
     */
    public destroyAToolWithHttpInfo(param: AIStudioToolsApiDestroyAToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteTool | ResponseDeleteTool>> {
        return this.api.destroyAToolWithHttpInfo(param.toolId,  options).toPromise();
    }

    /**
     * Destruction of a specific tool in your account.
     * Destroy a tool
     * @param param the request object
     */
    public destroyATool(param: AIStudioToolsApiDestroyAToolRequest, options?: ConfigurationOptions): Promise<ResponseAsyncDeleteTool | ResponseDeleteTool> {
        return this.api.destroyATool(param.toolId,  options).toPromise();
    }

    /**
     * List all knowledge bases linked to a specific tool in your account.
     * List knowledge bases linked to a tool
     * @param param the request object
     */
    public listKnowledgeBasesLinkedToAToolWithHttpInfo(param: AIStudioToolsApiListKnowledgeBasesLinkedToAToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedKnowledgeBaseList>> {
        return this.api.listKnowledgeBasesLinkedToAToolWithHttpInfo(param.toolId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all knowledge bases linked to a specific tool in your account.
     * List knowledge bases linked to a tool
     * @param param the request object
     */
    public listKnowledgeBasesLinkedToATool(param: AIStudioToolsApiListKnowledgeBasesLinkedToAToolRequest, options?: ConfigurationOptions): Promise<PaginatedKnowledgeBaseList> {
        return this.api.listKnowledgeBasesLinkedToATool(param.toolId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all tools owned by your account.
     * List tools
     * @param param the request object
     */
    public listToolsWithHttpInfo(param: AIStudioToolsApiListToolsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedToolList>> {
        return this.api.listToolsWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all tools owned by your account.
     * List tools
     * @param param the request object
     */
    public listTools(param: AIStudioToolsApiListToolsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedToolList> {
        return this.api.listTools(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing tool without affecting other fields.
     * Partially update a tool
     * @param param the request object
     */
    public partialUpdateToolWithHttpInfo(param: AIStudioToolsApiPartialUpdateToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncTool | ResponseTool>> {
        return this.api.partialUpdateToolWithHttpInfo(param.toolId, param.patchedToolRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing tool without affecting other fields.
     * Partially update a tool
     * @param param the request object
     */
    public partialUpdateTool(param: AIStudioToolsApiPartialUpdateToolRequest, options?: ConfigurationOptions): Promise<ResponseAsyncTool | ResponseTool> {
        return this.api.partialUpdateTool(param.toolId, param.patchedToolRequest,  options).toPromise();
    }

    /**
     * Remove a specific knowledge base from a tool in your account.
     * Remove a knowledge base from a tool
     * @param param the request object
     */
    public removeKnowledgeBaseFromAToolWithHttpInfo(param: AIStudioToolsApiRemoveKnowledgeBaseFromAToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeKnowledgeBaseFromAToolWithHttpInfo(param.kbId, param.toolId,  options).toPromise();
    }

    /**
     * Remove a specific knowledge base from a tool in your account.
     * Remove a knowledge base from a tool
     * @param param the request object
     */
    public removeKnowledgeBaseFromATool(param: AIStudioToolsApiRemoveKnowledgeBaseFromAToolRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeKnowledgeBaseFromATool(param.kbId, param.toolId,  options).toPromise();
    }

    /**
     * Retrieve details from a specific tool in your account.
     * Retrieve details from a tool
     * @param param the request object
     */
    public retriveToolWithHttpInfo(param: AIStudioToolsApiRetriveToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveTool>> {
        return this.api.retriveToolWithHttpInfo(param.toolId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific tool in your account.
     * Retrieve details from a tool
     * @param param the request object
     */
    public retriveTool(param: AIStudioToolsApiRetriveToolRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveTool> {
        return this.api.retriveTool(param.toolId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing tool. This replaces the entire tool with the new data provided.
     * Update a tool
     * @param param the request object
     */
    public updateToolWithHttpInfo(param: AIStudioToolsApiUpdateToolRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncTool | ResponseTool>> {
        return this.api.updateToolWithHttpInfo(param.toolId, param.toolRequest,  options).toPromise();
    }

    /**
     * Update an existing tool. This replaces the entire tool with the new data provided.
     * Update a tool
     * @param param the request object
     */
    public updateTool(param: AIStudioToolsApiUpdateToolRequest, options?: ConfigurationOptions): Promise<ResponseAsyncTool | ResponseTool> {
        return this.api.updateTool(param.toolId, param.toolRequest,  options).toPromise();
    }

}

import { ObservableAccountsDescendantsApi } from "./ObservableAPI";
import { AccountsDescendantsApiRequestFactory, AccountsDescendantsApiResponseProcessor} from "../apis/AccountsDescendantsApi";

export interface AccountsDescendantsApiCreateDescendantAccountRequest {
    /**
     * 
     * @type CreateAccountRequest
     * @memberof AccountsDescendantsApicreateDescendantAccount
     */
    createAccountRequest?: CreateAccountRequest
}

export interface AccountsDescendantsApiListDescendantsAccountsRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    active?: boolean
    /**
     * Filter by created date (exact match).
     * Defaults to: undefined
     * @type Date
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    created?: Date
    /**
     * Filter by created date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    createdGte?: Date
    /**
     * Filter by created date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    createdLte?: Date
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    fields?: string
    /**
     * Filter by account ID (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    id?: string
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    lastEditor?: string
    /**
     * Filter by last modified date (exact match).
     * Defaults to: undefined
     * @type Date
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    lastModified?: Date
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    pageSize?: number
    /**
     * Filter by parent account ID (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    parentId?: string
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AccountsDescendantsApilistDescendantsAccounts
     */
    search?: string
}

export interface AccountsDescendantsApiPartialUpdateDescendantAccountRequest {
    /**
     * A unique integer value identifying the account.
     * Defaults to: undefined
     * @type number
     * @memberof AccountsDescendantsApipartialUpdateDescendantAccount
     */
    accountId: number
    /**
     * 
     * @type PatchedAccountRequest
     * @memberof AccountsDescendantsApipartialUpdateDescendantAccount
     */
    patchedAccountRequest?: PatchedAccountRequest
}

export interface AccountsDescendantsApiRetrieveDescendantAccountRequest {
    /**
     * A unique integer value identifying the account.
     * Defaults to: undefined
     * @type number
     * @memberof AccountsDescendantsApiretrieveDescendantAccount
     */
    accountId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AccountsDescendantsApiretrieveDescendantAccount
     */
    fields?: string
}

export interface AccountsDescendantsApiUpdateDescendantAccountRequest {
    /**
     * A unique integer value identifying the account.
     * Defaults to: undefined
     * @type number
     * @memberof AccountsDescendantsApiupdateDescendantAccount
     */
    accountId: number
    /**
     * 
     * @type AccountRequest
     * @memberof AccountsDescendantsApiupdateDescendantAccount
     */
    accountRequest?: AccountRequest
}

export class ObjectAccountsDescendantsApi {
    private api: ObservableAccountsDescendantsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsDescendantsApiRequestFactory, responseProcessor?: AccountsDescendantsApiResponseProcessor) {
        this.api = new ObservableAccountsDescendantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new sub-account under the logged-in user\'s account.
     * Create a new account
     * @param param the request object
     */
    public createDescendantAccountWithHttpInfo(param: AccountsDescendantsApiCreateDescendantAccountRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        return this.api.createDescendantAccountWithHttpInfo(param.createAccountRequest,  options).toPromise();
    }

    /**
     * Create a new sub-account under the logged-in user\'s account.
     * Create a new account
     * @param param the request object
     */
    public createDescendantAccount(param: AccountsDescendantsApiCreateDescendantAccountRequest = {}, options?: ConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        return this.api.createDescendantAccount(param.createAccountRequest,  options).toPromise();
    }

    /**
     * List all accounts that are descendants of the logged-in user\'s account.
     * List accounts
     * @param param the request object
     */
    public listDescendantsAccountsWithHttpInfo(param: AccountsDescendantsApiListDescendantsAccountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedAccountList>> {
        return this.api.listDescendantsAccountsWithHttpInfo(param.active, param.created, param.createdGte, param.createdLte, param.fields, param.id, param.lastEditor, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.parentId, param.search,  options).toPromise();
    }

    /**
     * List all accounts that are descendants of the logged-in user\'s account.
     * List accounts
     * @param param the request object
     */
    public listDescendantsAccounts(param: AccountsDescendantsApiListDescendantsAccountsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedAccountList> {
        return this.api.listDescendantsAccounts(param.active, param.created, param.createdGte, param.createdLte, param.fields, param.id, param.lastEditor, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.parentId, param.search,  options).toPromise();
    }

    /**
     * Update specific fields of an account under the logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.
     * Partially update account details
     * @param param the request object
     */
    public partialUpdateDescendantAccountWithHttpInfo(param: AccountsDescendantsApiPartialUpdateDescendantAccountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        return this.api.partialUpdateDescendantAccountWithHttpInfo(param.accountId, param.patchedAccountRequest,  options).toPromise();
    }

    /**
     * Update specific fields of an account under the logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.
     * Partially update account details
     * @param param the request object
     */
    public partialUpdateDescendantAccount(param: AccountsDescendantsApiPartialUpdateDescendantAccountRequest, options?: ConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        return this.api.partialUpdateDescendantAccount(param.accountId, param.patchedAccountRequest,  options).toPromise();
    }

    /**
     * Retrieve detailed information of a specific account under the logged-in user\'s account.
     * Retrieve account details
     * @param param the request object
     */
    public retrieveDescendantAccountWithHttpInfo(param: AccountsDescendantsApiRetrieveDescendantAccountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveAccount>> {
        return this.api.retrieveDescendantAccountWithHttpInfo(param.accountId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve detailed information of a specific account under the logged-in user\'s account.
     * Retrieve account details
     * @param param the request object
     */
    public retrieveDescendantAccount(param: AccountsDescendantsApiRetrieveDescendantAccountRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveAccount> {
        return this.api.retrieveDescendantAccount(param.accountId, param.fields,  options).toPromise();
    }

    /**
     * Update the information of a specific account under the logged-in user\'s account. This operation allows replacing the entire account data with new values.
     * Update account details
     * @param param the request object
     */
    public updateDescendantAccountWithHttpInfo(param: AccountsDescendantsApiUpdateDescendantAccountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        return this.api.updateDescendantAccountWithHttpInfo(param.accountId, param.accountRequest,  options).toPromise();
    }

    /**
     * Update the information of a specific account under the logged-in user\'s account. This operation allows replacing the entire account data with new values.
     * Update account details
     * @param param the request object
     */
    public updateDescendantAccount(param: AccountsDescendantsApiUpdateDescendantAccountRequest, options?: ConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        return this.api.updateDescendantAccount(param.accountId, param.accountRequest,  options).toPromise();
    }

}

import { ObservableAccountsInfoApi } from "./ObservableAPI";
import { AccountsInfoApiRequestFactory, AccountsInfoApiResponseProcessor} from "../apis/AccountsInfoApi";

export interface AccountsInfoApiRetrieveAccountInfoDetailsRequest {
    /**
     * A unique integer value identifying the account.
     * Defaults to: undefined
     * @type number
     * @memberof AccountsInfoApiretrieveAccountInfoDetails
     */
    accountId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AccountsInfoApiretrieveAccountInfoDetails
     */
    fields?: string
}

export interface AccountsInfoApiUpdateAccountInfoDetailsRequest {
    /**
     * A unique integer value identifying the account.
     * Defaults to: undefined
     * @type number
     * @memberof AccountsInfoApiupdateAccountInfoDetails
     */
    accountId: number
    /**
     * 
     * @type UpdateAccountInfoDetailsRequest
     * @memberof AccountsInfoApiupdateAccountInfoDetails
     */
    updateAccountInfoDetailsRequest?: UpdateAccountInfoDetailsRequest
}

export class ObjectAccountsInfoApi {
    private api: ObservableAccountsInfoApi

    public constructor(configuration: Configuration, requestFactory?: AccountsInfoApiRequestFactory, responseProcessor?: AccountsInfoApiResponseProcessor) {
        this.api = new ObservableAccountsInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve detailed information about your account or a specific child account under your logged-in account.
     * Retrieve account information details
     * @param param the request object
     */
    public retrieveAccountInfoDetailsWithHttpInfo(param: AccountsInfoApiRetrieveAccountInfoDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveAccountInfo>> {
        return this.api.retrieveAccountInfoDetailsWithHttpInfo(param.accountId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve detailed information about your account or a specific child account under your logged-in account.
     * Retrieve account information details
     * @param param the request object
     */
    public retrieveAccountInfoDetails(param: AccountsInfoApiRetrieveAccountInfoDetailsRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveAccountInfo> {
        return this.api.retrieveAccountInfoDetails(param.accountId, param.fields,  options).toPromise();
    }

    /**
     * Update the information details about your account or a specific child account under your logged-in account. This operation allows replacing the entire account info data with new values. In this operation, you can also clear all detailed information of an account by providing an empty dictionary in the `info` field.
     * Update account information details
     * @param param the request object
     */
    public updateAccountInfoDetailsWithHttpInfo(param: AccountsInfoApiUpdateAccountInfoDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncAccountInfo | ResponseAccountInfo>> {
        return this.api.updateAccountInfoDetailsWithHttpInfo(param.accountId, param.updateAccountInfoDetailsRequest,  options).toPromise();
    }

    /**
     * Update the information details about your account or a specific child account under your logged-in account. This operation allows replacing the entire account info data with new values. In this operation, you can also clear all detailed information of an account by providing an empty dictionary in the `info` field.
     * Update account information details
     * @param param the request object
     */
    public updateAccountInfoDetails(param: AccountsInfoApiUpdateAccountInfoDetailsRequest, options?: ConfigurationOptions): Promise<ResponseAsyncAccountInfo | ResponseAccountInfo> {
        return this.api.updateAccountInfoDetails(param.accountId, param.updateAccountInfoDetailsRequest,  options).toPromise();
    }

}

import { ObservableAccountsLoggedInApi } from "./ObservableAPI";
import { AccountsLoggedInApiRequestFactory, AccountsLoggedInApiResponseProcessor} from "../apis/AccountsLoggedInApi";

export interface AccountsLoggedInApiPartialUpdateLoggedAccountRequest {
    /**
     * 
     * @type PatchedAccountRequest
     * @memberof AccountsLoggedInApipartialUpdateLoggedAccount
     */
    patchedAccountRequest?: PatchedAccountRequest
}

export interface AccountsLoggedInApiRetrieveLoggedAccountDetailsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AccountsLoggedInApiretrieveLoggedAccountDetails
     */
    fields?: string
}

export interface AccountsLoggedInApiUpdateLoggedAccountRequest {
    /**
     * 
     * @type AccountRequest
     * @memberof AccountsLoggedInApiupdateLoggedAccount
     */
    accountRequest?: AccountRequest
}

export class ObjectAccountsLoggedInApi {
    private api: ObservableAccountsLoggedInApi

    public constructor(configuration: Configuration, requestFactory?: AccountsLoggedInApiRequestFactory, responseProcessor?: AccountsLoggedInApiResponseProcessor) {
        this.api = new ObservableAccountsLoggedInApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Partially update specific fields of the currently logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.
     * Partially update logged account details
     * @param param the request object
     */
    public partialUpdateLoggedAccountWithHttpInfo(param: AccountsLoggedInApiPartialUpdateLoggedAccountRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        return this.api.partialUpdateLoggedAccountWithHttpInfo(param.patchedAccountRequest,  options).toPromise();
    }

    /**
     * Partially update specific fields of the currently logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.
     * Partially update logged account details
     * @param param the request object
     */
    public partialUpdateLoggedAccount(param: AccountsLoggedInApiPartialUpdateLoggedAccountRequest = {}, options?: ConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        return this.api.partialUpdateLoggedAccount(param.patchedAccountRequest,  options).toPromise();
    }

    /**
     * Retrieve detailed information about the currently logged-in user\'s account.
     * Retrieve logged account details
     * @param param the request object
     */
    public retrieveLoggedAccountDetailsWithHttpInfo(param: AccountsLoggedInApiRetrieveLoggedAccountDetailsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveAccount>> {
        return this.api.retrieveLoggedAccountDetailsWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Retrieve detailed information about the currently logged-in user\'s account.
     * Retrieve logged account details
     * @param param the request object
     */
    public retrieveLoggedAccountDetails(param: AccountsLoggedInApiRetrieveLoggedAccountDetailsRequest = {}, options?: ConfigurationOptions): Promise<ResponseRetrieveAccount> {
        return this.api.retrieveLoggedAccountDetails(param.fields,  options).toPromise();
    }

    /**
     * Update the details of the currently logged-in user\'s account. This operation allows replacing the entire account data with new values.
     * Update logged account details
     * @param param the request object
     */
    public updateLoggedAccountWithHttpInfo(param: AccountsLoggedInApiUpdateLoggedAccountRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        return this.api.updateLoggedAccountWithHttpInfo(param.accountRequest,  options).toPromise();
    }

    /**
     * Update the details of the currently logged-in user\'s account. This operation allows replacing the entire account data with new values.
     * Update logged account details
     * @param param the request object
     */
    public updateLoggedAccount(param: AccountsLoggedInApiUpdateLoggedAccountRequest = {}, options?: ConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        return this.api.updateLoggedAccount(param.accountRequest,  options).toPromise();
    }

}

import { ObservableApplicationVersionsApi } from "./ObservableAPI";
import { ApplicationVersionsApiRequestFactory, ApplicationVersionsApiResponseProcessor} from "../apis/ApplicationVersionsApi";

export interface ApplicationVersionsApiArchiveApplicationVersionRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApiarchiveApplicationVersion
     */
    applicationId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApiarchiveApplicationVersion
     */
    versionId: string
    /**
     * 
     * @type VersionArchiveRequest
     * @memberof ApplicationVersionsApiarchiveApplicationVersion
     */
    versionArchiveRequest?: VersionArchiveRequest
}

export interface ApplicationVersionsApiBuildApplicationVersionRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApibuildApplicationVersion
     */
    applicationId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApibuildApplicationVersion
     */
    versionId: string
    /**
     * 
     * @type VersionBuildRequest
     * @memberof ApplicationVersionsApibuildApplicationVersion
     */
    versionBuildRequest?: VersionBuildRequest
}

export interface ApplicationVersionsApiCancelApplicationVersionBuildRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApicancelApplicationVersionBuild
     */
    applicationId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApicancelApplicationVersionBuild
     */
    versionId: string
    /**
     * 
     * @type VersionBuildRequest
     * @memberof ApplicationVersionsApicancelApplicationVersionBuild
     */
    versionBuildRequest?: VersionBuildRequest
}

export interface ApplicationVersionsApiCreateApplicationVersionRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApicreateApplicationVersion
     */
    applicationId: number
    /**
     * 
     * @type VersionCreateRequest
     * @memberof ApplicationVersionsApicreateApplicationVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export interface ApplicationVersionsApiDeleteApplicationVersionRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApideleteApplicationVersion
     */
    applicationId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApideleteApplicationVersion
     */
    versionId: string
}

export interface ApplicationVersionsApiListApplicationVersionsRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApilistApplicationVersions
     */
    applicationId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApilistApplicationVersions
     */
    fields?: string
}

export interface ApplicationVersionsApiPartialUpdateApplicationVersionRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApipartialUpdateApplicationVersion
     */
    applicationId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApipartialUpdateApplicationVersion
     */
    versionId: string
    /**
     * 
     * @type PatchedVersionCreateRequest
     * @memberof ApplicationVersionsApipartialUpdateApplicationVersion
     */
    patchedVersionCreateRequest?: PatchedVersionCreateRequest
}

export interface ApplicationVersionsApiRetrieveApplicationVersionRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApiretrieveApplicationVersion
     */
    applicationId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApiretrieveApplicationVersion
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApiretrieveApplicationVersion
     */
    fields?: string
}

export interface ApplicationVersionsApiUpdateApplicationVersionRequest {
    /**
     * The ID (global_id) of the Application resource.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationVersionsApiupdateApplicationVersion
     */
    applicationId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationVersionsApiupdateApplicationVersion
     */
    versionId: string
    /**
     * 
     * @type VersionCreateRequest
     * @memberof ApplicationVersionsApiupdateApplicationVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export class ObjectApplicationVersionsApi {
    private api: ObservableApplicationVersionsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationVersionsApiRequestFactory, responseProcessor?: ApplicationVersionsApiResponseProcessor) {
        this.api = new ObservableApplicationVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version (soft-delete).
     * Archive an Application version
     * @param param the request object
     */
    public archiveApplicationVersionWithHttpInfo(param: ApplicationVersionsApiArchiveApplicationVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveApplicationVersionWithHttpInfo(param.applicationId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Archive a ready version (soft-delete).
     * Archive an Application version
     * @param param the request object
     */
    public archiveApplicationVersion(param: ApplicationVersionsApiArchiveApplicationVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveApplicationVersion(param.applicationId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build an Application version
     * @param param the request object
     */
    public buildApplicationVersionWithHttpInfo(param: ApplicationVersionsApiBuildApplicationVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.buildApplicationVersionWithHttpInfo(param.applicationId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build an Application version
     * @param param the request object
     */
    public buildApplicationVersion(param: ApplicationVersionsApiBuildApplicationVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.buildApplicationVersion(param.applicationId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel an Application version build
     * @param param the request object
     */
    public cancelApplicationVersionBuildWithHttpInfo(param: ApplicationVersionsApiCancelApplicationVersionBuildRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelApplicationVersionBuildWithHttpInfo(param.applicationId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel an Application version build
     * @param param the request object
     */
    public cancelApplicationVersionBuild(param: ApplicationVersionsApiCancelApplicationVersionBuildRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelApplicationVersionBuild(param.applicationId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning an existing one.
     * Create a new Application version
     * @param param the request object
     */
    public createApplicationVersionWithHttpInfo(param: ApplicationVersionsApiCreateApplicationVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createApplicationVersionWithHttpInfo(param.applicationId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning an existing one.
     * Create a new Application version
     * @param param the request object
     */
    public createApplicationVersion(param: ApplicationVersionsApiCreateApplicationVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createApplicationVersion(param.applicationId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific version of an Application.
     * Delete an Application version
     * @param param the request object
     */
    public deleteApplicationVersionWithHttpInfo(param: ApplicationVersionsApiDeleteApplicationVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteApplicationVersionWithHttpInfo(param.applicationId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific version of an Application.
     * Delete an Application version
     * @param param the request object
     */
    public deleteApplicationVersion(param: ApplicationVersionsApiDeleteApplicationVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteApplicationVersion(param.applicationId, param.versionId,  options).toPromise();
    }

    /**
     * List all versions of a specific Application.
     * List Application versions
     * @param param the request object
     */
    public listApplicationVersionsWithHttpInfo(param: ApplicationVersionsApiListApplicationVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.listApplicationVersionsWithHttpInfo(param.applicationId, param.fields,  options).toPromise();
    }

    /**
     * List all versions of a specific Application.
     * List Application versions
     * @param param the request object
     */
    public listApplicationVersions(param: ApplicationVersionsApiListApplicationVersionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.listApplicationVersions(param.applicationId, param.fields,  options).toPromise();
    }

    /**
     * Partially update a draft version of an Application.
     * Partially update an Application version
     * @param param the request object
     */
    public partialUpdateApplicationVersionWithHttpInfo(param: ApplicationVersionsApiPartialUpdateApplicationVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.partialUpdateApplicationVersionWithHttpInfo(param.applicationId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Partially update a draft version of an Application.
     * Partially update an Application version
     * @param param the request object
     */
    public partialUpdateApplicationVersion(param: ApplicationVersionsApiPartialUpdateApplicationVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.partialUpdateApplicationVersion(param.applicationId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version of an Application.
     * Retrieve an Application version
     * @param param the request object
     */
    public retrieveApplicationVersionWithHttpInfo(param: ApplicationVersionsApiRetrieveApplicationVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.retrieveApplicationVersionWithHttpInfo(param.applicationId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version of an Application.
     * Retrieve an Application version
     * @param param the request object
     */
    public retrieveApplicationVersion(param: ApplicationVersionsApiRetrieveApplicationVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.retrieveApplicationVersion(param.applicationId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update a draft version of an Application.
     * Update an Application version
     * @param param the request object
     */
    public updateApplicationVersionWithHttpInfo(param: ApplicationVersionsApiUpdateApplicationVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateApplicationVersionWithHttpInfo(param.applicationId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Update a draft version of an Application.
     * Update an Application version
     * @param param the request object
     */
    public updateApplicationVersion(param: ApplicationVersionsApiUpdateApplicationVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateApplicationVersion(param.applicationId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

}

import { ObservableApplicationsApi } from "./ObservableAPI";
import { ApplicationsApiRequestFactory, ApplicationsApiResponseProcessor} from "../apis/ApplicationsApi";

export interface ApplicationsApiCloneApplicationRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsApicloneApplication
     */
    applicationId: number
    /**
     * 
     * @type CloneApplicationRequest
     * @memberof ApplicationsApicloneApplication
     */
    cloneApplicationRequest: CloneApplicationRequest
}

export interface ApplicationsApiCreateApplicationRequest {
    /**
     * 
     * @type ApplicationRequest
     * @memberof ApplicationsApicreateApplication
     */
    applicationRequest: ApplicationRequest
}

export interface ApplicationsApiDeleteApplicationRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsApideleteApplication
     */
    applicationId: number
}

export interface ApplicationsApiListApplicationsRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof ApplicationsApilistApplications
     */
    active?: boolean
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsApilistApplications
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsApilistApplications
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsApilistApplications
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsApilistApplications
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsApilistApplications
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsApilistApplications
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsApilistApplications
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsApilistApplications
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsApilistApplications
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsApilistApplications
     */
    search?: string
}

export interface ApplicationsApiPartialUpdateApplicationRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsApipartialUpdateApplication
     */
    applicationId: number
    /**
     * 
     * @type PatchedApplicationRequest
     * @memberof ApplicationsApipartialUpdateApplication
     */
    patchedApplicationRequest?: PatchedApplicationRequest
}

export interface ApplicationsApiRetrieveApplicationRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsApiretrieveApplication
     */
    applicationId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsApiretrieveApplication
     */
    fields?: string
}

export interface ApplicationsApiUpdateApplicationRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsApiupdateApplication
     */
    applicationId: number
    /**
     * 
     * @type ApplicationRequest
     * @memberof ApplicationsApiupdateApplication
     */
    applicationRequest: ApplicationRequest
}

export class ObjectApplicationsApi {
    private api: ObservableApplicationsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationsApiRequestFactory, responseProcessor?: ApplicationsApiResponseProcessor) {
        this.api = new ObservableApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Application by performing a deep copy of an existing Application, including its Cache Settings, Origins, Error Responses, Function Instances, and Rules Engine.
     * Clone an Application
     * @param param the request object
     */
    public cloneApplicationWithHttpInfo(param: ApplicationsApiCloneApplicationRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        return this.api.cloneApplicationWithHttpInfo(param.applicationId, param.cloneApplicationRequest,  options).toPromise();
    }

    /**
     * Create a new Application by performing a deep copy of an existing Application, including its Cache Settings, Origins, Error Responses, Function Instances, and Rules Engine.
     * Clone an Application
     * @param param the request object
     */
    public cloneApplication(param: ApplicationsApiCloneApplicationRequest, options?: ConfigurationOptions): Promise<ApplicationResponse> {
        return this.api.cloneApplication(param.applicationId, param.cloneApplicationRequest,  options).toPromise();
    }

    /**
     * Create a new Application in your account.
     * Create an Application
     * @param param the request object
     */
    public createApplicationWithHttpInfo(param: ApplicationsApiCreateApplicationRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        return this.api.createApplicationWithHttpInfo(param.applicationRequest,  options).toPromise();
    }

    /**
     * Create a new Application in your account.
     * Create an Application
     * @param param the request object
     */
    public createApplication(param: ApplicationsApiCreateApplicationRequest, options?: ConfigurationOptions): Promise<ApplicationResponse> {
        return this.api.createApplication(param.applicationRequest,  options).toPromise();
    }

    /**
     * Delete a specific Application in your account.
     * Delete an Application
     * @param param the request object
     */
    public deleteApplicationWithHttpInfo(param: ApplicationsApiDeleteApplicationRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteApplicationWithHttpInfo(param.applicationId,  options).toPromise();
    }

    /**
     * Delete a specific Application in your account.
     * Delete an Application
     * @param param the request object
     */
    public deleteApplication(param: ApplicationsApiDeleteApplicationRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteApplication(param.applicationId,  options).toPromise();
    }

    /**
     * List all Applications owned by your account.
     * List Applications
     * @param param the request object
     */
    public listApplicationsWithHttpInfo(param: ApplicationsApiListApplicationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedApplicationList>> {
        return this.api.listApplicationsWithHttpInfo(param.active, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Applications owned by your account.
     * List Applications
     * @param param the request object
     */
    public listApplications(param: ApplicationsApiListApplicationsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedApplicationList> {
        return this.api.listApplications(param.active, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application without affecting other fields.
     * Partially update an Application
     * @param param the request object
     */
    public partialUpdateApplicationWithHttpInfo(param: ApplicationsApiPartialUpdateApplicationRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        return this.api.partialUpdateApplicationWithHttpInfo(param.applicationId, param.patchedApplicationRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application without affecting other fields.
     * Partially update an Application
     * @param param the request object
     */
    public partialUpdateApplication(param: ApplicationsApiPartialUpdateApplicationRequest, options?: ConfigurationOptions): Promise<ApplicationResponse> {
        return this.api.partialUpdateApplication(param.applicationId, param.patchedApplicationRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Application in your account.
     * Retrieve details of an Application
     * @param param the request object
     */
    public retrieveApplicationWithHttpInfo(param: ApplicationsApiRetrieveApplicationRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        return this.api.retrieveApplicationWithHttpInfo(param.applicationId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Application in your account.
     * Retrieve details of an Application
     * @param param the request object
     */
    public retrieveApplication(param: ApplicationsApiRetrieveApplicationRequest, options?: ConfigurationOptions): Promise<ApplicationResponse> {
        return this.api.retrieveApplication(param.applicationId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Application. This replaces the entire Application with the new data provided.
     * Update an Application
     * @param param the request object
     */
    public updateApplicationWithHttpInfo(param: ApplicationsApiUpdateApplicationRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        return this.api.updateApplicationWithHttpInfo(param.applicationId, param.applicationRequest,  options).toPromise();
    }

    /**
     * Update an existing Application. This replaces the entire Application with the new data provided.
     * Update an Application
     * @param param the request object
     */
    public updateApplication(param: ApplicationsApiUpdateApplicationRequest, options?: ConfigurationOptions): Promise<ApplicationResponse> {
        return this.api.updateApplication(param.applicationId, param.applicationRequest,  options).toPromise();
    }

}

import { ObservableApplicationsCacheSettingsApi } from "./ObservableAPI";
import { ApplicationsCacheSettingsApiRequestFactory, ApplicationsCacheSettingsApiResponseProcessor} from "../apis/ApplicationsCacheSettingsApi";

export interface ApplicationsCacheSettingsApiCreateCacheSettingRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApicreateCacheSetting
     */
    applicationId: number
    /**
     * 
     * @type CacheSettingRequest
     * @memberof ApplicationsCacheSettingsApicreateCacheSetting
     */
    cacheSettingRequest: CacheSettingRequest
}

export interface ApplicationsCacheSettingsApiCreateCacheSetting2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApicreateCacheSetting2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApicreateCacheSetting2
     */
    versionId: string
    /**
     * 
     * @type CacheSettingRequest
     * @memberof ApplicationsCacheSettingsApicreateCacheSetting2
     */
    cacheSettingRequest: CacheSettingRequest
}

export interface ApplicationsCacheSettingsApiDeleteCacheSettingRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApideleteCacheSetting
     */
    applicationId: number
    /**
     * A unique integer value identifying the cache setting.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApideleteCacheSetting
     */
    cacheSettingId: number
}

export interface ApplicationsCacheSettingsApiDeleteCacheSetting2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApideleteCacheSetting2
     */
    applicationId: number
    /**
     * A unique integer value identifying the cache setting.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApideleteCacheSetting2
     */
    cacheSettingId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApideleteCacheSetting2
     */
    versionId: string
}

export interface ApplicationsCacheSettingsApiListCacheSettingsRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApilistCacheSettings
     */
    applicationId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApilistCacheSettings
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApilistCacheSettings
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApilistCacheSettings
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings
     */
    search?: string
}

export interface ApplicationsCacheSettingsApiListCacheSettings2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApilistCacheSettings2
     */
    search?: string
}

export interface ApplicationsCacheSettingsApiPartialUpdateCacheSettingRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApipartialUpdateCacheSetting
     */
    applicationId: number
    /**
     * A unique integer value identifying the cache setting.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApipartialUpdateCacheSetting
     */
    cacheSettingId: number
    /**
     * 
     * @type PatchedCacheSettingRequest
     * @memberof ApplicationsCacheSettingsApipartialUpdateCacheSetting
     */
    patchedCacheSettingRequest?: PatchedCacheSettingRequest
}

export interface ApplicationsCacheSettingsApiPartialUpdateCacheSetting2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApipartialUpdateCacheSetting2
     */
    applicationId: number
    /**
     * A unique integer value identifying the cache setting.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApipartialUpdateCacheSetting2
     */
    cacheSettingId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApipartialUpdateCacheSetting2
     */
    versionId: string
    /**
     * 
     * @type PatchedCacheSettingRequest
     * @memberof ApplicationsCacheSettingsApipartialUpdateCacheSetting2
     */
    patchedCacheSettingRequest?: PatchedCacheSettingRequest
}

export interface ApplicationsCacheSettingsApiRetrieveCacheSettingRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApiretrieveCacheSetting
     */
    applicationId: number
    /**
     * A unique integer value identifying the cache setting.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApiretrieveCacheSetting
     */
    cacheSettingId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApiretrieveCacheSetting
     */
    fields?: string
}

export interface ApplicationsCacheSettingsApiRetrieveCacheSetting2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApiretrieveCacheSetting2
     */
    applicationId: number
    /**
     * A unique integer value identifying the cache setting.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApiretrieveCacheSetting2
     */
    cacheSettingId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApiretrieveCacheSetting2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApiretrieveCacheSetting2
     */
    fields?: string
}

export interface ApplicationsCacheSettingsApiUpdateCacheSettingRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApiupdateCacheSetting
     */
    applicationId: number
    /**
     * A unique integer value identifying the cache setting.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApiupdateCacheSetting
     */
    cacheSettingId: number
    /**
     * 
     * @type CacheSettingRequest
     * @memberof ApplicationsCacheSettingsApiupdateCacheSetting
     */
    cacheSettingRequest: CacheSettingRequest
}

export interface ApplicationsCacheSettingsApiUpdateCacheSetting2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApiupdateCacheSetting2
     */
    applicationId: number
    /**
     * A unique integer value identifying the cache setting.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsCacheSettingsApiupdateCacheSetting2
     */
    cacheSettingId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsCacheSettingsApiupdateCacheSetting2
     */
    versionId: string
    /**
     * 
     * @type CacheSettingRequest
     * @memberof ApplicationsCacheSettingsApiupdateCacheSetting2
     */
    cacheSettingRequest: CacheSettingRequest
}

export class ObjectApplicationsCacheSettingsApi {
    private api: ObservableApplicationsCacheSettingsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationsCacheSettingsApiRequestFactory, responseProcessor?: ApplicationsCacheSettingsApiResponseProcessor) {
        this.api = new ObservableApplicationsCacheSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Cache Setting in your account.
     * Create an Applications Cache Setting
     * @param param the request object
     */
    public createCacheSettingWithHttpInfo(param: ApplicationsCacheSettingsApiCreateCacheSettingRequest, options?: ConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        return this.api.createCacheSettingWithHttpInfo(param.applicationId, param.cacheSettingRequest,  options).toPromise();
    }

    /**
     * Create a new Cache Setting in your account.
     * Create an Applications Cache Setting
     * @param param the request object
     */
    public createCacheSetting(param: ApplicationsCacheSettingsApiCreateCacheSettingRequest, options?: ConfigurationOptions): Promise<CacheSettingResponse> {
        return this.api.createCacheSetting(param.applicationId, param.cacheSettingRequest,  options).toPromise();
    }

    /**
     * Create a new Cache Setting in your account.
     * Create an Applications Cache Setting
     * @param param the request object
     */
    public createCacheSetting2WithHttpInfo(param: ApplicationsCacheSettingsApiCreateCacheSetting2Request, options?: ConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        return this.api.createCacheSetting2WithHttpInfo(param.applicationId, param.versionId, param.cacheSettingRequest,  options).toPromise();
    }

    /**
     * Create a new Cache Setting in your account.
     * Create an Applications Cache Setting
     * @param param the request object
     */
    public createCacheSetting2(param: ApplicationsCacheSettingsApiCreateCacheSetting2Request, options?: ConfigurationOptions): Promise<CacheSettingResponse> {
        return this.api.createCacheSetting2(param.applicationId, param.versionId, param.cacheSettingRequest,  options).toPromise();
    }

    /**
     * Delete a specific Cache Setting in your account.
     * Delete an Applications Cache Setting
     * @param param the request object
     */
    public deleteCacheSettingWithHttpInfo(param: ApplicationsCacheSettingsApiDeleteCacheSettingRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteCacheSettingWithHttpInfo(param.applicationId, param.cacheSettingId,  options).toPromise();
    }

    /**
     * Delete a specific Cache Setting in your account.
     * Delete an Applications Cache Setting
     * @param param the request object
     */
    public deleteCacheSetting(param: ApplicationsCacheSettingsApiDeleteCacheSettingRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteCacheSetting(param.applicationId, param.cacheSettingId,  options).toPromise();
    }

    /**
     * Delete a specific Cache Setting in your account.
     * Delete an Applications Cache Setting
     * @param param the request object
     */
    public deleteCacheSetting2WithHttpInfo(param: ApplicationsCacheSettingsApiDeleteCacheSetting2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteCacheSetting2WithHttpInfo(param.applicationId, param.cacheSettingId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific Cache Setting in your account.
     * Delete an Applications Cache Setting
     * @param param the request object
     */
    public deleteCacheSetting2(param: ApplicationsCacheSettingsApiDeleteCacheSetting2Request, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteCacheSetting2(param.applicationId, param.cacheSettingId, param.versionId,  options).toPromise();
    }

    /**
     * List all Cache Settings owned by your account.
     * List all Applications Cache Settings
     * @param param the request object
     */
    public listCacheSettingsWithHttpInfo(param: ApplicationsCacheSettingsApiListCacheSettingsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCacheSettingList>> {
        return this.api.listCacheSettingsWithHttpInfo(param.applicationId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Cache Settings owned by your account.
     * List all Applications Cache Settings
     * @param param the request object
     */
    public listCacheSettings(param: ApplicationsCacheSettingsApiListCacheSettingsRequest, options?: ConfigurationOptions): Promise<PaginatedCacheSettingList> {
        return this.api.listCacheSettings(param.applicationId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Cache Settings owned by your account.
     * List all Applications Cache Settings
     * @param param the request object
     */
    public listCacheSettings2WithHttpInfo(param: ApplicationsCacheSettingsApiListCacheSettings2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCacheSettingList>> {
        return this.api.listCacheSettings2WithHttpInfo(param.applicationId, param.versionId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Cache Settings owned by your account.
     * List all Applications Cache Settings
     * @param param the request object
     */
    public listCacheSettings2(param: ApplicationsCacheSettingsApiListCacheSettings2Request, options?: ConfigurationOptions): Promise<PaginatedCacheSettingList> {
        return this.api.listCacheSettings2(param.applicationId, param.versionId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Cache Setting without affecting other fields.
     * Partially update an Applications Cache Setting
     * @param param the request object
     */
    public partialUpdateCacheSettingWithHttpInfo(param: ApplicationsCacheSettingsApiPartialUpdateCacheSettingRequest, options?: ConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        return this.api.partialUpdateCacheSettingWithHttpInfo(param.applicationId, param.cacheSettingId, param.patchedCacheSettingRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Cache Setting without affecting other fields.
     * Partially update an Applications Cache Setting
     * @param param the request object
     */
    public partialUpdateCacheSetting(param: ApplicationsCacheSettingsApiPartialUpdateCacheSettingRequest, options?: ConfigurationOptions): Promise<CacheSettingResponse> {
        return this.api.partialUpdateCacheSetting(param.applicationId, param.cacheSettingId, param.patchedCacheSettingRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Cache Setting without affecting other fields.
     * Partially update an Applications Cache Setting
     * @param param the request object
     */
    public partialUpdateCacheSetting2WithHttpInfo(param: ApplicationsCacheSettingsApiPartialUpdateCacheSetting2Request, options?: ConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        return this.api.partialUpdateCacheSetting2WithHttpInfo(param.applicationId, param.cacheSettingId, param.versionId, param.patchedCacheSettingRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Cache Setting without affecting other fields.
     * Partially update an Applications Cache Setting
     * @param param the request object
     */
    public partialUpdateCacheSetting2(param: ApplicationsCacheSettingsApiPartialUpdateCacheSetting2Request, options?: ConfigurationOptions): Promise<CacheSettingResponse> {
        return this.api.partialUpdateCacheSetting2(param.applicationId, param.cacheSettingId, param.versionId, param.patchedCacheSettingRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Cache Setting in your account.
     * Retrieve details of an Applications Cache Setting
     * @param param the request object
     */
    public retrieveCacheSettingWithHttpInfo(param: ApplicationsCacheSettingsApiRetrieveCacheSettingRequest, options?: ConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        return this.api.retrieveCacheSettingWithHttpInfo(param.applicationId, param.cacheSettingId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Cache Setting in your account.
     * Retrieve details of an Applications Cache Setting
     * @param param the request object
     */
    public retrieveCacheSetting(param: ApplicationsCacheSettingsApiRetrieveCacheSettingRequest, options?: ConfigurationOptions): Promise<CacheSettingResponse> {
        return this.api.retrieveCacheSetting(param.applicationId, param.cacheSettingId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Cache Setting in your account.
     * Retrieve details of an Applications Cache Setting
     * @param param the request object
     */
    public retrieveCacheSetting2WithHttpInfo(param: ApplicationsCacheSettingsApiRetrieveCacheSetting2Request, options?: ConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        return this.api.retrieveCacheSetting2WithHttpInfo(param.applicationId, param.cacheSettingId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Cache Setting in your account.
     * Retrieve details of an Applications Cache Setting
     * @param param the request object
     */
    public retrieveCacheSetting2(param: ApplicationsCacheSettingsApiRetrieveCacheSetting2Request, options?: ConfigurationOptions): Promise<CacheSettingResponse> {
        return this.api.retrieveCacheSetting2(param.applicationId, param.cacheSettingId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.
     * Update an Applications Cache Setting
     * @param param the request object
     */
    public updateCacheSettingWithHttpInfo(param: ApplicationsCacheSettingsApiUpdateCacheSettingRequest, options?: ConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        return this.api.updateCacheSettingWithHttpInfo(param.applicationId, param.cacheSettingId, param.cacheSettingRequest,  options).toPromise();
    }

    /**
     * Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.
     * Update an Applications Cache Setting
     * @param param the request object
     */
    public updateCacheSetting(param: ApplicationsCacheSettingsApiUpdateCacheSettingRequest, options?: ConfigurationOptions): Promise<CacheSettingResponse> {
        return this.api.updateCacheSetting(param.applicationId, param.cacheSettingId, param.cacheSettingRequest,  options).toPromise();
    }

    /**
     * Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.
     * Update an Applications Cache Setting
     * @param param the request object
     */
    public updateCacheSetting2WithHttpInfo(param: ApplicationsCacheSettingsApiUpdateCacheSetting2Request, options?: ConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        return this.api.updateCacheSetting2WithHttpInfo(param.applicationId, param.cacheSettingId, param.versionId, param.cacheSettingRequest,  options).toPromise();
    }

    /**
     * Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.
     * Update an Applications Cache Setting
     * @param param the request object
     */
    public updateCacheSetting2(param: ApplicationsCacheSettingsApiUpdateCacheSetting2Request, options?: ConfigurationOptions): Promise<CacheSettingResponse> {
        return this.api.updateCacheSetting2(param.applicationId, param.cacheSettingId, param.versionId, param.cacheSettingRequest,  options).toPromise();
    }

}

import { ObservableApplicationsDeviceGroupsApi } from "./ObservableAPI";
import { ApplicationsDeviceGroupsApiRequestFactory, ApplicationsDeviceGroupsApiResponseProcessor} from "../apis/ApplicationsDeviceGroupsApi";

export interface ApplicationsDeviceGroupsApiCreateDeviceGroupRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApicreateDeviceGroup
     */
    applicationId: number
    /**
     * 
     * @type DeviceGroupRequest
     * @memberof ApplicationsDeviceGroupsApicreateDeviceGroup
     */
    deviceGroupRequest: DeviceGroupRequest
}

export interface ApplicationsDeviceGroupsApiCreateDeviceGroup2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApicreateDeviceGroup2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApicreateDeviceGroup2
     */
    versionId: string
    /**
     * 
     * @type DeviceGroupRequest
     * @memberof ApplicationsDeviceGroupsApicreateDeviceGroup2
     */
    deviceGroupRequest: DeviceGroupRequest
}

export interface ApplicationsDeviceGroupsApiDeleteDeviceGroupRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApideleteDeviceGroup
     */
    applicationId: number
    /**
     * A unique integer value identifying the device group.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApideleteDeviceGroup
     */
    deviceGroupId: number
}

export interface ApplicationsDeviceGroupsApiDeleteDeviceGroup2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApideleteDeviceGroup2
     */
    applicationId: number
    /**
     * A unique integer value identifying the device group.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApideleteDeviceGroup2
     */
    deviceGroupId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApideleteDeviceGroup2
     */
    versionId: string
}

export interface ApplicationsDeviceGroupsApiListDeviceGroupsRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    applicationId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    search?: string
    /**
     * Filter by user agent (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups
     */
    userAgent?: string
}

export interface ApplicationsDeviceGroupsApiListDeviceGroups2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    search?: string
    /**
     * Filter by user agent (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApilistDeviceGroups2
     */
    userAgent?: string
}

export interface ApplicationsDeviceGroupsApiPartialUpdateDeviceGroupRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApipartialUpdateDeviceGroup
     */
    applicationId: number
    /**
     * A unique integer value identifying the device group.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApipartialUpdateDeviceGroup
     */
    deviceGroupId: number
    /**
     * 
     * @type PatchedDeviceGroupRequest
     * @memberof ApplicationsDeviceGroupsApipartialUpdateDeviceGroup
     */
    patchedDeviceGroupRequest?: PatchedDeviceGroupRequest
}

export interface ApplicationsDeviceGroupsApiPartialUpdateDeviceGroup2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApipartialUpdateDeviceGroup2
     */
    applicationId: number
    /**
     * A unique integer value identifying the device group.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApipartialUpdateDeviceGroup2
     */
    deviceGroupId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApipartialUpdateDeviceGroup2
     */
    versionId: string
    /**
     * 
     * @type PatchedDeviceGroupRequest
     * @memberof ApplicationsDeviceGroupsApipartialUpdateDeviceGroup2
     */
    patchedDeviceGroupRequest?: PatchedDeviceGroupRequest
}

export interface ApplicationsDeviceGroupsApiRetrieveDeviceGroupRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApiretrieveDeviceGroup
     */
    applicationId: number
    /**
     * A unique integer value identifying the device group.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApiretrieveDeviceGroup
     */
    deviceGroupId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApiretrieveDeviceGroup
     */
    fields?: string
}

export interface ApplicationsDeviceGroupsApiRetrieveDeviceGroup2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApiretrieveDeviceGroup2
     */
    applicationId: number
    /**
     * A unique integer value identifying the device group.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApiretrieveDeviceGroup2
     */
    deviceGroupId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApiretrieveDeviceGroup2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApiretrieveDeviceGroup2
     */
    fields?: string
}

export interface ApplicationsDeviceGroupsApiUpdateDeviceGroupRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApiupdateDeviceGroup
     */
    applicationId: number
    /**
     * A unique integer value identifying the device group.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApiupdateDeviceGroup
     */
    deviceGroupId: number
    /**
     * 
     * @type DeviceGroupRequest
     * @memberof ApplicationsDeviceGroupsApiupdateDeviceGroup
     */
    deviceGroupRequest: DeviceGroupRequest
}

export interface ApplicationsDeviceGroupsApiUpdateDeviceGroup2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApiupdateDeviceGroup2
     */
    applicationId: number
    /**
     * A unique integer value identifying the device group.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsDeviceGroupsApiupdateDeviceGroup2
     */
    deviceGroupId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsDeviceGroupsApiupdateDeviceGroup2
     */
    versionId: string
    /**
     * 
     * @type DeviceGroupRequest
     * @memberof ApplicationsDeviceGroupsApiupdateDeviceGroup2
     */
    deviceGroupRequest: DeviceGroupRequest
}

export class ObjectApplicationsDeviceGroupsApi {
    private api: ObservableApplicationsDeviceGroupsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationsDeviceGroupsApiRequestFactory, responseProcessor?: ApplicationsDeviceGroupsApiResponseProcessor) {
        this.api = new ObservableApplicationsDeviceGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Device Group in your account.
     * Create an Applications Device Group
     * @param param the request object
     */
    public createDeviceGroupWithHttpInfo(param: ApplicationsDeviceGroupsApiCreateDeviceGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        return this.api.createDeviceGroupWithHttpInfo(param.applicationId, param.deviceGroupRequest,  options).toPromise();
    }

    /**
     * Create a new Device Group in your account.
     * Create an Applications Device Group
     * @param param the request object
     */
    public createDeviceGroup(param: ApplicationsDeviceGroupsApiCreateDeviceGroupRequest, options?: ConfigurationOptions): Promise<DeviceGroupResponse> {
        return this.api.createDeviceGroup(param.applicationId, param.deviceGroupRequest,  options).toPromise();
    }

    /**
     * Create a new Device Group in your account.
     * Create an Applications Device Group
     * @param param the request object
     */
    public createDeviceGroup2WithHttpInfo(param: ApplicationsDeviceGroupsApiCreateDeviceGroup2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        return this.api.createDeviceGroup2WithHttpInfo(param.applicationId, param.versionId, param.deviceGroupRequest,  options).toPromise();
    }

    /**
     * Create a new Device Group in your account.
     * Create an Applications Device Group
     * @param param the request object
     */
    public createDeviceGroup2(param: ApplicationsDeviceGroupsApiCreateDeviceGroup2Request, options?: ConfigurationOptions): Promise<DeviceGroupResponse> {
        return this.api.createDeviceGroup2(param.applicationId, param.versionId, param.deviceGroupRequest,  options).toPromise();
    }

    /**
     * Delete a specific Device Group in your account.
     * Delete an Applications Device Group
     * @param param the request object
     */
    public deleteDeviceGroupWithHttpInfo(param: ApplicationsDeviceGroupsApiDeleteDeviceGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteDeviceGroupWithHttpInfo(param.applicationId, param.deviceGroupId,  options).toPromise();
    }

    /**
     * Delete a specific Device Group in your account.
     * Delete an Applications Device Group
     * @param param the request object
     */
    public deleteDeviceGroup(param: ApplicationsDeviceGroupsApiDeleteDeviceGroupRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteDeviceGroup(param.applicationId, param.deviceGroupId,  options).toPromise();
    }

    /**
     * Delete a specific Device Group in your account.
     * Delete an Applications Device Group
     * @param param the request object
     */
    public deleteDeviceGroup2WithHttpInfo(param: ApplicationsDeviceGroupsApiDeleteDeviceGroup2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteDeviceGroup2WithHttpInfo(param.applicationId, param.deviceGroupId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific Device Group in your account.
     * Delete an Applications Device Group
     * @param param the request object
     */
    public deleteDeviceGroup2(param: ApplicationsDeviceGroupsApiDeleteDeviceGroup2Request, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteDeviceGroup2(param.applicationId, param.deviceGroupId, param.versionId,  options).toPromise();
    }

    /**
     * List all Device Groups owned by your account.
     * List Applications Device Groups
     * @param param the request object
     */
    public listDeviceGroupsWithHttpInfo(param: ApplicationsDeviceGroupsApiListDeviceGroupsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedDeviceGroupList>> {
        return this.api.listDeviceGroupsWithHttpInfo(param.applicationId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search, param.userAgent,  options).toPromise();
    }

    /**
     * List all Device Groups owned by your account.
     * List Applications Device Groups
     * @param param the request object
     */
    public listDeviceGroups(param: ApplicationsDeviceGroupsApiListDeviceGroupsRequest, options?: ConfigurationOptions): Promise<PaginatedDeviceGroupList> {
        return this.api.listDeviceGroups(param.applicationId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search, param.userAgent,  options).toPromise();
    }

    /**
     * List all Device Groups owned by your account.
     * List Applications Device Groups
     * @param param the request object
     */
    public listDeviceGroups2WithHttpInfo(param: ApplicationsDeviceGroupsApiListDeviceGroups2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedDeviceGroupList>> {
        return this.api.listDeviceGroups2WithHttpInfo(param.applicationId, param.versionId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search, param.userAgent,  options).toPromise();
    }

    /**
     * List all Device Groups owned by your account.
     * List Applications Device Groups
     * @param param the request object
     */
    public listDeviceGroups2(param: ApplicationsDeviceGroupsApiListDeviceGroups2Request, options?: ConfigurationOptions): Promise<PaginatedDeviceGroupList> {
        return this.api.listDeviceGroups2(param.applicationId, param.versionId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search, param.userAgent,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Device Group without affecting other fields.
     * Partially update an Applications Device Group
     * @param param the request object
     */
    public partialUpdateDeviceGroupWithHttpInfo(param: ApplicationsDeviceGroupsApiPartialUpdateDeviceGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        return this.api.partialUpdateDeviceGroupWithHttpInfo(param.applicationId, param.deviceGroupId, param.patchedDeviceGroupRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Device Group without affecting other fields.
     * Partially update an Applications Device Group
     * @param param the request object
     */
    public partialUpdateDeviceGroup(param: ApplicationsDeviceGroupsApiPartialUpdateDeviceGroupRequest, options?: ConfigurationOptions): Promise<DeviceGroupResponse> {
        return this.api.partialUpdateDeviceGroup(param.applicationId, param.deviceGroupId, param.patchedDeviceGroupRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Device Group without affecting other fields.
     * Partially update an Applications Device Group
     * @param param the request object
     */
    public partialUpdateDeviceGroup2WithHttpInfo(param: ApplicationsDeviceGroupsApiPartialUpdateDeviceGroup2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        return this.api.partialUpdateDeviceGroup2WithHttpInfo(param.applicationId, param.deviceGroupId, param.versionId, param.patchedDeviceGroupRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Device Group without affecting other fields.
     * Partially update an Applications Device Group
     * @param param the request object
     */
    public partialUpdateDeviceGroup2(param: ApplicationsDeviceGroupsApiPartialUpdateDeviceGroup2Request, options?: ConfigurationOptions): Promise<DeviceGroupResponse> {
        return this.api.partialUpdateDeviceGroup2(param.applicationId, param.deviceGroupId, param.versionId, param.patchedDeviceGroupRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Device Group in your account.
     * Retrieve details of a Device Group
     * @param param the request object
     */
    public retrieveDeviceGroupWithHttpInfo(param: ApplicationsDeviceGroupsApiRetrieveDeviceGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        return this.api.retrieveDeviceGroupWithHttpInfo(param.applicationId, param.deviceGroupId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Device Group in your account.
     * Retrieve details of a Device Group
     * @param param the request object
     */
    public retrieveDeviceGroup(param: ApplicationsDeviceGroupsApiRetrieveDeviceGroupRequest, options?: ConfigurationOptions): Promise<DeviceGroupResponse> {
        return this.api.retrieveDeviceGroup(param.applicationId, param.deviceGroupId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Device Group in your account.
     * Retrieve details of a Device Group
     * @param param the request object
     */
    public retrieveDeviceGroup2WithHttpInfo(param: ApplicationsDeviceGroupsApiRetrieveDeviceGroup2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        return this.api.retrieveDeviceGroup2WithHttpInfo(param.applicationId, param.deviceGroupId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Device Group in your account.
     * Retrieve details of a Device Group
     * @param param the request object
     */
    public retrieveDeviceGroup2(param: ApplicationsDeviceGroupsApiRetrieveDeviceGroup2Request, options?: ConfigurationOptions): Promise<DeviceGroupResponse> {
        return this.api.retrieveDeviceGroup2(param.applicationId, param.deviceGroupId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Device Group. This replaces the entire Device Group with the new data provided.
     * Update an Applications Device Group
     * @param param the request object
     */
    public updateDeviceGroupWithHttpInfo(param: ApplicationsDeviceGroupsApiUpdateDeviceGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        return this.api.updateDeviceGroupWithHttpInfo(param.applicationId, param.deviceGroupId, param.deviceGroupRequest,  options).toPromise();
    }

    /**
     * Update an existing Device Group. This replaces the entire Device Group with the new data provided.
     * Update an Applications Device Group
     * @param param the request object
     */
    public updateDeviceGroup(param: ApplicationsDeviceGroupsApiUpdateDeviceGroupRequest, options?: ConfigurationOptions): Promise<DeviceGroupResponse> {
        return this.api.updateDeviceGroup(param.applicationId, param.deviceGroupId, param.deviceGroupRequest,  options).toPromise();
    }

    /**
     * Update an existing Device Group. This replaces the entire Device Group with the new data provided.
     * Update an Applications Device Group
     * @param param the request object
     */
    public updateDeviceGroup2WithHttpInfo(param: ApplicationsDeviceGroupsApiUpdateDeviceGroup2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        return this.api.updateDeviceGroup2WithHttpInfo(param.applicationId, param.deviceGroupId, param.versionId, param.deviceGroupRequest,  options).toPromise();
    }

    /**
     * Update an existing Device Group. This replaces the entire Device Group with the new data provided.
     * Update an Applications Device Group
     * @param param the request object
     */
    public updateDeviceGroup2(param: ApplicationsDeviceGroupsApiUpdateDeviceGroup2Request, options?: ConfigurationOptions): Promise<DeviceGroupResponse> {
        return this.api.updateDeviceGroup2(param.applicationId, param.deviceGroupId, param.versionId, param.deviceGroupRequest,  options).toPromise();
    }

}

import { ObservableApplicationsFunctionApi } from "./ObservableAPI";
import { ApplicationsFunctionApiRequestFactory, ApplicationsFunctionApiResponseProcessor} from "../apis/ApplicationsFunctionApi";

export interface ApplicationsFunctionApiCreateApplicationFunctionInstanceRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApicreateApplicationFunctionInstance
     */
    applicationId: number
    /**
     * 
     * @type FunctionInstanceRequest
     * @memberof ApplicationsFunctionApicreateApplicationFunctionInstance
     */
    functionInstanceRequest: FunctionInstanceRequest
}

export interface ApplicationsFunctionApiCreateApplicationFunctionInstance2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApicreateApplicationFunctionInstance2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApicreateApplicationFunctionInstance2
     */
    versionId: string
    /**
     * 
     * @type FunctionInstanceRequest
     * @memberof ApplicationsFunctionApicreateApplicationFunctionInstance2
     */
    functionInstanceRequest: FunctionInstanceRequest
}

export interface ApplicationsFunctionApiDeleteApplicationFunctionInstanceRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApideleteApplicationFunctionInstance
     */
    applicationId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApideleteApplicationFunctionInstance
     */
    functionId: number
}

export interface ApplicationsFunctionApiDeleteApplicationFunctionInstance2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApideleteApplicationFunctionInstance2
     */
    applicationId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApideleteApplicationFunctionInstance2
     */
    functionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApideleteApplicationFunctionInstance2
     */
    versionId: string
}

export interface ApplicationsFunctionApiListApplicationFunctionInstancesRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    applicationId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances
     */
    search?: string
}

export interface ApplicationsFunctionApiListApplicationFunctionInstances2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApilistApplicationFunctionInstances2
     */
    search?: string
}

export interface ApplicationsFunctionApiPartialUpdateApplicationFunctionInstanceRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApipartialUpdateApplicationFunctionInstance
     */
    applicationId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApipartialUpdateApplicationFunctionInstance
     */
    functionId: number
    /**
     * 
     * @type PatchedFunctionInstanceRequest
     * @memberof ApplicationsFunctionApipartialUpdateApplicationFunctionInstance
     */
    patchedFunctionInstanceRequest?: PatchedFunctionInstanceRequest
}

export interface ApplicationsFunctionApiPartialUpdateApplicationFunctionInstance2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApipartialUpdateApplicationFunctionInstance2
     */
    applicationId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApipartialUpdateApplicationFunctionInstance2
     */
    functionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApipartialUpdateApplicationFunctionInstance2
     */
    versionId: string
    /**
     * 
     * @type PatchedFunctionInstanceRequest
     * @memberof ApplicationsFunctionApipartialUpdateApplicationFunctionInstance2
     */
    patchedFunctionInstanceRequest?: PatchedFunctionInstanceRequest
}

export interface ApplicationsFunctionApiRetrieveApplicationFunctionInstanceRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApiretrieveApplicationFunctionInstance
     */
    applicationId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApiretrieveApplicationFunctionInstance
     */
    functionId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApiretrieveApplicationFunctionInstance
     */
    fields?: string
}

export interface ApplicationsFunctionApiRetrieveApplicationFunctionInstance2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApiretrieveApplicationFunctionInstance2
     */
    applicationId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApiretrieveApplicationFunctionInstance2
     */
    functionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApiretrieveApplicationFunctionInstance2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApiretrieveApplicationFunctionInstance2
     */
    fields?: string
}

export interface ApplicationsFunctionApiUpdateApplicationFunctionInstanceRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApiupdateApplicationFunctionInstance
     */
    applicationId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApiupdateApplicationFunctionInstance
     */
    functionId: number
    /**
     * 
     * @type FunctionInstanceRequest
     * @memberof ApplicationsFunctionApiupdateApplicationFunctionInstance
     */
    functionInstanceRequest: FunctionInstanceRequest
}

export interface ApplicationsFunctionApiUpdateApplicationFunctionInstance2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApiupdateApplicationFunctionInstance2
     */
    applicationId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsFunctionApiupdateApplicationFunctionInstance2
     */
    functionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsFunctionApiupdateApplicationFunctionInstance2
     */
    versionId: string
    /**
     * 
     * @type FunctionInstanceRequest
     * @memberof ApplicationsFunctionApiupdateApplicationFunctionInstance2
     */
    functionInstanceRequest: FunctionInstanceRequest
}

export class ObjectApplicationsFunctionApi {
    private api: ObservableApplicationsFunctionApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationsFunctionApiRequestFactory, responseProcessor?: ApplicationsFunctionApiResponseProcessor) {
        this.api = new ObservableApplicationsFunctionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Function Instance for a specific Application in your account.
     * Create an Application Function Instance
     * @param param the request object
     */
    public createApplicationFunctionInstanceWithHttpInfo(param: ApplicationsFunctionApiCreateApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        return this.api.createApplicationFunctionInstanceWithHttpInfo(param.applicationId, param.functionInstanceRequest,  options).toPromise();
    }

    /**
     * Create a new Function Instance for a specific Application in your account.
     * Create an Application Function Instance
     * @param param the request object
     */
    public createApplicationFunctionInstance(param: ApplicationsFunctionApiCreateApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<FunctionInstanceResponse> {
        return this.api.createApplicationFunctionInstance(param.applicationId, param.functionInstanceRequest,  options).toPromise();
    }

    /**
     * Create a new Function Instance for a specific Application in your account.
     * Create an Application Function Instance
     * @param param the request object
     */
    public createApplicationFunctionInstance2WithHttpInfo(param: ApplicationsFunctionApiCreateApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        return this.api.createApplicationFunctionInstance2WithHttpInfo(param.applicationId, param.versionId, param.functionInstanceRequest,  options).toPromise();
    }

    /**
     * Create a new Function Instance for a specific Application in your account.
     * Create an Application Function Instance
     * @param param the request object
     */
    public createApplicationFunctionInstance2(param: ApplicationsFunctionApiCreateApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<FunctionInstanceResponse> {
        return this.api.createApplicationFunctionInstance2(param.applicationId, param.versionId, param.functionInstanceRequest,  options).toPromise();
    }

    /**
     * Delete a specific Application Function Instance in your account.
     * Delete an Application Function Instance
     * @param param the request object
     */
    public deleteApplicationFunctionInstanceWithHttpInfo(param: ApplicationsFunctionApiDeleteApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteApplicationFunctionInstanceWithHttpInfo(param.applicationId, param.functionId,  options).toPromise();
    }

    /**
     * Delete a specific Application Function Instance in your account.
     * Delete an Application Function Instance
     * @param param the request object
     */
    public deleteApplicationFunctionInstance(param: ApplicationsFunctionApiDeleteApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteApplicationFunctionInstance(param.applicationId, param.functionId,  options).toPromise();
    }

    /**
     * Delete a specific Application Function Instance in your account.
     * Delete an Application Function Instance
     * @param param the request object
     */
    public deleteApplicationFunctionInstance2WithHttpInfo(param: ApplicationsFunctionApiDeleteApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteApplicationFunctionInstance2WithHttpInfo(param.applicationId, param.functionId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific Application Function Instance in your account.
     * Delete an Application Function Instance
     * @param param the request object
     */
    public deleteApplicationFunctionInstance2(param: ApplicationsFunctionApiDeleteApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteApplicationFunctionInstance2(param.applicationId, param.functionId, param.versionId,  options).toPromise();
    }

    /**
     * List all Function Instances for a specific Application owned by your account.
     * List Function Instances
     * @param param the request object
     */
    public listApplicationFunctionInstancesWithHttpInfo(param: ApplicationsFunctionApiListApplicationFunctionInstancesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFunctionInstanceList>> {
        return this.api.listApplicationFunctionInstancesWithHttpInfo(param.applicationId, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Function Instances for a specific Application owned by your account.
     * List Function Instances
     * @param param the request object
     */
    public listApplicationFunctionInstances(param: ApplicationsFunctionApiListApplicationFunctionInstancesRequest, options?: ConfigurationOptions): Promise<PaginatedFunctionInstanceList> {
        return this.api.listApplicationFunctionInstances(param.applicationId, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Function Instances for a specific Application owned by your account.
     * List Function Instances
     * @param param the request object
     */
    public listApplicationFunctionInstances2WithHttpInfo(param: ApplicationsFunctionApiListApplicationFunctionInstances2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFunctionInstanceList>> {
        return this.api.listApplicationFunctionInstances2WithHttpInfo(param.applicationId, param.versionId, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Function Instances for a specific Application owned by your account.
     * List Function Instances
     * @param param the request object
     */
    public listApplicationFunctionInstances2(param: ApplicationsFunctionApiListApplicationFunctionInstances2Request, options?: ConfigurationOptions): Promise<PaginatedFunctionInstanceList> {
        return this.api.listApplicationFunctionInstances2(param.applicationId, param.versionId, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Function Instance without affecting other fields.
     * Partially update an Application Function Instance
     * @param param the request object
     */
    public partialUpdateApplicationFunctionInstanceWithHttpInfo(param: ApplicationsFunctionApiPartialUpdateApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        return this.api.partialUpdateApplicationFunctionInstanceWithHttpInfo(param.applicationId, param.functionId, param.patchedFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Function Instance without affecting other fields.
     * Partially update an Application Function Instance
     * @param param the request object
     */
    public partialUpdateApplicationFunctionInstance(param: ApplicationsFunctionApiPartialUpdateApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<FunctionInstanceResponse> {
        return this.api.partialUpdateApplicationFunctionInstance(param.applicationId, param.functionId, param.patchedFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Function Instance without affecting other fields.
     * Partially update an Application Function Instance
     * @param param the request object
     */
    public partialUpdateApplicationFunctionInstance2WithHttpInfo(param: ApplicationsFunctionApiPartialUpdateApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        return this.api.partialUpdateApplicationFunctionInstance2WithHttpInfo(param.applicationId, param.functionId, param.versionId, param.patchedFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Function Instance without affecting other fields.
     * Partially update an Application Function Instance
     * @param param the request object
     */
    public partialUpdateApplicationFunctionInstance2(param: ApplicationsFunctionApiPartialUpdateApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<FunctionInstanceResponse> {
        return this.api.partialUpdateApplicationFunctionInstance2(param.applicationId, param.functionId, param.versionId, param.patchedFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Application Function Instance in your account.
     * Retrieve details of an Application Function Instance
     * @param param the request object
     */
    public retrieveApplicationFunctionInstanceWithHttpInfo(param: ApplicationsFunctionApiRetrieveApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        return this.api.retrieveApplicationFunctionInstanceWithHttpInfo(param.applicationId, param.functionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Application Function Instance in your account.
     * Retrieve details of an Application Function Instance
     * @param param the request object
     */
    public retrieveApplicationFunctionInstance(param: ApplicationsFunctionApiRetrieveApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<FunctionInstanceResponse> {
        return this.api.retrieveApplicationFunctionInstance(param.applicationId, param.functionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Application Function Instance in your account.
     * Retrieve details of an Application Function Instance
     * @param param the request object
     */
    public retrieveApplicationFunctionInstance2WithHttpInfo(param: ApplicationsFunctionApiRetrieveApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        return this.api.retrieveApplicationFunctionInstance2WithHttpInfo(param.applicationId, param.functionId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Application Function Instance in your account.
     * Retrieve details of an Application Function Instance
     * @param param the request object
     */
    public retrieveApplicationFunctionInstance2(param: ApplicationsFunctionApiRetrieveApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<FunctionInstanceResponse> {
        return this.api.retrieveApplicationFunctionInstance2(param.applicationId, param.functionId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Application Function Instance
     * @param param the request object
     */
    public updateApplicationFunctionInstanceWithHttpInfo(param: ApplicationsFunctionApiUpdateApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        return this.api.updateApplicationFunctionInstanceWithHttpInfo(param.applicationId, param.functionId, param.functionInstanceRequest,  options).toPromise();
    }

    /**
     * Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Application Function Instance
     * @param param the request object
     */
    public updateApplicationFunctionInstance(param: ApplicationsFunctionApiUpdateApplicationFunctionInstanceRequest, options?: ConfigurationOptions): Promise<FunctionInstanceResponse> {
        return this.api.updateApplicationFunctionInstance(param.applicationId, param.functionId, param.functionInstanceRequest,  options).toPromise();
    }

    /**
     * Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Application Function Instance
     * @param param the request object
     */
    public updateApplicationFunctionInstance2WithHttpInfo(param: ApplicationsFunctionApiUpdateApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        return this.api.updateApplicationFunctionInstance2WithHttpInfo(param.applicationId, param.functionId, param.versionId, param.functionInstanceRequest,  options).toPromise();
    }

    /**
     * Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Application Function Instance
     * @param param the request object
     */
    public updateApplicationFunctionInstance2(param: ApplicationsFunctionApiUpdateApplicationFunctionInstance2Request, options?: ConfigurationOptions): Promise<FunctionInstanceResponse> {
        return this.api.updateApplicationFunctionInstance2(param.applicationId, param.functionId, param.versionId, param.functionInstanceRequest,  options).toPromise();
    }

}

import { ObservableApplicationsRequestRulesApi } from "./ObservableAPI";
import { ApplicationsRequestRulesApiRequestFactory, ApplicationsRequestRulesApiResponseProcessor} from "../apis/ApplicationsRequestRulesApi";

export interface ApplicationsRequestRulesApiCreateApplicationRequestRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApicreateApplicationRequestRule
     */
    applicationId: number
    /**
     * 
     * @type RequestPhaseRuleRequest
     * @memberof ApplicationsRequestRulesApicreateApplicationRequestRule
     */
    requestPhaseRuleRequest: RequestPhaseRuleRequest
}

export interface ApplicationsRequestRulesApiCreateApplicationRequestRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApicreateApplicationRequestRule2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApicreateApplicationRequestRule2
     */
    versionId: string
    /**
     * 
     * @type RequestPhaseRuleRequest
     * @memberof ApplicationsRequestRulesApicreateApplicationRequestRule2
     */
    requestPhaseRuleRequest: RequestPhaseRuleRequest
}

export interface ApplicationsRequestRulesApiDeleteApplicationRequestRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApideleteApplicationRequestRule
     */
    applicationId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApideleteApplicationRequestRule
     */
    requestRuleId: number
}

export interface ApplicationsRequestRulesApiDeleteApplicationRequestRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApideleteApplicationRequestRule2
     */
    applicationId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApideleteApplicationRequestRule2
     */
    requestRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApideleteApplicationRequestRule2
     */
    versionId: string
}

export interface ApplicationsRequestRulesApiListApplicationRequestRulesRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    applicationId: number
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    name?: string
    /**
     * Filter by order (greater than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    orderGte?: number
    /**
     * Filter by order (less than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    orderLte?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules
     */
    search?: string
}

export interface ApplicationsRequestRulesApiListApplicationRequestRules2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    versionId: string
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    name?: string
    /**
     * Filter by order (greater than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    orderGte?: number
    /**
     * Filter by order (less than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    orderLte?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApilistApplicationRequestRules2
     */
    search?: string
}

export interface ApplicationsRequestRulesApiPartialUpdateApplicationRequestRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApipartialUpdateApplicationRequestRule
     */
    applicationId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApipartialUpdateApplicationRequestRule
     */
    requestRuleId: number
    /**
     * 
     * @type PatchedRequestPhaseRule
     * @memberof ApplicationsRequestRulesApipartialUpdateApplicationRequestRule
     */
    patchedRequestPhaseRule?: PatchedRequestPhaseRule
}

export interface ApplicationsRequestRulesApiPartialUpdateApplicationRequestRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApipartialUpdateApplicationRequestRule2
     */
    applicationId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApipartialUpdateApplicationRequestRule2
     */
    requestRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApipartialUpdateApplicationRequestRule2
     */
    versionId: string
    /**
     * 
     * @type PatchedRequestPhaseRule
     * @memberof ApplicationsRequestRulesApipartialUpdateApplicationRequestRule2
     */
    patchedRequestPhaseRule?: PatchedRequestPhaseRule
}

export interface ApplicationsRequestRulesApiRetrieveApplicationRequestRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiretrieveApplicationRequestRule
     */
    applicationId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiretrieveApplicationRequestRule
     */
    requestRuleId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApiretrieveApplicationRequestRule
     */
    fields?: string
}

export interface ApplicationsRequestRulesApiRetrieveApplicationRequestRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiretrieveApplicationRequestRule2
     */
    applicationId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiretrieveApplicationRequestRule2
     */
    requestRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApiretrieveApplicationRequestRule2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApiretrieveApplicationRequestRule2
     */
    fields?: string
}

export interface ApplicationsRequestRulesApiUpdateApplicationRequestRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRule
     */
    applicationId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRule
     */
    requestRuleId: number
    /**
     * 
     * @type RequestPhaseRuleRequest
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRule
     */
    requestPhaseRuleRequest: RequestPhaseRuleRequest
}

export interface ApplicationsRequestRulesApiUpdateApplicationRequestRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRule2
     */
    applicationId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRule2
     */
    requestRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRule2
     */
    versionId: string
    /**
     * 
     * @type RequestPhaseRuleRequest
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRule2
     */
    requestPhaseRuleRequest: RequestPhaseRuleRequest
}

export interface ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrderRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRulesOrder
     */
    applicationId: number
    /**
     * 
     * @type ApplicationRequestPhaseRuleEngineOrder
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRulesOrder
     */
    applicationRequestPhaseRuleEngineOrder: ApplicationRequestPhaseRuleEngineOrder
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRulesOrder
     */
    search?: string
}

export interface ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrder2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRulesOrder2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRulesOrder2
     */
    versionId: string
    /**
     * 
     * @type ApplicationRequestPhaseRuleEngineOrder
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRulesOrder2
     */
    applicationRequestPhaseRuleEngineOrder: ApplicationRequestPhaseRuleEngineOrder
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsRequestRulesApiupdateApplicationRequestRulesOrder2
     */
    search?: string
}

export class ObjectApplicationsRequestRulesApi {
    private api: ObservableApplicationsRequestRulesApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationsRequestRulesApiRequestFactory, responseProcessor?: ApplicationsRequestRulesApiResponseProcessor) {
        this.api = new ObservableApplicationsRequestRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Request Rule
     * @param param the request object
     */
    public createApplicationRequestRuleWithHttpInfo(param: ApplicationsRequestRulesApiCreateApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        return this.api.createApplicationRequestRuleWithHttpInfo(param.applicationId, param.requestPhaseRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Request Rule
     * @param param the request object
     */
    public createApplicationRequestRule(param: ApplicationsRequestRulesApiCreateApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        return this.api.createApplicationRequestRule(param.applicationId, param.requestPhaseRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Request Rule
     * @param param the request object
     */
    public createApplicationRequestRule2WithHttpInfo(param: ApplicationsRequestRulesApiCreateApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        return this.api.createApplicationRequestRule2WithHttpInfo(param.applicationId, param.versionId, param.requestPhaseRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Request Rule
     * @param param the request object
     */
    public createApplicationRequestRule2(param: ApplicationsRequestRulesApiCreateApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        return this.api.createApplicationRequestRule2(param.applicationId, param.versionId, param.requestPhaseRuleRequest,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Request Rule
     * @param param the request object
     */
    public deleteApplicationRequestRuleWithHttpInfo(param: ApplicationsRequestRulesApiDeleteApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteApplicationRequestRuleWithHttpInfo(param.applicationId, param.requestRuleId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Request Rule
     * @param param the request object
     */
    public deleteApplicationRequestRule(param: ApplicationsRequestRulesApiDeleteApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteApplicationRequestRule(param.applicationId, param.requestRuleId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Request Rule
     * @param param the request object
     */
    public deleteApplicationRequestRule2WithHttpInfo(param: ApplicationsRequestRulesApiDeleteApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteApplicationRequestRule2WithHttpInfo(param.applicationId, param.requestRuleId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Request Rule
     * @param param the request object
     */
    public deleteApplicationRequestRule2(param: ApplicationsRequestRulesApiDeleteApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteApplicationRequestRule2(param.applicationId, param.requestRuleId, param.versionId,  options).toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Request Rules
     * @param param the request object
     */
    public listApplicationRequestRulesWithHttpInfo(param: ApplicationsRequestRulesApiListApplicationRequestRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedRequestPhaseRuleList>> {
        return this.api.listApplicationRequestRulesWithHttpInfo(param.applicationId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Request Rules
     * @param param the request object
     */
    public listApplicationRequestRules(param: ApplicationsRequestRulesApiListApplicationRequestRulesRequest, options?: ConfigurationOptions): Promise<PaginatedRequestPhaseRuleList> {
        return this.api.listApplicationRequestRules(param.applicationId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Request Rules
     * @param param the request object
     */
    public listApplicationRequestRules2WithHttpInfo(param: ApplicationsRequestRulesApiListApplicationRequestRules2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedRequestPhaseRuleList>> {
        return this.api.listApplicationRequestRules2WithHttpInfo(param.applicationId, param.versionId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Request Rules
     * @param param the request object
     */
    public listApplicationRequestRules2(param: ApplicationsRequestRulesApiListApplicationRequestRules2Request, options?: ConfigurationOptions): Promise<PaginatedRequestPhaseRuleList> {
        return this.api.listApplicationRequestRules2(param.applicationId, param.versionId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Request Rule
     * @param param the request object
     */
    public partialUpdateApplicationRequestRuleWithHttpInfo(param: ApplicationsRequestRulesApiPartialUpdateApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        return this.api.partialUpdateApplicationRequestRuleWithHttpInfo(param.applicationId, param.requestRuleId, param.patchedRequestPhaseRule,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Request Rule
     * @param param the request object
     */
    public partialUpdateApplicationRequestRule(param: ApplicationsRequestRulesApiPartialUpdateApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        return this.api.partialUpdateApplicationRequestRule(param.applicationId, param.requestRuleId, param.patchedRequestPhaseRule,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Request Rule
     * @param param the request object
     */
    public partialUpdateApplicationRequestRule2WithHttpInfo(param: ApplicationsRequestRulesApiPartialUpdateApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        return this.api.partialUpdateApplicationRequestRule2WithHttpInfo(param.applicationId, param.requestRuleId, param.versionId, param.patchedRequestPhaseRule,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Request Rule
     * @param param the request object
     */
    public partialUpdateApplicationRequestRule2(param: ApplicationsRequestRulesApiPartialUpdateApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        return this.api.partialUpdateApplicationRequestRule2(param.applicationId, param.requestRuleId, param.versionId, param.patchedRequestPhaseRule,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Request Rule
     * @param param the request object
     */
    public retrieveApplicationRequestRuleWithHttpInfo(param: ApplicationsRequestRulesApiRetrieveApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.retrieveApplicationRequestRuleWithHttpInfo(param.applicationId, param.requestRuleId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Request Rule
     * @param param the request object
     */
    public retrieveApplicationRequestRule(param: ApplicationsRequestRulesApiRetrieveApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.retrieveApplicationRequestRule(param.applicationId, param.requestRuleId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Request Rule
     * @param param the request object
     */
    public retrieveApplicationRequestRule2WithHttpInfo(param: ApplicationsRequestRulesApiRetrieveApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.retrieveApplicationRequestRule2WithHttpInfo(param.applicationId, param.requestRuleId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Request Rule
     * @param param the request object
     */
    public retrieveApplicationRequestRule2(param: ApplicationsRequestRulesApiRetrieveApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.retrieveApplicationRequestRule2(param.applicationId, param.requestRuleId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Request Rule
     * @param param the request object
     */
    public updateApplicationRequestRuleWithHttpInfo(param: ApplicationsRequestRulesApiUpdateApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        return this.api.updateApplicationRequestRuleWithHttpInfo(param.applicationId, param.requestRuleId, param.requestPhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Request Rule
     * @param param the request object
     */
    public updateApplicationRequestRule(param: ApplicationsRequestRulesApiUpdateApplicationRequestRuleRequest, options?: ConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        return this.api.updateApplicationRequestRule(param.applicationId, param.requestRuleId, param.requestPhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Request Rule
     * @param param the request object
     */
    public updateApplicationRequestRule2WithHttpInfo(param: ApplicationsRequestRulesApiUpdateApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        return this.api.updateApplicationRequestRule2WithHttpInfo(param.applicationId, param.requestRuleId, param.versionId, param.requestPhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Request Rule
     * @param param the request object
     */
    public updateApplicationRequestRule2(param: ApplicationsRequestRulesApiUpdateApplicationRequestRule2Request, options?: ConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        return this.api.updateApplicationRequestRule2(param.applicationId, param.requestRuleId, param.versionId, param.requestPhaseRuleRequest,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Request Rules
     * @param param the request object
     */
    public updateApplicationRequestRulesOrderWithHttpInfo(param: ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedRequestPhaseRuleList>> {
        return this.api.updateApplicationRequestRulesOrderWithHttpInfo(param.applicationId, param.applicationRequestPhaseRuleEngineOrder, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Request Rules
     * @param param the request object
     */
    public updateApplicationRequestRulesOrder(param: ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrderRequest, options?: ConfigurationOptions): Promise<PaginatedRequestPhaseRuleList> {
        return this.api.updateApplicationRequestRulesOrder(param.applicationId, param.applicationRequestPhaseRuleEngineOrder, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Request Rules
     * @param param the request object
     */
    public updateApplicationRequestRulesOrder2WithHttpInfo(param: ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrder2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedRequestPhaseRuleList>> {
        return this.api.updateApplicationRequestRulesOrder2WithHttpInfo(param.applicationId, param.versionId, param.applicationRequestPhaseRuleEngineOrder, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Request Rules
     * @param param the request object
     */
    public updateApplicationRequestRulesOrder2(param: ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrder2Request, options?: ConfigurationOptions): Promise<PaginatedRequestPhaseRuleList> {
        return this.api.updateApplicationRequestRulesOrder2(param.applicationId, param.versionId, param.applicationRequestPhaseRuleEngineOrder, param.search,  options).toPromise();
    }

}

import { ObservableApplicationsResponseRulesApi } from "./ObservableAPI";
import { ApplicationsResponseRulesApiRequestFactory, ApplicationsResponseRulesApiResponseProcessor} from "../apis/ApplicationsResponseRulesApi";

export interface ApplicationsResponseRulesApiCreateApplicationResponseRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApicreateApplicationResponseRule
     */
    applicationId: number
    /**
     * 
     * @type ResponsePhaseRuleRequest
     * @memberof ApplicationsResponseRulesApicreateApplicationResponseRule
     */
    responsePhaseRuleRequest: ResponsePhaseRuleRequest
}

export interface ApplicationsResponseRulesApiCreateApplicationResponseRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApicreateApplicationResponseRule2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApicreateApplicationResponseRule2
     */
    versionId: string
    /**
     * 
     * @type ResponsePhaseRuleRequest
     * @memberof ApplicationsResponseRulesApicreateApplicationResponseRule2
     */
    responsePhaseRuleRequest: ResponsePhaseRuleRequest
}

export interface ApplicationsResponseRulesApiDeleteApplicationResponseRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApideleteApplicationResponseRule
     */
    applicationId: number
    /**
     * A unique integer value identifying the response rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApideleteApplicationResponseRule
     */
    responseRuleId: number
}

export interface ApplicationsResponseRulesApiDeleteApplicationResponseRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApideleteApplicationResponseRule2
     */
    applicationId: number
    /**
     * A unique integer value identifying the response rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApideleteApplicationResponseRule2
     */
    responseRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApideleteApplicationResponseRule2
     */
    versionId: string
}

export interface ApplicationsResponseRulesApiListApplicationResponseRulesRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    applicationId: number
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    name?: string
    /**
     * Filter by order (greater than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    orderGte?: number
    /**
     * Filter by order (less than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    orderLte?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules
     */
    search?: string
}

export interface ApplicationsResponseRulesApiListApplicationResponseRules2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    versionId: string
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    name?: string
    /**
     * Filter by order (greater than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    orderGte?: number
    /**
     * Filter by order (less than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    orderLte?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApilistApplicationResponseRules2
     */
    search?: string
}

export interface ApplicationsResponseRulesApiPartialUpdateApplicationResponseRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApipartialUpdateApplicationResponseRule
     */
    applicationId: number
    /**
     * A unique integer value identifying the response rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApipartialUpdateApplicationResponseRule
     */
    responseRuleId: number
    /**
     * 
     * @type PatchedResponsePhaseRuleRequest
     * @memberof ApplicationsResponseRulesApipartialUpdateApplicationResponseRule
     */
    patchedResponsePhaseRuleRequest?: PatchedResponsePhaseRuleRequest
}

export interface ApplicationsResponseRulesApiPartialUpdateApplicationResponseRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApipartialUpdateApplicationResponseRule2
     */
    applicationId: number
    /**
     * A unique integer value identifying the response rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApipartialUpdateApplicationResponseRule2
     */
    responseRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApipartialUpdateApplicationResponseRule2
     */
    versionId: string
    /**
     * 
     * @type PatchedResponsePhaseRuleRequest
     * @memberof ApplicationsResponseRulesApipartialUpdateApplicationResponseRule2
     */
    patchedResponsePhaseRuleRequest?: PatchedResponsePhaseRuleRequest
}

export interface ApplicationsResponseRulesApiRetrieveApplicationResponseRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiretrieveApplicationResponseRule
     */
    applicationId: number
    /**
     * A unique integer value identifying the response rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiretrieveApplicationResponseRule
     */
    responseRuleId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApiretrieveApplicationResponseRule
     */
    fields?: string
}

export interface ApplicationsResponseRulesApiRetrieveApplicationResponseRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiretrieveApplicationResponseRule2
     */
    applicationId: number
    /**
     * A unique integer value identifying the response rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiretrieveApplicationResponseRule2
     */
    responseRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApiretrieveApplicationResponseRule2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApiretrieveApplicationResponseRule2
     */
    fields?: string
}

export interface ApplicationsResponseRulesApiUpdateApplicationResponseRuleRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRule
     */
    applicationId: number
    /**
     * A unique integer value identifying the response rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRule
     */
    responseRuleId: number
    /**
     * 
     * @type ResponsePhaseRuleRequest
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRule
     */
    responsePhaseRuleRequest: ResponsePhaseRuleRequest
}

export interface ApplicationsResponseRulesApiUpdateApplicationResponseRule2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRule2
     */
    applicationId: number
    /**
     * A unique integer value identifying the response rule.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRule2
     */
    responseRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRule2
     */
    versionId: string
    /**
     * 
     * @type ResponsePhaseRuleRequest
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRule2
     */
    responsePhaseRuleRequest: ResponsePhaseRuleRequest
}

export interface ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrderRequest {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRulesOrder
     */
    applicationId: number
    /**
     * 
     * @type ApplicationResponsePhaseRuleEngineOrderRequest
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRulesOrder
     */
    applicationResponsePhaseRuleEngineOrderRequest: ApplicationResponsePhaseRuleEngineOrderRequest
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRulesOrder
     */
    search?: string
}

export interface ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrder2Request {
    /**
     * A unique integer value identifying the application.
     * Defaults to: undefined
     * @type number
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRulesOrder2
     */
    applicationId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRulesOrder2
     */
    versionId: string
    /**
     * 
     * @type ApplicationResponsePhaseRuleEngineOrderRequest
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRulesOrder2
     */
    applicationResponsePhaseRuleEngineOrderRequest: ApplicationResponsePhaseRuleEngineOrderRequest
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ApplicationsResponseRulesApiupdateApplicationResponseRulesOrder2
     */
    search?: string
}

export class ObjectApplicationsResponseRulesApi {
    private api: ObservableApplicationsResponseRulesApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationsResponseRulesApiRequestFactory, responseProcessor?: ApplicationsResponseRulesApiResponseProcessor) {
        this.api = new ObservableApplicationsResponseRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Response Rule
     * @param param the request object
     */
    public createApplicationResponseRuleWithHttpInfo(param: ApplicationsResponseRulesApiCreateApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.createApplicationResponseRuleWithHttpInfo(param.applicationId, param.responsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Response Rule
     * @param param the request object
     */
    public createApplicationResponseRule(param: ApplicationsResponseRulesApiCreateApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.createApplicationResponseRule(param.applicationId, param.responsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Response Rule
     * @param param the request object
     */
    public createApplicationResponseRule2WithHttpInfo(param: ApplicationsResponseRulesApiCreateApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.createApplicationResponseRule2WithHttpInfo(param.applicationId, param.versionId, param.responsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Response Rule
     * @param param the request object
     */
    public createApplicationResponseRule2(param: ApplicationsResponseRulesApiCreateApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.createApplicationResponseRule2(param.applicationId, param.versionId, param.responsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Response Rule
     * @param param the request object
     */
    public deleteApplicationResponseRuleWithHttpInfo(param: ApplicationsResponseRulesApiDeleteApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteApplicationResponseRuleWithHttpInfo(param.applicationId, param.responseRuleId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Response Rule
     * @param param the request object
     */
    public deleteApplicationResponseRule(param: ApplicationsResponseRulesApiDeleteApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteApplicationResponseRule(param.applicationId, param.responseRuleId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Response Rule
     * @param param the request object
     */
    public deleteApplicationResponseRule2WithHttpInfo(param: ApplicationsResponseRulesApiDeleteApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteApplicationResponseRule2WithHttpInfo(param.applicationId, param.responseRuleId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Response Rule
     * @param param the request object
     */
    public deleteApplicationResponseRule2(param: ApplicationsResponseRulesApiDeleteApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteApplicationResponseRule2(param.applicationId, param.responseRuleId, param.versionId,  options).toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Response Rules
     * @param param the request object
     */
    public listApplicationResponseRulesWithHttpInfo(param: ApplicationsResponseRulesApiListApplicationResponseRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedResponsePhaseRuleList>> {
        return this.api.listApplicationResponseRulesWithHttpInfo(param.applicationId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Response Rules
     * @param param the request object
     */
    public listApplicationResponseRules(param: ApplicationsResponseRulesApiListApplicationResponseRulesRequest, options?: ConfigurationOptions): Promise<PaginatedResponsePhaseRuleList> {
        return this.api.listApplicationResponseRules(param.applicationId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Response Rules
     * @param param the request object
     */
    public listApplicationResponseRules2WithHttpInfo(param: ApplicationsResponseRulesApiListApplicationResponseRules2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedResponsePhaseRuleList>> {
        return this.api.listApplicationResponseRules2WithHttpInfo(param.applicationId, param.versionId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Response Rules
     * @param param the request object
     */
    public listApplicationResponseRules2(param: ApplicationsResponseRulesApiListApplicationResponseRules2Request, options?: ConfigurationOptions): Promise<PaginatedResponsePhaseRuleList> {
        return this.api.listApplicationResponseRules2(param.applicationId, param.versionId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Response Rule
     * @param param the request object
     */
    public partialUpdateApplicationResponseRuleWithHttpInfo(param: ApplicationsResponseRulesApiPartialUpdateApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.partialUpdateApplicationResponseRuleWithHttpInfo(param.applicationId, param.responseRuleId, param.patchedResponsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Response Rule
     * @param param the request object
     */
    public partialUpdateApplicationResponseRule(param: ApplicationsResponseRulesApiPartialUpdateApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.partialUpdateApplicationResponseRule(param.applicationId, param.responseRuleId, param.patchedResponsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Response Rule
     * @param param the request object
     */
    public partialUpdateApplicationResponseRule2WithHttpInfo(param: ApplicationsResponseRulesApiPartialUpdateApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.partialUpdateApplicationResponseRule2WithHttpInfo(param.applicationId, param.responseRuleId, param.versionId, param.patchedResponsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Response Rule
     * @param param the request object
     */
    public partialUpdateApplicationResponseRule2(param: ApplicationsResponseRulesApiPartialUpdateApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.partialUpdateApplicationResponseRule2(param.applicationId, param.responseRuleId, param.versionId, param.patchedResponsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Response Rule
     * @param param the request object
     */
    public retrieveApplicationResponseRuleWithHttpInfo(param: ApplicationsResponseRulesApiRetrieveApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.retrieveApplicationResponseRuleWithHttpInfo(param.applicationId, param.responseRuleId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Response Rule
     * @param param the request object
     */
    public retrieveApplicationResponseRule(param: ApplicationsResponseRulesApiRetrieveApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.retrieveApplicationResponseRule(param.applicationId, param.responseRuleId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Response Rule
     * @param param the request object
     */
    public retrieveApplicationResponseRule2WithHttpInfo(param: ApplicationsResponseRulesApiRetrieveApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.retrieveApplicationResponseRule2WithHttpInfo(param.applicationId, param.responseRuleId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Response Rule
     * @param param the request object
     */
    public retrieveApplicationResponseRule2(param: ApplicationsResponseRulesApiRetrieveApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.retrieveApplicationResponseRule2(param.applicationId, param.responseRuleId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Response Rule
     * @param param the request object
     */
    public updateApplicationResponseRuleWithHttpInfo(param: ApplicationsResponseRulesApiUpdateApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.updateApplicationResponseRuleWithHttpInfo(param.applicationId, param.responseRuleId, param.responsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Response Rule
     * @param param the request object
     */
    public updateApplicationResponseRule(param: ApplicationsResponseRulesApiUpdateApplicationResponseRuleRequest, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.updateApplicationResponseRule(param.applicationId, param.responseRuleId, param.responsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Response Rule
     * @param param the request object
     */
    public updateApplicationResponseRule2WithHttpInfo(param: ApplicationsResponseRulesApiUpdateApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        return this.api.updateApplicationResponseRule2WithHttpInfo(param.applicationId, param.responseRuleId, param.versionId, param.responsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Response Rule
     * @param param the request object
     */
    public updateApplicationResponseRule2(param: ApplicationsResponseRulesApiUpdateApplicationResponseRule2Request, options?: ConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        return this.api.updateApplicationResponseRule2(param.applicationId, param.responseRuleId, param.versionId, param.responsePhaseRuleRequest,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Response Rules
     * @param param the request object
     */
    public updateApplicationResponseRulesOrderWithHttpInfo(param: ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedResponsePhaseRuleList>> {
        return this.api.updateApplicationResponseRulesOrderWithHttpInfo(param.applicationId, param.applicationResponsePhaseRuleEngineOrderRequest, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Response Rules
     * @param param the request object
     */
    public updateApplicationResponseRulesOrder(param: ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrderRequest, options?: ConfigurationOptions): Promise<PaginatedResponsePhaseRuleList> {
        return this.api.updateApplicationResponseRulesOrder(param.applicationId, param.applicationResponsePhaseRuleEngineOrderRequest, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Response Rules
     * @param param the request object
     */
    public updateApplicationResponseRulesOrder2WithHttpInfo(param: ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrder2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedResponsePhaseRuleList>> {
        return this.api.updateApplicationResponseRulesOrder2WithHttpInfo(param.applicationId, param.versionId, param.applicationResponsePhaseRuleEngineOrderRequest, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Response Rules
     * @param param the request object
     */
    public updateApplicationResponseRulesOrder2(param: ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrder2Request, options?: ConfigurationOptions): Promise<PaginatedResponsePhaseRuleList> {
        return this.api.updateApplicationResponseRulesOrder2(param.applicationId, param.versionId, param.applicationResponsePhaseRuleEngineOrderRequest, param.search,  options).toPromise();
    }

}

import { ObservableAuthLoginApi } from "./ObservableAPI";
import { AuthLoginApiRequestFactory, AuthLoginApiResponseProcessor} from "../apis/AuthLoginApi";

export interface AuthLoginApiAuthUserLoginRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AuthLoginApiauthUserLogin
     */
    loginRequest: LoginRequest
}

export interface AuthLoginApiAuthUserLoginMethodRequest {
    /**
     * Email address of the user
     * Defaults to: undefined
     * @type string
     * @memberof AuthLoginApiauthUserLoginMethod
     */
    email?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AuthLoginApiauthUserLoginMethod
     */
    fields?: string
}

export interface AuthLoginApiTotpVerifyRequest {
    /**
     * 
     * @type TOTPVerificationRequest
     * @memberof AuthLoginApitotpVerify
     */
    tOTPVerificationRequest: TOTPVerificationRequest
}

export class ObjectAuthLoginApi {
    private api: ObservableAuthLoginApi

    public constructor(configuration: Configuration, requestFactory?: AuthLoginApiRequestFactory, responseProcessor?: AuthLoginApiResponseProcessor) {
        this.api = new ObservableAuthLoginApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint performs user authentication and issues the user\'s JWT tokens. The response depends on whether multi-factor authentication (MFA) is enabled for the user:  - If the user does not have MFA enabled, the API returns a TokenPair object containing the access_token and refresh_token, allowing immediate authentication.  - If the user has MFA enabled, the response returns an MFAToken object. This temporary token must be used in the MFA verification endpoint to complete authentication. After successful verification of the second factor, the TokenPair is issued.
     * User Login – Generate JWT Tokens
     * @param param the request object
     */
    public authUserLoginWithHttpInfo(param: AuthLoginApiAuthUserLoginRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseLogin>> {
        return this.api.authUserLoginWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * This endpoint performs user authentication and issues the user\'s JWT tokens. The response depends on whether multi-factor authentication (MFA) is enabled for the user:  - If the user does not have MFA enabled, the API returns a TokenPair object containing the access_token and refresh_token, allowing immediate authentication.  - If the user has MFA enabled, the response returns an MFAToken object. This temporary token must be used in the MFA verification endpoint to complete authentication. After successful verification of the second factor, the TokenPair is issued.
     * User Login – Generate JWT Tokens
     * @param param the request object
     */
    public authUserLogin(param: AuthLoginApiAuthUserLoginRequest, options?: ConfigurationOptions): Promise<ResponseLogin> {
        return this.api.authUserLogin(param.loginRequest,  options).toPromise();
    }

    /**
     * Returns the login type configured for the user. This indicates whether the user authenticates directly via Azion credentials (login) or via a federated Identity Provider (federated) linked to their account. This endpoint allows clients to determine whether to proceed with Azion\'s native login flow or redirect the user to the Identity Provider (IdP) for authentication.
     * Check User Authentication Method
     * @param param the request object
     */
    public authUserLoginMethodWithHttpInfo(param: AuthLoginApiAuthUserLoginMethodRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserLoginMethodResponse>> {
        return this.api.authUserLoginMethodWithHttpInfo(param.email, param.fields,  options).toPromise();
    }

    /**
     * Returns the login type configured for the user. This indicates whether the user authenticates directly via Azion credentials (login) or via a federated Identity Provider (federated) linked to their account. This endpoint allows clients to determine whether to proceed with Azion\'s native login flow or redirect the user to the Identity Provider (IdP) for authentication.
     * Check User Authentication Method
     * @param param the request object
     */
    public authUserLoginMethod(param: AuthLoginApiAuthUserLoginMethodRequest = {}, options?: ConfigurationOptions): Promise<UserLoginMethodResponse> {
        return this.api.authUserLoginMethod(param.email, param.fields,  options).toPromise();
    }

    /**
     * Retrieves JWT access and refresh tokens, via a POST request with jwt mfa token as auth + code.
     * Retrieve user JWT tokens by MFA auth
     * @param param the request object
     */
    public totpVerifyWithHttpInfo(param: AuthLoginApiTotpVerifyRequest, options?: ConfigurationOptions): Promise<HttpInfo<TokenPairResponse>> {
        return this.api.totpVerifyWithHttpInfo(param.tOTPVerificationRequest,  options).toPromise();
    }

    /**
     * Retrieves JWT access and refresh tokens, via a POST request with jwt mfa token as auth + code.
     * Retrieve user JWT tokens by MFA auth
     * @param param the request object
     */
    public totpVerify(param: AuthLoginApiTotpVerifyRequest, options?: ConfigurationOptions): Promise<TokenPairResponse> {
        return this.api.totpVerify(param.tOTPVerificationRequest,  options).toPromise();
    }

}

import { ObservableAuthMFATOTPDeviceApi } from "./ObservableAPI";
import { AuthMFATOTPDeviceApiRequestFactory, AuthMFATOTPDeviceApiResponseProcessor} from "../apis/AuthMFATOTPDeviceApi";

export interface AuthMFATOTPDeviceApiCreateTotpDeviceRequest {
    /**
     * 
     * @type any
     * @memberof AuthMFATOTPDeviceApicreateTotpDevice
     */
    body?: any
}

export interface AuthMFATOTPDeviceApiDeleteTotpDeviceRequest {
    /**
     * A unique integer value identifying the TOTP device.
     * Defaults to: undefined
     * @type number
     * @memberof AuthMFATOTPDeviceApideleteTotpDevice
     */
    deviceId: number
}

export interface AuthMFATOTPDeviceApiListTotpDevicesRequest {
    /**
     * Filter by confirmed status.
     * Defaults to: undefined
     * @type boolean
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    confirmed?: boolean
    /**
     * Filter by user\&#39;s email (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    email?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    id?: string
    /**
     * Filter by user\&#39;s first name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof AuthMFATOTPDeviceApilistTotpDevices
     */
    search?: string
}

export class ObjectAuthMFATOTPDeviceApi {
    private api: ObservableAuthMFATOTPDeviceApi

    public constructor(configuration: Configuration, requestFactory?: AuthMFATOTPDeviceApiRequestFactory, responseProcessor?: AuthMFATOTPDeviceApiResponseProcessor) {
        this.api = new ObservableAuthMFATOTPDeviceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new TOTP device for your account.
     * Create a TOTP device
     * @param param the request object
     */
    public createTotpDeviceWithHttpInfo(param: AuthMFATOTPDeviceApiCreateTotpDeviceRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TOTPDeviceResponse>> {
        return this.api.createTotpDeviceWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a new TOTP device for your account.
     * Create a TOTP device
     * @param param the request object
     */
    public createTotpDevice(param: AuthMFATOTPDeviceApiCreateTotpDeviceRequest = {}, options?: ConfigurationOptions): Promise<TOTPDeviceResponse> {
        return this.api.createTotpDevice(param.body,  options).toPromise();
    }

    /**
     * Delete a specific TOTP device from your account or descendant account.
     * Delete a TOTP device
     * @param param the request object
     */
    public deleteTotpDeviceWithHttpInfo(param: AuthMFATOTPDeviceApiDeleteTotpDeviceRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteTotpDeviceWithHttpInfo(param.deviceId,  options).toPromise();
    }

    /**
     * Delete a specific TOTP device from your account or descendant account.
     * Delete a TOTP device
     * @param param the request object
     */
    public deleteTotpDevice(param: AuthMFATOTPDeviceApiDeleteTotpDeviceRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteTotpDevice(param.deviceId,  options).toPromise();
    }

    /**
     * List all totp devices for user account and descendant accounts.
     * List of TOTP devices
     * @param param the request object
     */
    public listTotpDevicesWithHttpInfo(param: AuthMFATOTPDeviceApiListTotpDevicesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedTOTPDeviceList>> {
        return this.api.listTotpDevicesWithHttpInfo(param.confirmed, param.email, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all totp devices for user account and descendant accounts.
     * List of TOTP devices
     * @param param the request object
     */
    public listTotpDevices(param: AuthMFATOTPDeviceApiListTotpDevicesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedTOTPDeviceList> {
        return this.api.listTotpDevices(param.confirmed, param.email, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

}

import { ObservableAuthRefreshAccessTokenApi } from "./ObservableAPI";
import { AuthRefreshAccessTokenApiRequestFactory, AuthRefreshAccessTokenApiResponseProcessor} from "../apis/AuthRefreshAccessTokenApi";

export interface AuthRefreshAccessTokenApiAuthUserRefreshTokenRequest {
    /**
     * 
     * @type TokenRequest
     * @memberof AuthRefreshAccessTokenApiauthUserRefreshToken
     */
    tokenRequest?: TokenRequest
}

export class ObjectAuthRefreshAccessTokenApi {
    private api: ObservableAuthRefreshAccessTokenApi

    public constructor(configuration: Configuration, requestFactory?: AuthRefreshAccessTokenApiRequestFactory, responseProcessor?: AuthRefreshAccessTokenApiResponseProcessor) {
        this.api = new ObservableAuthRefreshAccessTokenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Refresh JWT access token, via a POST request.
     * Refresh user JWT access token
     * @param param the request object
     */
    public authUserRefreshTokenWithHttpInfo(param: AuthRefreshAccessTokenApiAuthUserRefreshTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TokenResponse>> {
        return this.api.authUserRefreshTokenWithHttpInfo(param.tokenRequest,  options).toPromise();
    }

    /**
     * Refresh JWT access token, via a POST request.
     * Refresh user JWT access token
     * @param param the request object
     */
    public authUserRefreshToken(param: AuthRefreshAccessTokenApiAuthUserRefreshTokenRequest = {}, options?: ConfigurationOptions): Promise<TokenResponse> {
        return this.api.authUserRefreshToken(param.tokenRequest,  options).toPromise();
    }

}

import { ObservableAuthRevokeApi } from "./ObservableAPI";
import { AuthRevokeApiRequestFactory, AuthRevokeApiResponseProcessor} from "../apis/AuthRevokeApi";

export interface AuthRevokeApiAuthUserRevokeRequest {
    /**
     * 
     * @type any
     * @memberof AuthRevokeApiauthUserRevoke
     */
    body?: any
}

export class ObjectAuthRevokeApi {
    private api: ObservableAuthRevokeApi

    public constructor(configuration: Configuration, requestFactory?: AuthRevokeApiRequestFactory, responseProcessor?: AuthRevokeApiResponseProcessor) {
        this.api = new ObservableAuthRevokeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Revoke refresh token via a POST request.
     * Revoke user JWT refresh token
     * @param param the request object
     */
    public authUserRevokeWithHttpInfo(param: AuthRevokeApiAuthUserRevokeRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<StateExecutedResponse>> {
        return this.api.authUserRevokeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Revoke refresh token via a POST request.
     * Revoke user JWT refresh token
     * @param param the request object
     */
    public authUserRevoke(param: AuthRevokeApiAuthUserRevokeRequest = {}, options?: ConfigurationOptions): Promise<StateExecutedResponse> {
        return this.api.authUserRevoke(param.body,  options).toPromise();
    }

}

import { ObservableBillingInvoicesApi } from "./ObservableAPI";
import { BillingInvoicesApiRequestFactory, BillingInvoicesApiResponseProcessor} from "../apis/BillingInvoicesApi";

export interface BillingInvoicesApiRetrieveInvoiceRequest {
    /**
     * Invoice period in MM-YYYY format (e.g., 01-2024 for January 2024)
     * Defaults to: undefined
     * @type string
     * @memberof BillingInvoicesApiretrieveInvoice
     */
    period: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof BillingInvoicesApiretrieveInvoice
     */
    fields?: string
}

export class ObjectBillingInvoicesApi {
    private api: ObservableBillingInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: BillingInvoicesApiRequestFactory, responseProcessor?: BillingInvoicesApiResponseProcessor) {
        this.api = new ObservableBillingInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve invoice data for a specific period.
     * Retrieve details of an invoice
     * @param param the request object
     */
    public retrieveInvoiceWithHttpInfo(param: BillingInvoicesApiRetrieveInvoiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.retrieveInvoiceWithHttpInfo(param.period, param.fields,  options).toPromise();
    }

    /**
     * Retrieve invoice data for a specific period.
     * Retrieve details of an invoice
     * @param param the request object
     */
    public retrieveInvoice(param: BillingInvoicesApiRetrieveInvoiceRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.retrieveInvoice(param.period, param.fields,  options).toPromise();
    }

}

import { ObservableBillingPaymentsApi } from "./ObservableAPI";
import { BillingPaymentsApiRequestFactory, BillingPaymentsApiResponseProcessor} from "../apis/BillingPaymentsApi";

export interface BillingPaymentsApiAddCreditsRequest {
    /**
     * 
     * @type CreditRequest
     * @memberof BillingPaymentsApiaddCredits
     */
    creditRequest: CreditRequest
}

export interface BillingPaymentsApiCreateCreditCardRequest {
    /**
     * 
     * @type PaymentMethodRequest
     * @memberof BillingPaymentsApicreateCreditCard
     */
    paymentMethodRequest: PaymentMethodRequest
}

export interface BillingPaymentsApiDestroyCreditCardRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApidestroyCreditCard
     */
    id: string
}

export interface BillingPaymentsApiListCreditCardsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApilistCreditCards
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApilistCreditCards
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof BillingPaymentsApilistCreditCards
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof BillingPaymentsApilistCreditCards
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApilistCreditCards
     */
    search?: string
}

export interface BillingPaymentsApiListPaymentHistoryRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApilistPaymentHistory
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApilistPaymentHistory
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof BillingPaymentsApilistPaymentHistory
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof BillingPaymentsApilistPaymentHistory
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApilistPaymentHistory
     */
    search?: string
}

export interface BillingPaymentsApiPartialUpdateCreditCardRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApipartialUpdateCreditCard
     */
    id: string
    /**
     * 
     * @type PatchedPartialUpdateRequest
     * @memberof BillingPaymentsApipartialUpdateCreditCard
     */
    patchedPartialUpdateRequest?: PatchedPartialUpdateRequest
}

export interface BillingPaymentsApiRetrieveCreditCardRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApiretrieveCreditCard
     */
    id: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof BillingPaymentsApiretrieveCreditCard
     */
    fields?: string
}

export class ObjectBillingPaymentsApi {
    private api: ObservableBillingPaymentsApi

    public constructor(configuration: Configuration, requestFactory?: BillingPaymentsApiRequestFactory, responseProcessor?: BillingPaymentsApiResponseProcessor) {
        this.api = new ObservableBillingPaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add credit into the default credit card in US Dollars.
     * Add credits using the default credit card
     * @param param the request object
     */
    public addCreditsWithHttpInfo(param: BillingPaymentsApiAddCreditsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreditResponse>> {
        return this.api.addCreditsWithHttpInfo(param.creditRequest,  options).toPromise();
    }

    /**
     * Add credit into the default credit card in US Dollars.
     * Add credits using the default credit card
     * @param param the request object
     */
    public addCredits(param: BillingPaymentsApiAddCreditsRequest, options?: ConfigurationOptions): Promise<CreditResponse> {
        return this.api.addCredits(param.creditRequest,  options).toPromise();
    }

    /**
     * Create a new credit card for your account.
     * Create a new credit card
     * @param param the request object
     */
    public createCreditCardWithHttpInfo(param: BillingPaymentsApiCreateCreditCardRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaymentMethodResponse>> {
        return this.api.createCreditCardWithHttpInfo(param.paymentMethodRequest,  options).toPromise();
    }

    /**
     * Create a new credit card for your account.
     * Create a new credit card
     * @param param the request object
     */
    public createCreditCard(param: BillingPaymentsApiCreateCreditCardRequest, options?: ConfigurationOptions): Promise<PaymentMethodResponse> {
        return this.api.createCreditCard(param.paymentMethodRequest,  options).toPromise();
    }

    /**
     * Destruction of a specific credit card in your account.
     * Destroy a credit card
     * @param param the request object
     */
    public destroyCreditCardWithHttpInfo(param: BillingPaymentsApiDestroyCreditCardRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.destroyCreditCardWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Destruction of a specific credit card in your account.
     * Destroy a credit card
     * @param param the request object
     */
    public destroyCreditCard(param: BillingPaymentsApiDestroyCreditCardRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.destroyCreditCard(param.id,  options).toPromise();
    }

    /**
     * List all credit cards owned by your account.
     * List of the credit cards
     * @param param the request object
     */
    public listCreditCardsWithHttpInfo(param: BillingPaymentsApiListCreditCardsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedPaymentMethodResponseList>> {
        return this.api.listCreditCardsWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all credit cards owned by your account.
     * List of the credit cards
     * @param param the request object
     */
    public listCreditCards(param: BillingPaymentsApiListCreditCardsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedPaymentMethodResponseList> {
        return this.api.listCreditCards(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all details of the payment history.
     * List of the payment history
     * @param param the request object
     */
    public listPaymentHistoryWithHttpInfo(param: BillingPaymentsApiListPaymentHistoryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedPaymentHistoryList>> {
        return this.api.listPaymentHistoryWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all details of the payment history.
     * List of the payment history
     * @param param the request object
     */
    public listPaymentHistory(param: BillingPaymentsApiListPaymentHistoryRequest = {}, options?: ConfigurationOptions): Promise<PaginatedPaymentHistoryList> {
        return this.api.listPaymentHistory(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update the field \'is_default\' to enable of an existing credit card. Only the field \'is_default\' is editable for an existing card.
     * Partially update a credit card
     * @param param the request object
     */
    public partialUpdateCreditCardWithHttpInfo(param: BillingPaymentsApiPartialUpdateCreditCardRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaymentMethodResponse>> {
        return this.api.partialUpdateCreditCardWithHttpInfo(param.id, param.patchedPartialUpdateRequest,  options).toPromise();
    }

    /**
     * Update the field \'is_default\' to enable of an existing credit card. Only the field \'is_default\' is editable for an existing card.
     * Partially update a credit card
     * @param param the request object
     */
    public partialUpdateCreditCard(param: BillingPaymentsApiPartialUpdateCreditCardRequest, options?: ConfigurationOptions): Promise<PaymentMethodResponse> {
        return this.api.partialUpdateCreditCard(param.id, param.patchedPartialUpdateRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific credit card in your account.
     * Retrieve details from a credit card
     * @param param the request object
     */
    public retrieveCreditCardWithHttpInfo(param: BillingPaymentsApiRetrieveCreditCardRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaymentMethodResponse>> {
        return this.api.retrieveCreditCardWithHttpInfo(param.id, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific credit card in your account.
     * Retrieve details from a credit card
     * @param param the request object
     */
    public retrieveCreditCard(param: BillingPaymentsApiRetrieveCreditCardRequest, options?: ConfigurationOptions): Promise<PaymentMethodResponse> {
        return this.api.retrieveCreditCard(param.id, param.fields,  options).toPromise();
    }

}

import { ObservableConnectorVersionsApi } from "./ObservableAPI";
import { ConnectorVersionsApiRequestFactory, ConnectorVersionsApiResponseProcessor} from "../apis/ConnectorVersionsApi";

export interface ConnectorVersionsApiArchiveConnectorVersionRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApiarchiveConnectorVersion
     */
    connectorId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApiarchiveConnectorVersion
     */
    versionId: string
    /**
     * 
     * @type VersionArchiveRequest
     * @memberof ConnectorVersionsApiarchiveConnectorVersion
     */
    versionArchiveRequest?: VersionArchiveRequest
}

export interface ConnectorVersionsApiBuildConnectorVersionRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApibuildConnectorVersion
     */
    connectorId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApibuildConnectorVersion
     */
    versionId: string
    /**
     * 
     * @type VersionBuildRequest
     * @memberof ConnectorVersionsApibuildConnectorVersion
     */
    versionBuildRequest?: VersionBuildRequest
}

export interface ConnectorVersionsApiCancelConnectorVersionBuildRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApicancelConnectorVersionBuild
     */
    connectorId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApicancelConnectorVersionBuild
     */
    versionId: string
    /**
     * 
     * @type VersionCancelRequest
     * @memberof ConnectorVersionsApicancelConnectorVersionBuild
     */
    versionCancelRequest?: VersionCancelRequest
}

export interface ConnectorVersionsApiCreateConnectorVersionRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApicreateConnectorVersion
     */
    connectorId: number
    /**
     * 
     * @type VersionCreateRequest
     * @memberof ConnectorVersionsApicreateConnectorVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export interface ConnectorVersionsApiDeleteConnectorVersionRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApideleteConnectorVersion
     */
    connectorId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApideleteConnectorVersion
     */
    versionId: string
}

export interface ConnectorVersionsApiListConnectorVersionsRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApilistConnectorVersions
     */
    connectorId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApilistConnectorVersions
     */
    fields?: string
}

export interface ConnectorVersionsApiPartialUpdateConnectorVersionRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApipartialUpdateConnectorVersion
     */
    connectorId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApipartialUpdateConnectorVersion
     */
    versionId: string
    /**
     * 
     * @type PatchedVersionCreateRequest
     * @memberof ConnectorVersionsApipartialUpdateConnectorVersion
     */
    patchedVersionCreateRequest?: PatchedVersionCreateRequest
}

export interface ConnectorVersionsApiRetrieveConnectorVersionRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApiretrieveConnectorVersion
     */
    connectorId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApiretrieveConnectorVersion
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApiretrieveConnectorVersion
     */
    fields?: string
}

export interface ConnectorVersionsApiUpdateConnectorVersionRequest {
    /**
     * The ID of the Connector resource.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorVersionsApiupdateConnectorVersion
     */
    connectorId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorVersionsApiupdateConnectorVersion
     */
    versionId: string
    /**
     * 
     * @type VersionCreateRequest
     * @memberof ConnectorVersionsApiupdateConnectorVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export class ObjectConnectorVersionsApi {
    private api: ObservableConnectorVersionsApi

    public constructor(configuration: Configuration, requestFactory?: ConnectorVersionsApiRequestFactory, responseProcessor?: ConnectorVersionsApiResponseProcessor) {
        this.api = new ObservableConnectorVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version (soft-delete).
     * Archive a Connector version
     * @param param the request object
     */
    public archiveConnectorVersionWithHttpInfo(param: ConnectorVersionsApiArchiveConnectorVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveConnectorVersionWithHttpInfo(param.connectorId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Archive a ready version (soft-delete).
     * Archive a Connector version
     * @param param the request object
     */
    public archiveConnectorVersion(param: ConnectorVersionsApiArchiveConnectorVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveConnectorVersion(param.connectorId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Connector version
     * @param param the request object
     */
    public buildConnectorVersionWithHttpInfo(param: ConnectorVersionsApiBuildConnectorVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.buildConnectorVersionWithHttpInfo(param.connectorId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Connector version
     * @param param the request object
     */
    public buildConnectorVersion(param: ConnectorVersionsApiBuildConnectorVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.buildConnectorVersion(param.connectorId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Connector version build
     * @param param the request object
     */
    public cancelConnectorVersionBuildWithHttpInfo(param: ConnectorVersionsApiCancelConnectorVersionBuildRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelConnectorVersionBuildWithHttpInfo(param.connectorId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Connector version build
     * @param param the request object
     */
    public cancelConnectorVersionBuild(param: ConnectorVersionsApiCancelConnectorVersionBuildRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelConnectorVersionBuild(param.connectorId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning an existing one.
     * Create a new Connector version
     * @param param the request object
     */
    public createConnectorVersionWithHttpInfo(param: ConnectorVersionsApiCreateConnectorVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createConnectorVersionWithHttpInfo(param.connectorId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning an existing one.
     * Create a new Connector version
     * @param param the request object
     */
    public createConnectorVersion(param: ConnectorVersionsApiCreateConnectorVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createConnectorVersion(param.connectorId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific version of a Connector.
     * Delete a Connector version
     * @param param the request object
     */
    public deleteConnectorVersionWithHttpInfo(param: ConnectorVersionsApiDeleteConnectorVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteConnectorVersionWithHttpInfo(param.connectorId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific version of a Connector.
     * Delete a Connector version
     * @param param the request object
     */
    public deleteConnectorVersion(param: ConnectorVersionsApiDeleteConnectorVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteConnectorVersion(param.connectorId, param.versionId,  options).toPromise();
    }

    /**
     * List all versions of a specific Connector.
     * List Connector versions
     * @param param the request object
     */
    public listConnectorVersionsWithHttpInfo(param: ConnectorVersionsApiListConnectorVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.listConnectorVersionsWithHttpInfo(param.connectorId, param.fields,  options).toPromise();
    }

    /**
     * List all versions of a specific Connector.
     * List Connector versions
     * @param param the request object
     */
    public listConnectorVersions(param: ConnectorVersionsApiListConnectorVersionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.listConnectorVersions(param.connectorId, param.fields,  options).toPromise();
    }

    /**
     * Partially update a draft version of a Connector.
     * Partially update a Connector version
     * @param param the request object
     */
    public partialUpdateConnectorVersionWithHttpInfo(param: ConnectorVersionsApiPartialUpdateConnectorVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.partialUpdateConnectorVersionWithHttpInfo(param.connectorId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Partially update a draft version of a Connector.
     * Partially update a Connector version
     * @param param the request object
     */
    public partialUpdateConnectorVersion(param: ConnectorVersionsApiPartialUpdateConnectorVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.partialUpdateConnectorVersion(param.connectorId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version of a Connector.
     * Retrieve a Connector version
     * @param param the request object
     */
    public retrieveConnectorVersionWithHttpInfo(param: ConnectorVersionsApiRetrieveConnectorVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.retrieveConnectorVersionWithHttpInfo(param.connectorId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version of a Connector.
     * Retrieve a Connector version
     * @param param the request object
     */
    public retrieveConnectorVersion(param: ConnectorVersionsApiRetrieveConnectorVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.retrieveConnectorVersion(param.connectorId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update a draft version of a Connector.
     * Update a Connector version
     * @param param the request object
     */
    public updateConnectorVersionWithHttpInfo(param: ConnectorVersionsApiUpdateConnectorVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateConnectorVersionWithHttpInfo(param.connectorId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Update a draft version of a Connector.
     * Update a Connector version
     * @param param the request object
     */
    public updateConnectorVersion(param: ConnectorVersionsApiUpdateConnectorVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateConnectorVersion(param.connectorId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

}

import { ObservableConnectorsApi } from "./ObservableAPI";
import { ConnectorsApiRequestFactory, ConnectorsApiResponseProcessor} from "../apis/ConnectorsApi";

export interface ConnectorsApiCreateConnectorRequest {
    /**
     * 
     * @type ConnectorRequest
     * @memberof ConnectorsApicreateConnector
     */
    connectorRequest?: ConnectorRequest
}

export interface ConnectorsApiDeleteConnectorRequest {
    /**
     * A unique integer value identifying the connector.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorsApideleteConnector
     */
    connectorId: number
}

export interface ConnectorsApiListConnectorsRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof ConnectorsApilistConnectors
     */
    active?: boolean
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorsApilistConnectors
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorsApilistConnectors
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorsApilistConnectors
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ConnectorsApilistConnectors
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof ConnectorsApilistConnectors
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorsApilistConnectors
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorsApilistConnectors
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorsApilistConnectors
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorsApilistConnectors
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorsApilistConnectors
     */
    search?: string
    /**
     * Filter by type (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorsApilistConnectors
     */
    typeIn?: string
}

export interface ConnectorsApiPartialUpdateConnectorRequest {
    /**
     * A unique integer value identifying the connector.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorsApipartialUpdateConnector
     */
    connectorId: number
    /**
     * 
     * @type PatchedConnectorRequest
     * @memberof ConnectorsApipartialUpdateConnector
     */
    patchedConnectorRequest?: PatchedConnectorRequest
}

export interface ConnectorsApiRetrieveConnectorRequest {
    /**
     * A unique integer value identifying the connector.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorsApiretrieveConnector
     */
    connectorId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof ConnectorsApiretrieveConnector
     */
    fields?: string
}

export interface ConnectorsApiUpdateConnectorRequest {
    /**
     * A unique integer value identifying the connector.
     * Defaults to: undefined
     * @type number
     * @memberof ConnectorsApiupdateConnector
     */
    connectorId: number
    /**
     * 
     * @type ConnectorRequest
     * @memberof ConnectorsApiupdateConnector
     */
    connectorRequest?: ConnectorRequest
}

export class ObjectConnectorsApi {
    private api: ObservableConnectorsApi

    public constructor(configuration: Configuration, requestFactory?: ConnectorsApiRequestFactory, responseProcessor?: ConnectorsApiResponseProcessor) {
        this.api = new ObservableConnectorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Connector in your account.
     * Create a Connector
     * @param param the request object
     */
    public createConnectorWithHttpInfo(param: ConnectorsApiCreateConnectorRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ConnectorResponse>> {
        return this.api.createConnectorWithHttpInfo(param.connectorRequest,  options).toPromise();
    }

    /**
     * Create a new Connector in your account.
     * Create a Connector
     * @param param the request object
     */
    public createConnector(param: ConnectorsApiCreateConnectorRequest = {}, options?: ConfigurationOptions): Promise<ConnectorResponse> {
        return this.api.createConnector(param.connectorRequest,  options).toPromise();
    }

    /**
     * Delete a specific Connector in your account.
     * Delete a Connector
     * @param param the request object
     */
    public deleteConnectorWithHttpInfo(param: ConnectorsApiDeleteConnectorRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteConnectorWithHttpInfo(param.connectorId,  options).toPromise();
    }

    /**
     * Delete a specific Connector in your account.
     * Delete a Connector
     * @param param the request object
     */
    public deleteConnector(param: ConnectorsApiDeleteConnectorRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteConnector(param.connectorId,  options).toPromise();
    }

    /**
     * List all Connectors owned by your account.
     * List Connectors
     * @param param the request object
     */
    public listConnectorsWithHttpInfo(param: ConnectorsApiListConnectorsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedConnectorList>> {
        return this.api.listConnectorsWithHttpInfo(param.active, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search, param.typeIn,  options).toPromise();
    }

    /**
     * List all Connectors owned by your account.
     * List Connectors
     * @param param the request object
     */
    public listConnectors(param: ConnectorsApiListConnectorsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedConnectorList> {
        return this.api.listConnectors(param.active, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search, param.typeIn,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Connector without affecting other fields.
     * Partially update a Connector
     * @param param the request object
     */
    public partialUpdateConnectorWithHttpInfo(param: ConnectorsApiPartialUpdateConnectorRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConnectorResponse>> {
        return this.api.partialUpdateConnectorWithHttpInfo(param.connectorId, param.patchedConnectorRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Connector without affecting other fields.
     * Partially update a Connector
     * @param param the request object
     */
    public partialUpdateConnector(param: ConnectorsApiPartialUpdateConnectorRequest, options?: ConfigurationOptions): Promise<ConnectorResponse> {
        return this.api.partialUpdateConnector(param.connectorId, param.patchedConnectorRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Connector in your account.
     * Retrieve details of a Connector
     * @param param the request object
     */
    public retrieveConnectorWithHttpInfo(param: ConnectorsApiRetrieveConnectorRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConnectorResponse>> {
        return this.api.retrieveConnectorWithHttpInfo(param.connectorId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Connector in your account.
     * Retrieve details of a Connector
     * @param param the request object
     */
    public retrieveConnector(param: ConnectorsApiRetrieveConnectorRequest, options?: ConfigurationOptions): Promise<ConnectorResponse> {
        return this.api.retrieveConnector(param.connectorId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Connector. This replaces the entire Connector with the new data provided.
     * Update a Connector
     * @param param the request object
     */
    public updateConnectorWithHttpInfo(param: ConnectorsApiUpdateConnectorRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConnectorResponse>> {
        return this.api.updateConnectorWithHttpInfo(param.connectorId, param.connectorRequest,  options).toPromise();
    }

    /**
     * Update an existing Connector. This replaces the entire Connector with the new data provided.
     * Update a Connector
     * @param param the request object
     */
    public updateConnector(param: ConnectorsApiUpdateConnectorRequest, options?: ConfigurationOptions): Promise<ConnectorResponse> {
        return this.api.updateConnector(param.connectorId, param.connectorRequest,  options).toPromise();
    }

}

import { ObservableCustomPageVersionsApi } from "./ObservableAPI";
import { CustomPageVersionsApiRequestFactory, CustomPageVersionsApiResponseProcessor} from "../apis/CustomPageVersionsApi";

export interface CustomPageVersionsApiArchiveCustomPageVersionRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApiarchiveCustomPageVersion
     */
    customPageId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApiarchiveCustomPageVersion
     */
    versionId: string
    /**
     * 
     * @type VersionArchiveRequest
     * @memberof CustomPageVersionsApiarchiveCustomPageVersion
     */
    versionArchiveRequest?: VersionArchiveRequest
}

export interface CustomPageVersionsApiBuildCustomPageVersionRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApibuildCustomPageVersion
     */
    customPageId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApibuildCustomPageVersion
     */
    versionId: string
    /**
     * 
     * @type VersionBuildRequest
     * @memberof CustomPageVersionsApibuildCustomPageVersion
     */
    versionBuildRequest?: VersionBuildRequest
}

export interface CustomPageVersionsApiCancelCustomPageVersionBuildRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApicancelCustomPageVersionBuild
     */
    customPageId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApicancelCustomPageVersionBuild
     */
    versionId: string
    /**
     * 
     * @type VersionCancelRequest
     * @memberof CustomPageVersionsApicancelCustomPageVersionBuild
     */
    versionCancelRequest?: VersionCancelRequest
}

export interface CustomPageVersionsApiCreateCustomPageVersionRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApicreateCustomPageVersion
     */
    customPageId: number
    /**
     * 
     * @type VersionCreateRequest
     * @memberof CustomPageVersionsApicreateCustomPageVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export interface CustomPageVersionsApiDeleteCustomPageVersionRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApideleteCustomPageVersion
     */
    customPageId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApideleteCustomPageVersion
     */
    versionId: string
}

export interface CustomPageVersionsApiListCustomPageVersionsRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApilistCustomPageVersions
     */
    customPageId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApilistCustomPageVersions
     */
    fields?: string
}

export interface CustomPageVersionsApiPartialUpdateCustomPageVersionRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApipartialUpdateCustomPageVersion
     */
    customPageId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApipartialUpdateCustomPageVersion
     */
    versionId: string
    /**
     * 
     * @type PatchedVersionCreateRequest
     * @memberof CustomPageVersionsApipartialUpdateCustomPageVersion
     */
    patchedVersionCreateRequest?: PatchedVersionCreateRequest
}

export interface CustomPageVersionsApiRetrieveCustomPageVersionRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApiretrieveCustomPageVersion
     */
    customPageId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApiretrieveCustomPageVersion
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApiretrieveCustomPageVersion
     */
    fields?: string
}

export interface CustomPageVersionsApiUpdateCustomPageVersionRequest {
    /**
     * The ID of the Custom Page resource.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPageVersionsApiupdateCustomPageVersion
     */
    customPageId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPageVersionsApiupdateCustomPageVersion
     */
    versionId: string
    /**
     * 
     * @type VersionCreateRequest
     * @memberof CustomPageVersionsApiupdateCustomPageVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export class ObjectCustomPageVersionsApi {
    private api: ObservableCustomPageVersionsApi

    public constructor(configuration: Configuration, requestFactory?: CustomPageVersionsApiRequestFactory, responseProcessor?: CustomPageVersionsApiResponseProcessor) {
        this.api = new ObservableCustomPageVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a Custom Page version
     * @param param the request object
     */
    public archiveCustomPageVersionWithHttpInfo(param: CustomPageVersionsApiArchiveCustomPageVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveCustomPageVersionWithHttpInfo(param.customPageId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a Custom Page version
     * @param param the request object
     */
    public archiveCustomPageVersion(param: CustomPageVersionsApiArchiveCustomPageVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveCustomPageVersion(param.customPageId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Custom Page version
     * @param param the request object
     */
    public buildCustomPageVersionWithHttpInfo(param: CustomPageVersionsApiBuildCustomPageVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.buildCustomPageVersionWithHttpInfo(param.customPageId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Custom Page version
     * @param param the request object
     */
    public buildCustomPageVersion(param: CustomPageVersionsApiBuildCustomPageVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.buildCustomPageVersion(param.customPageId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Custom Page version build
     * @param param the request object
     */
    public cancelCustomPageVersionBuildWithHttpInfo(param: CustomPageVersionsApiCancelCustomPageVersionBuildRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelCustomPageVersionBuildWithHttpInfo(param.customPageId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Custom Page version build
     * @param param the request object
     */
    public cancelCustomPageVersionBuild(param: CustomPageVersionsApiCancelCustomPageVersionBuildRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelCustomPageVersionBuild(param.customPageId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Custom Page version
     * @param param the request object
     */
    public createCustomPageVersionWithHttpInfo(param: CustomPageVersionsApiCreateCustomPageVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createCustomPageVersionWithHttpInfo(param.customPageId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Custom Page version
     * @param param the request object
     */
    public createCustomPageVersion(param: CustomPageVersionsApiCreateCustomPageVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createCustomPageVersion(param.customPageId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Custom Page version
     * @param param the request object
     */
    public deleteCustomPageVersionWithHttpInfo(param: CustomPageVersionsApiDeleteCustomPageVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCustomPageVersionWithHttpInfo(param.customPageId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Custom Page version
     * @param param the request object
     */
    public deleteCustomPageVersion(param: CustomPageVersionsApiDeleteCustomPageVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCustomPageVersion(param.customPageId, param.versionId,  options).toPromise();
    }

    /**
     * List all versions of a specific Custom Page.
     * List Custom Page versions
     * @param param the request object
     */
    public listCustomPageVersionsWithHttpInfo(param: CustomPageVersionsApiListCustomPageVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.listCustomPageVersionsWithHttpInfo(param.customPageId, param.fields,  options).toPromise();
    }

    /**
     * List all versions of a specific Custom Page.
     * List Custom Page versions
     * @param param the request object
     */
    public listCustomPageVersions(param: CustomPageVersionsApiListCustomPageVersionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.listCustomPageVersions(param.customPageId, param.fields,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Custom Page version
     * @param param the request object
     */
    public partialUpdateCustomPageVersionWithHttpInfo(param: CustomPageVersionsApiPartialUpdateCustomPageVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.partialUpdateCustomPageVersionWithHttpInfo(param.customPageId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Custom Page version
     * @param param the request object
     */
    public partialUpdateCustomPageVersion(param: CustomPageVersionsApiPartialUpdateCustomPageVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.partialUpdateCustomPageVersion(param.customPageId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Custom Page version
     * @param param the request object
     */
    public retrieveCustomPageVersionWithHttpInfo(param: CustomPageVersionsApiRetrieveCustomPageVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.retrieveCustomPageVersionWithHttpInfo(param.customPageId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Custom Page version
     * @param param the request object
     */
    public retrieveCustomPageVersion(param: CustomPageVersionsApiRetrieveCustomPageVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.retrieveCustomPageVersion(param.customPageId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a Custom Page version
     * @param param the request object
     */
    public updateCustomPageVersionWithHttpInfo(param: CustomPageVersionsApiUpdateCustomPageVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateCustomPageVersionWithHttpInfo(param.customPageId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a Custom Page version
     * @param param the request object
     */
    public updateCustomPageVersion(param: CustomPageVersionsApiUpdateCustomPageVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateCustomPageVersion(param.customPageId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

}

import { ObservableCustomPagesApi } from "./ObservableAPI";
import { CustomPagesApiRequestFactory, CustomPagesApiResponseProcessor} from "../apis/CustomPagesApi";

export interface CustomPagesApiCreateCustomPageRequest {
    /**
     * 
     * @type CustomPageRequest
     * @memberof CustomPagesApicreateCustomPage
     */
    customPageRequest: CustomPageRequest
}

export interface CustomPagesApiDeleteCustomPageRequest {
    /**
     * A unique integer value identifying the custom page.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPagesApideleteCustomPage
     */
    customPageId: number
}

export interface CustomPagesApiListCustomPagesRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof CustomPagesApilistCustomPages
     */
    active?: boolean
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPagesApilistCustomPages
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof CustomPagesApilistCustomPages
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof CustomPagesApilistCustomPages
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof CustomPagesApilistCustomPages
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof CustomPagesApilistCustomPages
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof CustomPagesApilistCustomPages
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPagesApilistCustomPages
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPagesApilistCustomPages
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPagesApilistCustomPages
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPagesApilistCustomPages
     */
    search?: string
}

export interface CustomPagesApiPartialUpdateCustomPageRequest {
    /**
     * A unique integer value identifying the custom page.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPagesApipartialUpdateCustomPage
     */
    customPageId: number
    /**
     * 
     * @type PatchedCustomPageRequest
     * @memberof CustomPagesApipartialUpdateCustomPage
     */
    patchedCustomPageRequest?: PatchedCustomPageRequest
}

export interface CustomPagesApiRetrieveCustomPageRequest {
    /**
     * A unique integer value identifying the custom page.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPagesApiretrieveCustomPage
     */
    customPageId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof CustomPagesApiretrieveCustomPage
     */
    fields?: string
}

export interface CustomPagesApiUpdateCustomPageRequest {
    /**
     * A unique integer value identifying the custom page.
     * Defaults to: undefined
     * @type number
     * @memberof CustomPagesApiupdateCustomPage
     */
    customPageId: number
    /**
     * 
     * @type CustomPageRequest
     * @memberof CustomPagesApiupdateCustomPage
     */
    customPageRequest: CustomPageRequest
}

export class ObjectCustomPagesApi {
    private api: ObservableCustomPagesApi

    public constructor(configuration: Configuration, requestFactory?: CustomPagesApiRequestFactory, responseProcessor?: CustomPagesApiResponseProcessor) {
        this.api = new ObservableCustomPagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Custom Page in your account.
     * Create a Custom Page
     * @param param the request object
     */
    public createCustomPageWithHttpInfo(param: CustomPagesApiCreateCustomPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomPageResponse>> {
        return this.api.createCustomPageWithHttpInfo(param.customPageRequest,  options).toPromise();
    }

    /**
     * Create a new Custom Page in your account.
     * Create a Custom Page
     * @param param the request object
     */
    public createCustomPage(param: CustomPagesApiCreateCustomPageRequest, options?: ConfigurationOptions): Promise<CustomPageResponse> {
        return this.api.createCustomPage(param.customPageRequest,  options).toPromise();
    }

    /**
     * Delete a specific Custom Page in your account.
     * Delete a Custom Page
     * @param param the request object
     */
    public deleteCustomPageWithHttpInfo(param: CustomPagesApiDeleteCustomPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteCustomPageWithHttpInfo(param.customPageId,  options).toPromise();
    }

    /**
     * Delete a specific Custom Page in your account.
     * Delete a Custom Page
     * @param param the request object
     */
    public deleteCustomPage(param: CustomPagesApiDeleteCustomPageRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteCustomPage(param.customPageId,  options).toPromise();
    }

    /**
     * List all Custom Pages owned by your account.
     * List Custom Pages
     * @param param the request object
     */
    public listCustomPagesWithHttpInfo(param: CustomPagesApiListCustomPagesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCustomPageList>> {
        return this.api.listCustomPagesWithHttpInfo(param.active, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Custom Pages owned by your account.
     * List Custom Pages
     * @param param the request object
     */
    public listCustomPages(param: CustomPagesApiListCustomPagesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedCustomPageList> {
        return this.api.listCustomPages(param.active, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Custom Page without affecting other fields.
     * Partially update a Custom Page
     * @param param the request object
     */
    public partialUpdateCustomPageWithHttpInfo(param: CustomPagesApiPartialUpdateCustomPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomPageResponse>> {
        return this.api.partialUpdateCustomPageWithHttpInfo(param.customPageId, param.patchedCustomPageRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Custom Page without affecting other fields.
     * Partially update a Custom Page
     * @param param the request object
     */
    public partialUpdateCustomPage(param: CustomPagesApiPartialUpdateCustomPageRequest, options?: ConfigurationOptions): Promise<CustomPageResponse> {
        return this.api.partialUpdateCustomPage(param.customPageId, param.patchedCustomPageRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Custom Page in your account.
     * Retrieve details of a Custom Page
     * @param param the request object
     */
    public retrieveCustomPageWithHttpInfo(param: CustomPagesApiRetrieveCustomPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomPageResponse>> {
        return this.api.retrieveCustomPageWithHttpInfo(param.customPageId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Custom Page in your account.
     * Retrieve details of a Custom Page
     * @param param the request object
     */
    public retrieveCustomPage(param: CustomPagesApiRetrieveCustomPageRequest, options?: ConfigurationOptions): Promise<CustomPageResponse> {
        return this.api.retrieveCustomPage(param.customPageId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Custom Page. This replaces the entire Custom Page with the new data provided.
     * Update a Custom Page
     * @param param the request object
     */
    public updateCustomPageWithHttpInfo(param: CustomPagesApiUpdateCustomPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomPageResponse>> {
        return this.api.updateCustomPageWithHttpInfo(param.customPageId, param.customPageRequest,  options).toPromise();
    }

    /**
     * Update an existing Custom Page. This replaces the entire Custom Page with the new data provided.
     * Update a Custom Page
     * @param param the request object
     */
    public updateCustomPage(param: CustomPagesApiUpdateCustomPageRequest, options?: ConfigurationOptions): Promise<CustomPageResponse> {
        return this.api.updateCustomPage(param.customPageId, param.customPageRequest,  options).toPromise();
    }

}

import { ObservableDNSDNSSECApi } from "./ObservableAPI";
import { DNSDNSSECApiRequestFactory, DNSDNSSECApiResponseProcessor} from "../apis/DNSDNSSECApi";

export interface DNSDNSSECApiPartialUpdateDnssecRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSDNSSECApipartialUpdateDnssec
     */
    zoneId: number
    /**
     * 
     * @type PatchedDNSSECRequest
     * @memberof DNSDNSSECApipartialUpdateDnssec
     */
    patchedDNSSECRequest?: PatchedDNSSECRequest
}

export interface DNSDNSSECApiRetrieveDnssecRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSDNSSECApiretrieveDnssec
     */
    zoneId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DNSDNSSECApiretrieveDnssec
     */
    fields?: string
}

export interface DNSDNSSECApiUpdateDnssecRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSDNSSECApiupdateDnssec
     */
    zoneId: number
    /**
     * 
     * @type DNSSECRequest
     * @memberof DNSDNSSECApiupdateDnssec
     */
    dNSSECRequest: DNSSECRequest
}

export class ObjectDNSDNSSECApi {
    private api: ObservableDNSDNSSECApi

    public constructor(configuration: Configuration, requestFactory?: DNSDNSSECApiRequestFactory, responseProcessor?: DNSDNSSECApiResponseProcessor) {
        this.api = new ObservableDNSDNSSECApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update one or more fields of an existing DNSSEC without affecting other fields.
     * Partially update a DNSSEC
     * @param param the request object
     */
    public partialUpdateDnssecWithHttpInfo(param: DNSDNSSECApiPartialUpdateDnssecRequest, options?: ConfigurationOptions): Promise<HttpInfo<DNSSECResponse>> {
        return this.api.partialUpdateDnssecWithHttpInfo(param.zoneId, param.patchedDNSSECRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing DNSSEC without affecting other fields.
     * Partially update a DNSSEC
     * @param param the request object
     */
    public partialUpdateDnssec(param: DNSDNSSECApiPartialUpdateDnssecRequest, options?: ConfigurationOptions): Promise<DNSSECResponse> {
        return this.api.partialUpdateDnssec(param.zoneId, param.patchedDNSSECRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific DNSSEC from a DNS Zone in your account.
     * Retrieve details of a DNSSEC
     * @param param the request object
     */
    public retrieveDnssecWithHttpInfo(param: DNSDNSSECApiRetrieveDnssecRequest, options?: ConfigurationOptions): Promise<HttpInfo<DNSSECResponse>> {
        return this.api.retrieveDnssecWithHttpInfo(param.zoneId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific DNSSEC from a DNS Zone in your account.
     * Retrieve details of a DNSSEC
     * @param param the request object
     */
    public retrieveDnssec(param: DNSDNSSECApiRetrieveDnssecRequest, options?: ConfigurationOptions): Promise<DNSSECResponse> {
        return this.api.retrieveDnssec(param.zoneId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing a DNSSEC. This replaces the entire DNSSEC with the new data provided.
     * Update a DNSSEC
     * @param param the request object
     */
    public updateDnssecWithHttpInfo(param: DNSDNSSECApiUpdateDnssecRequest, options?: ConfigurationOptions): Promise<HttpInfo<DNSSECResponse>> {
        return this.api.updateDnssecWithHttpInfo(param.zoneId, param.dNSSECRequest,  options).toPromise();
    }

    /**
     * Update an existing a DNSSEC. This replaces the entire DNSSEC with the new data provided.
     * Update a DNSSEC
     * @param param the request object
     */
    public updateDnssec(param: DNSDNSSECApiUpdateDnssecRequest, options?: ConfigurationOptions): Promise<DNSSECResponse> {
        return this.api.updateDnssec(param.zoneId, param.dNSSECRequest,  options).toPromise();
    }

}

import { ObservableDNSRecordsApi } from "./ObservableAPI";
import { DNSRecordsApiRequestFactory, DNSRecordsApiResponseProcessor} from "../apis/DNSRecordsApi";

export interface DNSRecordsApiCreateDnsRecordRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApicreateDnsRecord
     */
    zoneId: number
    /**
     * 
     * @type RecordRequest
     * @memberof DNSRecordsApicreateDnsRecord
     */
    recordRequest: RecordRequest
}

export interface DNSRecordsApiDeleteDnsRecordRequest {
    /**
     * A unique integer value identifying the DNS Record.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApideleteDnsRecord
     */
    recordId: number
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApideleteDnsRecord
     */
    zoneId: number
}

export interface DNSRecordsApiListDnsRecordsRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApilistDnsRecords
     */
    zoneId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DNSRecordsApilistDnsRecords
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof DNSRecordsApilistDnsRecords
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApilistDnsRecords
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApilistDnsRecords
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof DNSRecordsApilistDnsRecords
     */
    search?: string
}

export interface DNSRecordsApiPartialUpdateDnsRecordRequest {
    /**
     * A unique integer value identifying the DNS Record.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApipartialUpdateDnsRecord
     */
    recordId: number
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApipartialUpdateDnsRecord
     */
    zoneId: number
    /**
     * 
     * @type PatchedRecordRequest
     * @memberof DNSRecordsApipartialUpdateDnsRecord
     */
    patchedRecordRequest?: PatchedRecordRequest
}

export interface DNSRecordsApiRetrieveDnsRecordRequest {
    /**
     * A unique integer value identifying the DNS Record.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApiretrieveDnsRecord
     */
    recordId: number
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApiretrieveDnsRecord
     */
    zoneId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DNSRecordsApiretrieveDnsRecord
     */
    fields?: string
}

export interface DNSRecordsApiUpdateDnsRecordRequest {
    /**
     * A unique integer value identifying the DNS Record.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApiupdateDnsRecord
     */
    recordId: number
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSRecordsApiupdateDnsRecord
     */
    zoneId: number
    /**
     * 
     * @type RecordRequest
     * @memberof DNSRecordsApiupdateDnsRecord
     */
    recordRequest: RecordRequest
}

export class ObjectDNSRecordsApi {
    private api: ObservableDNSRecordsApi

    public constructor(configuration: Configuration, requestFactory?: DNSRecordsApiRequestFactory, responseProcessor?: DNSRecordsApiResponseProcessor) {
        this.api = new ObservableDNSRecordsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new DNS Record in a DNS Zone for your account.
     * Create a DNS Record
     * @param param the request object
     */
    public createDnsRecordWithHttpInfo(param: DNSRecordsApiCreateDnsRecordRequest, options?: ConfigurationOptions): Promise<HttpInfo<RecordResponse>> {
        return this.api.createDnsRecordWithHttpInfo(param.zoneId, param.recordRequest,  options).toPromise();
    }

    /**
     * Create a new DNS Record in a DNS Zone for your account.
     * Create a DNS Record
     * @param param the request object
     */
    public createDnsRecord(param: DNSRecordsApiCreateDnsRecordRequest, options?: ConfigurationOptions): Promise<RecordResponse> {
        return this.api.createDnsRecord(param.zoneId, param.recordRequest,  options).toPromise();
    }

    /**
     * Delete a specific DNS Record from a DNS Zone in your account.
     * Delete a DNS Record
     * @param param the request object
     */
    public deleteDnsRecordWithHttpInfo(param: DNSRecordsApiDeleteDnsRecordRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteDnsRecordWithHttpInfo(param.recordId, param.zoneId,  options).toPromise();
    }

    /**
     * Delete a specific DNS Record from a DNS Zone in your account.
     * Delete a DNS Record
     * @param param the request object
     */
    public deleteDnsRecord(param: DNSRecordsApiDeleteDnsRecordRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteDnsRecord(param.recordId, param.zoneId,  options).toPromise();
    }

    /**
     * List all DNS Records from a DNS Zone owned by your account.
     * List DNS Records
     * @param param the request object
     */
    public listDnsRecordsWithHttpInfo(param: DNSRecordsApiListDnsRecordsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedRecordList>> {
        return this.api.listDnsRecordsWithHttpInfo(param.zoneId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all DNS Records from a DNS Zone owned by your account.
     * List DNS Records
     * @param param the request object
     */
    public listDnsRecords(param: DNSRecordsApiListDnsRecordsRequest, options?: ConfigurationOptions): Promise<PaginatedRecordList> {
        return this.api.listDnsRecords(param.zoneId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing DNS Record without affecting other fields.
     * Partially update a DNS Record
     * @param param the request object
     */
    public partialUpdateDnsRecordWithHttpInfo(param: DNSRecordsApiPartialUpdateDnsRecordRequest, options?: ConfigurationOptions): Promise<HttpInfo<RecordResponse>> {
        return this.api.partialUpdateDnsRecordWithHttpInfo(param.recordId, param.zoneId, param.patchedRecordRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing DNS Record without affecting other fields.
     * Partially update a DNS Record
     * @param param the request object
     */
    public partialUpdateDnsRecord(param: DNSRecordsApiPartialUpdateDnsRecordRequest, options?: ConfigurationOptions): Promise<RecordResponse> {
        return this.api.partialUpdateDnsRecord(param.recordId, param.zoneId, param.patchedRecordRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific DNS Record from a DNS Zone in your account.
     * Retrieve details of a DNS Record
     * @param param the request object
     */
    public retrieveDnsRecordWithHttpInfo(param: DNSRecordsApiRetrieveDnsRecordRequest, options?: ConfigurationOptions): Promise<HttpInfo<RecordResponse>> {
        return this.api.retrieveDnsRecordWithHttpInfo(param.recordId, param.zoneId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific DNS Record from a DNS Zone in your account.
     * Retrieve details of a DNS Record
     * @param param the request object
     */
    public retrieveDnsRecord(param: DNSRecordsApiRetrieveDnsRecordRequest, options?: ConfigurationOptions): Promise<RecordResponse> {
        return this.api.retrieveDnsRecord(param.recordId, param.zoneId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing a DNS Record. This replaces the entire DNS Record with the new data provided.
     * Update a DNS Record
     * @param param the request object
     */
    public updateDnsRecordWithHttpInfo(param: DNSRecordsApiUpdateDnsRecordRequest, options?: ConfigurationOptions): Promise<HttpInfo<RecordResponse>> {
        return this.api.updateDnsRecordWithHttpInfo(param.recordId, param.zoneId, param.recordRequest,  options).toPromise();
    }

    /**
     * Update an existing a DNS Record. This replaces the entire DNS Record with the new data provided.
     * Update a DNS Record
     * @param param the request object
     */
    public updateDnsRecord(param: DNSRecordsApiUpdateDnsRecordRequest, options?: ConfigurationOptions): Promise<RecordResponse> {
        return this.api.updateDnsRecord(param.recordId, param.zoneId, param.recordRequest,  options).toPromise();
    }

}

import { ObservableDNSZonesApi } from "./ObservableAPI";
import { DNSZonesApiRequestFactory, DNSZonesApiResponseProcessor} from "../apis/DNSZonesApi";

export interface DNSZonesApiCreateDnsZoneRequest {
    /**
     * 
     * @type ZoneRequest
     * @memberof DNSZonesApicreateDnsZone
     */
    zoneRequest: ZoneRequest
}

export interface DNSZonesApiDeleteDnsZoneRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSZonesApideleteDnsZone
     */
    zoneId: number
}

export interface DNSZonesApiListDnsZonesRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof DNSZonesApilistDnsZones
     */
    active?: boolean
    /**
     * Filter by domain (exact match).
     * Defaults to: undefined
     * @type string
     * @memberof DNSZonesApilistDnsZones
     */
    domain?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DNSZonesApilistDnsZones
     */
    fields?: string
    /**
     * Filter by name (exact match).
     * Defaults to: undefined
     * @type string
     * @memberof DNSZonesApilistDnsZones
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof DNSZonesApilistDnsZones
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof DNSZonesApilistDnsZones
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof DNSZonesApilistDnsZones
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof DNSZonesApilistDnsZones
     */
    search?: string
}

export interface DNSZonesApiPartialUpdateDnsZoneRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSZonesApipartialUpdateDnsZone
     */
    zoneId: number
    /**
     * 
     * @type PatchedUpdateZoneRequest
     * @memberof DNSZonesApipartialUpdateDnsZone
     */
    patchedUpdateZoneRequest?: PatchedUpdateZoneRequest
}

export interface DNSZonesApiRetrieveDnsZoneRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSZonesApiretrieveDnsZone
     */
    zoneId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DNSZonesApiretrieveDnsZone
     */
    fields?: string
}

export interface DNSZonesApiUpdateDnsZoneRequest {
    /**
     * A unique integer value identifying the DNS Zone.
     * Defaults to: undefined
     * @type number
     * @memberof DNSZonesApiupdateDnsZone
     */
    zoneId: number
    /**
     * 
     * @type UpdateZoneRequest
     * @memberof DNSZonesApiupdateDnsZone
     */
    updateZoneRequest: UpdateZoneRequest
}

export class ObjectDNSZonesApi {
    private api: ObservableDNSZonesApi

    public constructor(configuration: Configuration, requestFactory?: DNSZonesApiRequestFactory, responseProcessor?: DNSZonesApiResponseProcessor) {
        this.api = new ObservableDNSZonesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new DNS Zone for your account.
     * Create a DNS Zone
     * @param param the request object
     */
    public createDnsZoneWithHttpInfo(param: DNSZonesApiCreateDnsZoneRequest, options?: ConfigurationOptions): Promise<HttpInfo<ZoneResponse>> {
        return this.api.createDnsZoneWithHttpInfo(param.zoneRequest,  options).toPromise();
    }

    /**
     * Create a new DNS Zone for your account.
     * Create a DNS Zone
     * @param param the request object
     */
    public createDnsZone(param: DNSZonesApiCreateDnsZoneRequest, options?: ConfigurationOptions): Promise<ZoneResponse> {
        return this.api.createDnsZone(param.zoneRequest,  options).toPromise();
    }

    /**
     * Delete a specific DNS Zone in your account.
     * Delete a DNS Zone
     * @param param the request object
     */
    public deleteDnsZoneWithHttpInfo(param: DNSZonesApiDeleteDnsZoneRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteDnsZoneWithHttpInfo(param.zoneId,  options).toPromise();
    }

    /**
     * Delete a specific DNS Zone in your account.
     * Delete a DNS Zone
     * @param param the request object
     */
    public deleteDnsZone(param: DNSZonesApiDeleteDnsZoneRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteDnsZone(param.zoneId,  options).toPromise();
    }

    /**
     * List all DNS Zones owned by your account.
     * List DNS Zones
     * @param param the request object
     */
    public listDnsZonesWithHttpInfo(param: DNSZonesApiListDnsZonesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedZoneList>> {
        return this.api.listDnsZonesWithHttpInfo(param.active, param.domain, param.fields, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all DNS Zones owned by your account.
     * List DNS Zones
     * @param param the request object
     */
    public listDnsZones(param: DNSZonesApiListDnsZonesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedZoneList> {
        return this.api.listDnsZones(param.active, param.domain, param.fields, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing DNS Zone without affecting other fields.
     * Partially update a DNS Zone
     * @param param the request object
     */
    public partialUpdateDnsZoneWithHttpInfo(param: DNSZonesApiPartialUpdateDnsZoneRequest, options?: ConfigurationOptions): Promise<HttpInfo<ZoneResponse>> {
        return this.api.partialUpdateDnsZoneWithHttpInfo(param.zoneId, param.patchedUpdateZoneRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing DNS Zone without affecting other fields.
     * Partially update a DNS Zone
     * @param param the request object
     */
    public partialUpdateDnsZone(param: DNSZonesApiPartialUpdateDnsZoneRequest, options?: ConfigurationOptions): Promise<ZoneResponse> {
        return this.api.partialUpdateDnsZone(param.zoneId, param.patchedUpdateZoneRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific DNS Zone in your account.
     * Retrieve details of a DNS Zone
     * @param param the request object
     */
    public retrieveDnsZoneWithHttpInfo(param: DNSZonesApiRetrieveDnsZoneRequest, options?: ConfigurationOptions): Promise<HttpInfo<ZoneResponse>> {
        return this.api.retrieveDnsZoneWithHttpInfo(param.zoneId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific DNS Zone in your account.
     * Retrieve details of a DNS Zone
     * @param param the request object
     */
    public retrieveDnsZone(param: DNSZonesApiRetrieveDnsZoneRequest, options?: ConfigurationOptions): Promise<ZoneResponse> {
        return this.api.retrieveDnsZone(param.zoneId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing a DNS Zone. This replaces the entire DNS Zone with the new data provided.
     * Update a DNS Zone
     * @param param the request object
     */
    public updateDnsZoneWithHttpInfo(param: DNSZonesApiUpdateDnsZoneRequest, options?: ConfigurationOptions): Promise<HttpInfo<ZoneResponse>> {
        return this.api.updateDnsZoneWithHttpInfo(param.zoneId, param.updateZoneRequest,  options).toPromise();
    }

    /**
     * Update an existing a DNS Zone. This replaces the entire DNS Zone with the new data provided.
     * Update a DNS Zone
     * @param param the request object
     */
    public updateDnsZone(param: DNSZonesApiUpdateDnsZoneRequest, options?: ConfigurationOptions): Promise<ZoneResponse> {
        return this.api.updateDnsZone(param.zoneId, param.updateZoneRequest,  options).toPromise();
    }

}

import { ObservableDataStreamDataSourcesApi } from "./ObservableAPI";
import { DataStreamDataSourcesApiRequestFactory, DataStreamDataSourcesApiResponseProcessor} from "../apis/DataStreamDataSourcesApi";

export interface DataStreamDataSourcesApiListDataSourcesRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof DataStreamDataSourcesApilistDataSources
     */
    active?: boolean
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamDataSourcesApilistDataSources
     */
    fields?: string
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamDataSourcesApilistDataSources
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamDataSourcesApilistDataSources
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamDataSourcesApilistDataSources
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamDataSourcesApilistDataSources
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamDataSourcesApilistDataSources
     */
    search?: string
    /**
     * Filter by slug (case-insensitive, exact match).
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamDataSourcesApilistDataSources
     */
    slug?: string
}

export class ObjectDataStreamDataSourcesApi {
    private api: ObservableDataStreamDataSourcesApi

    public constructor(configuration: Configuration, requestFactory?: DataStreamDataSourcesApiRequestFactory, responseProcessor?: DataStreamDataSourcesApiResponseProcessor) {
        this.api = new ObservableDataStreamDataSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all Data Sources.
     * List of Data Sources
     * @param param the request object
     */
    public listDataSourcesWithHttpInfo(param: DataStreamDataSourcesApiListDataSourcesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedDataSourceList>> {
        return this.api.listDataSourcesWithHttpInfo(param.active, param.fields, param.name, param.ordering, param.page, param.pageSize, param.search, param.slug,  options).toPromise();
    }

    /**
     * List all Data Sources.
     * List of Data Sources
     * @param param the request object
     */
    public listDataSources(param: DataStreamDataSourcesApiListDataSourcesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedDataSourceList> {
        return this.api.listDataSources(param.active, param.fields, param.name, param.ordering, param.page, param.pageSize, param.search, param.slug,  options).toPromise();
    }

}

import { ObservableDataStreamStreamsApi } from "./ObservableAPI";
import { DataStreamStreamsApiRequestFactory, DataStreamStreamsApiResponseProcessor} from "../apis/DataStreamStreamsApi";

export interface DataStreamStreamsApiCreateDataStreamRequest {
    /**
     * 
     * @type DataStreamRequest
     * @memberof DataStreamStreamsApicreateDataStream
     */
    dataStreamRequest: DataStreamRequest
}

export interface DataStreamStreamsApiDeleteDataStreamRequest {
    /**
     * A unique integer value identifying the data stream.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamStreamsApideleteDataStream
     */
    streamId: number
}

export interface DataStreamStreamsApiListDataStreamsRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof DataStreamStreamsApilistDataStreams
     */
    active?: boolean
    /**
     * Filter by created date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DataStreamStreamsApilistDataStreams
     */
    createdGte?: Date
    /**
     * Filter by created date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DataStreamStreamsApilistDataStreams
     */
    createdLte?: Date
    /**
     * Filter by data set id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamStreamsApilistDataStreams
     */
    dataSetId?: number
    /**
     * Filter by data source (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamStreamsApilistDataStreams
     */
    dataSource?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamStreamsApilistDataStreams
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamStreamsApilistDataStreams
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamStreamsApilistDataStreams
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DataStreamStreamsApilistDataStreams
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DataStreamStreamsApilistDataStreams
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamStreamsApilistDataStreams
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamStreamsApilistDataStreams
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamStreamsApilistDataStreams
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamStreamsApilistDataStreams
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamStreamsApilistDataStreams
     */
    search?: string
}

export interface DataStreamStreamsApiPartialUpdateDataStreamRequest {
    /**
     * A unique integer value identifying the data stream.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamStreamsApipartialUpdateDataStream
     */
    streamId: number
    /**
     * 
     * @type PatchedDataStreamRequest
     * @memberof DataStreamStreamsApipartialUpdateDataStream
     */
    patchedDataStreamRequest?: PatchedDataStreamRequest
}

export interface DataStreamStreamsApiRetrieveDataStreamRequest {
    /**
     * A unique integer value identifying the data stream.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamStreamsApiretrieveDataStream
     */
    streamId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamStreamsApiretrieveDataStream
     */
    fields?: string
}

export interface DataStreamStreamsApiUpdateDataStreamRequest {
    /**
     * A unique integer value identifying the data stream.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamStreamsApiupdateDataStream
     */
    streamId: number
    /**
     * 
     * @type DataStreamRequest
     * @memberof DataStreamStreamsApiupdateDataStream
     */
    dataStreamRequest: DataStreamRequest
}

export class ObjectDataStreamStreamsApi {
    private api: ObservableDataStreamStreamsApi

    public constructor(configuration: Configuration, requestFactory?: DataStreamStreamsApiRequestFactory, responseProcessor?: DataStreamStreamsApiResponseProcessor) {
        this.api = new ObservableDataStreamStreamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Data Stream in your account.
     * Create a Data Stream
     * @param param the request object
     */
    public createDataStreamWithHttpInfo(param: DataStreamStreamsApiCreateDataStreamRequest, options?: ConfigurationOptions): Promise<HttpInfo<DataStreamResponse>> {
        return this.api.createDataStreamWithHttpInfo(param.dataStreamRequest,  options).toPromise();
    }

    /**
     * Create a new Data Stream in your account.
     * Create a Data Stream
     * @param param the request object
     */
    public createDataStream(param: DataStreamStreamsApiCreateDataStreamRequest, options?: ConfigurationOptions): Promise<DataStreamResponse> {
        return this.api.createDataStream(param.dataStreamRequest,  options).toPromise();
    }

    /**
     * Delete a specific Data Stream in your account.
     * Delete a Data Stream
     * @param param the request object
     */
    public deleteDataStreamWithHttpInfo(param: DataStreamStreamsApiDeleteDataStreamRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteDataStreamWithHttpInfo(param.streamId,  options).toPromise();
    }

    /**
     * Delete a specific Data Stream in your account.
     * Delete a Data Stream
     * @param param the request object
     */
    public deleteDataStream(param: DataStreamStreamsApiDeleteDataStreamRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteDataStream(param.streamId,  options).toPromise();
    }

    /**
     * List all Data Streams owned by your account.
     * List Data Streams
     * @param param the request object
     */
    public listDataStreamsWithHttpInfo(param: DataStreamStreamsApiListDataStreamsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedDataStreamList>> {
        return this.api.listDataStreamsWithHttpInfo(param.active, param.createdGte, param.createdLte, param.dataSetId, param.dataSource, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Data Streams owned by your account.
     * List Data Streams
     * @param param the request object
     */
    public listDataStreams(param: DataStreamStreamsApiListDataStreamsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedDataStreamList> {
        return this.api.listDataStreams(param.active, param.createdGte, param.createdLte, param.dataSetId, param.dataSource, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Data Stream.
     * Partially update a Data Stream
     * @param param the request object
     */
    public partialUpdateDataStreamWithHttpInfo(param: DataStreamStreamsApiPartialUpdateDataStreamRequest, options?: ConfigurationOptions): Promise<HttpInfo<DataStreamResponse>> {
        return this.api.partialUpdateDataStreamWithHttpInfo(param.streamId, param.patchedDataStreamRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Data Stream.
     * Partially update a Data Stream
     * @param param the request object
     */
    public partialUpdateDataStream(param: DataStreamStreamsApiPartialUpdateDataStreamRequest, options?: ConfigurationOptions): Promise<DataStreamResponse> {
        return this.api.partialUpdateDataStream(param.streamId, param.patchedDataStreamRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific Data Stream in your account.
     * Retrieve details of a Data Stream
     * @param param the request object
     */
    public retrieveDataStreamWithHttpInfo(param: DataStreamStreamsApiRetrieveDataStreamRequest, options?: ConfigurationOptions): Promise<HttpInfo<DataStreamResponse>> {
        return this.api.retrieveDataStreamWithHttpInfo(param.streamId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific Data Stream in your account.
     * Retrieve details of a Data Stream
     * @param param the request object
     */
    public retrieveDataStream(param: DataStreamStreamsApiRetrieveDataStreamRequest, options?: ConfigurationOptions): Promise<DataStreamResponse> {
        return this.api.retrieveDataStream(param.streamId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Data Stream.
     * Update a Data Stream
     * @param param the request object
     */
    public updateDataStreamWithHttpInfo(param: DataStreamStreamsApiUpdateDataStreamRequest, options?: ConfigurationOptions): Promise<HttpInfo<DataStreamResponse>> {
        return this.api.updateDataStreamWithHttpInfo(param.streamId, param.dataStreamRequest,  options).toPromise();
    }

    /**
     * Update an existing Data Stream.
     * Update a Data Stream
     * @param param the request object
     */
    public updateDataStream(param: DataStreamStreamsApiUpdateDataStreamRequest, options?: ConfigurationOptions): Promise<DataStreamResponse> {
        return this.api.updateDataStream(param.streamId, param.dataStreamRequest,  options).toPromise();
    }

}

import { ObservableDataStreamTemplatesApi } from "./ObservableAPI";
import { DataStreamTemplatesApiRequestFactory, DataStreamTemplatesApiResponseProcessor} from "../apis/DataStreamTemplatesApi";

export interface DataStreamTemplatesApiCreateTemplateRequest {
    /**
     * 
     * @type TemplateRequest
     * @memberof DataStreamTemplatesApicreateTemplate
     */
    templateRequest: TemplateRequest
}

export interface DataStreamTemplatesApiDeleteTemplateRequest {
    /**
     * A unique integer value identifying the template.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamTemplatesApideleteTemplate
     */
    templateId: number
}

export interface DataStreamTemplatesApiListTemplatesRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof DataStreamTemplatesApilistTemplates
     */
    active?: boolean
    /**
     * Filter by created date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DataStreamTemplatesApilistTemplates
     */
    createdAtGte?: Date
    /**
     * Filter by created date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DataStreamTemplatesApilistTemplates
     */
    createdAtLte?: Date
    /**
     * Filter by custom status (true for custom templates, false for default templates).
     * Defaults to: undefined
     * @type boolean
     * @memberof DataStreamTemplatesApilistTemplates
     */
    custom?: boolean
    /**
     * Filter by data set (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamTemplatesApilistTemplates
     */
    dataSet?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamTemplatesApilistTemplates
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamTemplatesApilistTemplates
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamTemplatesApilistTemplates
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DataStreamTemplatesApilistTemplates
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DataStreamTemplatesApilistTemplates
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamTemplatesApilistTemplates
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamTemplatesApilistTemplates
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamTemplatesApilistTemplates
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamTemplatesApilistTemplates
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamTemplatesApilistTemplates
     */
    search?: string
}

export interface DataStreamTemplatesApiPartialUpdateTemplateRequest {
    /**
     * A unique integer value identifying the template.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamTemplatesApipartialUpdateTemplate
     */
    templateId: number
    /**
     * 
     * @type PatchedTemplateRequest
     * @memberof DataStreamTemplatesApipartialUpdateTemplate
     */
    patchedTemplateRequest?: PatchedTemplateRequest
}

export interface DataStreamTemplatesApiRetrieveTemplateRequest {
    /**
     * A unique integer value identifying the template.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamTemplatesApiretrieveTemplate
     */
    templateId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DataStreamTemplatesApiretrieveTemplate
     */
    fields?: string
}

export interface DataStreamTemplatesApiUpdateTemplateRequest {
    /**
     * A unique integer value identifying the template.
     * Defaults to: undefined
     * @type number
     * @memberof DataStreamTemplatesApiupdateTemplate
     */
    templateId: number
    /**
     * 
     * @type TemplateRequest
     * @memberof DataStreamTemplatesApiupdateTemplate
     */
    templateRequest: TemplateRequest
}

export class ObjectDataStreamTemplatesApi {
    private api: ObservableDataStreamTemplatesApi

    public constructor(configuration: Configuration, requestFactory?: DataStreamTemplatesApiRequestFactory, responseProcessor?: DataStreamTemplatesApiResponseProcessor) {
        this.api = new ObservableDataStreamTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new custom Template in your account.
     * Create a Template
     * @param param the request object
     */
    public createTemplateWithHttpInfo(param: DataStreamTemplatesApiCreateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateResponse>> {
        return this.api.createTemplateWithHttpInfo(param.templateRequest,  options).toPromise();
    }

    /**
     * Create a new custom Template in your account.
     * Create a Template
     * @param param the request object
     */
    public createTemplate(param: DataStreamTemplatesApiCreateTemplateRequest, options?: ConfigurationOptions): Promise<TemplateResponse> {
        return this.api.createTemplate(param.templateRequest,  options).toPromise();
    }

    /**
     * Delete a specific custom Template in your account.
     * Delete a Template
     * @param param the request object
     */
    public deleteTemplateWithHttpInfo(param: DataStreamTemplatesApiDeleteTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteTemplateWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Delete a specific custom Template in your account.
     * Delete a Template
     * @param param the request object
     */
    public deleteTemplate(param: DataStreamTemplatesApiDeleteTemplateRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteTemplate(param.templateId,  options).toPromise();
    }

    /**
     * List all Templates owned by your account.
     * List Templates
     * @param param the request object
     */
    public listTemplatesWithHttpInfo(param: DataStreamTemplatesApiListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedTemplateList>> {
        return this.api.listTemplatesWithHttpInfo(param.active, param.createdAtGte, param.createdAtLte, param.custom, param.dataSet, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Templates owned by your account.
     * List Templates
     * @param param the request object
     */
    public listTemplates(param: DataStreamTemplatesApiListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedTemplateList> {
        return this.api.listTemplates(param.active, param.createdAtGte, param.createdAtLte, param.custom, param.dataSet, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing custom Template.
     * Partially update a Template
     * @param param the request object
     */
    public partialUpdateTemplateWithHttpInfo(param: DataStreamTemplatesApiPartialUpdateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateResponse>> {
        return this.api.partialUpdateTemplateWithHttpInfo(param.templateId, param.patchedTemplateRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing custom Template.
     * Partially update a Template
     * @param param the request object
     */
    public partialUpdateTemplate(param: DataStreamTemplatesApiPartialUpdateTemplateRequest, options?: ConfigurationOptions): Promise<TemplateResponse> {
        return this.api.partialUpdateTemplate(param.templateId, param.patchedTemplateRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific Template in your account.
     * Retrieve details of a Template
     * @param param the request object
     */
    public retrieveTemplateWithHttpInfo(param: DataStreamTemplatesApiRetrieveTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateResponse>> {
        return this.api.retrieveTemplateWithHttpInfo(param.templateId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific Template in your account.
     * Retrieve details of a Template
     * @param param the request object
     */
    public retrieveTemplate(param: DataStreamTemplatesApiRetrieveTemplateRequest, options?: ConfigurationOptions): Promise<TemplateResponse> {
        return this.api.retrieveTemplate(param.templateId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing custom Template.
     * Update a Template
     * @param param the request object
     */
    public updateTemplateWithHttpInfo(param: DataStreamTemplatesApiUpdateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateResponse>> {
        return this.api.updateTemplateWithHttpInfo(param.templateId, param.templateRequest,  options).toPromise();
    }

    /**
     * Update an existing custom Template.
     * Update a Template
     * @param param the request object
     */
    public updateTemplate(param: DataStreamTemplatesApiUpdateTemplateRequest, options?: ConfigurationOptions): Promise<TemplateResponse> {
        return this.api.updateTemplate(param.templateId, param.templateRequest,  options).toPromise();
    }

}

import { ObservableDigitalCertificatesCertificateRevocationListsApi } from "./ObservableAPI";
import { DigitalCertificatesCertificateRevocationListsApiRequestFactory, DigitalCertificatesCertificateRevocationListsApiResponseProcessor} from "../apis/DigitalCertificatesCertificateRevocationListsApi";

export interface DigitalCertificatesCertificateRevocationListsApiCreateCertificateRevocationListRequest {
    /**
     * 
     * @type CertificateRevocationList
     * @memberof DigitalCertificatesCertificateRevocationListsApicreateCertificateRevocationList
     */
    certificateRevocationList: CertificateRevocationList
}

export interface DigitalCertificatesCertificateRevocationListsApiDeleteCertificateRevocationListRequest {
    /**
     * The unique identifier of the certificate revocation list
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificateRevocationListsApideleteCertificateRevocationList
     */
    crlId: number
}

export interface DigitalCertificatesCertificateRevocationListsApiListCertificateRevocationListsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    fields?: string
    /**
     * Filter by CRL ID (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    id?: number
    /**
     * Filter by issuer (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    issuer?: string
    /**
     * Filter by exact last modified date and time.
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    lastModified?: Date
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    lastModifiedLte?: Date
    /**
     * Filter by exact last update date and time.
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    lastUpdate?: Date
    /**
     * Filter by last update date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    lastUpdateGte?: Date
    /**
     * Filter by last update date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    lastUpdateLte?: Date
    /**
     * Filter by CRL name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    name?: string
    /**
     * Filter by exact next update date and time.
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    nextUpdate?: Date
    /**
     * Filter by next update date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    nextUpdateGte?: Date
    /**
     * Filter by next update date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    nextUpdateLte?: Date
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificateRevocationListsApilistCertificateRevocationLists
     */
    search?: string
}

export interface DigitalCertificatesCertificateRevocationListsApiPartialUpdateCertificateRevocationListRequest {
    /**
     * The unique identifier of the certificate revocation list
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificateRevocationListsApipartialUpdateCertificateRevocationList
     */
    crlId: number
    /**
     * 
     * @type PatchedCertificateRevocationList
     * @memberof DigitalCertificatesCertificateRevocationListsApipartialUpdateCertificateRevocationList
     */
    patchedCertificateRevocationList?: PatchedCertificateRevocationList
}

export interface DigitalCertificatesCertificateRevocationListsApiRetrieveCertificateRevocationListRequest {
    /**
     * The unique identifier of the certificate revocation list
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificateRevocationListsApiretrieveCertificateRevocationList
     */
    crlId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificateRevocationListsApiretrieveCertificateRevocationList
     */
    fields?: string
}

export interface DigitalCertificatesCertificateRevocationListsApiUpdateCertificateRevocationListRequest {
    /**
     * The unique identifier of the certificate revocation list
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificateRevocationListsApiupdateCertificateRevocationList
     */
    crlId: number
    /**
     * 
     * @type CertificateRevocationList
     * @memberof DigitalCertificatesCertificateRevocationListsApiupdateCertificateRevocationList
     */
    certificateRevocationList: CertificateRevocationList
}

export class ObjectDigitalCertificatesCertificateRevocationListsApi {
    private api: ObservableDigitalCertificatesCertificateRevocationListsApi

    public constructor(configuration: Configuration, requestFactory?: DigitalCertificatesCertificateRevocationListsApiRequestFactory, responseProcessor?: DigitalCertificatesCertificateRevocationListsApiResponseProcessor) {
        this.api = new ObservableDigitalCertificatesCertificateRevocationListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new certificate revocation lists (CRL) for your account.
     * Create a certificate revocation lists (CRL)
     * @param param the request object
     */
    public createCertificateRevocationListWithHttpInfo(param: DigitalCertificatesCertificateRevocationListsApiCreateCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateRevocationListResponse>> {
        return this.api.createCertificateRevocationListWithHttpInfo(param.certificateRevocationList,  options).toPromise();
    }

    /**
     * Create a new certificate revocation lists (CRL) for your account.
     * Create a certificate revocation lists (CRL)
     * @param param the request object
     */
    public createCertificateRevocationList(param: DigitalCertificatesCertificateRevocationListsApiCreateCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<CertificateRevocationListResponse> {
        return this.api.createCertificateRevocationList(param.certificateRevocationList,  options).toPromise();
    }

    /**
     * Delete a specific certificate revocation list in your account.
     * Delete a certificate revocation list
     * @param param the request object
     */
    public deleteCertificateRevocationListWithHttpInfo(param: DigitalCertificatesCertificateRevocationListsApiDeleteCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteCertificateRevocationListWithHttpInfo(param.crlId,  options).toPromise();
    }

    /**
     * Delete a specific certificate revocation list in your account.
     * Delete a certificate revocation list
     * @param param the request object
     */
    public deleteCertificateRevocationList(param: DigitalCertificatesCertificateRevocationListsApiDeleteCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteCertificateRevocationList(param.crlId,  options).toPromise();
    }

    /**
     * List all certificate revocation lists (CRL) owned by your account.
     * List certificate revocation lists (CRL)
     * @param param the request object
     */
    public listCertificateRevocationListsWithHttpInfo(param: DigitalCertificatesCertificateRevocationListsApiListCertificateRevocationListsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCertificateRevocationList>> {
        return this.api.listCertificateRevocationListsWithHttpInfo(param.fields, param.id, param.issuer, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.lastUpdate, param.lastUpdateGte, param.lastUpdateLte, param.name, param.nextUpdate, param.nextUpdateGte, param.nextUpdateLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all certificate revocation lists (CRL) owned by your account.
     * List certificate revocation lists (CRL)
     * @param param the request object
     */
    public listCertificateRevocationLists(param: DigitalCertificatesCertificateRevocationListsApiListCertificateRevocationListsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedCertificateRevocationList> {
        return this.api.listCertificateRevocationLists(param.fields, param.id, param.issuer, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.lastUpdate, param.lastUpdateGte, param.lastUpdateLte, param.name, param.nextUpdate, param.nextUpdateGte, param.nextUpdateLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing certificate revocation lists (CRL) without affecting other fields.
     * Update a certificate revocation lists (CRL)
     * @param param the request object
     */
    public partialUpdateCertificateRevocationListWithHttpInfo(param: DigitalCertificatesCertificateRevocationListsApiPartialUpdateCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateRevocationListResponse>> {
        return this.api.partialUpdateCertificateRevocationListWithHttpInfo(param.crlId, param.patchedCertificateRevocationList,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing certificate revocation lists (CRL) without affecting other fields.
     * Update a certificate revocation lists (CRL)
     * @param param the request object
     */
    public partialUpdateCertificateRevocationList(param: DigitalCertificatesCertificateRevocationListsApiPartialUpdateCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<CertificateRevocationListResponse> {
        return this.api.partialUpdateCertificateRevocationList(param.crlId, param.patchedCertificateRevocationList,  options).toPromise();
    }

    /**
     * Retrieve details from a specific certificate revocation lists (CRL) in your account.
     * Retrieve details from a certificate revocation lists (CRL)
     * @param param the request object
     */
    public retrieveCertificateRevocationListWithHttpInfo(param: DigitalCertificatesCertificateRevocationListsApiRetrieveCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateRevocationListResponse>> {
        return this.api.retrieveCertificateRevocationListWithHttpInfo(param.crlId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific certificate revocation lists (CRL) in your account.
     * Retrieve details from a certificate revocation lists (CRL)
     * @param param the request object
     */
    public retrieveCertificateRevocationList(param: DigitalCertificatesCertificateRevocationListsApiRetrieveCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<CertificateRevocationListResponse> {
        return this.api.retrieveCertificateRevocationList(param.crlId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing certificate revocation lists (CRL).  This replaces the entire certificate with the new data provided.
     * Update a certificate revocation lists (CRL)
     * @param param the request object
     */
    public updateCertificateRevocationListWithHttpInfo(param: DigitalCertificatesCertificateRevocationListsApiUpdateCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateRevocationListResponse>> {
        return this.api.updateCertificateRevocationListWithHttpInfo(param.crlId, param.certificateRevocationList,  options).toPromise();
    }

    /**
     * Update an existing certificate revocation lists (CRL).  This replaces the entire certificate with the new data provided.
     * Update a certificate revocation lists (CRL)
     * @param param the request object
     */
    public updateCertificateRevocationList(param: DigitalCertificatesCertificateRevocationListsApiUpdateCertificateRevocationListRequest, options?: ConfigurationOptions): Promise<CertificateRevocationListResponse> {
        return this.api.updateCertificateRevocationList(param.crlId, param.certificateRevocationList,  options).toPromise();
    }

}

import { ObservableDigitalCertificatesCertificateSigningRequestsApi } from "./ObservableAPI";
import { DigitalCertificatesCertificateSigningRequestsApiRequestFactory, DigitalCertificatesCertificateSigningRequestsApiResponseProcessor} from "../apis/DigitalCertificatesCertificateSigningRequestsApi";

export interface DigitalCertificatesCertificateSigningRequestsApiCreateCertificateSigningRequestRequest {
    /**
     * 
     * @type CertificateSigningRequest
     * @memberof DigitalCertificatesCertificateSigningRequestsApicreateCertificateSigningRequest
     */
    certificateSigningRequest: CertificateSigningRequest
}

export class ObjectDigitalCertificatesCertificateSigningRequestsApi {
    private api: ObservableDigitalCertificatesCertificateSigningRequestsApi

    public constructor(configuration: Configuration, requestFactory?: DigitalCertificatesCertificateSigningRequestsApiRequestFactory, responseProcessor?: DigitalCertificatesCertificateSigningRequestsApiResponseProcessor) {
        this.api = new ObservableDigitalCertificatesCertificateSigningRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new certificate signing request (CSR) for your account.
     * Create a certificate signing request (CSR)
     * @param param the request object
     */
    public createCertificateSigningRequestWithHttpInfo(param: DigitalCertificatesCertificateSigningRequestsApiCreateCertificateSigningRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        return this.api.createCertificateSigningRequestWithHttpInfo(param.certificateSigningRequest,  options).toPromise();
    }

    /**
     * Create a new certificate signing request (CSR) for your account.
     * Create a certificate signing request (CSR)
     * @param param the request object
     */
    public createCertificateSigningRequest(param: DigitalCertificatesCertificateSigningRequestsApiCreateCertificateSigningRequestRequest, options?: ConfigurationOptions): Promise<CertificateResponse> {
        return this.api.createCertificateSigningRequest(param.certificateSigningRequest,  options).toPromise();
    }

}

import { ObservableDigitalCertificatesCertificatesApi } from "./ObservableAPI";
import { DigitalCertificatesCertificatesApiRequestFactory, DigitalCertificatesCertificatesApiResponseProcessor} from "../apis/DigitalCertificatesCertificatesApi";

export interface DigitalCertificatesCertificatesApiCreateCertificateRequest {
    /**
     * 
     * @type Certificate
     * @memberof DigitalCertificatesCertificatesApicreateCertificate
     */
    certificate: Certificate
}

export interface DigitalCertificatesCertificatesApiDeleteCertificateRequest {
    /**
     * The unique identifier of the certificate
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificatesApideleteCertificate
     */
    certificateId: number
}

export interface DigitalCertificatesCertificatesApiListCertificatesRequest {
    /**
     * Filter by certificate type (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    certificateType?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    fields?: string
    /**
     * Filter by certificate ID (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    id?: number
    /**
     * Filter by issuer (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    issuer?: string
    /**
     * Filter by exact last modified date and time.
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    lastModified?: Date
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    lastModifiedLte?: Date
    /**
     * Filter by managed status.
     * Defaults to: undefined
     * @type boolean
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    managed?: boolean
    /**
     * Filter by certificate name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    pageSize?: number
    /**
     * Filter by exact renewed date and time.
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    renewedAt?: Date
    /**
     * Filter by renewed date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    renewedAtGte?: Date
    /**
     * Filter by renewed date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    renewedAtLte?: Date
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificatesApilistCertificates
     */
    search?: string
}

export interface DigitalCertificatesCertificatesApiPartialUpdateCertificateRequest {
    /**
     * The unique identifier of the certificate
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificatesApipartialUpdateCertificate
     */
    certificateId: number
    /**
     * 
     * @type PatchedCertificate
     * @memberof DigitalCertificatesCertificatesApipartialUpdateCertificate
     */
    patchedCertificate?: PatchedCertificate
}

export interface DigitalCertificatesCertificatesApiRetrieveCertificateRequest {
    /**
     * The unique identifier of the certificate
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificatesApiretrieveCertificate
     */
    certificateId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof DigitalCertificatesCertificatesApiretrieveCertificate
     */
    fields?: string
}

export interface DigitalCertificatesCertificatesApiUpdateCertificateRequest {
    /**
     * The unique identifier of the certificate
     * Defaults to: undefined
     * @type number
     * @memberof DigitalCertificatesCertificatesApiupdateCertificate
     */
    certificateId: number
    /**
     * 
     * @type Certificate
     * @memberof DigitalCertificatesCertificatesApiupdateCertificate
     */
    certificate: Certificate
}

export class ObjectDigitalCertificatesCertificatesApi {
    private api: ObservableDigitalCertificatesCertificatesApi

    public constructor(configuration: Configuration, requestFactory?: DigitalCertificatesCertificatesApiRequestFactory, responseProcessor?: DigitalCertificatesCertificatesApiResponseProcessor) {
        this.api = new ObservableDigitalCertificatesCertificatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new certificate for your account.
     * Create a certificate
     * @param param the request object
     */
    public createCertificateWithHttpInfo(param: DigitalCertificatesCertificatesApiCreateCertificateRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        return this.api.createCertificateWithHttpInfo(param.certificate,  options).toPromise();
    }

    /**
     * Create a new certificate for your account.
     * Create a certificate
     * @param param the request object
     */
    public createCertificate(param: DigitalCertificatesCertificatesApiCreateCertificateRequest, options?: ConfigurationOptions): Promise<CertificateResponse> {
        return this.api.createCertificate(param.certificate,  options).toPromise();
    }

    /**
     * Delete a specific certificate in your account.
     * Delete a certificate
     * @param param the request object
     */
    public deleteCertificateWithHttpInfo(param: DigitalCertificatesCertificatesApiDeleteCertificateRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteCertificateWithHttpInfo(param.certificateId,  options).toPromise();
    }

    /**
     * Delete a specific certificate in your account.
     * Delete a certificate
     * @param param the request object
     */
    public deleteCertificate(param: DigitalCertificatesCertificatesApiDeleteCertificateRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteCertificate(param.certificateId,  options).toPromise();
    }

    /**
     * List all certificates owned by your account.
     * List certificates
     * @param param the request object
     */
    public listCertificatesWithHttpInfo(param: DigitalCertificatesCertificatesApiListCertificatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCertificateList>> {
        return this.api.listCertificatesWithHttpInfo(param.certificateType, param.fields, param.id, param.issuer, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.managed, param.name, param.ordering, param.page, param.pageSize, param.renewedAt, param.renewedAtGte, param.renewedAtLte, param.search,  options).toPromise();
    }

    /**
     * List all certificates owned by your account.
     * List certificates
     * @param param the request object
     */
    public listCertificates(param: DigitalCertificatesCertificatesApiListCertificatesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedCertificateList> {
        return this.api.listCertificates(param.certificateType, param.fields, param.id, param.issuer, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.managed, param.name, param.ordering, param.page, param.pageSize, param.renewedAt, param.renewedAtGte, param.renewedAtLte, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing certificate without affecting other fields.
     * Partially update a certificate
     * @param param the request object
     */
    public partialUpdateCertificateWithHttpInfo(param: DigitalCertificatesCertificatesApiPartialUpdateCertificateRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        return this.api.partialUpdateCertificateWithHttpInfo(param.certificateId, param.patchedCertificate,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing certificate without affecting other fields.
     * Partially update a certificate
     * @param param the request object
     */
    public partialUpdateCertificate(param: DigitalCertificatesCertificatesApiPartialUpdateCertificateRequest, options?: ConfigurationOptions): Promise<CertificateResponse> {
        return this.api.partialUpdateCertificate(param.certificateId, param.patchedCertificate,  options).toPromise();
    }

    /**
     * Retrieve details from a specific certificate in your account.
     * Retrieve details from a certificate
     * @param param the request object
     */
    public retrieveCertificateWithHttpInfo(param: DigitalCertificatesCertificatesApiRetrieveCertificateRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        return this.api.retrieveCertificateWithHttpInfo(param.certificateId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific certificate in your account.
     * Retrieve details from a certificate
     * @param param the request object
     */
    public retrieveCertificate(param: DigitalCertificatesCertificatesApiRetrieveCertificateRequest, options?: ConfigurationOptions): Promise<CertificateResponse> {
        return this.api.retrieveCertificate(param.certificateId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing certificate. This replaces the entire certificate with the new data provided.
     * Update a certificate
     * @param param the request object
     */
    public updateCertificateWithHttpInfo(param: DigitalCertificatesCertificatesApiUpdateCertificateRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        return this.api.updateCertificateWithHttpInfo(param.certificateId, param.certificate,  options).toPromise();
    }

    /**
     * Update an existing certificate. This replaces the entire certificate with the new data provided.
     * Update a certificate
     * @param param the request object
     */
    public updateCertificate(param: DigitalCertificatesCertificatesApiUpdateCertificateRequest, options?: ConfigurationOptions): Promise<CertificateResponse> {
        return this.api.updateCertificate(param.certificateId, param.certificate,  options).toPromise();
    }

}

import { ObservableDigitalCertificatesRequestACertificateApi } from "./ObservableAPI";
import { DigitalCertificatesRequestACertificateApiRequestFactory, DigitalCertificatesRequestACertificateApiResponseProcessor} from "../apis/DigitalCertificatesRequestACertificateApi";

export interface DigitalCertificatesRequestACertificateApiRequestCertificateRequest {
    /**
     * 
     * @type CertificateRequest
     * @memberof DigitalCertificatesRequestACertificateApirequestCertificate
     */
    certificateRequest: CertificateRequest
}

export class ObjectDigitalCertificatesRequestACertificateApi {
    private api: ObservableDigitalCertificatesRequestACertificateApi

    public constructor(configuration: Configuration, requestFactory?: DigitalCertificatesRequestACertificateApiRequestFactory, responseProcessor?: DigitalCertificatesRequestACertificateApiResponseProcessor) {
        this.api = new ObservableDigitalCertificatesRequestACertificateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Request a new certificate for your account.
     * Request a certificate
     * @param param the request object
     */
    public requestCertificateWithHttpInfo(param: DigitalCertificatesRequestACertificateApiRequestCertificateRequest, options?: ConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        return this.api.requestCertificateWithHttpInfo(param.certificateRequest,  options).toPromise();
    }

    /**
     * Request a new certificate for your account.
     * Request a certificate
     * @param param the request object
     */
    public requestCertificate(param: DigitalCertificatesRequestACertificateApiRequestCertificateRequest, options?: ConfigurationOptions): Promise<CertificateResponse> {
        return this.api.requestCertificate(param.certificateRequest,  options).toPromise();
    }

}

import { ObservableFavoritesApi } from "./ObservableAPI";
import { FavoritesApiRequestFactory, FavoritesApiResponseProcessor} from "../apis/FavoritesApi";

export interface FavoritesApiCreateFavoriteRequest {
    /**
     * 
     * @type FavoriteRequest
     * @memberof FavoritesApicreateFavorite
     */
    favoriteRequest: FavoriteRequest
}

export interface FavoritesApiDeleteFavoriteRequest {
    /**
     * A unique integer value identifying this Favorite.
     * Defaults to: undefined
     * @type number
     * @memberof FavoritesApideleteFavorite
     */
    favoriteId: number
}

export interface FavoritesApiListFavoritesRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FavoritesApilistFavorites
     */
    fields?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FavoritesApilistFavorites
     */
    id?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof FavoritesApilistFavorites
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof FavoritesApilistFavorites
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof FavoritesApilistFavorites
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FavoritesApilistFavorites
     */
    search?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FavoritesApilistFavorites
     */
    type?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FavoritesApilistFavorites
     */
    uri?: string
}

export class ObjectFavoritesApi {
    private api: ObservableFavoritesApi

    public constructor(configuration: Configuration, requestFactory?: FavoritesApiRequestFactory, responseProcessor?: FavoritesApiResponseProcessor) {
        this.api = new ObservableFavoritesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new favorite for your account.
     * Create a new favorite
     * @param param the request object
     */
    public createFavoriteWithHttpInfo(param: FavoritesApiCreateFavoriteRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseFavorite>> {
        return this.api.createFavoriteWithHttpInfo(param.favoriteRequest,  options).toPromise();
    }

    /**
     * Create a new favorite for your account.
     * Create a new favorite
     * @param param the request object
     */
    public createFavorite(param: FavoritesApiCreateFavoriteRequest, options?: ConfigurationOptions): Promise<ResponseFavorite> {
        return this.api.createFavorite(param.favoriteRequest,  options).toPromise();
    }

    /**
     * Delete a specific favorite in your account.
     * Delete a favorite
     * @param param the request object
     */
    public deleteFavoriteWithHttpInfo(param: FavoritesApiDeleteFavoriteRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDeleteFavorite>> {
        return this.api.deleteFavoriteWithHttpInfo(param.favoriteId,  options).toPromise();
    }

    /**
     * Delete a specific favorite in your account.
     * Delete a favorite
     * @param param the request object
     */
    public deleteFavorite(param: FavoritesApiDeleteFavoriteRequest, options?: ConfigurationOptions): Promise<ResponseDeleteFavorite> {
        return this.api.deleteFavorite(param.favoriteId,  options).toPromise();
    }

    /**
     * List all favorites by your account.
     * List of the favorites
     * @param param the request object
     */
    public listFavoritesWithHttpInfo(param: FavoritesApiListFavoritesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFavoriteList>> {
        return this.api.listFavoritesWithHttpInfo(param.fields, param.id, param.ordering, param.page, param.pageSize, param.search, param.type, param.uri,  options).toPromise();
    }

    /**
     * List all favorites by your account.
     * List of the favorites
     * @param param the request object
     */
    public listFavorites(param: FavoritesApiListFavoritesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedFavoriteList> {
        return this.api.listFavorites(param.fields, param.id, param.ordering, param.page, param.pageSize, param.search, param.type, param.uri,  options).toPromise();
    }

}

import { ObservableFirewallVersionsApi } from "./ObservableAPI";
import { FirewallVersionsApiRequestFactory, FirewallVersionsApiResponseProcessor} from "../apis/FirewallVersionsApi";

export interface FirewallVersionsApiArchiveFirewallVersionRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApiarchiveFirewallVersion
     */
    firewallId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApiarchiveFirewallVersion
     */
    versionId: string
    /**
     * 
     * @type VersionArchiveRequest
     * @memberof FirewallVersionsApiarchiveFirewallVersion
     */
    versionArchiveRequest?: VersionArchiveRequest
}

export interface FirewallVersionsApiBuildFirewallVersionRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApibuildFirewallVersion
     */
    firewallId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApibuildFirewallVersion
     */
    versionId: string
    /**
     * 
     * @type VersionBuildRequest
     * @memberof FirewallVersionsApibuildFirewallVersion
     */
    versionBuildRequest?: VersionBuildRequest
}

export interface FirewallVersionsApiCancelFirewallVersionBuildRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApicancelFirewallVersionBuild
     */
    firewallId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApicancelFirewallVersionBuild
     */
    versionId: string
    /**
     * 
     * @type VersionCancelRequest
     * @memberof FirewallVersionsApicancelFirewallVersionBuild
     */
    versionCancelRequest?: VersionCancelRequest
}

export interface FirewallVersionsApiCreateFirewallVersionRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApicreateFirewallVersion
     */
    firewallId: number
    /**
     * 
     * @type VersionCreateRequest
     * @memberof FirewallVersionsApicreateFirewallVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export interface FirewallVersionsApiDeleteFirewallVersionRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApideleteFirewallVersion
     */
    firewallId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApideleteFirewallVersion
     */
    versionId: string
}

export interface FirewallVersionsApiListFirewallVersionsRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApilistFirewallVersions
     */
    firewallId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApilistFirewallVersions
     */
    fields?: string
}

export interface FirewallVersionsApiPartialUpdateFirewallVersionRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApipartialUpdateFirewallVersion
     */
    firewallId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApipartialUpdateFirewallVersion
     */
    versionId: string
    /**
     * 
     * @type PatchedVersionCreateRequest
     * @memberof FirewallVersionsApipartialUpdateFirewallVersion
     */
    patchedVersionCreateRequest?: PatchedVersionCreateRequest
}

export interface FirewallVersionsApiRetrieveFirewallVersionRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApiretrieveFirewallVersion
     */
    firewallId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApiretrieveFirewallVersion
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApiretrieveFirewallVersion
     */
    fields?: string
}

export interface FirewallVersionsApiUpdateFirewallVersionRequest {
    /**
     * The ID of the Firewall resource.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallVersionsApiupdateFirewallVersion
     */
    firewallId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallVersionsApiupdateFirewallVersion
     */
    versionId: string
    /**
     * 
     * @type VersionCreateRequest
     * @memberof FirewallVersionsApiupdateFirewallVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export class ObjectFirewallVersionsApi {
    private api: ObservableFirewallVersionsApi

    public constructor(configuration: Configuration, requestFactory?: FirewallVersionsApiRequestFactory, responseProcessor?: FirewallVersionsApiResponseProcessor) {
        this.api = new ObservableFirewallVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a Firewall version
     * @param param the request object
     */
    public archiveFirewallVersionWithHttpInfo(param: FirewallVersionsApiArchiveFirewallVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveFirewallVersionWithHttpInfo(param.firewallId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a Firewall version
     * @param param the request object
     */
    public archiveFirewallVersion(param: FirewallVersionsApiArchiveFirewallVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveFirewallVersion(param.firewallId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Firewall version
     * @param param the request object
     */
    public buildFirewallVersionWithHttpInfo(param: FirewallVersionsApiBuildFirewallVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.buildFirewallVersionWithHttpInfo(param.firewallId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Firewall version
     * @param param the request object
     */
    public buildFirewallVersion(param: FirewallVersionsApiBuildFirewallVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.buildFirewallVersion(param.firewallId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Firewall version build
     * @param param the request object
     */
    public cancelFirewallVersionBuildWithHttpInfo(param: FirewallVersionsApiCancelFirewallVersionBuildRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelFirewallVersionBuildWithHttpInfo(param.firewallId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Firewall version build
     * @param param the request object
     */
    public cancelFirewallVersionBuild(param: FirewallVersionsApiCancelFirewallVersionBuildRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelFirewallVersionBuild(param.firewallId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Firewall version
     * @param param the request object
     */
    public createFirewallVersionWithHttpInfo(param: FirewallVersionsApiCreateFirewallVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createFirewallVersionWithHttpInfo(param.firewallId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Firewall version
     * @param param the request object
     */
    public createFirewallVersion(param: FirewallVersionsApiCreateFirewallVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createFirewallVersion(param.firewallId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Firewall version
     * @param param the request object
     */
    public deleteFirewallVersionWithHttpInfo(param: FirewallVersionsApiDeleteFirewallVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFirewallVersionWithHttpInfo(param.firewallId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Firewall version
     * @param param the request object
     */
    public deleteFirewallVersion(param: FirewallVersionsApiDeleteFirewallVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFirewallVersion(param.firewallId, param.versionId,  options).toPromise();
    }

    /**
     * List all versions of a specific Firewall.
     * List Firewall versions
     * @param param the request object
     */
    public listFirewallVersionsWithHttpInfo(param: FirewallVersionsApiListFirewallVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.listFirewallVersionsWithHttpInfo(param.firewallId, param.fields,  options).toPromise();
    }

    /**
     * List all versions of a specific Firewall.
     * List Firewall versions
     * @param param the request object
     */
    public listFirewallVersions(param: FirewallVersionsApiListFirewallVersionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.listFirewallVersions(param.firewallId, param.fields,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Firewall version
     * @param param the request object
     */
    public partialUpdateFirewallVersionWithHttpInfo(param: FirewallVersionsApiPartialUpdateFirewallVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.partialUpdateFirewallVersionWithHttpInfo(param.firewallId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Firewall version
     * @param param the request object
     */
    public partialUpdateFirewallVersion(param: FirewallVersionsApiPartialUpdateFirewallVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.partialUpdateFirewallVersion(param.firewallId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Firewall version
     * @param param the request object
     */
    public retrieveFirewallVersionWithHttpInfo(param: FirewallVersionsApiRetrieveFirewallVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.retrieveFirewallVersionWithHttpInfo(param.firewallId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Firewall version
     * @param param the request object
     */
    public retrieveFirewallVersion(param: FirewallVersionsApiRetrieveFirewallVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.retrieveFirewallVersion(param.firewallId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a Firewall version
     * @param param the request object
     */
    public updateFirewallVersionWithHttpInfo(param: FirewallVersionsApiUpdateFirewallVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateFirewallVersionWithHttpInfo(param.firewallId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a Firewall version
     * @param param the request object
     */
    public updateFirewallVersion(param: FirewallVersionsApiUpdateFirewallVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateFirewallVersion(param.firewallId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

}

import { ObservableFirewallsApi } from "./ObservableAPI";
import { FirewallsApiRequestFactory, FirewallsApiResponseProcessor} from "../apis/FirewallsApi";

export interface FirewallsApiCloneFirewallRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsApicloneFirewall
     */
    firewallId: number
    /**
     * 
     * @type CloneFirewallRequest
     * @memberof FirewallsApicloneFirewall
     */
    cloneFirewallRequest: CloneFirewallRequest
}

export interface FirewallsApiCreateFirewallRequest {
    /**
     * 
     * @type FirewallRequest
     * @memberof FirewallsApicreateFirewall
     */
    firewallRequest: FirewallRequest
}

export interface FirewallsApiDeleteFirewallRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsApideleteFirewall
     */
    firewallId: number
}

export interface FirewallsApiListFirewallsRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof FirewallsApilistFirewalls
     */
    active?: boolean
    /**
     * Filter by debug rules status.
     * Defaults to: undefined
     * @type boolean
     * @memberof FirewallsApilistFirewalls
     */
    debug?: boolean
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsApilistFirewalls
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsApilistFirewalls
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsApilistFirewalls
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsApilistFirewalls
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsApilistFirewalls
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsApilistFirewalls
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsApilistFirewalls
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsApilistFirewalls
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsApilistFirewalls
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsApilistFirewalls
     */
    search?: string
}

export interface FirewallsApiPartialUpdateFirewallRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsApipartialUpdateFirewall
     */
    firewallId: number
    /**
     * 
     * @type PatchedFirewallRequest
     * @memberof FirewallsApipartialUpdateFirewall
     */
    patchedFirewallRequest?: PatchedFirewallRequest
}

export interface FirewallsApiRetrieveFirewallRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsApiretrieveFirewall
     */
    firewallId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsApiretrieveFirewall
     */
    fields?: string
}

export interface FirewallsApiUpdateFirewallRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsApiupdateFirewall
     */
    firewallId: number
    /**
     * 
     * @type FirewallRequest
     * @memberof FirewallsApiupdateFirewall
     */
    firewallRequest: FirewallRequest
}

export class ObjectFirewallsApi {
    private api: ObservableFirewallsApi

    public constructor(configuration: Configuration, requestFactory?: FirewallsApiRequestFactory, responseProcessor?: FirewallsApiResponseProcessor) {
        this.api = new ObservableFirewallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Firewall by performing a deep copy of an existing Firewall, including its Function Instances and Rules Engine.
     * Clone a Firewall
     * @param param the request object
     */
    public cloneFirewallWithHttpInfo(param: FirewallsApiCloneFirewallRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        return this.api.cloneFirewallWithHttpInfo(param.firewallId, param.cloneFirewallRequest,  options).toPromise();
    }

    /**
     * Create a new Firewall by performing a deep copy of an existing Firewall, including its Function Instances and Rules Engine.
     * Clone a Firewall
     * @param param the request object
     */
    public cloneFirewall(param: FirewallsApiCloneFirewallRequest, options?: ConfigurationOptions): Promise<FirewallResponse> {
        return this.api.cloneFirewall(param.firewallId, param.cloneFirewallRequest,  options).toPromise();
    }

    /**
     * Create a new Firewall for your account.
     * Create a Firewall
     * @param param the request object
     */
    public createFirewallWithHttpInfo(param: FirewallsApiCreateFirewallRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        return this.api.createFirewallWithHttpInfo(param.firewallRequest,  options).toPromise();
    }

    /**
     * Create a new Firewall for your account.
     * Create a Firewall
     * @param param the request object
     */
    public createFirewall(param: FirewallsApiCreateFirewallRequest, options?: ConfigurationOptions): Promise<FirewallResponse> {
        return this.api.createFirewall(param.firewallRequest,  options).toPromise();
    }

    /**
     * Delete a specific Firewall in your account.
     * Delete a Firewall
     * @param param the request object
     */
    public deleteFirewallWithHttpInfo(param: FirewallsApiDeleteFirewallRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteFirewallWithHttpInfo(param.firewallId,  options).toPromise();
    }

    /**
     * Delete a specific Firewall in your account.
     * Delete a Firewall
     * @param param the request object
     */
    public deleteFirewall(param: FirewallsApiDeleteFirewallRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteFirewall(param.firewallId,  options).toPromise();
    }

    /**
     * List all Firewalls owned by your account.
     * List Firewalls
     * @param param the request object
     */
    public listFirewallsWithHttpInfo(param: FirewallsApiListFirewallsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFirewallList>> {
        return this.api.listFirewallsWithHttpInfo(param.active, param.debug, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Firewalls owned by your account.
     * List Firewalls
     * @param param the request object
     */
    public listFirewalls(param: FirewallsApiListFirewallsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedFirewallList> {
        return this.api.listFirewalls(param.active, param.debug, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall without affecting other fields.
     * Partially update a Firewall
     * @param param the request object
     */
    public partialUpdateFirewallWithHttpInfo(param: FirewallsApiPartialUpdateFirewallRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        return this.api.partialUpdateFirewallWithHttpInfo(param.firewallId, param.patchedFirewallRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall without affecting other fields.
     * Partially update a Firewall
     * @param param the request object
     */
    public partialUpdateFirewall(param: FirewallsApiPartialUpdateFirewallRequest, options?: ConfigurationOptions): Promise<FirewallResponse> {
        return this.api.partialUpdateFirewall(param.firewallId, param.patchedFirewallRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific Firewall in your account.
     * Retrieve details from a Firewall
     * @param param the request object
     */
    public retrieveFirewallWithHttpInfo(param: FirewallsApiRetrieveFirewallRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        return this.api.retrieveFirewallWithHttpInfo(param.firewallId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific Firewall in your account.
     * Retrieve details from a Firewall
     * @param param the request object
     */
    public retrieveFirewall(param: FirewallsApiRetrieveFirewallRequest, options?: ConfigurationOptions): Promise<FirewallResponse> {
        return this.api.retrieveFirewall(param.firewallId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Firewall. This replaces the entire Firewall with the new data provided.
     * Update a Firewall
     * @param param the request object
     */
    public updateFirewallWithHttpInfo(param: FirewallsApiUpdateFirewallRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        return this.api.updateFirewallWithHttpInfo(param.firewallId, param.firewallRequest,  options).toPromise();
    }

    /**
     * Update an existing Firewall. This replaces the entire Firewall with the new data provided.
     * Update a Firewall
     * @param param the request object
     */
    public updateFirewall(param: FirewallsApiUpdateFirewallRequest, options?: ConfigurationOptions): Promise<FirewallResponse> {
        return this.api.updateFirewall(param.firewallId, param.firewallRequest,  options).toPromise();
    }

}

import { ObservableFirewallsFunctionApi } from "./ObservableAPI";
import { FirewallsFunctionApiRequestFactory, FirewallsFunctionApiResponseProcessor} from "../apis/FirewallsFunctionApi";

export interface FirewallsFunctionApiCreateFirewallFunctionRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApicreateFirewallFunction
     */
    firewallId: number
    /**
     * 
     * @type FirewallFunctionInstanceRequest
     * @memberof FirewallsFunctionApicreateFirewallFunction
     */
    firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest
}

export interface FirewallsFunctionApiCreateFirewallFunction2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApicreateFirewallFunction2
     */
    firewallId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApicreateFirewallFunction2
     */
    versionId: string
    /**
     * 
     * @type FirewallFunctionInstanceRequest
     * @memberof FirewallsFunctionApicreateFirewallFunction2
     */
    firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest
}

export interface FirewallsFunctionApiDeleteFirewallFunctionRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApideleteFirewallFunction
     */
    firewallId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApideleteFirewallFunction
     */
    functionId: number
}

export interface FirewallsFunctionApiDeleteFirewallFunction2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApideleteFirewallFunction2
     */
    firewallId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApideleteFirewallFunction2
     */
    functionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApideleteFirewallFunction2
     */
    versionId: string
}

export interface FirewallsFunctionApiListFirewallFunctionRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    firewallId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction
     */
    search?: string
}

export interface FirewallsFunctionApiListFirewallFunction2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    firewallId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApilistFirewallFunction2
     */
    search?: string
}

export interface FirewallsFunctionApiPartialUpdateFirewallFunctionRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApipartialUpdateFirewallFunction
     */
    firewallId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApipartialUpdateFirewallFunction
     */
    functionId: number
    /**
     * 
     * @type PatchedFirewallFunctionInstanceRequest
     * @memberof FirewallsFunctionApipartialUpdateFirewallFunction
     */
    patchedFirewallFunctionInstanceRequest?: PatchedFirewallFunctionInstanceRequest
}

export interface FirewallsFunctionApiPartialUpdateFirewallFunction2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApipartialUpdateFirewallFunction2
     */
    firewallId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApipartialUpdateFirewallFunction2
     */
    functionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApipartialUpdateFirewallFunction2
     */
    versionId: string
    /**
     * 
     * @type PatchedFirewallFunctionInstanceRequest
     * @memberof FirewallsFunctionApipartialUpdateFirewallFunction2
     */
    patchedFirewallFunctionInstanceRequest?: PatchedFirewallFunctionInstanceRequest
}

export interface FirewallsFunctionApiRetrieveFirewallFunctionRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApiretrieveFirewallFunction
     */
    firewallId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApiretrieveFirewallFunction
     */
    functionId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApiretrieveFirewallFunction
     */
    fields?: string
}

export interface FirewallsFunctionApiRetrieveFirewallFunction2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApiretrieveFirewallFunction2
     */
    firewallId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApiretrieveFirewallFunction2
     */
    functionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApiretrieveFirewallFunction2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApiretrieveFirewallFunction2
     */
    fields?: string
}

export interface FirewallsFunctionApiUpdateFirewallFunctionRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApiupdateFirewallFunction
     */
    firewallId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApiupdateFirewallFunction
     */
    functionId: number
    /**
     * 
     * @type FirewallFunctionInstanceRequest
     * @memberof FirewallsFunctionApiupdateFirewallFunction
     */
    firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest
}

export interface FirewallsFunctionApiUpdateFirewallFunction2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApiupdateFirewallFunction2
     */
    firewallId: number
    /**
     * A unique integer value identifying the function instance.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsFunctionApiupdateFirewallFunction2
     */
    functionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsFunctionApiupdateFirewallFunction2
     */
    versionId: string
    /**
     * 
     * @type FirewallFunctionInstanceRequest
     * @memberof FirewallsFunctionApiupdateFirewallFunction2
     */
    firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest
}

export class ObjectFirewallsFunctionApi {
    private api: ObservableFirewallsFunctionApi

    public constructor(configuration: Configuration, requestFactory?: FirewallsFunctionApiRequestFactory, responseProcessor?: FirewallsFunctionApiResponseProcessor) {
        this.api = new ObservableFirewallsFunctionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Function Instance for a specific Firewall in your account.
     * Create an Firewall Function
     * @param param the request object
     */
    public createFirewallFunctionWithHttpInfo(param: FirewallsFunctionApiCreateFirewallFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        return this.api.createFirewallFunctionWithHttpInfo(param.firewallId, param.firewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Create a new Function Instance for a specific Firewall in your account.
     * Create an Firewall Function
     * @param param the request object
     */
    public createFirewallFunction(param: FirewallsFunctionApiCreateFirewallFunctionRequest, options?: ConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        return this.api.createFirewallFunction(param.firewallId, param.firewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Create a new Function Instance for a specific Firewall in your account.
     * Create an Firewall Function
     * @param param the request object
     */
    public createFirewallFunction2WithHttpInfo(param: FirewallsFunctionApiCreateFirewallFunction2Request, options?: ConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        return this.api.createFirewallFunction2WithHttpInfo(param.firewallId, param.versionId, param.firewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Create a new Function Instance for a specific Firewall in your account.
     * Create an Firewall Function
     * @param param the request object
     */
    public createFirewallFunction2(param: FirewallsFunctionApiCreateFirewallFunction2Request, options?: ConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        return this.api.createFirewallFunction2(param.firewallId, param.versionId, param.firewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Delete a specific Firewall Function Instance in your account.
     * Delete an Firewall Function
     * @param param the request object
     */
    public deleteFirewallFunctionWithHttpInfo(param: FirewallsFunctionApiDeleteFirewallFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteFirewallFunctionWithHttpInfo(param.firewallId, param.functionId,  options).toPromise();
    }

    /**
     * Delete a specific Firewall Function Instance in your account.
     * Delete an Firewall Function
     * @param param the request object
     */
    public deleteFirewallFunction(param: FirewallsFunctionApiDeleteFirewallFunctionRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteFirewallFunction(param.firewallId, param.functionId,  options).toPromise();
    }

    /**
     * Delete a specific Firewall Function Instance in your account.
     * Delete an Firewall Function
     * @param param the request object
     */
    public deleteFirewallFunction2WithHttpInfo(param: FirewallsFunctionApiDeleteFirewallFunction2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteFirewallFunction2WithHttpInfo(param.firewallId, param.functionId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific Firewall Function Instance in your account.
     * Delete an Firewall Function
     * @param param the request object
     */
    public deleteFirewallFunction2(param: FirewallsFunctionApiDeleteFirewallFunction2Request, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteFirewallFunction2(param.firewallId, param.functionId, param.versionId,  options).toPromise();
    }

    /**
     * List all Function Instances for a specific Firewall owned by your account.
     * List Firewall Function
     * @param param the request object
     */
    public listFirewallFunctionWithHttpInfo(param: FirewallsFunctionApiListFirewallFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFirewallFunctionInstanceList>> {
        return this.api.listFirewallFunctionWithHttpInfo(param.firewallId, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Function Instances for a specific Firewall owned by your account.
     * List Firewall Function
     * @param param the request object
     */
    public listFirewallFunction(param: FirewallsFunctionApiListFirewallFunctionRequest, options?: ConfigurationOptions): Promise<PaginatedFirewallFunctionInstanceList> {
        return this.api.listFirewallFunction(param.firewallId, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Function Instances for a specific Firewall owned by your account.
     * List Firewall Function
     * @param param the request object
     */
    public listFirewallFunction2WithHttpInfo(param: FirewallsFunctionApiListFirewallFunction2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFirewallFunctionInstanceList>> {
        return this.api.listFirewallFunction2WithHttpInfo(param.firewallId, param.versionId, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Function Instances for a specific Firewall owned by your account.
     * List Firewall Function
     * @param param the request object
     */
    public listFirewallFunction2(param: FirewallsFunctionApiListFirewallFunction2Request, options?: ConfigurationOptions): Promise<PaginatedFirewallFunctionInstanceList> {
        return this.api.listFirewallFunction2(param.firewallId, param.versionId, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Function Instance without affecting other fields.
     * Partially update an Firewall Function
     * @param param the request object
     */
    public partialUpdateFirewallFunctionWithHttpInfo(param: FirewallsFunctionApiPartialUpdateFirewallFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        return this.api.partialUpdateFirewallFunctionWithHttpInfo(param.firewallId, param.functionId, param.patchedFirewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Function Instance without affecting other fields.
     * Partially update an Firewall Function
     * @param param the request object
     */
    public partialUpdateFirewallFunction(param: FirewallsFunctionApiPartialUpdateFirewallFunctionRequest, options?: ConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        return this.api.partialUpdateFirewallFunction(param.firewallId, param.functionId, param.patchedFirewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Function Instance without affecting other fields.
     * Partially update an Firewall Function
     * @param param the request object
     */
    public partialUpdateFirewallFunction2WithHttpInfo(param: FirewallsFunctionApiPartialUpdateFirewallFunction2Request, options?: ConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        return this.api.partialUpdateFirewallFunction2WithHttpInfo(param.firewallId, param.functionId, param.versionId, param.patchedFirewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Function Instance without affecting other fields.
     * Partially update an Firewall Function
     * @param param the request object
     */
    public partialUpdateFirewallFunction2(param: FirewallsFunctionApiPartialUpdateFirewallFunction2Request, options?: ConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        return this.api.partialUpdateFirewallFunction2(param.firewallId, param.functionId, param.versionId, param.patchedFirewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Firewall Function Instance in your account.
     * Retrieve details of an Firewall Function
     * @param param the request object
     */
    public retrieveFirewallFunctionWithHttpInfo(param: FirewallsFunctionApiRetrieveFirewallFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        return this.api.retrieveFirewallFunctionWithHttpInfo(param.firewallId, param.functionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Firewall Function Instance in your account.
     * Retrieve details of an Firewall Function
     * @param param the request object
     */
    public retrieveFirewallFunction(param: FirewallsFunctionApiRetrieveFirewallFunctionRequest, options?: ConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        return this.api.retrieveFirewallFunction(param.firewallId, param.functionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Firewall Function Instance in your account.
     * Retrieve details of an Firewall Function
     * @param param the request object
     */
    public retrieveFirewallFunction2WithHttpInfo(param: FirewallsFunctionApiRetrieveFirewallFunction2Request, options?: ConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        return this.api.retrieveFirewallFunction2WithHttpInfo(param.firewallId, param.functionId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Firewall Function Instance in your account.
     * Retrieve details of an Firewall Function
     * @param param the request object
     */
    public retrieveFirewallFunction2(param: FirewallsFunctionApiRetrieveFirewallFunction2Request, options?: ConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        return this.api.retrieveFirewallFunction2(param.firewallId, param.functionId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Firewall Function
     * @param param the request object
     */
    public updateFirewallFunctionWithHttpInfo(param: FirewallsFunctionApiUpdateFirewallFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        return this.api.updateFirewallFunctionWithHttpInfo(param.firewallId, param.functionId, param.firewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Firewall Function
     * @param param the request object
     */
    public updateFirewallFunction(param: FirewallsFunctionApiUpdateFirewallFunctionRequest, options?: ConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        return this.api.updateFirewallFunction(param.firewallId, param.functionId, param.firewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Firewall Function
     * @param param the request object
     */
    public updateFirewallFunction2WithHttpInfo(param: FirewallsFunctionApiUpdateFirewallFunction2Request, options?: ConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        return this.api.updateFirewallFunction2WithHttpInfo(param.firewallId, param.functionId, param.versionId, param.firewallFunctionInstanceRequest,  options).toPromise();
    }

    /**
     * Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Firewall Function
     * @param param the request object
     */
    public updateFirewallFunction2(param: FirewallsFunctionApiUpdateFirewallFunction2Request, options?: ConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        return this.api.updateFirewallFunction2(param.firewallId, param.functionId, param.versionId, param.firewallFunctionInstanceRequest,  options).toPromise();
    }

}

import { ObservableFirewallsRulesEngineApi } from "./ObservableAPI";
import { FirewallsRulesEngineApiRequestFactory, FirewallsRulesEngineApiResponseProcessor} from "../apis/FirewallsRulesEngineApi";

export interface FirewallsRulesEngineApiCreateFirewallRuleRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApicreateFirewallRule
     */
    firewallId: number
    /**
     * 
     * @type FirewallRuleRequest
     * @memberof FirewallsRulesEngineApicreateFirewallRule
     */
    firewallRuleRequest: FirewallRuleRequest
}

export interface FirewallsRulesEngineApiCreateFirewallRule2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApicreateFirewallRule2
     */
    firewallId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApicreateFirewallRule2
     */
    versionId: string
    /**
     * 
     * @type FirewallRuleRequest
     * @memberof FirewallsRulesEngineApicreateFirewallRule2
     */
    firewallRuleRequest: FirewallRuleRequest
}

export interface FirewallsRulesEngineApiDeleteFirewallRuleRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApideleteFirewallRule
     */
    firewallId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApideleteFirewallRule
     */
    requestRuleId: number
}

export interface FirewallsRulesEngineApiDeleteFirewallRule2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApideleteFirewallRule2
     */
    firewallId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApideleteFirewallRule2
     */
    requestRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApideleteFirewallRule2
     */
    versionId: string
}

export interface FirewallsRulesEngineApiListFirewallRulesRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    firewallId: number
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    name?: string
    /**
     * Filter by order (greater than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    orderGte?: number
    /**
     * Filter by order (less than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    orderLte?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules
     */
    search?: string
}

export interface FirewallsRulesEngineApiListFirewallRules2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    firewallId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    versionId: string
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    name?: string
    /**
     * Filter by order (greater than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    orderGte?: number
    /**
     * Filter by order (less than or equal).
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    orderLte?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApilistFirewallRules2
     */
    search?: string
}

export interface FirewallsRulesEngineApiOrderFirewallRulesRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiorderFirewallRules
     */
    firewallId: number
    /**
     * 
     * @type FirewallRuleEngineOrderRequest
     * @memberof FirewallsRulesEngineApiorderFirewallRules
     */
    firewallRuleEngineOrderRequest: FirewallRuleEngineOrderRequest
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApiorderFirewallRules
     */
    search?: string
}

export interface FirewallsRulesEngineApiOrderFirewallRules2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiorderFirewallRules2
     */
    firewallId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApiorderFirewallRules2
     */
    versionId: string
    /**
     * 
     * @type FirewallRuleEngineOrderRequest
     * @memberof FirewallsRulesEngineApiorderFirewallRules2
     */
    firewallRuleEngineOrderRequest: FirewallRuleEngineOrderRequest
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApiorderFirewallRules2
     */
    search?: string
}

export interface FirewallsRulesEngineApiPartialUpdateFirewallRuleRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApipartialUpdateFirewallRule
     */
    firewallId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApipartialUpdateFirewallRule
     */
    requestRuleId: number
    /**
     * 
     * @type PatchedFirewallRuleRequest
     * @memberof FirewallsRulesEngineApipartialUpdateFirewallRule
     */
    patchedFirewallRuleRequest?: PatchedFirewallRuleRequest
}

export interface FirewallsRulesEngineApiPartialUpdateFirewallRule2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApipartialUpdateFirewallRule2
     */
    firewallId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApipartialUpdateFirewallRule2
     */
    requestRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApipartialUpdateFirewallRule2
     */
    versionId: string
    /**
     * 
     * @type PatchedFirewallRuleRequest
     * @memberof FirewallsRulesEngineApipartialUpdateFirewallRule2
     */
    patchedFirewallRuleRequest?: PatchedFirewallRuleRequest
}

export interface FirewallsRulesEngineApiRetrieveFirewallRuleRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiretrieveFirewallRule
     */
    firewallId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiretrieveFirewallRule
     */
    requestRuleId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApiretrieveFirewallRule
     */
    fields?: string
}

export interface FirewallsRulesEngineApiRetrieveFirewallRule2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiretrieveFirewallRule2
     */
    firewallId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiretrieveFirewallRule2
     */
    requestRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApiretrieveFirewallRule2
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApiretrieveFirewallRule2
     */
    fields?: string
}

export interface FirewallsRulesEngineApiUpdateFirewallRuleRequest {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiupdateFirewallRule
     */
    firewallId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiupdateFirewallRule
     */
    requestRuleId: number
    /**
     * 
     * @type FirewallRuleRequest
     * @memberof FirewallsRulesEngineApiupdateFirewallRule
     */
    firewallRuleRequest: FirewallRuleRequest
}

export interface FirewallsRulesEngineApiUpdateFirewallRule2Request {
    /**
     * A unique integer value identifying the firewall.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiupdateFirewallRule2
     */
    firewallId: number
    /**
     * A unique integer value identifying the request rule.
     * Defaults to: undefined
     * @type number
     * @memberof FirewallsRulesEngineApiupdateFirewallRule2
     */
    requestRuleId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FirewallsRulesEngineApiupdateFirewallRule2
     */
    versionId: string
    /**
     * 
     * @type FirewallRuleRequest
     * @memberof FirewallsRulesEngineApiupdateFirewallRule2
     */
    firewallRuleRequest: FirewallRuleRequest
}

export class ObjectFirewallsRulesEngineApi {
    private api: ObservableFirewallsRulesEngineApi

    public constructor(configuration: Configuration, requestFactory?: FirewallsRulesEngineApiRequestFactory, responseProcessor?: FirewallsRulesEngineApiResponseProcessor) {
        this.api = new ObservableFirewallsRulesEngineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Rule for a specific Firewall in your account.
     * Create an Firewall Rule
     * @param param the request object
     */
    public createFirewallRuleWithHttpInfo(param: FirewallsRulesEngineApiCreateFirewallRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        return this.api.createFirewallRuleWithHttpInfo(param.firewallId, param.firewallRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Firewall in your account.
     * Create an Firewall Rule
     * @param param the request object
     */
    public createFirewallRule(param: FirewallsRulesEngineApiCreateFirewallRuleRequest, options?: ConfigurationOptions): Promise<FirewallRuleResponse> {
        return this.api.createFirewallRule(param.firewallId, param.firewallRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Firewall in your account.
     * Create an Firewall Rule
     * @param param the request object
     */
    public createFirewallRule2WithHttpInfo(param: FirewallsRulesEngineApiCreateFirewallRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        return this.api.createFirewallRule2WithHttpInfo(param.firewallId, param.versionId, param.firewallRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Rule for a specific Firewall in your account.
     * Create an Firewall Rule
     * @param param the request object
     */
    public createFirewallRule2(param: FirewallsRulesEngineApiCreateFirewallRule2Request, options?: ConfigurationOptions): Promise<FirewallRuleResponse> {
        return this.api.createFirewallRule2(param.firewallId, param.versionId, param.firewallRuleRequest,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Firewall Rule
     * @param param the request object
     */
    public deleteFirewallRuleWithHttpInfo(param: FirewallsRulesEngineApiDeleteFirewallRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteFirewallRuleWithHttpInfo(param.firewallId, param.requestRuleId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Firewall Rule
     * @param param the request object
     */
    public deleteFirewallRule(param: FirewallsRulesEngineApiDeleteFirewallRuleRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteFirewallRule(param.firewallId, param.requestRuleId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Firewall Rule
     * @param param the request object
     */
    public deleteFirewallRule2WithHttpInfo(param: FirewallsRulesEngineApiDeleteFirewallRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteFirewallRule2WithHttpInfo(param.firewallId, param.requestRuleId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Firewall Rule
     * @param param the request object
     */
    public deleteFirewallRule2(param: FirewallsRulesEngineApiDeleteFirewallRule2Request, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteFirewallRule2(param.firewallId, param.requestRuleId, param.versionId,  options).toPromise();
    }

    /**
     * List all Rules for a specific Firewall owned by your account.
     * List Firewall Rules
     * @param param the request object
     */
    public listFirewallRulesWithHttpInfo(param: FirewallsRulesEngineApiListFirewallRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFirewallRuleList>> {
        return this.api.listFirewallRulesWithHttpInfo(param.firewallId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Firewall owned by your account.
     * List Firewall Rules
     * @param param the request object
     */
    public listFirewallRules(param: FirewallsRulesEngineApiListFirewallRulesRequest, options?: ConfigurationOptions): Promise<PaginatedFirewallRuleList> {
        return this.api.listFirewallRules(param.firewallId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Firewall owned by your account.
     * List Firewall Rules
     * @param param the request object
     */
    public listFirewallRules2WithHttpInfo(param: FirewallsRulesEngineApiListFirewallRules2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFirewallRuleList>> {
        return this.api.listFirewallRules2WithHttpInfo(param.firewallId, param.versionId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Rules for a specific Firewall owned by your account.
     * List Firewall Rules
     * @param param the request object
     */
    public listFirewallRules2(param: FirewallsRulesEngineApiListFirewallRules2Request, options?: ConfigurationOptions): Promise<PaginatedFirewallRuleList> {
        return this.api.listFirewallRules2(param.firewallId, param.versionId, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.orderGte, param.orderLte, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Firewall owned by your account.
     * Ordering Firewall Rules
     * @param param the request object
     */
    public orderFirewallRulesWithHttpInfo(param: FirewallsRulesEngineApiOrderFirewallRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFirewallRuleList>> {
        return this.api.orderFirewallRulesWithHttpInfo(param.firewallId, param.firewallRuleEngineOrderRequest, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Firewall owned by your account.
     * Ordering Firewall Rules
     * @param param the request object
     */
    public orderFirewallRules(param: FirewallsRulesEngineApiOrderFirewallRulesRequest, options?: ConfigurationOptions): Promise<PaginatedFirewallRuleList> {
        return this.api.orderFirewallRules(param.firewallId, param.firewallRuleEngineOrderRequest, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Firewall owned by your account.
     * Ordering Firewall Rules
     * @param param the request object
     */
    public orderFirewallRules2WithHttpInfo(param: FirewallsRulesEngineApiOrderFirewallRules2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFirewallRuleList>> {
        return this.api.orderFirewallRules2WithHttpInfo(param.firewallId, param.versionId, param.firewallRuleEngineOrderRequest, param.search,  options).toPromise();
    }

    /**
     * Reorder all Rules for a specific Firewall owned by your account.
     * Ordering Firewall Rules
     * @param param the request object
     */
    public orderFirewallRules2(param: FirewallsRulesEngineApiOrderFirewallRules2Request, options?: ConfigurationOptions): Promise<PaginatedFirewallRuleList> {
        return this.api.orderFirewallRules2(param.firewallId, param.versionId, param.firewallRuleEngineOrderRequest, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Rule without affecting other fields.
     * Partially update an Firewall Rule
     * @param param the request object
     */
    public partialUpdateFirewallRuleWithHttpInfo(param: FirewallsRulesEngineApiPartialUpdateFirewallRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        return this.api.partialUpdateFirewallRuleWithHttpInfo(param.firewallId, param.requestRuleId, param.patchedFirewallRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Rule without affecting other fields.
     * Partially update an Firewall Rule
     * @param param the request object
     */
    public partialUpdateFirewallRule(param: FirewallsRulesEngineApiPartialUpdateFirewallRuleRequest, options?: ConfigurationOptions): Promise<FirewallRuleResponse> {
        return this.api.partialUpdateFirewallRule(param.firewallId, param.requestRuleId, param.patchedFirewallRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Rule without affecting other fields.
     * Partially update an Firewall Rule
     * @param param the request object
     */
    public partialUpdateFirewallRule2WithHttpInfo(param: FirewallsRulesEngineApiPartialUpdateFirewallRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        return this.api.partialUpdateFirewallRule2WithHttpInfo(param.firewallId, param.requestRuleId, param.versionId, param.patchedFirewallRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Rule without affecting other fields.
     * Partially update an Firewall Rule
     * @param param the request object
     */
    public partialUpdateFirewallRule2(param: FirewallsRulesEngineApiPartialUpdateFirewallRule2Request, options?: ConfigurationOptions): Promise<FirewallRuleResponse> {
        return this.api.partialUpdateFirewallRule2(param.firewallId, param.requestRuleId, param.versionId, param.patchedFirewallRuleRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Firewall Rule
     * @param param the request object
     */
    public retrieveFirewallRuleWithHttpInfo(param: FirewallsRulesEngineApiRetrieveFirewallRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        return this.api.retrieveFirewallRuleWithHttpInfo(param.firewallId, param.requestRuleId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Firewall Rule
     * @param param the request object
     */
    public retrieveFirewallRule(param: FirewallsRulesEngineApiRetrieveFirewallRuleRequest, options?: ConfigurationOptions): Promise<FirewallRuleResponse> {
        return this.api.retrieveFirewallRule(param.firewallId, param.requestRuleId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Firewall Rule
     * @param param the request object
     */
    public retrieveFirewallRule2WithHttpInfo(param: FirewallsRulesEngineApiRetrieveFirewallRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        return this.api.retrieveFirewallRule2WithHttpInfo(param.firewallId, param.requestRuleId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Firewall Rule
     * @param param the request object
     */
    public retrieveFirewallRule2(param: FirewallsRulesEngineApiRetrieveFirewallRule2Request, options?: ConfigurationOptions): Promise<FirewallRuleResponse> {
        return this.api.retrieveFirewallRule2(param.firewallId, param.requestRuleId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Firewall Rule
     * @param param the request object
     */
    public updateFirewallRuleWithHttpInfo(param: FirewallsRulesEngineApiUpdateFirewallRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        return this.api.updateFirewallRuleWithHttpInfo(param.firewallId, param.requestRuleId, param.firewallRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Firewall Rule
     * @param param the request object
     */
    public updateFirewallRule(param: FirewallsRulesEngineApiUpdateFirewallRuleRequest, options?: ConfigurationOptions): Promise<FirewallRuleResponse> {
        return this.api.updateFirewallRule(param.firewallId, param.requestRuleId, param.firewallRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Firewall Rule
     * @param param the request object
     */
    public updateFirewallRule2WithHttpInfo(param: FirewallsRulesEngineApiUpdateFirewallRule2Request, options?: ConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        return this.api.updateFirewallRule2WithHttpInfo(param.firewallId, param.requestRuleId, param.versionId, param.firewallRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Firewall Rule
     * @param param the request object
     */
    public updateFirewallRule2(param: FirewallsRulesEngineApiUpdateFirewallRule2Request, options?: ConfigurationOptions): Promise<FirewallRuleResponse> {
        return this.api.updateFirewallRule2(param.firewallId, param.requestRuleId, param.versionId, param.firewallRuleRequest,  options).toPromise();
    }

}

import { ObservableFunctionVersionsApi } from "./ObservableAPI";
import { FunctionVersionsApiRequestFactory, FunctionVersionsApiResponseProcessor} from "../apis/FunctionVersionsApi";

export interface FunctionVersionsApiArchiveFunctionVersionRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApiarchiveFunctionVersion
     */
    functionId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApiarchiveFunctionVersion
     */
    versionId: string
    /**
     * 
     * @type VersionArchiveRequest
     * @memberof FunctionVersionsApiarchiveFunctionVersion
     */
    versionArchiveRequest?: VersionArchiveRequest
}

export interface FunctionVersionsApiBuildFunctionVersionRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApibuildFunctionVersion
     */
    functionId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApibuildFunctionVersion
     */
    versionId: string
    /**
     * 
     * @type VersionBuildRequest
     * @memberof FunctionVersionsApibuildFunctionVersion
     */
    versionBuildRequest?: VersionBuildRequest
}

export interface FunctionVersionsApiCancelFunctionVersionBuildRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApicancelFunctionVersionBuild
     */
    functionId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApicancelFunctionVersionBuild
     */
    versionId: string
    /**
     * 
     * @type VersionCancelRequest
     * @memberof FunctionVersionsApicancelFunctionVersionBuild
     */
    versionCancelRequest?: VersionCancelRequest
}

export interface FunctionVersionsApiCreateFunctionVersionRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApicreateFunctionVersion
     */
    functionId: number
    /**
     * 
     * @type VersionCreateRequest
     * @memberof FunctionVersionsApicreateFunctionVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export interface FunctionVersionsApiDeleteFunctionVersionRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApideleteFunctionVersion
     */
    functionId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApideleteFunctionVersion
     */
    versionId: string
}

export interface FunctionVersionsApiListFunctionVersionsRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApilistFunctionVersions
     */
    functionId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApilistFunctionVersions
     */
    fields?: string
}

export interface FunctionVersionsApiPartialUpdateFunctionVersionRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApipartialUpdateFunctionVersion
     */
    functionId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApipartialUpdateFunctionVersion
     */
    versionId: string
    /**
     * 
     * @type PatchedVersionCreateRequest
     * @memberof FunctionVersionsApipartialUpdateFunctionVersion
     */
    patchedVersionCreateRequest?: PatchedVersionCreateRequest
}

export interface FunctionVersionsApiRetrieveFunctionVersionRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApiretrieveFunctionVersion
     */
    functionId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApiretrieveFunctionVersion
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApiretrieveFunctionVersion
     */
    fields?: string
}

export interface FunctionVersionsApiUpdateFunctionVersionRequest {
    /**
     * The ID of the Function resource.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionVersionsApiupdateFunctionVersion
     */
    functionId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionVersionsApiupdateFunctionVersion
     */
    versionId: string
    /**
     * 
     * @type VersionCreateRequest
     * @memberof FunctionVersionsApiupdateFunctionVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export class ObjectFunctionVersionsApi {
    private api: ObservableFunctionVersionsApi

    public constructor(configuration: Configuration, requestFactory?: FunctionVersionsApiRequestFactory, responseProcessor?: FunctionVersionsApiResponseProcessor) {
        this.api = new ObservableFunctionVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a Function version
     * @param param the request object
     */
    public archiveFunctionVersionWithHttpInfo(param: FunctionVersionsApiArchiveFunctionVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveFunctionVersionWithHttpInfo(param.functionId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a Function version
     * @param param the request object
     */
    public archiveFunctionVersion(param: FunctionVersionsApiArchiveFunctionVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveFunctionVersion(param.functionId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Function version
     * @param param the request object
     */
    public buildFunctionVersionWithHttpInfo(param: FunctionVersionsApiBuildFunctionVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.buildFunctionVersionWithHttpInfo(param.functionId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Function version
     * @param param the request object
     */
    public buildFunctionVersion(param: FunctionVersionsApiBuildFunctionVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.buildFunctionVersion(param.functionId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Function version build
     * @param param the request object
     */
    public cancelFunctionVersionBuildWithHttpInfo(param: FunctionVersionsApiCancelFunctionVersionBuildRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelFunctionVersionBuildWithHttpInfo(param.functionId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Function version build
     * @param param the request object
     */
    public cancelFunctionVersionBuild(param: FunctionVersionsApiCancelFunctionVersionBuildRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelFunctionVersionBuild(param.functionId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Function version
     * @param param the request object
     */
    public createFunctionVersionWithHttpInfo(param: FunctionVersionsApiCreateFunctionVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createFunctionVersionWithHttpInfo(param.functionId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Function version
     * @param param the request object
     */
    public createFunctionVersion(param: FunctionVersionsApiCreateFunctionVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createFunctionVersion(param.functionId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Function version
     * @param param the request object
     */
    public deleteFunctionVersionWithHttpInfo(param: FunctionVersionsApiDeleteFunctionVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFunctionVersionWithHttpInfo(param.functionId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Function version
     * @param param the request object
     */
    public deleteFunctionVersion(param: FunctionVersionsApiDeleteFunctionVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFunctionVersion(param.functionId, param.versionId,  options).toPromise();
    }

    /**
     * List all versions of a specific Function.
     * List Function versions
     * @param param the request object
     */
    public listFunctionVersionsWithHttpInfo(param: FunctionVersionsApiListFunctionVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.listFunctionVersionsWithHttpInfo(param.functionId, param.fields,  options).toPromise();
    }

    /**
     * List all versions of a specific Function.
     * List Function versions
     * @param param the request object
     */
    public listFunctionVersions(param: FunctionVersionsApiListFunctionVersionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.listFunctionVersions(param.functionId, param.fields,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Function version
     * @param param the request object
     */
    public partialUpdateFunctionVersionWithHttpInfo(param: FunctionVersionsApiPartialUpdateFunctionVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.partialUpdateFunctionVersionWithHttpInfo(param.functionId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Function version
     * @param param the request object
     */
    public partialUpdateFunctionVersion(param: FunctionVersionsApiPartialUpdateFunctionVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.partialUpdateFunctionVersion(param.functionId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Function version
     * @param param the request object
     */
    public retrieveFunctionVersionWithHttpInfo(param: FunctionVersionsApiRetrieveFunctionVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.retrieveFunctionVersionWithHttpInfo(param.functionId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Function version
     * @param param the request object
     */
    public retrieveFunctionVersion(param: FunctionVersionsApiRetrieveFunctionVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.retrieveFunctionVersion(param.functionId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a Function version
     * @param param the request object
     */
    public updateFunctionVersionWithHttpInfo(param: FunctionVersionsApiUpdateFunctionVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateFunctionVersionWithHttpInfo(param.functionId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a Function version
     * @param param the request object
     */
    public updateFunctionVersion(param: FunctionVersionsApiUpdateFunctionVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateFunctionVersion(param.functionId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

}

import { ObservableFunctionsApi } from "./ObservableAPI";
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";

export interface FunctionsApiCreateFunctionRequest {
    /**
     * 
     * @type FunctionsRequest
     * @memberof FunctionsApicreateFunction
     */
    functionsRequest: FunctionsRequest
}

export interface FunctionsApiDeleteFunctionRequest {
    /**
     * A unique integer value identifying the function.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApideleteFunction
     */
    functionId: number
}

export interface FunctionsApiListFunctionsRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof FunctionsApilistFunctions
     */
    active?: boolean
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApilistFunctions
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApilistFunctions
     */
    id?: number
    /**
     * Filter by language (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApilistFunctions
     */
    languageIn?: string
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApilistFunctions
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FunctionsApilistFunctions
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof FunctionsApilistFunctions
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApilistFunctions
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApilistFunctions
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApilistFunctions
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApilistFunctions
     */
    pageSize?: number
    /**
     * Filter by runtime environment (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApilistFunctions
     */
    runtimeEnvironmentIn?: string
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApilistFunctions
     */
    search?: string
}

export interface FunctionsApiPartialUpdateFunctionRequest {
    /**
     * A unique integer value identifying the function.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApipartialUpdateFunction
     */
    functionId: number
    /**
     * 
     * @type PatchedFunctionsRequest
     * @memberof FunctionsApipartialUpdateFunction
     */
    patchedFunctionsRequest?: PatchedFunctionsRequest
}

export interface FunctionsApiRetrieveFunctionRequest {
    /**
     * A unique integer value identifying the function.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApiretrieveFunction
     */
    functionId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApiretrieveFunction
     */
    fields?: string
}

export interface FunctionsApiUpdateFunctionRequest {
    /**
     * A unique integer value identifying the function.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApiupdateFunction
     */
    functionId: number
    /**
     * 
     * @type FunctionsRequest
     * @memberof FunctionsApiupdateFunction
     */
    functionsRequest: FunctionsRequest
}

export class ObjectFunctionsApi {
    private api: ObservableFunctionsApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsApiRequestFactory, responseProcessor?: FunctionsApiResponseProcessor) {
        this.api = new ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Function in your account.
     * Create an Function
     * @param param the request object
     */
    public createFunctionWithHttpInfo(param: FunctionsApiCreateFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionResponse>> {
        return this.api.createFunctionWithHttpInfo(param.functionsRequest,  options).toPromise();
    }

    /**
     * Create a new Function in your account.
     * Create an Function
     * @param param the request object
     */
    public createFunction(param: FunctionsApiCreateFunctionRequest, options?: ConfigurationOptions): Promise<FunctionResponse> {
        return this.api.createFunction(param.functionsRequest,  options).toPromise();
    }

    /**
     * Delete a specific Function in your account.
     * Delete an Function
     * @param param the request object
     */
    public deleteFunctionWithHttpInfo(param: FunctionsApiDeleteFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteFunctionWithHttpInfo(param.functionId,  options).toPromise();
    }

    /**
     * Delete a specific Function in your account.
     * Delete an Function
     * @param param the request object
     */
    public deleteFunction(param: FunctionsApiDeleteFunctionRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteFunction(param.functionId,  options).toPromise();
    }

    /**
     * List all Functions owned by your account.
     * List Functions
     * @param param the request object
     */
    public listFunctionsWithHttpInfo(param: FunctionsApiListFunctionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedEdgeFunctionList>> {
        return this.api.listFunctionsWithHttpInfo(param.active, param.fields, param.id, param.languageIn, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.runtimeEnvironmentIn, param.search,  options).toPromise();
    }

    /**
     * List all Functions owned by your account.
     * List Functions
     * @param param the request object
     */
    public listFunctions(param: FunctionsApiListFunctionsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedEdgeFunctionList> {
        return this.api.listFunctions(param.active, param.fields, param.id, param.languageIn, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.runtimeEnvironmentIn, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Function without affecting other fields.
     * Partially update an Function
     * @param param the request object
     */
    public partialUpdateFunctionWithHttpInfo(param: FunctionsApiPartialUpdateFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionResponse>> {
        return this.api.partialUpdateFunctionWithHttpInfo(param.functionId, param.patchedFunctionsRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Function without affecting other fields.
     * Partially update an Function
     * @param param the request object
     */
    public partialUpdateFunction(param: FunctionsApiPartialUpdateFunctionRequest, options?: ConfigurationOptions): Promise<FunctionResponse> {
        return this.api.partialUpdateFunction(param.functionId, param.patchedFunctionsRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Function in your account.
     * Retrieve details of an Function
     * @param param the request object
     */
    public retrieveFunctionWithHttpInfo(param: FunctionsApiRetrieveFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionResponse>> {
        return this.api.retrieveFunctionWithHttpInfo(param.functionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Function in your account.
     * Retrieve details of an Function
     * @param param the request object
     */
    public retrieveFunction(param: FunctionsApiRetrieveFunctionRequest, options?: ConfigurationOptions): Promise<FunctionResponse> {
        return this.api.retrieveFunction(param.functionId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Function. This replaces the entire Function with the new data provided.
     * Update an Function
     * @param param the request object
     */
    public updateFunctionWithHttpInfo(param: FunctionsApiUpdateFunctionRequest, options?: ConfigurationOptions): Promise<HttpInfo<FunctionResponse>> {
        return this.api.updateFunctionWithHttpInfo(param.functionId, param.functionsRequest,  options).toPromise();
    }

    /**
     * Update an existing Function. This replaces the entire Function with the new data provided.
     * Update an Function
     * @param param the request object
     */
    public updateFunction(param: FunctionsApiUpdateFunctionRequest, options?: ConfigurationOptions): Promise<FunctionResponse> {
        return this.api.updateFunction(param.functionId, param.functionsRequest,  options).toPromise();
    }

}

import { ObservableIdentityGrantsApi } from "./ObservableAPI";
import { IdentityGrantsApiRequestFactory, IdentityGrantsApiResponseProcessor} from "../apis/IdentityGrantsApi";

export interface IdentityGrantsApiCreateGrantRequest {
    /**
     * 
     * @type GrantRequest
     * @memberof IdentityGrantsApicreateGrant
     */
    grantRequest: GrantRequest
}

export interface IdentityGrantsApiDeleteGrantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGrantsApideleteGrant
     */
    grantId: string
}

export interface IdentityGrantsApiListGrantsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGrantsApilistGrants
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGrantsApilistGrants
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof IdentityGrantsApilistGrants
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof IdentityGrantsApilistGrants
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGrantsApilistGrants
     */
    search?: string
}

export interface IdentityGrantsApiPartialUpdateGrantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGrantsApipartialUpdateGrant
     */
    grantId: string
    /**
     * 
     * @type PatchedGrantRequest
     * @memberof IdentityGrantsApipartialUpdateGrant
     */
    patchedGrantRequest?: PatchedGrantRequest
}

export interface IdentityGrantsApiRetrieveGrantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGrantsApiretrieveGrant
     */
    grantId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGrantsApiretrieveGrant
     */
    fields?: string
}

export interface IdentityGrantsApiUpdateGrantRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGrantsApiupdateGrant
     */
    grantId: string
    /**
     * 
     * @type GrantRequest
     * @memberof IdentityGrantsApiupdateGrant
     */
    grantRequest: GrantRequest
}

export class ObjectIdentityGrantsApi {
    private api: ObservableIdentityGrantsApi

    public constructor(configuration: Configuration, requestFactory?: IdentityGrantsApiRequestFactory, responseProcessor?: IdentityGrantsApiResponseProcessor) {
        this.api = new ObservableIdentityGrantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new grant, optionally linked to an identity, for the logged-in account or its descendant accounts.
     * Create a new grant
     * @param param the request object
     */
    public createGrantWithHttpInfo(param: IdentityGrantsApiCreateGrantRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseGrant>> {
        return this.api.createGrantWithHttpInfo(param.grantRequest,  options).toPromise();
    }

    /**
     * Creates a new grant, optionally linked to an identity, for the logged-in account or its descendant accounts.
     * Create a new grant
     * @param param the request object
     */
    public createGrant(param: IdentityGrantsApiCreateGrantRequest, options?: ConfigurationOptions): Promise<ResponseGrant> {
        return this.api.createGrant(param.grantRequest,  options).toPromise();
    }

    /**
     * Delete a specific grant from the logged-in account or its descendant accounts.
     * Delete a grant
     * @param param the request object
     */
    public deleteGrantWithHttpInfo(param: IdentityGrantsApiDeleteGrantRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDeleteGrant>> {
        return this.api.deleteGrantWithHttpInfo(param.grantId,  options).toPromise();
    }

    /**
     * Delete a specific grant from the logged-in account or its descendant accounts.
     * Delete a grant
     * @param param the request object
     */
    public deleteGrant(param: IdentityGrantsApiDeleteGrantRequest, options?: ConfigurationOptions): Promise<ResponseDeleteGrant> {
        return this.api.deleteGrant(param.grantId,  options).toPromise();
    }

    /**
     * Retrieves a list of all grants associated with the logged-in account or its descendant accounts.
     * List grants for the account
     * @param param the request object
     */
    public listGrantsWithHttpInfo(param: IdentityGrantsApiListGrantsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedGrantList>> {
        return this.api.listGrantsWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieves a list of all grants associated with the logged-in account or its descendant accounts.
     * List grants for the account
     * @param param the request object
     */
    public listGrants(param: IdentityGrantsApiListGrantsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedGrantList> {
        return this.api.listGrants(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Updates specific fields of an existing grant within the logged-in account or its descendant accounts, leaving other fields unchanged.
     * Partially update a grant
     * @param param the request object
     */
    public partialUpdateGrantWithHttpInfo(param: IdentityGrantsApiPartialUpdateGrantRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseGrant>> {
        return this.api.partialUpdateGrantWithHttpInfo(param.grantId, param.patchedGrantRequest,  options).toPromise();
    }

    /**
     * Updates specific fields of an existing grant within the logged-in account or its descendant accounts, leaving other fields unchanged.
     * Partially update a grant
     * @param param the request object
     */
    public partialUpdateGrant(param: IdentityGrantsApiPartialUpdateGrantRequest, options?: ConfigurationOptions): Promise<ResponseGrant> {
        return this.api.partialUpdateGrant(param.grantId, param.patchedGrantRequest,  options).toPromise();
    }

    /**
     * Fetches detailed information about a specific grant within the logged-in account or its descendant accounts.
     * Retrieve grant details
     * @param param the request object
     */
    public retrieveGrantWithHttpInfo(param: IdentityGrantsApiRetrieveGrantRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveGrant>> {
        return this.api.retrieveGrantWithHttpInfo(param.grantId, param.fields,  options).toPromise();
    }

    /**
     * Fetches detailed information about a specific grant within the logged-in account or its descendant accounts.
     * Retrieve grant details
     * @param param the request object
     */
    public retrieveGrant(param: IdentityGrantsApiRetrieveGrantRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveGrant> {
        return this.api.retrieveGrant(param.grantId, param.fields,  options).toPromise();
    }

    /**
     * Updates an existing grant within the logged-in account or its descendant accounts. This operation replaces the entire grant with the provided data.
     * Update a grant
     * @param param the request object
     */
    public updateGrantWithHttpInfo(param: IdentityGrantsApiUpdateGrantRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseGrant>> {
        return this.api.updateGrantWithHttpInfo(param.grantId, param.grantRequest,  options).toPromise();
    }

    /**
     * Updates an existing grant within the logged-in account or its descendant accounts. This operation replaces the entire grant with the provided data.
     * Update a grant
     * @param param the request object
     */
    public updateGrant(param: IdentityGrantsApiUpdateGrantRequest, options?: ConfigurationOptions): Promise<ResponseGrant> {
        return this.api.updateGrant(param.grantId, param.grantRequest,  options).toPromise();
    }

}

import { ObservableIdentityGroupMembersApi } from "./ObservableAPI";
import { IdentityGroupMembersApiRequestFactory, IdentityGroupMembersApiResponseProcessor} from "../apis/IdentityGroupMembersApi";

export interface IdentityGroupMembersApiRetrieveMembersGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof IdentityGroupMembersApiretrieveMembersGroup
     */
    id: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupMembersApiretrieveMembersGroup
     */
    fields?: string
}

export interface IdentityGroupMembersApiUpdateMembersGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof IdentityGroupMembersApiupdateMembersGroup
     */
    id: number
    /**
     * 
     * @type GroupMembersRequest
     * @memberof IdentityGroupMembersApiupdateMembersGroup
     */
    groupMembersRequest: GroupMembersRequest
}

export class ObjectIdentityGroupMembersApi {
    private api: ObservableIdentityGroupMembersApi

    public constructor(configuration: Configuration, requestFactory?: IdentityGroupMembersApiRequestFactory, responseProcessor?: IdentityGroupMembersApiResponseProcessor) {
        this.api = new ObservableIdentityGroupMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve members from a specific group in your account.
     * Retrieve members from a group
     * @param param the request object
     */
    public retrieveMembersGroupWithHttpInfo(param: IdentityGroupMembersApiRetrieveMembersGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveGroupMembers>> {
        return this.api.retrieveMembersGroupWithHttpInfo(param.id, param.fields,  options).toPromise();
    }

    /**
     * Retrieve members from a specific group in your account.
     * Retrieve members from a group
     * @param param the request object
     */
    public retrieveMembersGroup(param: IdentityGroupMembersApiRetrieveMembersGroupRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveGroupMembers> {
        return this.api.retrieveMembersGroup(param.id, param.fields,  options).toPromise();
    }

    /**
     * Update all members from a group. This replaces the entire group members with the new data provided.
     * Update members from a group
     * @param param the request object
     */
    public updateMembersGroupWithHttpInfo(param: IdentityGroupMembersApiUpdateMembersGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseGroupMembers>> {
        return this.api.updateMembersGroupWithHttpInfo(param.id, param.groupMembersRequest,  options).toPromise();
    }

    /**
     * Update all members from a group. This replaces the entire group members with the new data provided.
     * Update members from a group
     * @param param the request object
     */
    public updateMembersGroup(param: IdentityGroupMembersApiUpdateMembersGroupRequest, options?: ConfigurationOptions): Promise<ResponseGroupMembers> {
        return this.api.updateMembersGroup(param.id, param.groupMembersRequest,  options).toPromise();
    }

}

import { ObservableIdentityGroupsApi } from "./ObservableAPI";
import { IdentityGroupsApiRequestFactory, IdentityGroupsApiResponseProcessor} from "../apis/IdentityGroupsApi";

export interface IdentityGroupsApiCreateGroupRequest {
    /**
     * 
     * @type GroupRequest
     * @memberof IdentityGroupsApicreateGroup
     */
    groupRequest: GroupRequest
}

export interface IdentityGroupsApiDeleteGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupsApideleteGroup
     */
    groupId: string
}

export interface IdentityGroupsApiListGroupRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupsApilistGroup
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupsApilistGroup
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof IdentityGroupsApilistGroup
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof IdentityGroupsApilistGroup
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupsApilistGroup
     */
    search?: string
}

export interface IdentityGroupsApiPartialUpdateGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupsApipartialUpdateGroup
     */
    groupId: string
    /**
     * 
     * @type PatchedGroupRequest
     * @memberof IdentityGroupsApipartialUpdateGroup
     */
    patchedGroupRequest?: PatchedGroupRequest
}

export interface IdentityGroupsApiRetrieveGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupsApiretrieveGroup
     */
    groupId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupsApiretrieveGroup
     */
    fields?: string
}

export interface IdentityGroupsApiUpdateGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityGroupsApiupdateGroup
     */
    groupId: string
    /**
     * 
     * @type GroupRequest
     * @memberof IdentityGroupsApiupdateGroup
     */
    groupRequest: GroupRequest
}

export class ObjectIdentityGroupsApi {
    private api: ObservableIdentityGroupsApi

    public constructor(configuration: Configuration, requestFactory?: IdentityGroupsApiRequestFactory, responseProcessor?: IdentityGroupsApiResponseProcessor) {
        this.api = new ObservableIdentityGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a group for your account.
     * Create a new group
     * @param param the request object
     */
    public createGroupWithHttpInfo(param: IdentityGroupsApiCreateGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseGroup>> {
        return this.api.createGroupWithHttpInfo(param.groupRequest,  options).toPromise();
    }

    /**
     * Create a group for your account.
     * Create a new group
     * @param param the request object
     */
    public createGroup(param: IdentityGroupsApiCreateGroupRequest, options?: ConfigurationOptions): Promise<ResponseGroup> {
        return this.api.createGroup(param.groupRequest,  options).toPromise();
    }

    /**
     * Delete a specific group in your account.
     * Delete a group
     * @param param the request object
     */
    public deleteGroupWithHttpInfo(param: IdentityGroupsApiDeleteGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDeleteGroup>> {
        return this.api.deleteGroupWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Delete a specific group in your account.
     * Delete a group
     * @param param the request object
     */
    public deleteGroup(param: IdentityGroupsApiDeleteGroupRequest, options?: ConfigurationOptions): Promise<ResponseDeleteGroup> {
        return this.api.deleteGroup(param.groupId,  options).toPromise();
    }

    /**
     * List all groups owned by your account.
     * List of the account groups
     * @param param the request object
     */
    public listGroupWithHttpInfo(param: IdentityGroupsApiListGroupRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedGroupList>> {
        return this.api.listGroupWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all groups owned by your account.
     * List of the account groups
     * @param param the request object
     */
    public listGroup(param: IdentityGroupsApiListGroupRequest = {}, options?: ConfigurationOptions): Promise<PaginatedGroupList> {
        return this.api.listGroup(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing group without affecting other fields.
     * Partially update a group
     * @param param the request object
     */
    public partialUpdateGroupWithHttpInfo(param: IdentityGroupsApiPartialUpdateGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseGroup>> {
        return this.api.partialUpdateGroupWithHttpInfo(param.groupId, param.patchedGroupRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing group without affecting other fields.
     * Partially update a group
     * @param param the request object
     */
    public partialUpdateGroup(param: IdentityGroupsApiPartialUpdateGroupRequest, options?: ConfigurationOptions): Promise<ResponseGroup> {
        return this.api.partialUpdateGroup(param.groupId, param.patchedGroupRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific group in your account.
     * Retrieve details from a group
     * @param param the request object
     */
    public retrieveGroupWithHttpInfo(param: IdentityGroupsApiRetrieveGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveGroup>> {
        return this.api.retrieveGroupWithHttpInfo(param.groupId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific group in your account.
     * Retrieve details from a group
     * @param param the request object
     */
    public retrieveGroup(param: IdentityGroupsApiRetrieveGroupRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveGroup> {
        return this.api.retrieveGroup(param.groupId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing group. This replaces the entire group with the new data provided.
     * Update a group
     * @param param the request object
     */
    public updateGroupWithHttpInfo(param: IdentityGroupsApiUpdateGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseGroup>> {
        return this.api.updateGroupWithHttpInfo(param.groupId, param.groupRequest,  options).toPromise();
    }

    /**
     * Update an existing group. This replaces the entire group with the new data provided.
     * Update a group
     * @param param the request object
     */
    public updateGroup(param: IdentityGroupsApiUpdateGroupRequest, options?: ConfigurationOptions): Promise<ResponseGroup> {
        return this.api.updateGroup(param.groupId, param.groupRequest,  options).toPromise();
    }

}

import { ObservableIdentityLoggedInUserApi } from "./ObservableAPI";
import { IdentityLoggedInUserApiRequestFactory, IdentityLoggedInUserApiResponseProcessor} from "../apis/IdentityLoggedInUserApi";

export interface IdentityLoggedInUserApiListLoggedUserRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityLoggedInUserApilistLoggedUser
     */
    fields?: string
}

export interface IdentityLoggedInUserApiPartialUpdateLoggedUserRequest {
    /**
     * 
     * @type PatchedUserRequest
     * @memberof IdentityLoggedInUserApipartialUpdateLoggedUser
     */
    patchedUserRequest?: PatchedUserRequest
}

export interface IdentityLoggedInUserApiUpdateLoggedUserRequest {
    /**
     * 
     * @type UserRequest
     * @memberof IdentityLoggedInUserApiupdateLoggedUser
     */
    userRequest: UserRequest
}

export class ObjectIdentityLoggedInUserApi {
    private api: ObservableIdentityLoggedInUserApi

    public constructor(configuration: Configuration, requestFactory?: IdentityLoggedInUserApiRequestFactory, responseProcessor?: IdentityLoggedInUserApiResponseProcessor) {
        this.api = new ObservableIdentityLoggedInUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve details from the logged user.
     * Retrieve details from the currently logged-in user
     * @param param the request object
     */
    public listLoggedUserWithHttpInfo(param: IdentityLoggedInUserApiListLoggedUserRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveUser>> {
        return this.api.listLoggedUserWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from the logged user.
     * Retrieve details from the currently logged-in user
     * @param param the request object
     */
    public listLoggedUser(param: IdentityLoggedInUserApiListLoggedUserRequest = {}, options?: ConfigurationOptions): Promise<ResponseRetrieveUser> {
        return this.api.listLoggedUser(param.fields,  options).toPromise();
    }

    /**
     * Update one or more fields of the logged user without affecting other fields.
     * Partially update the currently logged-in user
     * @param param the request object
     */
    public partialUpdateLoggedUserWithHttpInfo(param: IdentityLoggedInUserApiPartialUpdateLoggedUserRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        return this.api.partialUpdateLoggedUserWithHttpInfo(param.patchedUserRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of the logged user without affecting other fields.
     * Partially update the currently logged-in user
     * @param param the request object
     */
    public partialUpdateLoggedUser(param: IdentityLoggedInUserApiPartialUpdateLoggedUserRequest = {}, options?: ConfigurationOptions): Promise<ResponseUser> {
        return this.api.partialUpdateLoggedUser(param.patchedUserRequest,  options).toPromise();
    }

    /**
     * Update the logged user. This replaces the entire user with the new data provided.
     * Update the currently logged-in user
     * @param param the request object
     */
    public updateLoggedUserWithHttpInfo(param: IdentityLoggedInUserApiUpdateLoggedUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        return this.api.updateLoggedUserWithHttpInfo(param.userRequest,  options).toPromise();
    }

    /**
     * Update the logged user. This replaces the entire user with the new data provided.
     * Update the currently logged-in user
     * @param param the request object
     */
    public updateLoggedUser(param: IdentityLoggedInUserApiUpdateLoggedUserRequest, options?: ConfigurationOptions): Promise<ResponseUser> {
        return this.api.updateLoggedUser(param.userRequest,  options).toPromise();
    }

}

import { ObservableIdentityServiceTokenRenewApi } from "./ObservableAPI";
import { IdentityServiceTokenRenewApiRequestFactory, IdentityServiceTokenRenewApiResponseProcessor} from "../apis/IdentityServiceTokenRenewApi";

export interface IdentityServiceTokenRenewApiRenewServiceTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof IdentityServiceTokenRenewApirenewServiceToken
     */
    id: number
    /**
     * 
     * @type ServiceTokenRenewRequest
     * @memberof IdentityServiceTokenRenewApirenewServiceToken
     */
    serviceTokenRenewRequest: ServiceTokenRenewRequest
}

export class ObjectIdentityServiceTokenRenewApi {
    private api: ObservableIdentityServiceTokenRenewApi

    public constructor(configuration: Configuration, requestFactory?: IdentityServiceTokenRenewApiRequestFactory, responseProcessor?: IdentityServiceTokenRenewApiResponseProcessor) {
        this.api = new ObservableIdentityServiceTokenRenewApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Renews a service token for your account.
     * Renews a service token
     * @param param the request object
     */
    public renewServiceTokenWithHttpInfo(param: IdentityServiceTokenRenewApiRenewServiceTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseServiceTokenRenew>> {
        return this.api.renewServiceTokenWithHttpInfo(param.id, param.serviceTokenRenewRequest,  options).toPromise();
    }

    /**
     * Renews a service token for your account.
     * Renews a service token
     * @param param the request object
     */
    public renewServiceToken(param: IdentityServiceTokenRenewApiRenewServiceTokenRequest, options?: ConfigurationOptions): Promise<ResponseServiceTokenRenew> {
        return this.api.renewServiceToken(param.id, param.serviceTokenRenewRequest,  options).toPromise();
    }

}

import { ObservableIdentityServiceTokensApi } from "./ObservableAPI";
import { IdentityServiceTokensApiRequestFactory, IdentityServiceTokensApiResponseProcessor} from "../apis/IdentityServiceTokensApi";

export interface IdentityServiceTokensApiCreateServiceTokenRequest {
    /**
     * 
     * @type ServiceTokenCreateRequest
     * @memberof IdentityServiceTokensApicreateServiceToken
     */
    serviceTokenCreateRequest: ServiceTokenCreateRequest
}

export interface IdentityServiceTokensApiDeleteServiceTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityServiceTokensApideleteServiceToken
     */
    tokenId: string
}

export interface IdentityServiceTokensApiListServiceTokenRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityServiceTokensApilistServiceToken
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityServiceTokensApilistServiceToken
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof IdentityServiceTokensApilistServiceToken
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof IdentityServiceTokensApilistServiceToken
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityServiceTokensApilistServiceToken
     */
    search?: string
}

export interface IdentityServiceTokensApiPartialUpdateServiceTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityServiceTokensApipartialUpdateServiceToken
     */
    tokenId: string
    /**
     * 
     * @type PatchedServiceTokenUpdateRequest
     * @memberof IdentityServiceTokensApipartialUpdateServiceToken
     */
    patchedServiceTokenUpdateRequest?: PatchedServiceTokenUpdateRequest
}

export interface IdentityServiceTokensApiRetrieveServiceTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityServiceTokensApiretrieveServiceToken
     */
    tokenId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityServiceTokensApiretrieveServiceToken
     */
    fields?: string
}

export interface IdentityServiceTokensApiUpdateServiceTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityServiceTokensApiupdateServiceToken
     */
    tokenId: string
    /**
     * 
     * @type ServiceTokenUpdateRequest
     * @memberof IdentityServiceTokensApiupdateServiceToken
     */
    serviceTokenUpdateRequest: ServiceTokenUpdateRequest
}

export class ObjectIdentityServiceTokensApi {
    private api: ObservableIdentityServiceTokensApi

    public constructor(configuration: Configuration, requestFactory?: IdentityServiceTokensApiRequestFactory, responseProcessor?: IdentityServiceTokensApiResponseProcessor) {
        this.api = new ObservableIdentityServiceTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new service token for your account.
     * Create a new service token
     * @param param the request object
     */
    public createServiceTokenWithHttpInfo(param: IdentityServiceTokensApiCreateServiceTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseServiceTokenCreate>> {
        return this.api.createServiceTokenWithHttpInfo(param.serviceTokenCreateRequest,  options).toPromise();
    }

    /**
     * Create a new service token for your account.
     * Create a new service token
     * @param param the request object
     */
    public createServiceToken(param: IdentityServiceTokensApiCreateServiceTokenRequest, options?: ConfigurationOptions): Promise<ResponseServiceTokenCreate> {
        return this.api.createServiceToken(param.serviceTokenCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific service token in your account.
     * Delete a service token
     * @param param the request object
     */
    public deleteServiceTokenWithHttpInfo(param: IdentityServiceTokensApiDeleteServiceTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDeleteServiceToken>> {
        return this.api.deleteServiceTokenWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Delete a specific service token in your account.
     * Delete a service token
     * @param param the request object
     */
    public deleteServiceToken(param: IdentityServiceTokensApiDeleteServiceTokenRequest, options?: ConfigurationOptions): Promise<ResponseDeleteServiceToken> {
        return this.api.deleteServiceToken(param.tokenId,  options).toPromise();
    }

    /**
     * List all services tokens owned by your account.
     * List of the account service tokens
     * @param param the request object
     */
    public listServiceTokenWithHttpInfo(param: IdentityServiceTokensApiListServiceTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedServiceTokenList>> {
        return this.api.listServiceTokenWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all services tokens owned by your account.
     * List of the account service tokens
     * @param param the request object
     */
    public listServiceToken(param: IdentityServiceTokensApiListServiceTokenRequest = {}, options?: ConfigurationOptions): Promise<PaginatedServiceTokenList> {
        return this.api.listServiceToken(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing service token without affecting other fields.
     * Partially update a service token
     * @param param the request object
     */
    public partialUpdateServiceTokenWithHttpInfo(param: IdentityServiceTokensApiPartialUpdateServiceTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseServiceToken>> {
        return this.api.partialUpdateServiceTokenWithHttpInfo(param.tokenId, param.patchedServiceTokenUpdateRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing service token without affecting other fields.
     * Partially update a service token
     * @param param the request object
     */
    public partialUpdateServiceToken(param: IdentityServiceTokensApiPartialUpdateServiceTokenRequest, options?: ConfigurationOptions): Promise<ResponseServiceToken> {
        return this.api.partialUpdateServiceToken(param.tokenId, param.patchedServiceTokenUpdateRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific service token in your account.
     * Retrieve details from a service token
     * @param param the request object
     */
    public retrieveServiceTokenWithHttpInfo(param: IdentityServiceTokensApiRetrieveServiceTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveServiceToken>> {
        return this.api.retrieveServiceTokenWithHttpInfo(param.tokenId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific service token in your account.
     * Retrieve details from a service token
     * @param param the request object
     */
    public retrieveServiceToken(param: IdentityServiceTokensApiRetrieveServiceTokenRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveServiceToken> {
        return this.api.retrieveServiceToken(param.tokenId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing service token. This replaces the entire service token with the new data provided.
     * Update a service token
     * @param param the request object
     */
    public updateServiceTokenWithHttpInfo(param: IdentityServiceTokensApiUpdateServiceTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseServiceToken>> {
        return this.api.updateServiceTokenWithHttpInfo(param.tokenId, param.serviceTokenUpdateRequest,  options).toPromise();
    }

    /**
     * Update an existing service token. This replaces the entire service token with the new data provided.
     * Update a service token
     * @param param the request object
     */
    public updateServiceToken(param: IdentityServiceTokensApiUpdateServiceTokenRequest, options?: ConfigurationOptions): Promise<ResponseServiceToken> {
        return this.api.updateServiceToken(param.tokenId, param.serviceTokenUpdateRequest,  options).toPromise();
    }

}

import { ObservableIdentityUserInfoApi } from "./ObservableAPI";
import { IdentityUserInfoApiRequestFactory, IdentityUserInfoApiResponseProcessor} from "../apis/IdentityUserInfoApi";

export interface IdentityUserInfoApiRetrieveUserInfoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof IdentityUserInfoApiretrieveUserInfo
     */
    id: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUserInfoApiretrieveUserInfo
     */
    fields?: string
}

export interface IdentityUserInfoApiUpdateUserInfoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof IdentityUserInfoApiupdateUserInfo
     */
    id: number
    /**
     * 
     * @type UpdateUserInfoRequest
     * @memberof IdentityUserInfoApiupdateUserInfo
     */
    updateUserInfoRequest?: UpdateUserInfoRequest
}

export class ObjectIdentityUserInfoApi {
    private api: ObservableIdentityUserInfoApi

    public constructor(configuration: Configuration, requestFactory?: IdentityUserInfoApiRequestFactory, responseProcessor?: IdentityUserInfoApiResponseProcessor) {
        this.api = new ObservableIdentityUserInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve info from a specific user in your account.
     * Retrieve user info
     * @param param the request object
     */
    public retrieveUserInfoWithHttpInfo(param: IdentityUserInfoApiRetrieveUserInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveUserInfo>> {
        return this.api.retrieveUserInfoWithHttpInfo(param.id, param.fields,  options).toPromise();
    }

    /**
     * Retrieve info from a specific user in your account.
     * Retrieve user info
     * @param param the request object
     */
    public retrieveUserInfo(param: IdentityUserInfoApiRetrieveUserInfoRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveUserInfo> {
        return this.api.retrieveUserInfo(param.id, param.fields,  options).toPromise();
    }

    /**
     * Update info from an existing user. This replaces the entire user info with the new data provided.
     * Update an user info
     * @param param the request object
     */
    public updateUserInfoWithHttpInfo(param: IdentityUserInfoApiUpdateUserInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseUserInfo>> {
        return this.api.updateUserInfoWithHttpInfo(param.id, param.updateUserInfoRequest,  options).toPromise();
    }

    /**
     * Update info from an existing user. This replaces the entire user info with the new data provided.
     * Update an user info
     * @param param the request object
     */
    public updateUserInfo(param: IdentityUserInfoApiUpdateUserInfoRequest, options?: ConfigurationOptions): Promise<ResponseUserInfo> {
        return this.api.updateUserInfo(param.id, param.updateUserInfoRequest,  options).toPromise();
    }

}

import { ObservableIdentityUsersApi } from "./ObservableAPI";
import { IdentityUsersApiRequestFactory, IdentityUsersApiResponseProcessor} from "../apis/IdentityUsersApi";

export interface IdentityUsersApiCreateUserRequest {
    /**
     * 
     * @type UserRequest
     * @memberof IdentityUsersApicreateUser
     */
    userRequest: UserRequest
}

export interface IdentityUsersApiDeleteUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUsersApideleteUser
     */
    userId: string
}

export interface IdentityUsersApiListUsersRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUsersApilistUsers
     */
    fields?: string
    /**
     * Filters users by locked status.  - &#x60;true&#x60;: Returns only locked users.  - &#x60;false&#x60;: Returns only unlocked users.  - (not provided): Returns all users.
     * Defaults to: undefined
     * @type boolean
     * @memberof IdentityUsersApilistUsers
     */
    locked?: boolean
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUsersApilistUsers
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof IdentityUsersApilistUsers
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof IdentityUsersApilistUsers
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUsersApilistUsers
     */
    search?: string
}

export interface IdentityUsersApiPartialUpdateUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUsersApipartialUpdateUser
     */
    userId: string
    /**
     * 
     * @type PatchedUserRequest
     * @memberof IdentityUsersApipartialUpdateUser
     */
    patchedUserRequest?: PatchedUserRequest
}

export interface IdentityUsersApiRetrieveUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUsersApiretrieveUser
     */
    userId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUsersApiretrieveUser
     */
    fields?: string
}

export interface IdentityUsersApiUpdateUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IdentityUsersApiupdateUser
     */
    userId: string
    /**
     * 
     * @type UserRequest
     * @memberof IdentityUsersApiupdateUser
     */
    userRequest: UserRequest
}

export class ObjectIdentityUsersApi {
    private api: ObservableIdentityUsersApi

    public constructor(configuration: Configuration, requestFactory?: IdentityUsersApiRequestFactory, responseProcessor?: IdentityUsersApiResponseProcessor) {
        this.api = new ObservableIdentityUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new user for your account.
     * Create a new user
     * @param param the request object
     */
    public createUserWithHttpInfo(param: IdentityUsersApiCreateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        return this.api.createUserWithHttpInfo(param.userRequest,  options).toPromise();
    }

    /**
     * Create a new user for your account.
     * Create a new user
     * @param param the request object
     */
    public createUser(param: IdentityUsersApiCreateUserRequest, options?: ConfigurationOptions): Promise<ResponseUser> {
        return this.api.createUser(param.userRequest,  options).toPromise();
    }

    /**
     * Delete a specific user in your account.
     * Delete an user
     * @param param the request object
     */
    public deleteUserWithHttpInfo(param: IdentityUsersApiDeleteUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseDeleteUser>> {
        return this.api.deleteUserWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Delete a specific user in your account.
     * Delete an user
     * @param param the request object
     */
    public deleteUser(param: IdentityUsersApiDeleteUserRequest, options?: ConfigurationOptions): Promise<ResponseDeleteUser> {
        return this.api.deleteUser(param.userId,  options).toPromise();
    }

    /**
     * List all users owned by your account.
     * List of the account users
     * @param param the request object
     */
    public listUsersWithHttpInfo(param: IdentityUsersApiListUsersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedUserList>> {
        return this.api.listUsersWithHttpInfo(param.fields, param.locked, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all users owned by your account.
     * List of the account users
     * @param param the request object
     */
    public listUsers(param: IdentityUsersApiListUsersRequest = {}, options?: ConfigurationOptions): Promise<PaginatedUserList> {
        return this.api.listUsers(param.fields, param.locked, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing user without affecting other fields.
     * Partially update an user
     * @param param the request object
     */
    public partialUpdateUserWithHttpInfo(param: IdentityUsersApiPartialUpdateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        return this.api.partialUpdateUserWithHttpInfo(param.userId, param.patchedUserRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing user without affecting other fields.
     * Partially update an user
     * @param param the request object
     */
    public partialUpdateUser(param: IdentityUsersApiPartialUpdateUserRequest, options?: ConfigurationOptions): Promise<ResponseUser> {
        return this.api.partialUpdateUser(param.userId, param.patchedUserRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific user in your account.
     * Retrieve details from an user
     * @param param the request object
     */
    public retrieveUserWithHttpInfo(param: IdentityUsersApiRetrieveUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveUser>> {
        return this.api.retrieveUserWithHttpInfo(param.userId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific user in your account.
     * Retrieve details from an user
     * @param param the request object
     */
    public retrieveUser(param: IdentityUsersApiRetrieveUserRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveUser> {
        return this.api.retrieveUser(param.userId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing user. This replaces the entire user with the new data provided.
     * Update an user
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: IdentityUsersApiUpdateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        return this.api.updateUserWithHttpInfo(param.userId, param.userRequest,  options).toPromise();
    }

    /**
     * Update an existing user. This replaces the entire user with the new data provided.
     * Update an user
     * @param param the request object
     */
    public updateUser(param: IdentityUsersApiUpdateUserRequest, options?: ConfigurationOptions): Promise<ResponseUser> {
        return this.api.updateUser(param.userId, param.userRequest,  options).toPromise();
    }

}

import { ObservableKVNamespacesApi } from "./ObservableAPI";
import { KVNamespacesApiRequestFactory, KVNamespacesApiResponseProcessor} from "../apis/KVNamespacesApi";

export interface KVNamespacesApiCreateNamespaceRequest {
    /**
     * 
     * @type NamespaceCreateRequest
     * @memberof KVNamespacesApicreateNamespace
     */
    namespaceCreateRequest: NamespaceCreateRequest
}

export interface KVNamespacesApiListNamespacesRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof KVNamespacesApilistNamespaces
     */
    fields?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof KVNamespacesApilistNamespaces
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof KVNamespacesApilistNamespaces
     */
    pageSize?: number
}

export interface KVNamespacesApiRetrieveNamespaceRequest {
    /**
     * The unique identifier (name) of the namespace
     * Defaults to: undefined
     * @type string
     * @memberof KVNamespacesApiretrieveNamespace
     */
    namespace: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof KVNamespacesApiretrieveNamespace
     */
    fields?: string
}

export class ObjectKVNamespacesApi {
    private api: ObservableKVNamespacesApi

    public constructor(configuration: Configuration, requestFactory?: KVNamespacesApiRequestFactory, responseProcessor?: KVNamespacesApiResponseProcessor) {
        this.api = new ObservableKVNamespacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new namespace in the authenticated account.
     * Create namespace
     * @param param the request object
     */
    public createNamespaceWithHttpInfo(param: KVNamespacesApiCreateNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Namespace>> {
        return this.api.createNamespaceWithHttpInfo(param.namespaceCreateRequest,  options).toPromise();
    }

    /**
     * Creates a new namespace in the authenticated account.
     * Create namespace
     * @param param the request object
     */
    public createNamespace(param: KVNamespacesApiCreateNamespaceRequest, options?: ConfigurationOptions): Promise<Namespace> {
        return this.api.createNamespace(param.namespaceCreateRequest,  options).toPromise();
    }

    /**
     * Returns a paginated list of namespaces for the authenticated account.
     * List namespaces
     * @param param the request object
     */
    public listNamespacesWithHttpInfo(param: KVNamespacesApiListNamespacesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<NamespaceList>> {
        return this.api.listNamespacesWithHttpInfo(param.fields, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns a paginated list of namespaces for the authenticated account.
     * List namespaces
     * @param param the request object
     */
    public listNamespaces(param: KVNamespacesApiListNamespacesRequest = {}, options?: ConfigurationOptions): Promise<NamespaceList> {
        return this.api.listNamespaces(param.fields, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns a specific namespace by name, if it belongs to the authenticated account.
     * Retrieve namespace
     * @param param the request object
     */
    public retrieveNamespaceWithHttpInfo(param: KVNamespacesApiRetrieveNamespaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Namespace>> {
        return this.api.retrieveNamespaceWithHttpInfo(param.namespace, param.fields,  options).toPromise();
    }

    /**
     * Returns a specific namespace by name, if it belongs to the authenticated account.
     * Retrieve namespace
     * @param param the request object
     */
    public retrieveNamespace(param: KVNamespacesApiRetrieveNamespaceRequest, options?: ConfigurationOptions): Promise<Namespace> {
        return this.api.retrieveNamespace(param.namespace, param.fields,  options).toPromise();
    }

}

import { ObservableMetricsDashboardApi } from "./ObservableAPI";
import { MetricsDashboardApiRequestFactory, MetricsDashboardApiResponseProcessor} from "../apis/MetricsDashboardApi";

export interface MetricsDashboardApiCreateDashboardRequest {
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApicreateDashboard
     */
    folderId: number
    /**
     * 
     * @type DashboardRequest
     * @memberof MetricsDashboardApicreateDashboard
     */
    dashboardRequest: DashboardRequest
}

export interface MetricsDashboardApiDeleteDashboardRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApideleteDashboard
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApideleteDashboard
     */
    folderId: number
}

export interface MetricsDashboardApiListDashboardsRequest {
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApilistDashboards
     */
    folderId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsDashboardApilistDashboards
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApilistDashboards
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsDashboardApilistDashboards
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsDashboardApilistDashboards
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApilistDashboards
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApilistDashboards
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsDashboardApilistDashboards
     */
    search?: string
}

export interface MetricsDashboardApiPartialUpdateDashboardRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApipartialUpdateDashboard
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApipartialUpdateDashboard
     */
    folderId: number
    /**
     * 
     * @type PatchedDashboardRequest
     * @memberof MetricsDashboardApipartialUpdateDashboard
     */
    patchedDashboardRequest?: PatchedDashboardRequest
}

export interface MetricsDashboardApiRetrieveDashboardRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApiretrieveDashboard
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApiretrieveDashboard
     */
    folderId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsDashboardApiretrieveDashboard
     */
    fields?: string
}

export interface MetricsDashboardApiUpdateDashboardRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApiupdateDashboard
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsDashboardApiupdateDashboard
     */
    folderId: number
    /**
     * 
     * @type DashboardRequest
     * @memberof MetricsDashboardApiupdateDashboard
     */
    dashboardRequest: DashboardRequest
}

export class ObjectMetricsDashboardApi {
    private api: ObservableMetricsDashboardApi

    public constructor(configuration: Configuration, requestFactory?: MetricsDashboardApiRequestFactory, responseProcessor?: MetricsDashboardApiResponseProcessor) {
        this.api = new ObservableMetricsDashboardApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new dashboard in a given scope.
     * Create a new dashboard
     * @param param the request object
     */
    public createDashboardWithHttpInfo(param: MetricsDashboardApiCreateDashboardRequest, options?: ConfigurationOptions): Promise<HttpInfo<DashboardResponse>> {
        return this.api.createDashboardWithHttpInfo(param.folderId, param.dashboardRequest,  options).toPromise();
    }

    /**
     * Create a new dashboard in a given scope.
     * Create a new dashboard
     * @param param the request object
     */
    public createDashboard(param: MetricsDashboardApiCreateDashboardRequest, options?: ConfigurationOptions): Promise<DashboardResponse> {
        return this.api.createDashboard(param.folderId, param.dashboardRequest,  options).toPromise();
    }

    /**
     * Delete a specific dashboard.
     * Delete a dashboard
     * @param param the request object
     */
    public deleteDashboardWithHttpInfo(param: MetricsDashboardApiDeleteDashboardRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteDashboardWithHttpInfo(param.dashboardId, param.folderId,  options).toPromise();
    }

    /**
     * Delete a specific dashboard.
     * Delete a dashboard
     * @param param the request object
     */
    public deleteDashboard(param: MetricsDashboardApiDeleteDashboardRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteDashboard(param.dashboardId, param.folderId,  options).toPromise();
    }

    /**
     * List all dashboards for your user.
     * List of the dashboards
     * @param param the request object
     */
    public listDashboardsWithHttpInfo(param: MetricsDashboardApiListDashboardsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedDashboardListResponseList>> {
        return this.api.listDashboardsWithHttpInfo(param.folderId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all dashboards for your user.
     * List of the dashboards
     * @param param the request object
     */
    public listDashboards(param: MetricsDashboardApiListDashboardsRequest, options?: ConfigurationOptions): Promise<PaginatedDashboardListResponseList> {
        return this.api.listDashboards(param.folderId, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing dashboard without affecting other fields.
     * Partially update a dashboard
     * @param param the request object
     */
    public partialUpdateDashboardWithHttpInfo(param: MetricsDashboardApiPartialUpdateDashboardRequest, options?: ConfigurationOptions): Promise<HttpInfo<DashboardResponse>> {
        return this.api.partialUpdateDashboardWithHttpInfo(param.dashboardId, param.folderId, param.patchedDashboardRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing dashboard without affecting other fields.
     * Partially update a dashboard
     * @param param the request object
     */
    public partialUpdateDashboard(param: MetricsDashboardApiPartialUpdateDashboardRequest, options?: ConfigurationOptions): Promise<DashboardResponse> {
        return this.api.partialUpdateDashboard(param.dashboardId, param.folderId, param.patchedDashboardRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific dashboard.
     * Retrieve details from a dashboard
     * @param param the request object
     */
    public retrieveDashboardWithHttpInfo(param: MetricsDashboardApiRetrieveDashboardRequest, options?: ConfigurationOptions): Promise<HttpInfo<DashboardResponse>> {
        return this.api.retrieveDashboardWithHttpInfo(param.dashboardId, param.folderId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific dashboard.
     * Retrieve details from a dashboard
     * @param param the request object
     */
    public retrieveDashboard(param: MetricsDashboardApiRetrieveDashboardRequest, options?: ConfigurationOptions): Promise<DashboardResponse> {
        return this.api.retrieveDashboard(param.dashboardId, param.folderId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing dashboard. This replaces the entire dashboard with the new data provided.
     * Update a dashboard
     * @param param the request object
     */
    public updateDashboardWithHttpInfo(param: MetricsDashboardApiUpdateDashboardRequest, options?: ConfigurationOptions): Promise<HttpInfo<DashboardResponse>> {
        return this.api.updateDashboardWithHttpInfo(param.dashboardId, param.folderId, param.dashboardRequest,  options).toPromise();
    }

    /**
     * Update an existing dashboard. This replaces the entire dashboard with the new data provided.
     * Update a dashboard
     * @param param the request object
     */
    public updateDashboard(param: MetricsDashboardApiUpdateDashboardRequest, options?: ConfigurationOptions): Promise<DashboardResponse> {
        return this.api.updateDashboard(param.dashboardId, param.folderId, param.dashboardRequest,  options).toPromise();
    }

}

import { ObservableMetricsFoldersApi } from "./ObservableAPI";
import { MetricsFoldersApiRequestFactory, MetricsFoldersApiResponseProcessor} from "../apis/MetricsFoldersApi";

export interface MetricsFoldersApiCreateFolderRequest {
    /**
     * 
     * @type FolderRequest
     * @memberof MetricsFoldersApicreateFolder
     */
    folderRequest: FolderRequest
}

export interface MetricsFoldersApiDeleteFolderRequest {
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsFoldersApideleteFolder
     */
    folderId: number
}

export interface MetricsFoldersApiListFoldersRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsFoldersApilistFolders
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsFoldersApilistFolders
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsFoldersApilistFolders
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsFoldersApilistFolders
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsFoldersApilistFolders
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsFoldersApilistFolders
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsFoldersApilistFolders
     */
    search?: string
}

export interface MetricsFoldersApiPartialUpdateFolderRequest {
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsFoldersApipartialUpdateFolder
     */
    folderId: number
    /**
     * 
     * @type PatchedFolderRequest
     * @memberof MetricsFoldersApipartialUpdateFolder
     */
    patchedFolderRequest?: PatchedFolderRequest
}

export interface MetricsFoldersApiRetrieveFolderRequest {
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsFoldersApiretrieveFolder
     */
    folderId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsFoldersApiretrieveFolder
     */
    fields?: string
}

export interface MetricsFoldersApiUpdateFolderRequest {
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsFoldersApiupdateFolder
     */
    folderId: number
    /**
     * 
     * @type FolderRequest
     * @memberof MetricsFoldersApiupdateFolder
     */
    folderRequest: FolderRequest
}

export class ObjectMetricsFoldersApi {
    private api: ObservableMetricsFoldersApi

    public constructor(configuration: Configuration, requestFactory?: MetricsFoldersApiRequestFactory, responseProcessor?: MetricsFoldersApiResponseProcessor) {
        this.api = new ObservableMetricsFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new folder in a given scope.
     * Create a new folder
     * @param param the request object
     */
    public createFolderWithHttpInfo(param: MetricsFoldersApiCreateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        return this.api.createFolderWithHttpInfo(param.folderRequest,  options).toPromise();
    }

    /**
     * Create a new folder in a given scope.
     * Create a new folder
     * @param param the request object
     */
    public createFolder(param: MetricsFoldersApiCreateFolderRequest, options?: ConfigurationOptions): Promise<FolderResponse> {
        return this.api.createFolder(param.folderRequest,  options).toPromise();
    }

    /**
     * Delete a specific folder.
     * Delete a folder
     * @param param the request object
     */
    public deleteFolderWithHttpInfo(param: MetricsFoldersApiDeleteFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteFolderWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Delete a specific folder.
     * Delete a folder
     * @param param the request object
     */
    public deleteFolder(param: MetricsFoldersApiDeleteFolderRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteFolder(param.folderId,  options).toPromise();
    }

    /**
     * List all folders for your user.
     * List of the folders
     * @param param the request object
     */
    public listFoldersWithHttpInfo(param: MetricsFoldersApiListFoldersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFolderListResponseList>> {
        return this.api.listFoldersWithHttpInfo(param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all folders for your user.
     * List of the folders
     * @param param the request object
     */
    public listFolders(param: MetricsFoldersApiListFoldersRequest = {}, options?: ConfigurationOptions): Promise<PaginatedFolderListResponseList> {
        return this.api.listFolders(param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing folder without affecting other fields.
     * Partially update a folder
     * @param param the request object
     */
    public partialUpdateFolderWithHttpInfo(param: MetricsFoldersApiPartialUpdateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        return this.api.partialUpdateFolderWithHttpInfo(param.folderId, param.patchedFolderRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing folder without affecting other fields.
     * Partially update a folder
     * @param param the request object
     */
    public partialUpdateFolder(param: MetricsFoldersApiPartialUpdateFolderRequest, options?: ConfigurationOptions): Promise<FolderResponse> {
        return this.api.partialUpdateFolder(param.folderId, param.patchedFolderRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific folder.
     * Retrieve details from a folder
     * @param param the request object
     */
    public retrieveFolderWithHttpInfo(param: MetricsFoldersApiRetrieveFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        return this.api.retrieveFolderWithHttpInfo(param.folderId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific folder.
     * Retrieve details from a folder
     * @param param the request object
     */
    public retrieveFolder(param: MetricsFoldersApiRetrieveFolderRequest, options?: ConfigurationOptions): Promise<FolderResponse> {
        return this.api.retrieveFolder(param.folderId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing folder. This replaces the entire folder with the new data provided.
     * Update a folder
     * @param param the request object
     */
    public updateFolderWithHttpInfo(param: MetricsFoldersApiUpdateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        return this.api.updateFolderWithHttpInfo(param.folderId, param.folderRequest,  options).toPromise();
    }

    /**
     * Update an existing folder. This replaces the entire folder with the new data provided.
     * Update a folder
     * @param param the request object
     */
    public updateFolder(param: MetricsFoldersApiUpdateFolderRequest, options?: ConfigurationOptions): Promise<FolderResponse> {
        return this.api.updateFolder(param.folderId, param.folderRequest,  options).toPromise();
    }

}

import { ObservableMetricsLibraryReportsApi } from "./ObservableAPI";
import { MetricsLibraryReportsApiRequestFactory, MetricsLibraryReportsApiResponseProcessor} from "../apis/MetricsLibraryReportsApi";

export interface MetricsLibraryReportsApiCreateLibraryReportRequest {
    /**
     * 
     * @type LibraryReportRequest
     * @memberof MetricsLibraryReportsApicreateLibraryReport
     */
    libraryReportRequest: LibraryReportRequest
}

export interface MetricsLibraryReportsApiDeleteLibraryReportRequest {
    /**
     * The unique identifier of the library report
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsLibraryReportsApideleteLibraryReport
     */
    libraryReportId: number
}

export interface MetricsLibraryReportsApiListLibraryReportsRequest {
    /**
     * Filter by aggregation type (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    aggregationType?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    search?: string
    /**
     * Filter by type (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsLibraryReportsApilistLibraryReports
     */
    type?: string
}

export interface MetricsLibraryReportsApiRetrieveLibraryReportRequest {
    /**
     * The unique identifier of the library report
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsLibraryReportsApiretrieveLibraryReport
     */
    libraryReportId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsLibraryReportsApiretrieveLibraryReport
     */
    fields?: string
}

export interface MetricsLibraryReportsApiUpdateLibraryReportRequest {
    /**
     * The unique identifier of the library report
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsLibraryReportsApiupdateLibraryReport
     */
    libraryReportId: number
    /**
     * 
     * @type LibraryReportRequest
     * @memberof MetricsLibraryReportsApiupdateLibraryReport
     */
    libraryReportRequest: LibraryReportRequest
}

export class ObjectMetricsLibraryReportsApi {
    private api: ObservableMetricsLibraryReportsApi

    public constructor(configuration: Configuration, requestFactory?: MetricsLibraryReportsApiRequestFactory, responseProcessor?: MetricsLibraryReportsApiResponseProcessor) {
        this.api = new ObservableMetricsLibraryReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new library report in a given scope.
     * Create a new library report
     * @param param the request object
     */
    public createLibraryReportWithHttpInfo(param: MetricsLibraryReportsApiCreateLibraryReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        return this.api.createLibraryReportWithHttpInfo(param.libraryReportRequest,  options).toPromise();
    }

    /**
     * Create a new library report in a given scope.
     * Create a new library report
     * @param param the request object
     */
    public createLibraryReport(param: MetricsLibraryReportsApiCreateLibraryReportRequest, options?: ConfigurationOptions): Promise<ReportResponse> {
        return this.api.createLibraryReport(param.libraryReportRequest,  options).toPromise();
    }

    /**
     * Delete a specific library report.
     * Delete a library report
     * @param param the request object
     */
    public deleteLibraryReportWithHttpInfo(param: MetricsLibraryReportsApiDeleteLibraryReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteLibraryReportWithHttpInfo(param.libraryReportId,  options).toPromise();
    }

    /**
     * Delete a specific library report.
     * Delete a library report
     * @param param the request object
     */
    public deleteLibraryReport(param: MetricsLibraryReportsApiDeleteLibraryReportRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteLibraryReport(param.libraryReportId,  options).toPromise();
    }

    /**
     * List all library reports for your user.
     * List of library reports
     * @param param the request object
     */
    public listLibraryReportsWithHttpInfo(param: MetricsLibraryReportsApiListLibraryReportsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedReportListResponseList>> {
        return this.api.listLibraryReportsWithHttpInfo(param.aggregationType, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search, param.type,  options).toPromise();
    }

    /**
     * List all library reports for your user.
     * List of library reports
     * @param param the request object
     */
    public listLibraryReports(param: MetricsLibraryReportsApiListLibraryReportsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedReportListResponseList> {
        return this.api.listLibraryReports(param.aggregationType, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search, param.type,  options).toPromise();
    }

    /**
     * Retrieve details from a specific library report.
     * Retrieve details from a library report
     * @param param the request object
     */
    public retrieveLibraryReportWithHttpInfo(param: MetricsLibraryReportsApiRetrieveLibraryReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        return this.api.retrieveLibraryReportWithHttpInfo(param.libraryReportId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific library report.
     * Retrieve details from a library report
     * @param param the request object
     */
    public retrieveLibraryReport(param: MetricsLibraryReportsApiRetrieveLibraryReportRequest, options?: ConfigurationOptions): Promise<ReportResponse> {
        return this.api.retrieveLibraryReport(param.libraryReportId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing library report. This replaces the entire report with the new data provided.
     * Update a library report
     * @param param the request object
     */
    public updateLibraryReportWithHttpInfo(param: MetricsLibraryReportsApiUpdateLibraryReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        return this.api.updateLibraryReportWithHttpInfo(param.libraryReportId, param.libraryReportRequest,  options).toPromise();
    }

    /**
     * Update an existing library report. This replaces the entire report with the new data provided.
     * Update a library report
     * @param param the request object
     */
    public updateLibraryReport(param: MetricsLibraryReportsApiUpdateLibraryReportRequest, options?: ConfigurationOptions): Promise<ReportResponse> {
        return this.api.updateLibraryReport(param.libraryReportId, param.libraryReportRequest,  options).toPromise();
    }

}

import { ObservableMetricsRecommendationsApi } from "./ObservableAPI";
import { MetricsRecommendationsApiRequestFactory, MetricsRecommendationsApiResponseProcessor} from "../apis/MetricsRecommendationsApi";

export interface MetricsRecommendationsApiCreateRecommendationRequest {
    /**
     * 
     * @type RecommendationRequest
     * @memberof MetricsRecommendationsApicreateRecommendation
     */
    recommendationRequest: RecommendationRequest
}

export interface MetricsRecommendationsApiDeleteRecommendationRequest {
    /**
     * The unique identifier of the recommendation
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRecommendationsApideleteRecommendation
     */
    recommendationId: number
}

export interface MetricsRecommendationsApiListRecommendationsRequest {
    /**
     * Filter by dashboard ID (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRecommendationsApilistRecommendations
     */
    dashboard?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRecommendationsApilistRecommendations
     */
    fields?: string
    /**
     * Filter by recommendation ID (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRecommendationsApilistRecommendations
     */
    id?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRecommendationsApilistRecommendations
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRecommendationsApilistRecommendations
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRecommendationsApilistRecommendations
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRecommendationsApilistRecommendations
     */
    search?: string
}

export class ObjectMetricsRecommendationsApi {
    private api: ObservableMetricsRecommendationsApi

    public constructor(configuration: Configuration, requestFactory?: MetricsRecommendationsApiRequestFactory, responseProcessor?: MetricsRecommendationsApiResponseProcessor) {
        this.api = new ObservableMetricsRecommendationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new recommendation.
     * Create a new recommendation
     * @param param the request object
     */
    public createRecommendationWithHttpInfo(param: MetricsRecommendationsApiCreateRecommendationRequest, options?: ConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        return this.api.createRecommendationWithHttpInfo(param.recommendationRequest,  options).toPromise();
    }

    /**
     * Create a new recommendation.
     * Create a new recommendation
     * @param param the request object
     */
    public createRecommendation(param: MetricsRecommendationsApiCreateRecommendationRequest, options?: ConfigurationOptions): Promise<FolderResponse> {
        return this.api.createRecommendation(param.recommendationRequest,  options).toPromise();
    }

    /**
     * Delete a specific recommendation.
     * Delete a recommendation
     * @param param the request object
     */
    public deleteRecommendationWithHttpInfo(param: MetricsRecommendationsApiDeleteRecommendationRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteRecommendationWithHttpInfo(param.recommendationId,  options).toPromise();
    }

    /**
     * Delete a specific recommendation.
     * Delete a recommendation
     * @param param the request object
     */
    public deleteRecommendation(param: MetricsRecommendationsApiDeleteRecommendationRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteRecommendation(param.recommendationId,  options).toPromise();
    }

    /**
     * List all recommendations for your user.
     * List of the recommendations
     * @param param the request object
     */
    public listRecommendationsWithHttpInfo(param: MetricsRecommendationsApiListRecommendationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedFolderListResponseList>> {
        return this.api.listRecommendationsWithHttpInfo(param.dashboard, param.fields, param.id, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all recommendations for your user.
     * List of the recommendations
     * @param param the request object
     */
    public listRecommendations(param: MetricsRecommendationsApiListRecommendationsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedFolderListResponseList> {
        return this.api.listRecommendations(param.dashboard, param.fields, param.id, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

}

import { ObservableMetricsReportsApi } from "./ObservableAPI";
import { MetricsReportsApiRequestFactory, MetricsReportsApiResponseProcessor} from "../apis/MetricsReportsApi";

export interface MetricsReportsApiCreateReportRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApicreateReport
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApicreateReport
     */
    folderId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApicreateReport
     */
    rowId: number
    /**
     * 
     * @type ReportRequest
     * @memberof MetricsReportsApicreateReport
     */
    reportRequest: ReportRequest
}

export interface MetricsReportsApiDeleteReportRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApideleteReport
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApideleteReport
     */
    folderId: number
    /**
     * The unique identifier of the report
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApideleteReport
     */
    reportId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApideleteReport
     */
    rowId: number
}

export interface MetricsReportsApiListReportsRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApilistReports
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApilistReports
     */
    folderId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApilistReports
     */
    rowId: number
    /**
     * Filter by aggregation type (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsReportsApilistReports
     */
    aggregationType?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsReportsApilistReports
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApilistReports
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsReportsApilistReports
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsReportsApilistReports
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApilistReports
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApilistReports
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsReportsApilistReports
     */
    search?: string
    /**
     * Filter by type (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsReportsApilistReports
     */
    type?: string
}

export interface MetricsReportsApiOrderingReportRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiorderingReport
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiorderingReport
     */
    folderId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiorderingReport
     */
    rowId: number
    /**
     * 
     * @type OrderRequest
     * @memberof MetricsReportsApiorderingReport
     */
    orderRequest: OrderRequest
}

export interface MetricsReportsApiRetrieveReportRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiretrieveReport
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiretrieveReport
     */
    folderId: number
    /**
     * The unique identifier of the report
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiretrieveReport
     */
    reportId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiretrieveReport
     */
    rowId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsReportsApiretrieveReport
     */
    fields?: string
}

export interface MetricsReportsApiUpdateReportRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiupdateReport
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiupdateReport
     */
    folderId: number
    /**
     * The unique identifier of the report
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiupdateReport
     */
    reportId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsReportsApiupdateReport
     */
    rowId: number
    /**
     * 
     * @type ReportRequest
     * @memberof MetricsReportsApiupdateReport
     */
    reportRequest: ReportRequest
}

export class ObjectMetricsReportsApi {
    private api: ObservableMetricsReportsApi

    public constructor(configuration: Configuration, requestFactory?: MetricsReportsApiRequestFactory, responseProcessor?: MetricsReportsApiResponseProcessor) {
        this.api = new ObservableMetricsReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new report in a given scope.
     * Create a new report
     * @param param the request object
     */
    public createReportWithHttpInfo(param: MetricsReportsApiCreateReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        return this.api.createReportWithHttpInfo(param.dashboardId, param.folderId, param.rowId, param.reportRequest,  options).toPromise();
    }

    /**
     * Create a new report in a given scope.
     * Create a new report
     * @param param the request object
     */
    public createReport(param: MetricsReportsApiCreateReportRequest, options?: ConfigurationOptions): Promise<ReportResponse> {
        return this.api.createReport(param.dashboardId, param.folderId, param.rowId, param.reportRequest,  options).toPromise();
    }

    /**
     * Delete a specific report.
     * Delete a report
     * @param param the request object
     */
    public deleteReportWithHttpInfo(param: MetricsReportsApiDeleteReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteReportWithHttpInfo(param.dashboardId, param.folderId, param.reportId, param.rowId,  options).toPromise();
    }

    /**
     * Delete a specific report.
     * Delete a report
     * @param param the request object
     */
    public deleteReport(param: MetricsReportsApiDeleteReportRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteReport(param.dashboardId, param.folderId, param.reportId, param.rowId,  options).toPromise();
    }

    /**
     * List all reports for your user.
     * List of reports
     * @param param the request object
     */
    public listReportsWithHttpInfo(param: MetricsReportsApiListReportsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedReportListResponseList>> {
        return this.api.listReportsWithHttpInfo(param.dashboardId, param.folderId, param.rowId, param.aggregationType, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search, param.type,  options).toPromise();
    }

    /**
     * List all reports for your user.
     * List of reports
     * @param param the request object
     */
    public listReports(param: MetricsReportsApiListReportsRequest, options?: ConfigurationOptions): Promise<PaginatedReportListResponseList> {
        return this.api.listReports(param.dashboardId, param.folderId, param.rowId, param.aggregationType, param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search, param.type,  options).toPromise();
    }

    /**
     * Reorder all reports for a specific Row.
     * Ordering reports in row
     * @param param the request object
     */
    public orderingReportWithHttpInfo(param: MetricsReportsApiOrderingReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderResponse>> {
        return this.api.orderingReportWithHttpInfo(param.dashboardId, param.folderId, param.rowId, param.orderRequest,  options).toPromise();
    }

    /**
     * Reorder all reports for a specific Row.
     * Ordering reports in row
     * @param param the request object
     */
    public orderingReport(param: MetricsReportsApiOrderingReportRequest, options?: ConfigurationOptions): Promise<OrderResponse> {
        return this.api.orderingReport(param.dashboardId, param.folderId, param.rowId, param.orderRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific report.
     * Retrieve details from a report
     * @param param the request object
     */
    public retrieveReportWithHttpInfo(param: MetricsReportsApiRetrieveReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        return this.api.retrieveReportWithHttpInfo(param.dashboardId, param.folderId, param.reportId, param.rowId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific report.
     * Retrieve details from a report
     * @param param the request object
     */
    public retrieveReport(param: MetricsReportsApiRetrieveReportRequest, options?: ConfigurationOptions): Promise<ReportResponse> {
        return this.api.retrieveReport(param.dashboardId, param.folderId, param.reportId, param.rowId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing report. This replaces the entire report with the new data provided.
     * Update a report
     * @param param the request object
     */
    public updateReportWithHttpInfo(param: MetricsReportsApiUpdateReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        return this.api.updateReportWithHttpInfo(param.dashboardId, param.folderId, param.reportId, param.rowId, param.reportRequest,  options).toPromise();
    }

    /**
     * Update an existing report. This replaces the entire report with the new data provided.
     * Update a report
     * @param param the request object
     */
    public updateReport(param: MetricsReportsApiUpdateReportRequest, options?: ConfigurationOptions): Promise<ReportResponse> {
        return this.api.updateReport(param.dashboardId, param.folderId, param.reportId, param.rowId, param.reportRequest,  options).toPromise();
    }

}

import { ObservableMetricsRowsApi } from "./ObservableAPI";
import { MetricsRowsApiRequestFactory, MetricsRowsApiResponseProcessor} from "../apis/MetricsRowsApi";

export interface MetricsRowsApiCreateRowRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApicreateRow
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApicreateRow
     */
    folderId: number
    /**
     * 
     * @type RowRequest
     * @memberof MetricsRowsApicreateRow
     */
    rowRequest: RowRequest
}

export interface MetricsRowsApiDeleteRowRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApideleteRow
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApideleteRow
     */
    folderId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApideleteRow
     */
    rowId: number
}

export interface MetricsRowsApiListRowsRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApilistRows
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApilistRows
     */
    folderId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRowsApilistRows
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApilistRows
     */
    id?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRowsApilistRows
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApilistRows
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApilistRows
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRowsApilistRows
     */
    search?: string
    /**
     * Filter by title (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRowsApilistRows
     */
    title?: string
}

export interface MetricsRowsApiOrderingRowRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApiorderingRow
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApiorderingRow
     */
    folderId: number
    /**
     * 
     * @type OrderRequest
     * @memberof MetricsRowsApiorderingRow
     */
    orderRequest: OrderRequest
}

export interface MetricsRowsApiRetrieveRowRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApiretrieveRow
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApiretrieveRow
     */
    folderId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApiretrieveRow
     */
    rowId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof MetricsRowsApiretrieveRow
     */
    fields?: string
}

export interface MetricsRowsApiUpdateRowRequest {
    /**
     * The unique identifier of the dashboard
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApiupdateRow
     */
    dashboardId: number
    /**
     * The unique identifier of the folder
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApiupdateRow
     */
    folderId: number
    /**
     * The unique identifier of the row
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof MetricsRowsApiupdateRow
     */
    rowId: number
    /**
     * 
     * @type RowRequest
     * @memberof MetricsRowsApiupdateRow
     */
    rowRequest: RowRequest
}

export class ObjectMetricsRowsApi {
    private api: ObservableMetricsRowsApi

    public constructor(configuration: Configuration, requestFactory?: MetricsRowsApiRequestFactory, responseProcessor?: MetricsRowsApiResponseProcessor) {
        this.api = new ObservableMetricsRowsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new row in dashboard.
     * Create a new row
     * @param param the request object
     */
    public createRowWithHttpInfo(param: MetricsRowsApiCreateRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<RowResponse>> {
        return this.api.createRowWithHttpInfo(param.dashboardId, param.folderId, param.rowRequest,  options).toPromise();
    }

    /**
     * Create a new row in dashboard.
     * Create a new row
     * @param param the request object
     */
    public createRow(param: MetricsRowsApiCreateRowRequest, options?: ConfigurationOptions): Promise<RowResponse> {
        return this.api.createRow(param.dashboardId, param.folderId, param.rowRequest,  options).toPromise();
    }

    /**
     * Delete a specific row.
     * Delete a row
     * @param param the request object
     */
    public deleteRowWithHttpInfo(param: MetricsRowsApiDeleteRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteRowWithHttpInfo(param.dashboardId, param.folderId, param.rowId,  options).toPromise();
    }

    /**
     * Delete a specific row.
     * Delete a row
     * @param param the request object
     */
    public deleteRow(param: MetricsRowsApiDeleteRowRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteRow(param.dashboardId, param.folderId, param.rowId,  options).toPromise();
    }

    /**
     * List all rows in dashboards.
     * List of the rows
     * @param param the request object
     */
    public listRowsWithHttpInfo(param: MetricsRowsApiListRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedRowListResponseList>> {
        return this.api.listRowsWithHttpInfo(param.dashboardId, param.folderId, param.fields, param.id, param.ordering, param.page, param.pageSize, param.search, param.title,  options).toPromise();
    }

    /**
     * List all rows in dashboards.
     * List of the rows
     * @param param the request object
     */
    public listRows(param: MetricsRowsApiListRowsRequest, options?: ConfigurationOptions): Promise<PaginatedRowListResponseList> {
        return this.api.listRows(param.dashboardId, param.folderId, param.fields, param.id, param.ordering, param.page, param.pageSize, param.search, param.title,  options).toPromise();
    }

    /**
     * Reorder all rows for a specific Dahsboard.
     * Ordering rows in dashboard
     * @param param the request object
     */
    public orderingRowWithHttpInfo(param: MetricsRowsApiOrderingRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderResponse>> {
        return this.api.orderingRowWithHttpInfo(param.dashboardId, param.folderId, param.orderRequest,  options).toPromise();
    }

    /**
     * Reorder all rows for a specific Dahsboard.
     * Ordering rows in dashboard
     * @param param the request object
     */
    public orderingRow(param: MetricsRowsApiOrderingRowRequest, options?: ConfigurationOptions): Promise<OrderResponse> {
        return this.api.orderingRow(param.dashboardId, param.folderId, param.orderRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific row.
     * Retrieve details from a row
     * @param param the request object
     */
    public retrieveRowWithHttpInfo(param: MetricsRowsApiRetrieveRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<RowResponse>> {
        return this.api.retrieveRowWithHttpInfo(param.dashboardId, param.folderId, param.rowId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific row.
     * Retrieve details from a row
     * @param param the request object
     */
    public retrieveRow(param: MetricsRowsApiRetrieveRowRequest, options?: ConfigurationOptions): Promise<RowResponse> {
        return this.api.retrieveRow(param.dashboardId, param.folderId, param.rowId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing row. 
     * Update a row
     * @param param the request object
     */
    public updateRowWithHttpInfo(param: MetricsRowsApiUpdateRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<RowResponse>> {
        return this.api.updateRowWithHttpInfo(param.dashboardId, param.folderId, param.rowId, param.rowRequest,  options).toPromise();
    }

    /**
     * Update an existing row. 
     * Update a row
     * @param param the request object
     */
    public updateRow(param: MetricsRowsApiUpdateRowRequest, options?: ConfigurationOptions): Promise<RowResponse> {
        return this.api.updateRow(param.dashboardId, param.folderId, param.rowId, param.rowRequest,  options).toPromise();
    }

}

import { ObservableNetworkListVersionsApi } from "./ObservableAPI";
import { NetworkListVersionsApiRequestFactory, NetworkListVersionsApiResponseProcessor} from "../apis/NetworkListVersionsApi";

export interface NetworkListVersionsApiArchiveNetworkListVersionRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApiarchiveNetworkListVersion
     */
    networkListId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApiarchiveNetworkListVersion
     */
    versionId: string
    /**
     * 
     * @type VersionArchiveRequest
     * @memberof NetworkListVersionsApiarchiveNetworkListVersion
     */
    versionArchiveRequest?: VersionArchiveRequest
}

export interface NetworkListVersionsApiBuildNetworkListVersionRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApibuildNetworkListVersion
     */
    networkListId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApibuildNetworkListVersion
     */
    versionId: string
    /**
     * 
     * @type VersionBuildRequest
     * @memberof NetworkListVersionsApibuildNetworkListVersion
     */
    versionBuildRequest?: VersionBuildRequest
}

export interface NetworkListVersionsApiCancelNetworkListVersionBuildRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApicancelNetworkListVersionBuild
     */
    networkListId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApicancelNetworkListVersionBuild
     */
    versionId: string
    /**
     * 
     * @type VersionCancelRequest
     * @memberof NetworkListVersionsApicancelNetworkListVersionBuild
     */
    versionCancelRequest?: VersionCancelRequest
}

export interface NetworkListVersionsApiCreateNetworkListVersionRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApicreateNetworkListVersion
     */
    networkListId: number
    /**
     * 
     * @type VersionCreateRequest
     * @memberof NetworkListVersionsApicreateNetworkListVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export interface NetworkListVersionsApiDeleteNetworkListVersionRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApideleteNetworkListVersion
     */
    networkListId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApideleteNetworkListVersion
     */
    versionId: string
}

export interface NetworkListVersionsApiListNetworkListVersionsRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApilistNetworkListVersions
     */
    networkListId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApilistNetworkListVersions
     */
    fields?: string
}

export interface NetworkListVersionsApiPartialUpdateNetworkListVersionRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApipartialUpdateNetworkListVersion
     */
    networkListId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApipartialUpdateNetworkListVersion
     */
    versionId: string
    /**
     * 
     * @type PatchedVersionCreateRequest
     * @memberof NetworkListVersionsApipartialUpdateNetworkListVersion
     */
    patchedVersionCreateRequest?: PatchedVersionCreateRequest
}

export interface NetworkListVersionsApiRetrieveNetworkListVersionRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApiretrieveNetworkListVersion
     */
    networkListId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApiretrieveNetworkListVersion
     */
    versionId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApiretrieveNetworkListVersion
     */
    fields?: string
}

export interface NetworkListVersionsApiUpdateNetworkListVersionRequest {
    /**
     * The ID of the Network List resource.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListVersionsApiupdateNetworkListVersion
     */
    networkListId: number
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListVersionsApiupdateNetworkListVersion
     */
    versionId: string
    /**
     * 
     * @type VersionCreateRequest
     * @memberof NetworkListVersionsApiupdateNetworkListVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export class ObjectNetworkListVersionsApi {
    private api: ObservableNetworkListVersionsApi

    public constructor(configuration: Configuration, requestFactory?: NetworkListVersionsApiRequestFactory, responseProcessor?: NetworkListVersionsApiResponseProcessor) {
        this.api = new ObservableNetworkListVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a Network List version
     * @param param the request object
     */
    public archiveNetworkListVersionWithHttpInfo(param: NetworkListVersionsApiArchiveNetworkListVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveNetworkListVersionWithHttpInfo(param.networkListId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a Network List version
     * @param param the request object
     */
    public archiveNetworkListVersion(param: NetworkListVersionsApiArchiveNetworkListVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveNetworkListVersion(param.networkListId, param.versionId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Network List version
     * @param param the request object
     */
    public buildNetworkListVersionWithHttpInfo(param: NetworkListVersionsApiBuildNetworkListVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.buildNetworkListVersionWithHttpInfo(param.networkListId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Network List version
     * @param param the request object
     */
    public buildNetworkListVersion(param: NetworkListVersionsApiBuildNetworkListVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.buildNetworkListVersion(param.networkListId, param.versionId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Network List version build
     * @param param the request object
     */
    public cancelNetworkListVersionBuildWithHttpInfo(param: NetworkListVersionsApiCancelNetworkListVersionBuildRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelNetworkListVersionBuildWithHttpInfo(param.networkListId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Network List version build
     * @param param the request object
     */
    public cancelNetworkListVersionBuild(param: NetworkListVersionsApiCancelNetworkListVersionBuildRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelNetworkListVersionBuild(param.networkListId, param.versionId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Network List version
     * @param param the request object
     */
    public createNetworkListVersionWithHttpInfo(param: NetworkListVersionsApiCreateNetworkListVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createNetworkListVersionWithHttpInfo(param.networkListId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Network List version
     * @param param the request object
     */
    public createNetworkListVersion(param: NetworkListVersionsApiCreateNetworkListVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createNetworkListVersion(param.networkListId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Network List version
     * @param param the request object
     */
    public deleteNetworkListVersionWithHttpInfo(param: NetworkListVersionsApiDeleteNetworkListVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteNetworkListVersionWithHttpInfo(param.networkListId, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Network List version
     * @param param the request object
     */
    public deleteNetworkListVersion(param: NetworkListVersionsApiDeleteNetworkListVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteNetworkListVersion(param.networkListId, param.versionId,  options).toPromise();
    }

    /**
     * List all versions of a specific Network List.
     * List Network List versions
     * @param param the request object
     */
    public listNetworkListVersionsWithHttpInfo(param: NetworkListVersionsApiListNetworkListVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.listNetworkListVersionsWithHttpInfo(param.networkListId, param.fields,  options).toPromise();
    }

    /**
     * List all versions of a specific Network List.
     * List Network List versions
     * @param param the request object
     */
    public listNetworkListVersions(param: NetworkListVersionsApiListNetworkListVersionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.listNetworkListVersions(param.networkListId, param.fields,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Network List version
     * @param param the request object
     */
    public partialUpdateNetworkListVersionWithHttpInfo(param: NetworkListVersionsApiPartialUpdateNetworkListVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.partialUpdateNetworkListVersionWithHttpInfo(param.networkListId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Network List version
     * @param param the request object
     */
    public partialUpdateNetworkListVersion(param: NetworkListVersionsApiPartialUpdateNetworkListVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.partialUpdateNetworkListVersion(param.networkListId, param.versionId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Network List version
     * @param param the request object
     */
    public retrieveNetworkListVersionWithHttpInfo(param: NetworkListVersionsApiRetrieveNetworkListVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.retrieveNetworkListVersionWithHttpInfo(param.networkListId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Network List version
     * @param param the request object
     */
    public retrieveNetworkListVersion(param: NetworkListVersionsApiRetrieveNetworkListVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.retrieveNetworkListVersion(param.networkListId, param.versionId, param.fields,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a Network List version
     * @param param the request object
     */
    public updateNetworkListVersionWithHttpInfo(param: NetworkListVersionsApiUpdateNetworkListVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateNetworkListVersionWithHttpInfo(param.networkListId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a Network List version
     * @param param the request object
     */
    public updateNetworkListVersion(param: NetworkListVersionsApiUpdateNetworkListVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateNetworkListVersion(param.networkListId, param.versionId, param.versionCreateRequest,  options).toPromise();
    }

}

import { ObservableNetworkListsApi } from "./ObservableAPI";
import { NetworkListsApiRequestFactory, NetworkListsApiResponseProcessor} from "../apis/NetworkListsApi";

export interface NetworkListsApiCreateNetworkListRequest {
    /**
     * 
     * @type NetworkListRequest
     * @memberof NetworkListsApicreateNetworkList
     */
    networkListRequest: NetworkListRequest
}

export interface NetworkListsApiDeleteNetworkListRequest {
    /**
     * A unique integer value identifying the network list.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListsApideleteNetworkList
     */
    networkListId: number
}

export interface NetworkListsApiListNetworkListsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListsApilistNetworkLists
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListsApilistNetworkLists
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListsApilistNetworkLists
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof NetworkListsApilistNetworkLists
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof NetworkListsApilistNetworkLists
     */
    lastModifiedLte?: Date
    /**
     * Filter by list type (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListsApilistNetworkLists
     */
    listTypeIn?: string
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListsApilistNetworkLists
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListsApilistNetworkLists
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListsApilistNetworkLists
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListsApilistNetworkLists
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListsApilistNetworkLists
     */
    search?: string
}

export interface NetworkListsApiPartialUpdateNetworkListRequest {
    /**
     * A unique integer value identifying the network list.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListsApipartialUpdateNetworkList
     */
    networkListId: number
    /**
     * 
     * @type PatchedNetworkListRequest
     * @memberof NetworkListsApipartialUpdateNetworkList
     */
    patchedNetworkListRequest?: PatchedNetworkListRequest
}

export interface NetworkListsApiRetrieveNetworkListRequest {
    /**
     * A unique integer value identifying the network list.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListsApiretrieveNetworkList
     */
    networkListId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof NetworkListsApiretrieveNetworkList
     */
    fields?: string
    /**
     * Filter by IPv4. Only applicable for network lists of type \&#39;ip_cidr\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof NetworkListsApiretrieveNetworkList
     */
    ipv4?: boolean
    /**
     * Filter by IPv6. Only applicable for network lists of type \&#39;ip_cidr\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof NetworkListsApiretrieveNetworkList
     */
    ipv6?: boolean
}

export interface NetworkListsApiUpdateNetworkListRequest {
    /**
     * A unique integer value identifying the network list.
     * Defaults to: undefined
     * @type number
     * @memberof NetworkListsApiupdateNetworkList
     */
    networkListId: number
    /**
     * 
     * @type NetworkListRequest
     * @memberof NetworkListsApiupdateNetworkList
     */
    networkListRequest: NetworkListRequest
}

export class ObjectNetworkListsApi {
    private api: ObservableNetworkListsApi

    public constructor(configuration: Configuration, requestFactory?: NetworkListsApiRequestFactory, responseProcessor?: NetworkListsApiResponseProcessor) {
        this.api = new ObservableNetworkListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Network List in your account.
     * Create a Network List
     * @param param the request object
     */
    public createNetworkListWithHttpInfo(param: NetworkListsApiCreateNetworkListRequest, options?: ConfigurationOptions): Promise<HttpInfo<NetworkListResponse>> {
        return this.api.createNetworkListWithHttpInfo(param.networkListRequest,  options).toPromise();
    }

    /**
     * Create a new Network List in your account.
     * Create a Network List
     * @param param the request object
     */
    public createNetworkList(param: NetworkListsApiCreateNetworkListRequest, options?: ConfigurationOptions): Promise<NetworkListResponse> {
        return this.api.createNetworkList(param.networkListRequest,  options).toPromise();
    }

    /**
     * Delete a specific Network List in your account.
     * Delete a Network List
     * @param param the request object
     */
    public deleteNetworkListWithHttpInfo(param: NetworkListsApiDeleteNetworkListRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteNetworkListWithHttpInfo(param.networkListId,  options).toPromise();
    }

    /**
     * Delete a specific Network List in your account.
     * Delete a Network List
     * @param param the request object
     */
    public deleteNetworkList(param: NetworkListsApiDeleteNetworkListRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteNetworkList(param.networkListId,  options).toPromise();
    }

    /**
     * List all Network Lists owned by your account.
     * List Network Lists
     * @param param the request object
     */
    public listNetworkListsWithHttpInfo(param: NetworkListsApiListNetworkListsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedNetworkListSummaryList>> {
        return this.api.listNetworkListsWithHttpInfo(param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.listTypeIn, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Network Lists owned by your account.
     * List Network Lists
     * @param param the request object
     */
    public listNetworkLists(param: NetworkListsApiListNetworkListsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedNetworkListSummaryList> {
        return this.api.listNetworkLists(param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.listTypeIn, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Network List without affecting other fields.
     * Partially update a Network List
     * @param param the request object
     */
    public partialUpdateNetworkListWithHttpInfo(param: NetworkListsApiPartialUpdateNetworkListRequest, options?: ConfigurationOptions): Promise<HttpInfo<NetworkListResponse>> {
        return this.api.partialUpdateNetworkListWithHttpInfo(param.networkListId, param.patchedNetworkListRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Network List without affecting other fields.
     * Partially update a Network List
     * @param param the request object
     */
    public partialUpdateNetworkList(param: NetworkListsApiPartialUpdateNetworkListRequest, options?: ConfigurationOptions): Promise<NetworkListResponse> {
        return this.api.partialUpdateNetworkList(param.networkListId, param.patchedNetworkListRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Network List in your account.
     * Retrieve details of a Network List
     * @param param the request object
     */
    public retrieveNetworkListWithHttpInfo(param: NetworkListsApiRetrieveNetworkListRequest, options?: ConfigurationOptions): Promise<HttpInfo<NetworkListResponse>> {
        return this.api.retrieveNetworkListWithHttpInfo(param.networkListId, param.fields, param.ipv4, param.ipv6,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Network List in your account.
     * Retrieve details of a Network List
     * @param param the request object
     */
    public retrieveNetworkList(param: NetworkListsApiRetrieveNetworkListRequest, options?: ConfigurationOptions): Promise<NetworkListResponse> {
        return this.api.retrieveNetworkList(param.networkListId, param.fields, param.ipv4, param.ipv6,  options).toPromise();
    }

    /**
     * Update an existing Network List. This replaces the entire Network List with the new data provided.
     * Update a Network List
     * @param param the request object
     */
    public updateNetworkListWithHttpInfo(param: NetworkListsApiUpdateNetworkListRequest, options?: ConfigurationOptions): Promise<HttpInfo<NetworkListResponse>> {
        return this.api.updateNetworkListWithHttpInfo(param.networkListId, param.networkListRequest,  options).toPromise();
    }

    /**
     * Update an existing Network List. This replaces the entire Network List with the new data provided.
     * Update a Network List
     * @param param the request object
     */
    public updateNetworkList(param: NetworkListsApiUpdateNetworkListRequest, options?: ConfigurationOptions): Promise<NetworkListResponse> {
        return this.api.updateNetworkList(param.networkListId, param.networkListRequest,  options).toPromise();
    }

}

import { ObservableOrchestratorNodeGroupsApi } from "./ObservableAPI";
import { OrchestratorNodeGroupsApiRequestFactory, OrchestratorNodeGroupsApiResponseProcessor} from "../apis/OrchestratorNodeGroupsApi";

export interface OrchestratorNodeGroupsApiBindNodeGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeGroupsApibindNodeGroup
     */
    nodeId: number
    /**
     * 
     * @type NodeGroupsByIdRequest
     * @memberof OrchestratorNodeGroupsApibindNodeGroup
     */
    nodeGroupsByIdRequest?: NodeGroupsByIdRequest
}

export interface OrchestratorNodeGroupsApiCreateNodeGroupRequest {
    /**
     * 
     * @type NodeGroupsRequest
     * @memberof OrchestratorNodeGroupsApicreateNodeGroup
     */
    nodeGroupsRequest: NodeGroupsRequest
}

export interface OrchestratorNodeGroupsApiListNodeGroupsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeGroupsApilistNodeGroups
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeGroupsApilistNodeGroups
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeGroupsApilistNodeGroups
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeGroupsApilistNodeGroups
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeGroupsApilistNodeGroups
     */
    search?: string
}

export interface OrchestratorNodeGroupsApiListNodeGroupsByIDRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeGroupsApilistNodeGroupsByID
     */
    nodeId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeGroupsApilistNodeGroupsByID
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeGroupsApilistNodeGroupsByID
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeGroupsApilistNodeGroupsByID
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeGroupsApilistNodeGroupsByID
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeGroupsApilistNodeGroupsByID
     */
    search?: string
}

export interface OrchestratorNodeGroupsApiRemoveNodeGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeGroupsApiremoveNodeGroup
     */
    groupId: number
}

export class ObjectOrchestratorNodeGroupsApi {
    private api: ObservableOrchestratorNodeGroupsApi

    public constructor(configuration: Configuration, requestFactory?: OrchestratorNodeGroupsApiRequestFactory, responseProcessor?: OrchestratorNodeGroupsApiResponseProcessor) {
        this.api = new ObservableOrchestratorNodeGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a bind between Node and Group.
     * Bind Node Group
     * @param param the request object
     */
    public bindNodeGroupWithHttpInfo(param: OrchestratorNodeGroupsApiBindNodeGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodeGroupsById>> {
        return this.api.bindNodeGroupWithHttpInfo(param.nodeId, param.nodeGroupsByIdRequest,  options).toPromise();
    }

    /**
     * Create a bind between Node and Group.
     * Bind Node Group
     * @param param the request object
     */
    public bindNodeGroup(param: OrchestratorNodeGroupsApiBindNodeGroupRequest, options?: ConfigurationOptions): Promise<ResponseAsyncNodeGroupsById> {
        return this.api.bindNodeGroup(param.nodeId, param.nodeGroupsByIdRequest,  options).toPromise();
    }

    /**
     * Create an Node Group.
     * Create Node Group
     * @param param the request object
     */
    public createNodeGroupWithHttpInfo(param: OrchestratorNodeGroupsApiCreateNodeGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<NodeGroups>> {
        return this.api.createNodeGroupWithHttpInfo(param.nodeGroupsRequest,  options).toPromise();
    }

    /**
     * Create an Node Group.
     * Create Node Group
     * @param param the request object
     */
    public createNodeGroup(param: OrchestratorNodeGroupsApiCreateNodeGroupRequest, options?: ConfigurationOptions): Promise<NodeGroups> {
        return this.api.createNodeGroup(param.nodeGroupsRequest,  options).toPromise();
    }

    /**
     * List all Groups of an Node.
     * List Node Groups
     * @param param the request object
     */
    public listNodeGroupsWithHttpInfo(param: OrchestratorNodeGroupsApiListNodeGroupsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedNodeGroupsList>> {
        return this.api.listNodeGroupsWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Groups of an Node.
     * List Node Groups
     * @param param the request object
     */
    public listNodeGroups(param: OrchestratorNodeGroupsApiListNodeGroupsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedNodeGroupsList> {
        return this.api.listNodeGroups(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Groups of an Node.
     * List Node Groups by id
     * @param param the request object
     */
    public listNodeGroupsByIDWithHttpInfo(param: OrchestratorNodeGroupsApiListNodeGroupsByIDRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedNodeGroupsByIdList>> {
        return this.api.listNodeGroupsByIDWithHttpInfo(param.nodeId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Groups of an Node.
     * List Node Groups by id
     * @param param the request object
     */
    public listNodeGroupsByID(param: OrchestratorNodeGroupsApiListNodeGroupsByIDRequest, options?: ConfigurationOptions): Promise<PaginatedNodeGroupsByIdList> {
        return this.api.listNodeGroupsByID(param.nodeId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Remove an Node Group.
     * Remove Node Group
     * @param param the request object
     */
    public removeNodeGroupWithHttpInfo(param: OrchestratorNodeGroupsApiRemoveNodeGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeNodeGroupWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Remove an Node Group.
     * Remove Node Group
     * @param param the request object
     */
    public removeNodeGroup(param: OrchestratorNodeGroupsApiRemoveNodeGroupRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeNodeGroup(param.groupId,  options).toPromise();
    }

}

import { ObservableOrchestratorNodeServicesApi } from "./ObservableAPI";
import { OrchestratorNodeServicesApiRequestFactory, OrchestratorNodeServicesApiResponseProcessor} from "../apis/OrchestratorNodeServicesApi";

export interface OrchestratorNodeServicesApiBindNodeServicesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeServicesApibindNodeServices
     */
    nodeId: number
    /**
     * 
     * @type NodeServicesRequest
     * @memberof OrchestratorNodeServicesApibindNodeServices
     */
    nodeServicesRequest: NodeServicesRequest
}

export interface OrchestratorNodeServicesApiListNodeServicesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeServicesApilistNodeServices
     */
    nodeId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeServicesApilistNodeServices
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeServicesApilistNodeServices
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeServicesApilistNodeServices
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeServicesApilistNodeServices
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeServicesApilistNodeServices
     */
    search?: string
}

export interface OrchestratorNodeServicesApiRetrieveNodeServiceBindRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeServicesApiretrieveNodeServiceBind
     */
    bindId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeServicesApiretrieveNodeServiceBind
     */
    nodeId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodeServicesApiretrieveNodeServiceBind
     */
    fields?: string
}

export interface OrchestratorNodeServicesApiUnbindNodeServiceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeServicesApiunbindNodeService
     */
    bindId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodeServicesApiunbindNodeService
     */
    nodeId: number
}

export class ObjectOrchestratorNodeServicesApi {
    private api: ObservableOrchestratorNodeServicesApi

    public constructor(configuration: Configuration, requestFactory?: OrchestratorNodeServicesApiRequestFactory, responseProcessor?: OrchestratorNodeServicesApiResponseProcessor) {
        this.api = new ObservableOrchestratorNodeServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a bind between Node and Service.
     * Bind Node Service
     * @param param the request object
     */
    public bindNodeServicesWithHttpInfo(param: OrchestratorNodeServicesApiBindNodeServicesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodeServices>> {
        return this.api.bindNodeServicesWithHttpInfo(param.nodeId, param.nodeServicesRequest,  options).toPromise();
    }

    /**
     * Create a bind between Node and Service.
     * Bind Node Service
     * @param param the request object
     */
    public bindNodeServices(param: OrchestratorNodeServicesApiBindNodeServicesRequest, options?: ConfigurationOptions): Promise<ResponseAsyncNodeServices> {
        return this.api.bindNodeServices(param.nodeId, param.nodeServicesRequest,  options).toPromise();
    }

    /**
     * List all Services from an Node.
     * List Node Services
     * @param param the request object
     */
    public listNodeServicesWithHttpInfo(param: OrchestratorNodeServicesApiListNodeServicesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedNodeServicesList>> {
        return this.api.listNodeServicesWithHttpInfo(param.nodeId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Services from an Node.
     * List Node Services
     * @param param the request object
     */
    public listNodeServices(param: OrchestratorNodeServicesApiListNodeServicesRequest, options?: ConfigurationOptions): Promise<PaginatedNodeServicesList> {
        return this.api.listNodeServices(param.nodeId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Node Service Bind in your account.
     * Retrieve details of an Node Service Bind
     * @param param the request object
     */
    public retrieveNodeServiceBindWithHttpInfo(param: OrchestratorNodeServicesApiRetrieveNodeServiceBindRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveNodeServiceBind>> {
        return this.api.retrieveNodeServiceBindWithHttpInfo(param.bindId, param.nodeId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Node Service Bind in your account.
     * Retrieve details of an Node Service Bind
     * @param param the request object
     */
    public retrieveNodeServiceBind(param: OrchestratorNodeServicesApiRetrieveNodeServiceBindRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveNodeServiceBind> {
        return this.api.retrieveNodeServiceBind(param.bindId, param.nodeId, param.fields,  options).toPromise();
    }

    /**
     * Remove the bind between Node and Service.
     * Unbind Node Service
     * @param param the request object
     */
    public unbindNodeServiceWithHttpInfo(param: OrchestratorNodeServicesApiUnbindNodeServiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteNodeServiceBind>> {
        return this.api.unbindNodeServiceWithHttpInfo(param.bindId, param.nodeId,  options).toPromise();
    }

    /**
     * Remove the bind between Node and Service.
     * Unbind Node Service
     * @param param the request object
     */
    public unbindNodeService(param: OrchestratorNodeServicesApiUnbindNodeServiceRequest, options?: ConfigurationOptions): Promise<ResponseAsyncDeleteNodeServiceBind> {
        return this.api.unbindNodeService(param.bindId, param.nodeId,  options).toPromise();
    }

}

import { ObservableOrchestratorNodesApi } from "./ObservableAPI";
import { OrchestratorNodesApiRequestFactory, OrchestratorNodesApiResponseProcessor} from "../apis/OrchestratorNodesApi";

export interface OrchestratorNodesApiDeleteNodeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApideleteNode
     */
    nodeId: string
}

export interface OrchestratorNodesApiListNodesRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApilistNodes
     */
    fields?: string
    /**
     * Search by hash_id
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApilistNodes
     */
    hashId?: string
    /**
     * Search by name
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApilistNodes
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApilistNodes
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodesApilistNodes
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodesApilistNodes
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApilistNodes
     */
    search?: string
}

export interface OrchestratorNodesApiPartialUpdateNodeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApipartialUpdateNode
     */
    nodeId: string
    /**
     * 
     * @type PatchedNodesRequest
     * @memberof OrchestratorNodesApipartialUpdateNode
     */
    patchedNodesRequest?: PatchedNodesRequest
}

export interface OrchestratorNodesApiPartialUpdateNode2Request {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodesApipartialUpdateNode2
     */
    nodeId: number
    /**
     * 
     * @type PatchedNodesRequest
     * @memberof OrchestratorNodesApipartialUpdateNode2
     */
    patchedNodesRequest?: PatchedNodesRequest
}

export interface OrchestratorNodesApiRetrieveNodeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApiretrieveNode
     */
    nodeId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApiretrieveNode
     */
    fields?: string
}

export interface OrchestratorNodesApiRetrieveNode2Request {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodesApiretrieveNode2
     */
    nodeId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApiretrieveNode2
     */
    fields?: string
}

export interface OrchestratorNodesApiUpdateNodeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorNodesApiupdateNode
     */
    nodeId: string
    /**
     * 
     * @type NodesRequest
     * @memberof OrchestratorNodesApiupdateNode
     */
    nodesRequest: NodesRequest
}

export interface OrchestratorNodesApiUpdateNode2Request {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorNodesApiupdateNode2
     */
    nodeId: number
    /**
     * 
     * @type NodesRequest
     * @memberof OrchestratorNodesApiupdateNode2
     */
    nodesRequest: NodesRequest
}

export class ObjectOrchestratorNodesApi {
    private api: ObservableOrchestratorNodesApi

    public constructor(configuration: Configuration, requestFactory?: OrchestratorNodesApiRequestFactory, responseProcessor?: OrchestratorNodesApiResponseProcessor) {
        this.api = new ObservableOrchestratorNodesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an Node.
     * Delete an Node
     * @param param the request object
     */
    public deleteNodeWithHttpInfo(param: OrchestratorNodesApiDeleteNodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteNodes>> {
        return this.api.deleteNodeWithHttpInfo(param.nodeId,  options).toPromise();
    }

    /**
     * Delete an Node.
     * Delete an Node
     * @param param the request object
     */
    public deleteNode(param: OrchestratorNodesApiDeleteNodeRequest, options?: ConfigurationOptions): Promise<ResponseAsyncDeleteNodes> {
        return this.api.deleteNode(param.nodeId,  options).toPromise();
    }

    /**
     * List all Nodes of your account.
     * List Nodes
     * @param param the request object
     */
    public listNodesWithHttpInfo(param: OrchestratorNodesApiListNodesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedNodesList>> {
        return this.api.listNodesWithHttpInfo(param.fields, param.hashId, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Nodes of your account.
     * List Nodes
     * @param param the request object
     */
    public listNodes(param: OrchestratorNodesApiListNodesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedNodesList> {
        return this.api.listNodes(param.fields, param.hashId, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Node without affecting other fields.
     * Partially update an Node
     * @param param the request object
     */
    public partialUpdateNodeWithHttpInfo(param: OrchestratorNodesApiPartialUpdateNodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodes>> {
        return this.api.partialUpdateNodeWithHttpInfo(param.nodeId, param.patchedNodesRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Node without affecting other fields.
     * Partially update an Node
     * @param param the request object
     */
    public partialUpdateNode(param: OrchestratorNodesApiPartialUpdateNodeRequest, options?: ConfigurationOptions): Promise<ResponseAsyncNodes> {
        return this.api.partialUpdateNode(param.nodeId, param.patchedNodesRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Node without affecting other fields.
     * Partially update an Node
     * @param param the request object
     */
    public partialUpdateNode2WithHttpInfo(param: OrchestratorNodesApiPartialUpdateNode2Request, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodes>> {
        return this.api.partialUpdateNode2WithHttpInfo(param.nodeId, param.patchedNodesRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Node without affecting other fields.
     * Partially update an Node
     * @param param the request object
     */
    public partialUpdateNode2(param: OrchestratorNodesApiPartialUpdateNode2Request, options?: ConfigurationOptions): Promise<ResponseAsyncNodes> {
        return this.api.partialUpdateNode2(param.nodeId, param.patchedNodesRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Node in your account.
     * Retrieve details of an Node
     * @param param the request object
     */
    public retrieveNodeWithHttpInfo(param: OrchestratorNodesApiRetrieveNodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveNodes>> {
        return this.api.retrieveNodeWithHttpInfo(param.nodeId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Node in your account.
     * Retrieve details of an Node
     * @param param the request object
     */
    public retrieveNode(param: OrchestratorNodesApiRetrieveNodeRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveNodes> {
        return this.api.retrieveNode(param.nodeId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Node in your account.
     * Retrieve details of an Node
     * @param param the request object
     */
    public retrieveNode2WithHttpInfo(param: OrchestratorNodesApiRetrieveNode2Request, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveNodes>> {
        return this.api.retrieveNode2WithHttpInfo(param.nodeId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Node in your account.
     * Retrieve details of an Node
     * @param param the request object
     */
    public retrieveNode2(param: OrchestratorNodesApiRetrieveNode2Request, options?: ConfigurationOptions): Promise<ResponseRetrieveNodes> {
        return this.api.retrieveNode2(param.nodeId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Node. This replaces the entire Node with the new data provided.
     * Update an Node
     * @param param the request object
     */
    public updateNodeWithHttpInfo(param: OrchestratorNodesApiUpdateNodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodes>> {
        return this.api.updateNodeWithHttpInfo(param.nodeId, param.nodesRequest,  options).toPromise();
    }

    /**
     * Update an existing Node. This replaces the entire Node with the new data provided.
     * Update an Node
     * @param param the request object
     */
    public updateNode(param: OrchestratorNodesApiUpdateNodeRequest, options?: ConfigurationOptions): Promise<ResponseAsyncNodes> {
        return this.api.updateNode(param.nodeId, param.nodesRequest,  options).toPromise();
    }

    /**
     * Update an existing Node. This replaces the entire Node with the new data provided.
     * Update an Node
     * @param param the request object
     */
    public updateNode2WithHttpInfo(param: OrchestratorNodesApiUpdateNode2Request, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodes>> {
        return this.api.updateNode2WithHttpInfo(param.nodeId, param.nodesRequest,  options).toPromise();
    }

    /**
     * Update an existing Node. This replaces the entire Node with the new data provided.
     * Update an Node
     * @param param the request object
     */
    public updateNode2(param: OrchestratorNodesApiUpdateNode2Request, options?: ConfigurationOptions): Promise<ResponseAsyncNodes> {
        return this.api.updateNode2(param.nodeId, param.nodesRequest,  options).toPromise();
    }

}

import { ObservableOrchestratorServiceResourcesApi } from "./ObservableAPI";
import { OrchestratorServiceResourcesApiRequestFactory, OrchestratorServiceResourcesApiResponseProcessor} from "../apis/OrchestratorServiceResourcesApi";

export interface OrchestratorServiceResourcesApiCreateResourceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApicreateResource
     */
    serviceId: number
    /**
     * 
     * @type ServiceResourceRequest
     * @memberof OrchestratorServiceResourcesApicreateResource
     */
    serviceResourceRequest: ServiceResourceRequest
}

export interface OrchestratorServiceResourcesApiDeleteResourceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApideleteResource
     */
    resourceId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApideleteResource
     */
    serviceId: number
}

export interface OrchestratorServiceResourcesApiListResourcesOfAServiceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApilistResourcesOfAService
     */
    serviceId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServiceResourcesApilistResourcesOfAService
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServiceResourcesApilistResourcesOfAService
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApilistResourcesOfAService
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApilistResourcesOfAService
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServiceResourcesApilistResourcesOfAService
     */
    search?: string
}

export interface OrchestratorServiceResourcesApiRetrieveResourceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApiretrieveResource
     */
    resourceId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApiretrieveResource
     */
    serviceId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServiceResourcesApiretrieveResource
     */
    fields?: string
}

export interface OrchestratorServiceResourcesApiRetrieveResourceContentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApiretrieveResourceContent
     */
    resourceId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApiretrieveResourceContent
     */
    serviceId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServiceResourcesApiretrieveResourceContent
     */
    fields?: string
}

export interface OrchestratorServiceResourcesApiUpdateResourceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApiupdateResource
     */
    resourceId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApiupdateResource
     */
    serviceId: number
    /**
     * 
     * @type ServiceResourceIdRequest
     * @memberof OrchestratorServiceResourcesApiupdateResource
     */
    serviceResourceIdRequest: ServiceResourceIdRequest
}

export interface OrchestratorServiceResourcesApiUploadResourceContentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApiuploadResourceContent
     */
    resourceId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServiceResourcesApiuploadResourceContent
     */
    serviceId: number
    /**
     * 
     * @type ContentRequest
     * @memberof OrchestratorServiceResourcesApiuploadResourceContent
     */
    contentRequest: ContentRequest
}

export class ObjectOrchestratorServiceResourcesApi {
    private api: ObservableOrchestratorServiceResourcesApi

    public constructor(configuration: Configuration, requestFactory?: OrchestratorServiceResourcesApiRequestFactory, responseProcessor?: OrchestratorServiceResourcesApiResponseProcessor) {
        this.api = new ObservableOrchestratorServiceResourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Resource on a Service.
     * Create Service Resource
     * @param param the request object
     */
    public createResourceWithHttpInfo(param: OrchestratorServiceResourcesApiCreateResourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ServiceResource>> {
        return this.api.createResourceWithHttpInfo(param.serviceId, param.serviceResourceRequest,  options).toPromise();
    }

    /**
     * Create a Resource on a Service.
     * Create Service Resource
     * @param param the request object
     */
    public createResource(param: OrchestratorServiceResourcesApiCreateResourceRequest, options?: ConfigurationOptions): Promise<ServiceResource> {
        return this.api.createResource(param.serviceId, param.serviceResourceRequest,  options).toPromise();
    }

    /**
     * Delete Resource from your account.
     * Delete Resource
     * @param param the request object
     */
    public deleteResourceWithHttpInfo(param: OrchestratorServiceResourcesApiDeleteResourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteResourceWithHttpInfo(param.resourceId, param.serviceId,  options).toPromise();
    }

    /**
     * Delete Resource from your account.
     * Delete Resource
     * @param param the request object
     */
    public deleteResource(param: OrchestratorServiceResourcesApiDeleteResourceRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteResource(param.resourceId, param.serviceId,  options).toPromise();
    }

    /**
     * List all resources of a Service owned by your account.
     * List Service Resources
     * @param param the request object
     */
    public listResourcesOfAServiceWithHttpInfo(param: OrchestratorServiceResourcesApiListResourcesOfAServiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedServiceResourceList>> {
        return this.api.listResourcesOfAServiceWithHttpInfo(param.serviceId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all resources of a Service owned by your account.
     * List Service Resources
     * @param param the request object
     */
    public listResourcesOfAService(param: OrchestratorServiceResourcesApiListResourcesOfAServiceRequest, options?: ConfigurationOptions): Promise<PaginatedServiceResourceList> {
        return this.api.listResourcesOfAService(param.serviceId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Resource in your account.
     * Retrieve details of a Resource
     * @param param the request object
     */
    public retrieveResourceWithHttpInfo(param: OrchestratorServiceResourcesApiRetrieveResourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ServiceResourceId>> {
        return this.api.retrieveResourceWithHttpInfo(param.resourceId, param.serviceId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Resource in your account.
     * Retrieve details of a Resource
     * @param param the request object
     */
    public retrieveResource(param: OrchestratorServiceResourcesApiRetrieveResourceRequest, options?: ConfigurationOptions): Promise<ServiceResourceId> {
        return this.api.retrieveResource(param.resourceId, param.serviceId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve content of a resource.
     * Retrieve content of a Resource
     * @param param the request object
     */
    public retrieveResourceContentWithHttpInfo(param: OrchestratorServiceResourcesApiRetrieveResourceContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Content>> {
        return this.api.retrieveResourceContentWithHttpInfo(param.resourceId, param.serviceId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve content of a resource.
     * Retrieve content of a Resource
     * @param param the request object
     */
    public retrieveResourceContent(param: OrchestratorServiceResourcesApiRetrieveResourceContentRequest, options?: ConfigurationOptions): Promise<Content> {
        return this.api.retrieveResourceContent(param.resourceId, param.serviceId, param.fields,  options).toPromise();
    }

    /**
     * Update Resource in your account.
     * Update Resource
     * @param param the request object
     */
    public updateResourceWithHttpInfo(param: OrchestratorServiceResourcesApiUpdateResourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ServiceResourceId>> {
        return this.api.updateResourceWithHttpInfo(param.resourceId, param.serviceId, param.serviceResourceIdRequest,  options).toPromise();
    }

    /**
     * Update Resource in your account.
     * Update Resource
     * @param param the request object
     */
    public updateResource(param: OrchestratorServiceResourcesApiUpdateResourceRequest, options?: ConfigurationOptions): Promise<ServiceResourceId> {
        return this.api.updateResource(param.resourceId, param.serviceId, param.serviceResourceIdRequest,  options).toPromise();
    }

    /**
     * Upload content of a Resource.
     * Upload content of a Resource
     * @param param the request object
     */
    public uploadResourceContentWithHttpInfo(param: OrchestratorServiceResourcesApiUploadResourceContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Content>> {
        return this.api.uploadResourceContentWithHttpInfo(param.resourceId, param.serviceId, param.contentRequest,  options).toPromise();
    }

    /**
     * Upload content of a Resource.
     * Upload content of a Resource
     * @param param the request object
     */
    public uploadResourceContent(param: OrchestratorServiceResourcesApiUploadResourceContentRequest, options?: ConfigurationOptions): Promise<Content> {
        return this.api.uploadResourceContent(param.resourceId, param.serviceId, param.contentRequest,  options).toPromise();
    }

}

import { ObservableOrchestratorServicesApi } from "./ObservableAPI";
import { OrchestratorServicesApiRequestFactory, OrchestratorServicesApiResponseProcessor} from "../apis/OrchestratorServicesApi";

export interface OrchestratorServicesApiCreateServiceRequest {
    /**
     * 
     * @type ServicesRequest
     * @memberof OrchestratorServicesApicreateService
     */
    servicesRequest?: ServicesRequest
}

export interface OrchestratorServicesApiDestroyServiceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServicesApidestroyService
     */
    serviceId: number
}

export interface OrchestratorServicesApiListServicesRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServicesApilistServices
     */
    fields?: string
    /**
     * Search by name
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServicesApilistServices
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServicesApilistServices
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServicesApilistServices
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServicesApilistServices
     */
    pageSize?: number
}

export interface OrchestratorServicesApiPartialUpdateServiceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServicesApipartialUpdateService
     */
    serviceId: number
    /**
     * 
     * @type PatchedServicesRequest
     * @memberof OrchestratorServicesApipartialUpdateService
     */
    patchedServicesRequest?: PatchedServicesRequest
}

export interface OrchestratorServicesApiRetrieveServiceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof OrchestratorServicesApiretrieveService
     */
    serviceId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServicesApiretrieveService
     */
    fields?: string
}

export interface OrchestratorServicesApiUpdateServiceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrchestratorServicesApiupdateService
     */
    serviceId: string
    /**
     * 
     * @type ServicesRequest
     * @memberof OrchestratorServicesApiupdateService
     */
    servicesRequest?: ServicesRequest
}

export class ObjectOrchestratorServicesApi {
    private api: ObservableOrchestratorServicesApi

    public constructor(configuration: Configuration, requestFactory?: OrchestratorServicesApiRequestFactory, responseProcessor?: OrchestratorServicesApiResponseProcessor) {
        this.api = new ObservableOrchestratorServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an Service.
     * Create Service
     * @param param the request object
     */
    public createServiceWithHttpInfo(param: OrchestratorServicesApiCreateServiceRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncServices>> {
        return this.api.createServiceWithHttpInfo(param.servicesRequest,  options).toPromise();
    }

    /**
     * Create an Service.
     * Create Service
     * @param param the request object
     */
    public createService(param: OrchestratorServicesApiCreateServiceRequest = {}, options?: ConfigurationOptions): Promise<ResponseAsyncServices> {
        return this.api.createService(param.servicesRequest,  options).toPromise();
    }

    /**
     * Destruction of a specific Service in your account.
     * Destroy an Service
     * @param param the request object
     */
    public destroyServiceWithHttpInfo(param: OrchestratorServicesApiDestroyServiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteServices>> {
        return this.api.destroyServiceWithHttpInfo(param.serviceId,  options).toPromise();
    }

    /**
     * Destruction of a specific Service in your account.
     * Destroy an Service
     * @param param the request object
     */
    public destroyService(param: OrchestratorServicesApiDestroyServiceRequest, options?: ConfigurationOptions): Promise<ResponseAsyncDeleteServices> {
        return this.api.destroyService(param.serviceId,  options).toPromise();
    }

    /**
     * Get the list of Services of your account.
     * List Services
     * @param param the request object
     */
    public listServicesWithHttpInfo(param: OrchestratorServicesApiListServicesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedServicesList>> {
        return this.api.listServicesWithHttpInfo(param.fields, param.name, param.ordering, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get the list of Services of your account.
     * List Services
     * @param param the request object
     */
    public listServices(param: OrchestratorServicesApiListServicesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedServicesList> {
        return this.api.listServices(param.fields, param.name, param.ordering, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Service without affecting other fields.
     * Partially update an Service
     * @param param the request object
     */
    public partialUpdateServiceWithHttpInfo(param: OrchestratorServicesApiPartialUpdateServiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncServices>> {
        return this.api.partialUpdateServiceWithHttpInfo(param.serviceId, param.patchedServicesRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Service without affecting other fields.
     * Partially update an Service
     * @param param the request object
     */
    public partialUpdateService(param: OrchestratorServicesApiPartialUpdateServiceRequest, options?: ConfigurationOptions): Promise<ResponseAsyncServices> {
        return this.api.partialUpdateService(param.serviceId, param.patchedServicesRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Service in your account.
     * Retrieve details of an Service
     * @param param the request object
     */
    public retrieveServiceWithHttpInfo(param: OrchestratorServicesApiRetrieveServiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrieveServices>> {
        return this.api.retrieveServiceWithHttpInfo(param.serviceId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Service in your account.
     * Retrieve details of an Service
     * @param param the request object
     */
    public retrieveService(param: OrchestratorServicesApiRetrieveServiceRequest, options?: ConfigurationOptions): Promise<ResponseRetrieveServices> {
        return this.api.retrieveService(param.serviceId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Service replacing all fields.
     * Update an Service
     * @param param the request object
     */
    public updateServiceWithHttpInfo(param: OrchestratorServicesApiUpdateServiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseAsyncServices>> {
        return this.api.updateServiceWithHttpInfo(param.serviceId, param.servicesRequest,  options).toPromise();
    }

    /**
     * Update an existing Service replacing all fields.
     * Update an Service
     * @param param the request object
     */
    public updateService(param: OrchestratorServicesApiUpdateServiceRequest, options?: ConfigurationOptions): Promise<ResponseAsyncServices> {
        return this.api.updateService(param.serviceId, param.servicesRequest,  options).toPromise();
    }

}

import { ObservablePolicyLockoutPolicyApi } from "./ObservableAPI";
import { PolicyLockoutPolicyApiRequestFactory, PolicyLockoutPolicyApiResponseProcessor} from "../apis/PolicyLockoutPolicyApi";

export interface PolicyLockoutPolicyApiRetrieveLockoutPolicyRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof PolicyLockoutPolicyApiretrieveLockoutPolicy
     */
    fields?: string
}

export interface PolicyLockoutPolicyApiUpdateLockoutPolicyRequest {
    /**
     * 
     * @type LockoutPolicyRequest
     * @memberof PolicyLockoutPolicyApiupdateLockoutPolicy
     */
    lockoutPolicyRequest: LockoutPolicyRequest
}

export class ObjectPolicyLockoutPolicyApi {
    private api: ObservablePolicyLockoutPolicyApi

    public constructor(configuration: Configuration, requestFactory?: PolicyLockoutPolicyApiRequestFactory, responseProcessor?: PolicyLockoutPolicyApiResponseProcessor) {
        this.api = new ObservablePolicyLockoutPolicyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Lockout Policy for the current account.
     * Get Lockout Policy
     * @param param the request object
     */
    public retrieveLockoutPolicyWithHttpInfo(param: PolicyLockoutPolicyApiRetrieveLockoutPolicyRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<LockoutPolicyResponse>> {
        return this.api.retrieveLockoutPolicyWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Get Lockout Policy for the current account.
     * Get Lockout Policy
     * @param param the request object
     */
    public retrieveLockoutPolicy(param: PolicyLockoutPolicyApiRetrieveLockoutPolicyRequest = {}, options?: ConfigurationOptions): Promise<LockoutPolicyResponse> {
        return this.api.retrieveLockoutPolicy(param.fields,  options).toPromise();
    }

    /**
     * Put Lockout Policy for the current account.
     * Put Lockout Policy
     * @param param the request object
     */
    public updateLockoutPolicyWithHttpInfo(param: PolicyLockoutPolicyApiUpdateLockoutPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<LockoutPolicyResponse>> {
        return this.api.updateLockoutPolicyWithHttpInfo(param.lockoutPolicyRequest,  options).toPromise();
    }

    /**
     * Put Lockout Policy for the current account.
     * Put Lockout Policy
     * @param param the request object
     */
    public updateLockoutPolicy(param: PolicyLockoutPolicyApiUpdateLockoutPolicyRequest, options?: ConfigurationOptions): Promise<LockoutPolicyResponse> {
        return this.api.updateLockoutPolicy(param.lockoutPolicyRequest,  options).toPromise();
    }

}

import { ObservablePolicyPoliciesApi } from "./ObservableAPI";
import { PolicyPoliciesApiRequestFactory, PolicyPoliciesApiResponseProcessor} from "../apis/PolicyPoliciesApi";

export interface PolicyPoliciesApiCreatePolicyRequest {
    /**
     * 
     * @type PolicyRequest
     * @memberof PolicyPoliciesApicreatePolicy
     */
    policyRequest: PolicyRequest
}

export interface PolicyPoliciesApiDeletePolicyRequest {
    /**
     * A unique integer value identifying the policy.
     * Defaults to: undefined
     * @type number
     * @memberof PolicyPoliciesApideletePolicy
     */
    policyId: number
}

export interface PolicyPoliciesApiListPolicyRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof PolicyPoliciesApilistPolicy
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof PolicyPoliciesApilistPolicy
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof PolicyPoliciesApilistPolicy
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof PolicyPoliciesApilistPolicy
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof PolicyPoliciesApilistPolicy
     */
    search?: string
}

export interface PolicyPoliciesApiPartialUpdatePolicyRequest {
    /**
     * A unique integer value identifying the policy.
     * Defaults to: undefined
     * @type number
     * @memberof PolicyPoliciesApipartialUpdatePolicy
     */
    policyId: number
    /**
     * 
     * @type PatchedPolicyRequest
     * @memberof PolicyPoliciesApipartialUpdatePolicy
     */
    patchedPolicyRequest?: PatchedPolicyRequest
}

export interface PolicyPoliciesApiRetrievePolicyRequest {
    /**
     * A unique integer value identifying the policy.
     * Defaults to: undefined
     * @type number
     * @memberof PolicyPoliciesApiretrievePolicy
     */
    policyId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof PolicyPoliciesApiretrievePolicy
     */
    fields?: string
}

export interface PolicyPoliciesApiUpdatePolicyRequest {
    /**
     * A unique integer value identifying the policy.
     * Defaults to: undefined
     * @type number
     * @memberof PolicyPoliciesApiupdatePolicy
     */
    policyId: number
    /**
     * 
     * @type PolicyRequest
     * @memberof PolicyPoliciesApiupdatePolicy
     */
    policyRequest: PolicyRequest
}

export class ObjectPolicyPoliciesApi {
    private api: ObservablePolicyPoliciesApi

    public constructor(configuration: Configuration, requestFactory?: PolicyPoliciesApiRequestFactory, responseProcessor?: PolicyPoliciesApiResponseProcessor) {
        this.api = new ObservablePolicyPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new policy for your account.
     * Create a new policy
     * @param param the request object
     */
    public createPolicyWithHttpInfo(param: PolicyPoliciesApiCreatePolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<PolicyResponse>> {
        return this.api.createPolicyWithHttpInfo(param.policyRequest,  options).toPromise();
    }

    /**
     * Create a new policy for your account.
     * Create a new policy
     * @param param the request object
     */
    public createPolicy(param: PolicyPoliciesApiCreatePolicyRequest, options?: ConfigurationOptions): Promise<PolicyResponse> {
        return this.api.createPolicy(param.policyRequest,  options).toPromise();
    }

    /**
     * Delete a specific policy from your account.
     * Delete a policy
     * @param param the request object
     */
    public deletePolicyWithHttpInfo(param: PolicyPoliciesApiDeletePolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deletePolicyWithHttpInfo(param.policyId,  options).toPromise();
    }

    /**
     * Delete a specific policy from your account.
     * Delete a policy
     * @param param the request object
     */
    public deletePolicy(param: PolicyPoliciesApiDeletePolicyRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deletePolicy(param.policyId,  options).toPromise();
    }

    /**
     * List all your account policies.
     * List of account policies
     * @param param the request object
     */
    public listPolicyWithHttpInfo(param: PolicyPoliciesApiListPolicyRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedPolicyList>> {
        return this.api.listPolicyWithHttpInfo(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all your account policies.
     * List of account policies
     * @param param the request object
     */
    public listPolicy(param: PolicyPoliciesApiListPolicyRequest = {}, options?: ConfigurationOptions): Promise<PaginatedPolicyList> {
        return this.api.listPolicy(param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing policy without affecting other fields.
     * Partially update a policy
     * @param param the request object
     */
    public partialUpdatePolicyWithHttpInfo(param: PolicyPoliciesApiPartialUpdatePolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<PolicyResponse>> {
        return this.api.partialUpdatePolicyWithHttpInfo(param.policyId, param.patchedPolicyRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing policy without affecting other fields.
     * Partially update a policy
     * @param param the request object
     */
    public partialUpdatePolicy(param: PolicyPoliciesApiPartialUpdatePolicyRequest, options?: ConfigurationOptions): Promise<PolicyResponse> {
        return this.api.partialUpdatePolicy(param.policyId, param.patchedPolicyRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific policy from your account.
     * Retrieve details from a policy
     * @param param the request object
     */
    public retrievePolicyWithHttpInfo(param: PolicyPoliciesApiRetrievePolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<PolicyResponse>> {
        return this.api.retrievePolicyWithHttpInfo(param.policyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific policy from your account.
     * Retrieve details from a policy
     * @param param the request object
     */
    public retrievePolicy(param: PolicyPoliciesApiRetrievePolicyRequest, options?: ConfigurationOptions): Promise<PolicyResponse> {
        return this.api.retrievePolicy(param.policyId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing policy. This replaces all policy rules with the new data provided.
     * Update a policy
     * @param param the request object
     */
    public updatePolicyWithHttpInfo(param: PolicyPoliciesApiUpdatePolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<PolicyResponse>> {
        return this.api.updatePolicyWithHttpInfo(param.policyId, param.policyRequest,  options).toPromise();
    }

    /**
     * Update an existing policy. This replaces all policy rules with the new data provided.
     * Update a policy
     * @param param the request object
     */
    public updatePolicy(param: PolicyPoliciesApiUpdatePolicyRequest, options?: ConfigurationOptions): Promise<PolicyResponse> {
        return this.api.updatePolicy(param.policyId, param.policyRequest,  options).toPromise();
    }

}

import { ObservablePolicySessionTimeoutPolicyApi } from "./ObservableAPI";
import { PolicySessionTimeoutPolicyApiRequestFactory, PolicySessionTimeoutPolicyApiResponseProcessor} from "../apis/PolicySessionTimeoutPolicyApi";

export interface PolicySessionTimeoutPolicyApiRetrieveSessionTimeoutPolicyRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof PolicySessionTimeoutPolicyApiretrieveSessionTimeoutPolicy
     */
    fields?: string
}

export interface PolicySessionTimeoutPolicyApiUpdateSessionTimeoutPolicyRequest {
    /**
     * 
     * @type SessionTimeoutPolicyRequest
     * @memberof PolicySessionTimeoutPolicyApiupdateSessionTimeoutPolicy
     */
    sessionTimeoutPolicyRequest: SessionTimeoutPolicyRequest
}

export class ObjectPolicySessionTimeoutPolicyApi {
    private api: ObservablePolicySessionTimeoutPolicyApi

    public constructor(configuration: Configuration, requestFactory?: PolicySessionTimeoutPolicyApiRequestFactory, responseProcessor?: PolicySessionTimeoutPolicyApiResponseProcessor) {
        this.api = new ObservablePolicySessionTimeoutPolicyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Session Timeout Policy for the current account.
     * Get Session Timeout Policy
     * @param param the request object
     */
    public retrieveSessionTimeoutPolicyWithHttpInfo(param: PolicySessionTimeoutPolicyApiRetrieveSessionTimeoutPolicyRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SessionTimeoutPolicyResponse>> {
        return this.api.retrieveSessionTimeoutPolicyWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Get Session Timeout Policy for the current account.
     * Get Session Timeout Policy
     * @param param the request object
     */
    public retrieveSessionTimeoutPolicy(param: PolicySessionTimeoutPolicyApiRetrieveSessionTimeoutPolicyRequest = {}, options?: ConfigurationOptions): Promise<SessionTimeoutPolicyResponse> {
        return this.api.retrieveSessionTimeoutPolicy(param.fields,  options).toPromise();
    }

    /**
     * Put Session Timeout Policy for the current account.
     * Put Session Timeout Policy
     * @param param the request object
     */
    public updateSessionTimeoutPolicyWithHttpInfo(param: PolicySessionTimeoutPolicyApiUpdateSessionTimeoutPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<SessionTimeoutPolicyResponse>> {
        return this.api.updateSessionTimeoutPolicyWithHttpInfo(param.sessionTimeoutPolicyRequest,  options).toPromise();
    }

    /**
     * Put Session Timeout Policy for the current account.
     * Put Session Timeout Policy
     * @param param the request object
     */
    public updateSessionTimeoutPolicy(param: PolicySessionTimeoutPolicyApiUpdateSessionTimeoutPolicyRequest, options?: ConfigurationOptions): Promise<SessionTimeoutPolicyResponse> {
        return this.api.updateSessionTimeoutPolicy(param.sessionTimeoutPolicyRequest,  options).toPromise();
    }

}

import { ObservablePublisherManagementApi } from "./ObservableAPI";
import { PublisherManagementApiRequestFactory, PublisherManagementApiResponseProcessor} from "../apis/PublisherManagementApi";

export interface PublisherManagementApiGetPublisherDetailsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof PublisherManagementApigetPublisherDetails
     */
    fields?: string
}

export interface PublisherManagementApiUpdatePublisherDetailsRequest {
    /**
     * 
     * @type PublisherRequest
     * @memberof PublisherManagementApiupdatePublisherDetails
     */
    publisherRequest: PublisherRequest
}

export class ObjectPublisherManagementApi {
    private api: ObservablePublisherManagementApi

    public constructor(configuration: Configuration, requestFactory?: PublisherManagementApiRequestFactory, responseProcessor?: PublisherManagementApiResponseProcessor) {
        this.api = new ObservablePublisherManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get details of the publisher associated with the authenticated user\'s organization
     * Get publisher details
     * @param param the request object
     */
    public getPublisherDetailsWithHttpInfo(param: PublisherManagementApiGetPublisherDetailsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ResponseRetrievePublisher>> {
        return this.api.getPublisherDetailsWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Get details of the publisher associated with the authenticated user\'s organization
     * Get publisher details
     * @param param the request object
     */
    public getPublisherDetails(param: PublisherManagementApiGetPublisherDetailsRequest = {}, options?: ConfigurationOptions): Promise<ResponseRetrievePublisher> {
        return this.api.getPublisherDetails(param.fields,  options).toPromise();
    }

    /**
     * Update details of the publisher associated with the authenticated user\'s organization
     * Update publisher details
     * @param param the request object
     */
    public updatePublisherDetailsWithHttpInfo(param: PublisherManagementApiUpdatePublisherDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponsePublisher>> {
        return this.api.updatePublisherDetailsWithHttpInfo(param.publisherRequest,  options).toPromise();
    }

    /**
     * Update details of the publisher associated with the authenticated user\'s organization
     * Update publisher details
     * @param param the request object
     */
    public updatePublisherDetails(param: PublisherManagementApiUpdatePublisherDetailsRequest, options?: ConfigurationOptions): Promise<ResponsePublisher> {
        return this.api.updatePublisherDetails(param.publisherRequest,  options).toPromise();
    }

}

import { ObservablePurgeApi } from "./ObservableAPI";
import { PurgeApiRequestFactory, PurgeApiResponseProcessor} from "../apis/PurgeApi";

export interface PurgeApiCreatePurgeRequestRequest {
    /**
     * type of purge: URL, Wildcard or Cachekey
     * Defaults to: undefined
     * @type &#39;cachekey&#39; | &#39;url&#39; | &#39;wildcard&#39;
     * @memberof PurgeApicreatePurgeRequest
     */
    purgeType: 'cachekey' | 'url' | 'wildcard'
    /**
     * 
     * @type PurgeRequest
     * @memberof PurgeApicreatePurgeRequest
     */
    purgeRequest: PurgeRequest
}

export class ObjectPurgeApi {
    private api: ObservablePurgeApi

    public constructor(configuration: Configuration, requestFactory?: PurgeApiRequestFactory, responseProcessor?: PurgeApiResponseProcessor) {
        this.api = new ObservablePurgeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Purge Request in your account.
     * Create a Purge Request
     * @param param the request object
     */
    public createPurgeRequestWithHttpInfo(param: PurgeApiCreatePurgeRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<PurgeResponse>> {
        return this.api.createPurgeRequestWithHttpInfo(param.purgeType, param.purgeRequest,  options).toPromise();
    }

    /**
     * Create a new Purge Request in your account.
     * Create a Purge Request
     * @param param the request object
     */
    public createPurgeRequest(param: PurgeApiCreatePurgeRequestRequest, options?: ConfigurationOptions): Promise<PurgeResponse> {
        return this.api.createPurgeRequest(param.purgeType, param.purgeRequest,  options).toPromise();
    }

}

import { ObservableSQLApi } from "./ObservableAPI";
import { SQLApiRequestFactory, SQLApiResponseProcessor} from "../apis/SQLApi";

export interface SQLApiCreateDatabaseRequest {
    /**
     * 
     * @type DatabaseRequest
     * @memberof SQLApicreateDatabase
     */
    databaseRequest: DatabaseRequest
}

export interface SQLApiDeleteDatabaseRequest {
    /**
     * A unique integer value identifying this database.
     * Defaults to: undefined
     * @type number
     * @memberof SQLApideleteDatabase
     */
    databaseId: number
}

export interface SQLApiExecuteQueryRequest {
    /**
     * A unique integer value identifying this database.
     * Defaults to: undefined
     * @type number
     * @memberof SQLApiexecuteQuery
     */
    databaseId: number
    /**
     * 
     * @type SQLStatementsRequest
     * @memberof SQLApiexecuteQuery
     */
    sQLStatementsRequest: SQLStatementsRequest
}

export interface SQLApiListDatabasesRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof SQLApilistDatabases
     */
    active?: boolean
    /**
     * Filter by created_at (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof SQLApilistDatabases
     */
    createdAtGte?: Date
    /**
     * Filter by created_at (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof SQLApilistDatabases
     */
    createdAtLte?: Date
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof SQLApilistDatabases
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof SQLApilistDatabases
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof SQLApilistDatabases
     */
    lastEditor?: string
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof SQLApilistDatabases
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof SQLApilistDatabases
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof SQLApilistDatabases
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof SQLApilistDatabases
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof SQLApilistDatabases
     */
    search?: string
    /**
     * Filter by status (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof SQLApilistDatabases
     */
    status?: string
    /**
     * Filter by updated_at (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof SQLApilistDatabases
     */
    updatedAtGte?: Date
    /**
     * Filter by updated_at (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof SQLApilistDatabases
     */
    updatedAtLte?: Date
}

export interface SQLApiRetrieveDatabaseRequest {
    /**
     * A unique integer value identifying this database.
     * Defaults to: undefined
     * @type number
     * @memberof SQLApiretrieveDatabase
     */
    databaseId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof SQLApiretrieveDatabase
     */
    fields?: string
}

export class ObjectSQLApi {
    private api: ObservableSQLApi

    public constructor(configuration: Configuration, requestFactory?: SQLApiRequestFactory, responseProcessor?: SQLApiResponseProcessor) {
        this.api = new ObservableSQLApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new database for your account.
     * Create a database
     * @param param the request object
     */
    public createDatabaseWithHttpInfo(param: SQLApiCreateDatabaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<DatabaseDetailResponse>> {
        return this.api.createDatabaseWithHttpInfo(param.databaseRequest,  options).toPromise();
    }

    /**
     * Create a new database for your account.
     * Create a database
     * @param param the request object
     */
    public createDatabase(param: SQLApiCreateDatabaseRequest, options?: ConfigurationOptions): Promise<DatabaseDetailResponse> {
        return this.api.createDatabase(param.databaseRequest,  options).toPromise();
    }

    /**
     * Schedule the deletion of a specific database in your account.
     * Delete a database
     * @param param the request object
     */
    public deleteDatabaseWithHttpInfo(param: SQLApiDeleteDatabaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteDatabaseWithHttpInfo(param.databaseId,  options).toPromise();
    }

    /**
     * Schedule the deletion of a specific database in your account.
     * Delete a database
     * @param param the request object
     */
    public deleteDatabase(param: SQLApiDeleteDatabaseRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteDatabase(param.databaseId,  options).toPromise();
    }

    /**
     * Execute a query into a database for your account.
     * Execute a query into a database
     * @param param the request object
     */
    public executeQueryWithHttpInfo(param: SQLApiExecuteQueryRequest, options?: ConfigurationOptions): Promise<HttpInfo<SQLResultResponse>> {
        return this.api.executeQueryWithHttpInfo(param.databaseId, param.sQLStatementsRequest,  options).toPromise();
    }

    /**
     * Execute a query into a database for your account.
     * Execute a query into a database
     * @param param the request object
     */
    public executeQuery(param: SQLApiExecuteQueryRequest, options?: ConfigurationOptions): Promise<SQLResultResponse> {
        return this.api.executeQuery(param.databaseId, param.sQLStatementsRequest,  options).toPromise();
    }

    /**
     * List all databases owned by your account.
     * List databases
     * @param param the request object
     */
    public listDatabasesWithHttpInfo(param: SQLApiListDatabasesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedDatabaseDetailList>> {
        return this.api.listDatabasesWithHttpInfo(param.active, param.createdAtGte, param.createdAtLte, param.fields, param.id, param.lastEditor, param.name, param.ordering, param.page, param.pageSize, param.search, param.status, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

    /**
     * List all databases owned by your account.
     * List databases
     * @param param the request object
     */
    public listDatabases(param: SQLApiListDatabasesRequest = {}, options?: ConfigurationOptions): Promise<PaginatedDatabaseDetailList> {
        return this.api.listDatabases(param.active, param.createdAtGte, param.createdAtLte, param.fields, param.id, param.lastEditor, param.name, param.ordering, param.page, param.pageSize, param.search, param.status, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

    /**
     * Retrieve details from a specific database in your account.
     * Retrieve details from a database
     * @param param the request object
     */
    public retrieveDatabaseWithHttpInfo(param: SQLApiRetrieveDatabaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<DatabaseDetailResponse>> {
        return this.api.retrieveDatabaseWithHttpInfo(param.databaseId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific database in your account.
     * Retrieve details from a database
     * @param param the request object
     */
    public retrieveDatabase(param: SQLApiRetrieveDatabaseRequest, options?: ConfigurationOptions): Promise<DatabaseDetailResponse> {
        return this.api.retrieveDatabase(param.databaseId, param.fields,  options).toPromise();
    }

}

import { ObservableStorageBucketsApi } from "./ObservableAPI";
import { StorageBucketsApiRequestFactory, StorageBucketsApiResponseProcessor} from "../apis/StorageBucketsApi";

export interface StorageBucketsApiCreateBucketRequest {
    /**
     * 
     * @type BucketCreateRequest
     * @memberof StorageBucketsApicreateBucket
     */
    bucketCreateRequest: BucketCreateRequest
}

export interface StorageBucketsApiDeleteBucketRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApideleteBucket
     */
    bucketName: string
}

export interface StorageBucketsApiListBucketsRequest {
    /**
     * Filter by bucket (exact match).
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    bucket?: string
    /**
     * Filter by creation date (exact match).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageBucketsApilistBuckets
     */
    created?: Date
    /**
     * Filter by creation date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageBucketsApilistBuckets
     */
    createdGte?: Date
    /**
     * Filter by creation date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageBucketsApilistBuckets
     */
    createdLte?: Date
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    fields?: string
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    lastEditor?: string
    /**
     * Filter by last modified date (exact match).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageBucketsApilistBuckets
     */
    lastModified?: Date
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageBucketsApilistBuckets
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageBucketsApilistBuckets
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof StorageBucketsApilistBuckets
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof StorageBucketsApilistBuckets
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    search?: string
    /**
     * Filter by status (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    status?: string
    /**
     * Filter by workloads access (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApilistBuckets
     */
    workloadsAccess?: string
}

export interface StorageBucketsApiRetrieveBucketRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApiretrieveBucket
     */
    bucketName: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApiretrieveBucket
     */
    fields?: string
}

export interface StorageBucketsApiUpdateBucketRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageBucketsApiupdateBucket
     */
    bucketName: string
    /**
     * 
     * @type PatchedBucketRequest
     * @memberof StorageBucketsApiupdateBucket
     */
    patchedBucketRequest?: PatchedBucketRequest
}

export class ObjectStorageBucketsApi {
    private api: ObservableStorageBucketsApi

    public constructor(configuration: Configuration, requestFactory?: StorageBucketsApiRequestFactory, responseProcessor?: StorageBucketsApiResponseProcessor) {
        this.api = new ObservableStorageBucketsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new bucket.
     * Create a new bucket
     * @param param the request object
     */
    public createBucketWithHttpInfo(param: StorageBucketsApiCreateBucketRequest, options?: ConfigurationOptions): Promise<HttpInfo<BucketCreateResponse>> {
        return this.api.createBucketWithHttpInfo(param.bucketCreateRequest,  options).toPromise();
    }

    /**
     * Create a new bucket.
     * Create a new bucket
     * @param param the request object
     */
    public createBucket(param: StorageBucketsApiCreateBucketRequest, options?: ConfigurationOptions): Promise<BucketCreateResponse> {
        return this.api.createBucket(param.bucketCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific bucket.
     * Delete a bucket
     * @param param the request object
     */
    public deleteBucketWithHttpInfo(param: StorageBucketsApiDeleteBucketRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteBucketWithHttpInfo(param.bucketName,  options).toPromise();
    }

    /**
     * Delete a specific bucket.
     * Delete a bucket
     * @param param the request object
     */
    public deleteBucket(param: StorageBucketsApiDeleteBucketRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteBucket(param.bucketName,  options).toPromise();
    }

    /**
     * List all buckets.
     * List buckets
     * @param param the request object
     */
    public listBucketsWithHttpInfo(param: StorageBucketsApiListBucketsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedBucketList>> {
        return this.api.listBucketsWithHttpInfo(param.bucket, param.created, param.createdGte, param.createdLte, param.description, param.fields, param.lastEditor, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search, param.status, param.workloadsAccess,  options).toPromise();
    }

    /**
     * List all buckets.
     * List buckets
     * @param param the request object
     */
    public listBuckets(param: StorageBucketsApiListBucketsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedBucketList> {
        return this.api.listBuckets(param.bucket, param.created, param.createdGte, param.createdLte, param.description, param.fields, param.lastEditor, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search, param.status, param.workloadsAccess,  options).toPromise();
    }

    /**
     * Retrieve details from a specific bucket.
     * Retrieve a bucket
     * @param param the request object
     */
    public retrieveBucketWithHttpInfo(param: StorageBucketsApiRetrieveBucketRequest, options?: ConfigurationOptions): Promise<HttpInfo<BucketCreateResponse>> {
        return this.api.retrieveBucketWithHttpInfo(param.bucketName, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific bucket.
     * Retrieve a bucket
     * @param param the request object
     */
    public retrieveBucket(param: StorageBucketsApiRetrieveBucketRequest, options?: ConfigurationOptions): Promise<BucketCreateResponse> {
        return this.api.retrieveBucket(param.bucketName, param.fields,  options).toPromise();
    }

    /**
     * Update bucket information (bucket name cannot be changed)
     * Update bucket info
     * @param param the request object
     */
    public updateBucketWithHttpInfo(param: StorageBucketsApiUpdateBucketRequest, options?: ConfigurationOptions): Promise<HttpInfo<BucketCreateResponse>> {
        return this.api.updateBucketWithHttpInfo(param.bucketName, param.patchedBucketRequest,  options).toPromise();
    }

    /**
     * Update bucket information (bucket name cannot be changed)
     * Update bucket info
     * @param param the request object
     */
    public updateBucket(param: StorageBucketsApiUpdateBucketRequest, options?: ConfigurationOptions): Promise<BucketCreateResponse> {
        return this.api.updateBucket(param.bucketName, param.patchedBucketRequest,  options).toPromise();
    }

}

import { ObservableStorageCredentialsApi } from "./ObservableAPI";
import { StorageCredentialsApiRequestFactory, StorageCredentialsApiResponseProcessor} from "../apis/StorageCredentialsApi";

export interface StorageCredentialsApiCreateCredentialRequest {
    /**
     * 
     * @type CredentialCreateRequest
     * @memberof StorageCredentialsApicreateCredential
     */
    credentialCreateRequest: CredentialCreateRequest
}

export interface StorageCredentialsApiDeleteCredentialRequest {
    /**
     * The unique identifier of the credential
     * Defaults to: undefined
     * @type number
     * @memberof StorageCredentialsApideleteCredential
     */
    credentialId: number
}

export interface StorageCredentialsApiListCredentialsRequest {
    /**
     * Filter by access key (exact match).
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApilistCredentials
     */
    accessKey?: string
    /**
     * Filter by bucket name (exact match).
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApilistCredentials
     */
    buckets?: string
    /**
     * Filter by multiple bucket names (comma-separated).
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApilistCredentials
     */
    bucketsIn?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApilistCredentials
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof StorageCredentialsApilistCredentials
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApilistCredentials
     */
    lastEditor?: string
    /**
     * Filter by last modified date (exact match).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageCredentialsApilistCredentials
     */
    lastModified?: Date
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageCredentialsApilistCredentials
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof StorageCredentialsApilistCredentials
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApilistCredentials
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApilistCredentials
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof StorageCredentialsApilistCredentials
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof StorageCredentialsApilistCredentials
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApilistCredentials
     */
    search?: string
}

export interface StorageCredentialsApiRetrieveCredentialRequest {
    /**
     * The unique identifier of the credential
     * Defaults to: undefined
     * @type number
     * @memberof StorageCredentialsApiretrieveCredential
     */
    credentialId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof StorageCredentialsApiretrieveCredential
     */
    fields?: string
}

export class ObjectStorageCredentialsApi {
    private api: ObservableStorageCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: StorageCredentialsApiRequestFactory, responseProcessor?: StorageCredentialsApiResponseProcessor) {
        this.api = new ObservableStorageCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new credential.
     * Create a new credential
     * @param param the request object
     */
    public createCredentialWithHttpInfo(param: StorageCredentialsApiCreateCredentialRequest, options?: ConfigurationOptions): Promise<HttpInfo<CredentialResponse>> {
        return this.api.createCredentialWithHttpInfo(param.credentialCreateRequest,  options).toPromise();
    }

    /**
     * Create a new credential.
     * Create a new credential
     * @param param the request object
     */
    public createCredential(param: StorageCredentialsApiCreateCredentialRequest, options?: ConfigurationOptions): Promise<CredentialResponse> {
        return this.api.createCredential(param.credentialCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific credential.
     * Delete a credential
     * @param param the request object
     */
    public deleteCredentialWithHttpInfo(param: StorageCredentialsApiDeleteCredentialRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteCredentialWithHttpInfo(param.credentialId,  options).toPromise();
    }

    /**
     * Delete a specific credential.
     * Delete a credential
     * @param param the request object
     */
    public deleteCredential(param: StorageCredentialsApiDeleteCredentialRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteCredential(param.credentialId,  options).toPromise();
    }

    /**
     * List all credentials.
     * List credentials
     * @param param the request object
     */
    public listCredentialsWithHttpInfo(param: StorageCredentialsApiListCredentialsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCredentialList>> {
        return this.api.listCredentialsWithHttpInfo(param.accessKey, param.buckets, param.bucketsIn, param.fields, param.id, param.lastEditor, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all credentials.
     * List credentials
     * @param param the request object
     */
    public listCredentials(param: StorageCredentialsApiListCredentialsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedCredentialList> {
        return this.api.listCredentials(param.accessKey, param.buckets, param.bucketsIn, param.fields, param.id, param.lastEditor, param.lastModified, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieve details from a specific credential.
     * Retrieve details from a credential
     * @param param the request object
     */
    public retrieveCredentialWithHttpInfo(param: StorageCredentialsApiRetrieveCredentialRequest, options?: ConfigurationOptions): Promise<HttpInfo<CredentialResponse>> {
        return this.api.retrieveCredentialWithHttpInfo(param.credentialId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific credential.
     * Retrieve details from a credential
     * @param param the request object
     */
    public retrieveCredential(param: StorageCredentialsApiRetrieveCredentialRequest, options?: ConfigurationOptions): Promise<CredentialResponse> {
        return this.api.retrieveCredential(param.credentialId, param.fields,  options).toPromise();
    }

}

import { ObservableStorageObjectsApi } from "./ObservableAPI";
import { StorageObjectsApiRequestFactory, StorageObjectsApiResponseProcessor} from "../apis/StorageObjectsApi";

export interface StorageObjectsApiCopyObjectKeyRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApicopyObjectKey
     */
    bucketName: string
    /**
     * The key/path of the destination object within the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApicopyObjectKey
     */
    newObjectKey: string
    /**
     * The key/path of the source object within the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApicopyObjectKey
     */
    objectKey: string
    /**
     * 
     * @type any
     * @memberof StorageObjectsApicopyObjectKey
     */
    body?: any
}

export interface StorageObjectsApiCreateObjectKeyRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApicreateObjectKey
     */
    bucketName: string
    /**
     * The key/path of the object within the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApicreateObjectKey
     */
    objectKey: string
    /**
     * The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts)
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApicreateObjectKey
     */
    storageContentType?: string
    /**
     * 
     * @type HttpFile
     * @memberof StorageObjectsApicreateObjectKey
     */
    body?: HttpFile
}

export interface StorageObjectsApiDeleteObjectKeyRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApideleteObjectKey
     */
    bucketName: string
    /**
     * The key/path of the object within the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApideleteObjectKey
     */
    objectKey: string
}

export interface StorageObjectsApiDownloadObjectRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApidownloadObject
     */
    bucketName: string
    /**
     * The key/path of the object within the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApidownloadObject
     */
    objectKey: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApidownloadObject
     */
    fields?: string
}

export interface StorageObjectsApiListObjectsRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApilistObjects
     */
    bucketName: string
    /**
     * If true, lists objects recursively. If false, lists only the first level using Delimiter&#x3D;\&#39;/\&#39; (default: true).
     * Defaults to: true
     * @type boolean
     * @memberof StorageObjectsApilistObjects
     */
    allLevels?: boolean
    /**
     * A continuation token for the next page of records.
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApilistObjects
     */
    continuationToken?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApilistObjects
     */
    fields?: string
    /**
     * Number of results to be returned on the page. Limited to 1000 objects.
     * Defaults to: undefined
     * @type number
     * @memberof StorageObjectsApilistObjects
     */
    maxObjectCount?: number
    /**
     * Filter objects by key prefix. If empty, lists from the bucket root (default: empty).
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof StorageObjectsApilistObjects
     */
    prefix?: string
}

export interface StorageObjectsApiUpdateObjectKeyRequest {
    /**
     * The name of the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApiupdateObjectKey
     */
    bucketName: string
    /**
     * The key/path of the object within the bucket
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApiupdateObjectKey
     */
    objectKey: string
    /**
     * The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts)
     * Defaults to: undefined
     * @type string
     * @memberof StorageObjectsApiupdateObjectKey
     */
    storageContentType?: string
    /**
     * 
     * @type HttpFile
     * @memberof StorageObjectsApiupdateObjectKey
     */
    body?: HttpFile
}

export class ObjectStorageObjectsApi {
    private api: ObservableStorageObjectsApi

    public constructor(configuration: Configuration, requestFactory?: StorageObjectsApiRequestFactory, responseProcessor?: StorageObjectsApiResponseProcessor) {
        this.api = new ObservableStorageObjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Copy an object to a new key within the same bucket.
     * Copy object to new key
     * @param param the request object
     */
    public copyObjectKeyWithHttpInfo(param: StorageObjectsApiCopyObjectKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.copyObjectKeyWithHttpInfo(param.bucketName, param.newObjectKey, param.objectKey, param.body,  options).toPromise();
    }

    /**
     * Copy an object to a new key within the same bucket.
     * Copy object to new key
     * @param param the request object
     */
    public copyObjectKey(param: StorageObjectsApiCopyObjectKeyRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.copyObjectKey(param.bucketName, param.newObjectKey, param.objectKey, param.body,  options).toPromise();
    }

    /**
     * Create a new object key in the bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.
     * Create new object key.
     * @param param the request object
     */
    public createObjectKeyWithHttpInfo(param: StorageObjectsApiCreateObjectKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<SuccessObjectOperationAsync | SuccessObjectOperation>> {
        return this.api.createObjectKeyWithHttpInfo(param.bucketName, param.objectKey, param.storageContentType, param.body,  options).toPromise();
    }

    /**
     * Create a new object key in the bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.
     * Create new object key.
     * @param param the request object
     */
    public createObjectKey(param: StorageObjectsApiCreateObjectKeyRequest, options?: ConfigurationOptions): Promise<SuccessObjectOperationAsync | SuccessObjectOperation> {
        return this.api.createObjectKey(param.bucketName, param.objectKey, param.storageContentType, param.body,  options).toPromise();
    }

    /**
     * Upon a successful deletion request, the object will be permanently deleted after a 24-hour grace period.
     * Delete object key
     * @param param the request object
     */
    public deleteObjectKeyWithHttpInfo(param: StorageObjectsApiDeleteObjectKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteObjectKeyWithHttpInfo(param.bucketName, param.objectKey,  options).toPromise();
    }

    /**
     * Upon a successful deletion request, the object will be permanently deleted after a 24-hour grace period.
     * Delete object key
     * @param param the request object
     */
    public deleteObjectKey(param: StorageObjectsApiDeleteObjectKeyRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteObjectKey(param.bucketName, param.objectKey,  options).toPromise();
    }

    /**
     * Download the object key from bucket.
     * Download object
     * @param param the request object
     */
    public downloadObjectWithHttpInfo(param: StorageObjectsApiDownloadObjectRequest, options?: ConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        return this.api.downloadObjectWithHttpInfo(param.bucketName, param.objectKey, param.fields,  options).toPromise();
    }

    /**
     * Download the object key from bucket.
     * Download object
     * @param param the request object
     */
    public downloadObject(param: StorageObjectsApiDownloadObjectRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.downloadObject(param.bucketName, param.objectKey, param.fields,  options).toPromise();
    }

    /**
     * List objects from bucket
     * List objects from bucket
     * @param param the request object
     */
    public listObjectsWithHttpInfo(param: StorageObjectsApiListObjectsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ResponseBucketObject>> {
        return this.api.listObjectsWithHttpInfo(param.bucketName, param.allLevels, param.continuationToken, param.fields, param.maxObjectCount, param.prefix,  options).toPromise();
    }

    /**
     * List objects from bucket
     * List objects from bucket
     * @param param the request object
     */
    public listObjects(param: StorageObjectsApiListObjectsRequest, options?: ConfigurationOptions): Promise<ResponseBucketObject> {
        return this.api.listObjects(param.bucketName, param.allLevels, param.continuationToken, param.fields, param.maxObjectCount, param.prefix,  options).toPromise();
    }

    /**
     * Update the object key from bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.
     * Update the object key.
     * @param param the request object
     */
    public updateObjectKeyWithHttpInfo(param: StorageObjectsApiUpdateObjectKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<SuccessObjectOperationAsync | SuccessObjectOperation>> {
        return this.api.updateObjectKeyWithHttpInfo(param.bucketName, param.objectKey, param.storageContentType, param.body,  options).toPromise();
    }

    /**
     * Update the object key from bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.
     * Update the object key.
     * @param param the request object
     */
    public updateObjectKey(param: StorageObjectsApiUpdateObjectKeyRequest, options?: ConfigurationOptions): Promise<SuccessObjectOperationAsync | SuccessObjectOperation> {
        return this.api.updateObjectKey(param.bucketName, param.objectKey, param.storageContentType, param.body,  options).toPromise();
    }

}

import { ObservableUsersLockoutApi } from "./ObservableAPI";
import { UsersLockoutApiRequestFactory, UsersLockoutApiResponseProcessor} from "../apis/UsersLockoutApi";

export interface UsersLockoutApiDestroyLockoutUserRequest {
    /**
     * A unique integer value identifying the user.
     * Defaults to: undefined
     * @type number
     * @memberof UsersLockoutApidestroyLockoutUser
     */
    userId: number
}

export class ObjectUsersLockoutApi {
    private api: ObservableUsersLockoutApi

    public constructor(configuration: Configuration, requestFactory?: UsersLockoutApiRequestFactory, responseProcessor?: UsersLockoutApiResponseProcessor) {
        this.api = new ObservableUsersLockoutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Destroy Lockout info from user.
     * Unlock user
     * @param param the request object
     */
    public destroyLockoutUserWithHttpInfo(param: UsersLockoutApiDestroyLockoutUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.destroyLockoutUserWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Destroy Lockout info from user.
     * Unlock user
     * @param param the request object
     */
    public destroyLockoutUser(param: UsersLockoutApiDestroyLockoutUserRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.destroyLockoutUser(param.userId,  options).toPromise();
    }

}

import { ObservableVCSContinuousDeploymentExecutionsApi } from "./ObservableAPI";
import { VCSContinuousDeploymentExecutionsApiRequestFactory, VCSContinuousDeploymentExecutionsApiResponseProcessor} from "../apis/VCSContinuousDeploymentExecutionsApi";

export interface VCSContinuousDeploymentExecutionsApiCreateExecutionRequest {
    /**
     * Unique identifier of the continuous deployment
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentExecutionsApicreateExecution
     */
    continuousDeploymentId: number
    /**
     * No request body required
     * @type any
     * @memberof VCSContinuousDeploymentExecutionsApicreateExecution
     */
    body?: any
}

export interface VCSContinuousDeploymentExecutionsApiListExecutionsRequest {
    /**
     * Unique identifier of the continuous deployment
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    continuousDeploymentId: number
    /**
     * Filter by created date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    createdAtGte?: Date
    /**
     * Filter by created date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    createdAtLte?: Date
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    id?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    search?: string
    /**
     * Filter by status (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    status?: string
    /**
     * Filter by updated date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    updatedAtGte?: Date
    /**
     * Filter by updated date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof VCSContinuousDeploymentExecutionsApilistExecutions
     */
    updatedAtLte?: Date
}

export class ObjectVCSContinuousDeploymentExecutionsApi {
    private api: ObservableVCSContinuousDeploymentExecutionsApi

    public constructor(configuration: Configuration, requestFactory?: VCSContinuousDeploymentExecutionsApiRequestFactory, responseProcessor?: VCSContinuousDeploymentExecutionsApiResponseProcessor) {
        this.api = new ObservableVCSContinuousDeploymentExecutionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new continuous deployment execution.
     * Create a execution
     * @param param the request object
     */
    public createExecutionWithHttpInfo(param: VCSContinuousDeploymentExecutionsApiCreateExecutionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExecutionResponse>> {
        return this.api.createExecutionWithHttpInfo(param.continuousDeploymentId, param.body,  options).toPromise();
    }

    /**
     * Create a new continuous deployment execution.
     * Create a execution
     * @param param the request object
     */
    public createExecution(param: VCSContinuousDeploymentExecutionsApiCreateExecutionRequest, options?: ConfigurationOptions): Promise<ExecutionResponse> {
        return this.api.createExecution(param.continuousDeploymentId, param.body,  options).toPromise();
    }

    /**
     * List all continuous deployment executions.
     * List executions
     * @param param the request object
     */
    public listExecutionsWithHttpInfo(param: VCSContinuousDeploymentExecutionsApiListExecutionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedExecutionListResponseList>> {
        return this.api.listExecutionsWithHttpInfo(param.continuousDeploymentId, param.createdAtGte, param.createdAtLte, param.fields, param.id, param.ordering, param.page, param.pageSize, param.search, param.status, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

    /**
     * List all continuous deployment executions.
     * List executions
     * @param param the request object
     */
    public listExecutions(param: VCSContinuousDeploymentExecutionsApiListExecutionsRequest, options?: ConfigurationOptions): Promise<PaginatedExecutionListResponseList> {
        return this.api.listExecutions(param.continuousDeploymentId, param.createdAtGte, param.createdAtLte, param.fields, param.id, param.ordering, param.page, param.pageSize, param.search, param.status, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

}

import { ObservableVCSContinuousDeploymentExecutorApi } from "./ObservableAPI";
import { VCSContinuousDeploymentExecutorApiRequestFactory, VCSContinuousDeploymentExecutorApiResponseProcessor} from "../apis/VCSContinuousDeploymentExecutorApi";

export interface VCSContinuousDeploymentExecutorApiRetrieveExecutorRequest {
    /**
     * Unique identifier of the continuous deployment
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentExecutorApiretrieveExecutor
     */
    continuousDeploymentId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentExecutorApiretrieveExecutor
     */
    fields?: string
}

export interface VCSContinuousDeploymentExecutorApiUpdateExecutorRequest {
    /**
     * Unique identifier of the continuous deployment
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentExecutorApiupdateExecutor
     */
    continuousDeploymentId: number
    /**
     * No request body required
     * @type any
     * @memberof VCSContinuousDeploymentExecutorApiupdateExecutor
     */
    body?: any
}

export class ObjectVCSContinuousDeploymentExecutorApi {
    private api: ObservableVCSContinuousDeploymentExecutorApi

    public constructor(configuration: Configuration, requestFactory?: VCSContinuousDeploymentExecutorApiRequestFactory, responseProcessor?: VCSContinuousDeploymentExecutorApiResponseProcessor) {
        this.api = new ObservableVCSContinuousDeploymentExecutorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve details from a specific continuous deployment executor.
     * Retrieve details from a executor
     * @param param the request object
     */
    public retrieveExecutorWithHttpInfo(param: VCSContinuousDeploymentExecutorApiRetrieveExecutorRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExecutorResponse>> {
        return this.api.retrieveExecutorWithHttpInfo(param.continuousDeploymentId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific continuous deployment executor.
     * Retrieve details from a executor
     * @param param the request object
     */
    public retrieveExecutor(param: VCSContinuousDeploymentExecutorApiRetrieveExecutorRequest, options?: ConfigurationOptions): Promise<ExecutorResponse> {
        return this.api.retrieveExecutor(param.continuousDeploymentId, param.fields,  options).toPromise();
    }

    /**
     * Update continuous deployment executor information.
     * Update a executor
     * @param param the request object
     */
    public updateExecutorWithHttpInfo(param: VCSContinuousDeploymentExecutorApiUpdateExecutorRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExecutorResponse>> {
        return this.api.updateExecutorWithHttpInfo(param.continuousDeploymentId, param.body,  options).toPromise();
    }

    /**
     * Update continuous deployment executor information.
     * Update a executor
     * @param param the request object
     */
    public updateExecutor(param: VCSContinuousDeploymentExecutorApiUpdateExecutorRequest, options?: ConfigurationOptions): Promise<ExecutorResponse> {
        return this.api.updateExecutor(param.continuousDeploymentId, param.body,  options).toPromise();
    }

}

import { ObservableVCSContinuousDeploymentsApi } from "./ObservableAPI";
import { VCSContinuousDeploymentsApiRequestFactory, VCSContinuousDeploymentsApiResponseProcessor} from "../apis/VCSContinuousDeploymentsApi";

export interface VCSContinuousDeploymentsApiCreateContinuousDeploymentRequest {
    /**
     * 
     * @type ContinuousDeploymentRequest
     * @memberof VCSContinuousDeploymentsApicreateContinuousDeployment
     */
    continuousDeploymentRequest: ContinuousDeploymentRequest
}

export interface VCSContinuousDeploymentsApiDeleteContinuousDeploymentRequest {
    /**
     * Unique identifier of the continuous deployment
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApideleteContinuousDeployment
     */
    continuousDeploymentId: string
}

export interface VCSContinuousDeploymentsApiListContinuousDeploymentsRequest {
    /**
     * Filter by branch (exact match).
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    branch?: string
    /**
     * Filter by created date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    createdGte?: Date
    /**
     * Filter by created date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    createdLte?: Date
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    lastModifiedLte?: Date
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    pageSize?: number
    /**
     * Filter by repository (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    repository?: string
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApilistContinuousDeployments
     */
    search?: string
}

export interface VCSContinuousDeploymentsApiPartialUpdateContinuousDeploymentRequest {
    /**
     * Unique identifier of the continuous deployment
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApipartialUpdateContinuousDeployment
     */
    continuousDeploymentId: string
    /**
     * 
     * @type PatchedContinuousDeploymentRequest
     * @memberof VCSContinuousDeploymentsApipartialUpdateContinuousDeployment
     */
    patchedContinuousDeploymentRequest?: PatchedContinuousDeploymentRequest
}

export interface VCSContinuousDeploymentsApiRetrieveContinuousDeploymentRequest {
    /**
     * Unique identifier of the continuous deployment
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApiretrieveContinuousDeployment
     */
    continuousDeploymentId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApiretrieveContinuousDeployment
     */
    fields?: string
}

export interface VCSContinuousDeploymentsApiUpdateContinuousDeploymentRequest {
    /**
     * Unique identifier of the continuous deployment
     * Defaults to: undefined
     * @type string
     * @memberof VCSContinuousDeploymentsApiupdateContinuousDeployment
     */
    continuousDeploymentId: string
    /**
     * 
     * @type ContinuousDeploymentRequest
     * @memberof VCSContinuousDeploymentsApiupdateContinuousDeployment
     */
    continuousDeploymentRequest: ContinuousDeploymentRequest
}

export class ObjectVCSContinuousDeploymentsApi {
    private api: ObservableVCSContinuousDeploymentsApi

    public constructor(configuration: Configuration, requestFactory?: VCSContinuousDeploymentsApiRequestFactory, responseProcessor?: VCSContinuousDeploymentsApiResponseProcessor) {
        this.api = new ObservableVCSContinuousDeploymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new continuous deployment.
     * Create a continuous deployment
     * @param param the request object
     */
    public createContinuousDeploymentWithHttpInfo(param: VCSContinuousDeploymentsApiCreateContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContinuousDeploymentResponse>> {
        return this.api.createContinuousDeploymentWithHttpInfo(param.continuousDeploymentRequest,  options).toPromise();
    }

    /**
     * Create a new continuous deployment.
     * Create a continuous deployment
     * @param param the request object
     */
    public createContinuousDeployment(param: VCSContinuousDeploymentsApiCreateContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<ContinuousDeploymentResponse> {
        return this.api.createContinuousDeployment(param.continuousDeploymentRequest,  options).toPromise();
    }

    /**
     * Delete a specific continuous deployment.
     * Delete a continuous deployment
     * @param param the request object
     */
    public deleteContinuousDeploymentWithHttpInfo(param: VCSContinuousDeploymentsApiDeleteContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteContinuousDeploymentWithHttpInfo(param.continuousDeploymentId,  options).toPromise();
    }

    /**
     * Delete a specific continuous deployment.
     * Delete a continuous deployment
     * @param param the request object
     */
    public deleteContinuousDeployment(param: VCSContinuousDeploymentsApiDeleteContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteContinuousDeployment(param.continuousDeploymentId,  options).toPromise();
    }

    /**
     * List all continuous deployments.
     * List continuous deployments
     * @param param the request object
     */
    public listContinuousDeploymentsWithHttpInfo(param: VCSContinuousDeploymentsApiListContinuousDeploymentsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedContinuousDeploymentListResponseList>> {
        return this.api.listContinuousDeploymentsWithHttpInfo(param.branch, param.createdGte, param.createdLte, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.repository, param.search,  options).toPromise();
    }

    /**
     * List all continuous deployments.
     * List continuous deployments
     * @param param the request object
     */
    public listContinuousDeployments(param: VCSContinuousDeploymentsApiListContinuousDeploymentsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedContinuousDeploymentListResponseList> {
        return this.api.listContinuousDeployments(param.branch, param.createdGte, param.createdLte, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.name, param.ordering, param.page, param.pageSize, param.repository, param.search,  options).toPromise();
    }

    /**
     * Partialy update continuous deployment information.
     * Partialy update a continuous deployment
     * @param param the request object
     */
    public partialUpdateContinuousDeploymentWithHttpInfo(param: VCSContinuousDeploymentsApiPartialUpdateContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContinuousDeploymentResponse>> {
        return this.api.partialUpdateContinuousDeploymentWithHttpInfo(param.continuousDeploymentId, param.patchedContinuousDeploymentRequest,  options).toPromise();
    }

    /**
     * Partialy update continuous deployment information.
     * Partialy update a continuous deployment
     * @param param the request object
     */
    public partialUpdateContinuousDeployment(param: VCSContinuousDeploymentsApiPartialUpdateContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<ContinuousDeploymentResponse> {
        return this.api.partialUpdateContinuousDeployment(param.continuousDeploymentId, param.patchedContinuousDeploymentRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific continuous deployment.
     * Retrieve details from a continuous deployment
     * @param param the request object
     */
    public retrieveContinuousDeploymentWithHttpInfo(param: VCSContinuousDeploymentsApiRetrieveContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContinuousDeploymentResponse>> {
        return this.api.retrieveContinuousDeploymentWithHttpInfo(param.continuousDeploymentId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific continuous deployment.
     * Retrieve details from a continuous deployment
     * @param param the request object
     */
    public retrieveContinuousDeployment(param: VCSContinuousDeploymentsApiRetrieveContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<ContinuousDeploymentResponse> {
        return this.api.retrieveContinuousDeployment(param.continuousDeploymentId, param.fields,  options).toPromise();
    }

    /**
     * Update continuous deployment information.
     * Update a continuous deployment
     * @param param the request object
     */
    public updateContinuousDeploymentWithHttpInfo(param: VCSContinuousDeploymentsApiUpdateContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContinuousDeploymentResponse>> {
        return this.api.updateContinuousDeploymentWithHttpInfo(param.continuousDeploymentId, param.continuousDeploymentRequest,  options).toPromise();
    }

    /**
     * Update continuous deployment information.
     * Update a continuous deployment
     * @param param the request object
     */
    public updateContinuousDeployment(param: VCSContinuousDeploymentsApiUpdateContinuousDeploymentRequest, options?: ConfigurationOptions): Promise<ContinuousDeploymentResponse> {
        return this.api.updateContinuousDeployment(param.continuousDeploymentId, param.continuousDeploymentRequest,  options).toPromise();
    }

}

import { ObservableVCSExecutionScriptsApi } from "./ObservableAPI";
import { VCSExecutionScriptsApiRequestFactory, VCSExecutionScriptsApiResponseProcessor} from "../apis/VCSExecutionScriptsApi";

export interface VCSExecutionScriptsApiListExecutionScriptsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSExecutionScriptsApilistExecutionScripts
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof VCSExecutionScriptsApilistExecutionScripts
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof VCSExecutionScriptsApilistExecutionScripts
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof VCSExecutionScriptsApilistExecutionScripts
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof VCSExecutionScriptsApilistExecutionScripts
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof VCSExecutionScriptsApilistExecutionScripts
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof VCSExecutionScriptsApilistExecutionScripts
     */
    search?: string
}

export interface VCSExecutionScriptsApiRetrieveExecutionScriptRequest {
    /**
     * A unique integer value identifying this execution script.
     * Defaults to: undefined
     * @type number
     * @memberof VCSExecutionScriptsApiretrieveExecutionScript
     */
    executionScriptId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSExecutionScriptsApiretrieveExecutionScript
     */
    fields?: string
}

export class ObjectVCSExecutionScriptsApi {
    private api: ObservableVCSExecutionScriptsApi

    public constructor(configuration: Configuration, requestFactory?: VCSExecutionScriptsApiRequestFactory, responseProcessor?: VCSExecutionScriptsApiResponseProcessor) {
        this.api = new ObservableVCSExecutionScriptsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all execution scripts.
     * List execution scripts
     * @param param the request object
     */
    public listExecutionScriptsWithHttpInfo(param: VCSExecutionScriptsApiListExecutionScriptsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedExecutionScriptListResponseList>> {
        return this.api.listExecutionScriptsWithHttpInfo(param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all execution scripts.
     * List execution scripts
     * @param param the request object
     */
    public listExecutionScripts(param: VCSExecutionScriptsApiListExecutionScriptsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedExecutionScriptListResponseList> {
        return this.api.listExecutionScripts(param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieve details from a specific execution script.
     * Retrieve details from a execution script
     * @param param the request object
     */
    public retrieveExecutionScriptWithHttpInfo(param: VCSExecutionScriptsApiRetrieveExecutionScriptRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExecutionScriptResponse>> {
        return this.api.retrieveExecutionScriptWithHttpInfo(param.executionScriptId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific execution script.
     * Retrieve details from a execution script
     * @param param the request object
     */
    public retrieveExecutionScript(param: VCSExecutionScriptsApiRetrieveExecutionScriptRequest, options?: ConfigurationOptions): Promise<ExecutionScriptResponse> {
        return this.api.retrieveExecutionScript(param.executionScriptId, param.fields,  options).toPromise();
    }

}

import { ObservableVCSIntegrationsApi } from "./ObservableAPI";
import { VCSIntegrationsApiRequestFactory, VCSIntegrationsApiResponseProcessor} from "../apis/VCSIntegrationsApi";

export interface VCSIntegrationsApiDeleteIntegrationRequest {
    /**
     * Unique identifier of the integration
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApideleteIntegration
     */
    integrationId: string
}

export interface VCSIntegrationsApiListIntegrationsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApilistIntegrations
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof VCSIntegrationsApilistIntegrations
     */
    id?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApilistIntegrations
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof VCSIntegrationsApilistIntegrations
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof VCSIntegrationsApilistIntegrations
     */
    pageSize?: number
    /**
     * Filter by platform id (exact match).
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApilistIntegrations
     */
    platform?: string
    /**
     * Filter by scope (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApilistIntegrations
     */
    scope?: string
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApilistIntegrations
     */
    search?: string
}

export interface VCSIntegrationsApiListRepositoriesRequest {
    /**
     * Unique identifier of the integration
     * Defaults to: undefined
     * @type number
     * @memberof VCSIntegrationsApilistRepositories
     */
    integrationId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApilistRepositories
     */
    fields?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApilistRepositories
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof VCSIntegrationsApilistRepositories
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof VCSIntegrationsApilistRepositories
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApilistRepositories
     */
    search?: string
}

export interface VCSIntegrationsApiRetrieveIntegrationRequest {
    /**
     * Unique identifier of the integration
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApiretrieveIntegration
     */
    integrationId: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSIntegrationsApiretrieveIntegration
     */
    fields?: string
}

export class ObjectVCSIntegrationsApi {
    private api: ObservableVCSIntegrationsApi

    public constructor(configuration: Configuration, requestFactory?: VCSIntegrationsApiRequestFactory, responseProcessor?: VCSIntegrationsApiResponseProcessor) {
        this.api = new ObservableVCSIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a specific account integration.
     * Delete an integration
     * @param param the request object
     */
    public deleteIntegrationWithHttpInfo(param: VCSIntegrationsApiDeleteIntegrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteIntegrationWithHttpInfo(param.integrationId,  options).toPromise();
    }

    /**
     * Delete a specific account integration.
     * Delete an integration
     * @param param the request object
     */
    public deleteIntegration(param: VCSIntegrationsApiDeleteIntegrationRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteIntegration(param.integrationId,  options).toPromise();
    }

    /**
     * List all account integrations.
     * List integrations
     * @param param the request object
     */
    public listIntegrationsWithHttpInfo(param: VCSIntegrationsApiListIntegrationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedIntegrationListResponseList>> {
        return this.api.listIntegrationsWithHttpInfo(param.fields, param.id, param.ordering, param.page, param.pageSize, param.platform, param.scope, param.search,  options).toPromise();
    }

    /**
     * List all account integrations.
     * List integrations
     * @param param the request object
     */
    public listIntegrations(param: VCSIntegrationsApiListIntegrationsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedIntegrationListResponseList> {
        return this.api.listIntegrations(param.fields, param.id, param.ordering, param.page, param.pageSize, param.platform, param.scope, param.search,  options).toPromise();
    }

    /**
     * Retrieve repositories for a specific integration.
     * List integration repositories.
     * @param param the request object
     */
    public listRepositoriesWithHttpInfo(param: VCSIntegrationsApiListRepositoriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedRepositoryListResponseList>> {
        return this.api.listRepositoriesWithHttpInfo(param.integrationId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieve repositories for a specific integration.
     * List integration repositories.
     * @param param the request object
     */
    public listRepositories(param: VCSIntegrationsApiListRepositoriesRequest, options?: ConfigurationOptions): Promise<PaginatedRepositoryListResponseList> {
        return this.api.listRepositories(param.integrationId, param.fields, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Retrieve details from a specific account integration.
     * Retrieve details from a integration
     * @param param the request object
     */
    public retrieveIntegrationWithHttpInfo(param: VCSIntegrationsApiRetrieveIntegrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<IntegrationResponse>> {
        return this.api.retrieveIntegrationWithHttpInfo(param.integrationId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific account integration.
     * Retrieve details from a integration
     * @param param the request object
     */
    public retrieveIntegration(param: VCSIntegrationsApiRetrieveIntegrationRequest, options?: ConfigurationOptions): Promise<IntegrationResponse> {
        return this.api.retrieveIntegration(param.integrationId, param.fields,  options).toPromise();
    }

}

import { ObservableVCSProvidersApi } from "./ObservableAPI";
import { VCSProvidersApiRequestFactory, VCSProvidersApiResponseProcessor} from "../apis/VCSProvidersApi";

export interface VCSProvidersApiListProvidersRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof VCSProvidersApilistProviders
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof VCSProvidersApilistProviders
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof VCSProvidersApilistProviders
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof VCSProvidersApilistProviders
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof VCSProvidersApilistProviders
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof VCSProvidersApilistProviders
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof VCSProvidersApilistProviders
     */
    search?: string
}

export class ObjectVCSProvidersApi {
    private api: ObservableVCSProvidersApi

    public constructor(configuration: Configuration, requestFactory?: VCSProvidersApiRequestFactory, responseProcessor?: VCSProvidersApiResponseProcessor) {
        this.api = new ObservableVCSProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all providers.
     * List providers
     * @param param the request object
     */
    public listProvidersWithHttpInfo(param: VCSProvidersApiListProvidersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedPlatformListResponseList>> {
        return this.api.listProvidersWithHttpInfo(param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all providers.
     * List providers
     * @param param the request object
     */
    public listProviders(param: VCSProvidersApiListProvidersRequest = {}, options?: ConfigurationOptions): Promise<PaginatedPlatformListResponseList> {
        return this.api.listProviders(param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

}

import { ObservableWAFVersionsApi } from "./ObservableAPI";
import { WAFVersionsApiRequestFactory, WAFVersionsApiResponseProcessor} from "../apis/WAFVersionsApi";

export interface WAFVersionsApiArchiveWafVersionRequest {
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApiarchiveWafVersion
     */
    versionId: string
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApiarchiveWafVersion
     */
    wafId: number
    /**
     * 
     * @type VersionArchiveRequest
     * @memberof WAFVersionsApiarchiveWafVersion
     */
    versionArchiveRequest?: VersionArchiveRequest
}

export interface WAFVersionsApiBuildWafVersionRequest {
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApibuildWafVersion
     */
    versionId: string
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApibuildWafVersion
     */
    wafId: number
    /**
     * 
     * @type VersionBuildRequest
     * @memberof WAFVersionsApibuildWafVersion
     */
    versionBuildRequest?: VersionBuildRequest
}

export interface WAFVersionsApiCancelWafVersionBuildRequest {
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApicancelWafVersionBuild
     */
    versionId: string
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApicancelWafVersionBuild
     */
    wafId: number
    /**
     * 
     * @type VersionCancelRequest
     * @memberof WAFVersionsApicancelWafVersionBuild
     */
    versionCancelRequest?: VersionCancelRequest
}

export interface WAFVersionsApiCreateWafVersionRequest {
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApicreateWafVersion
     */
    wafId: number
    /**
     * 
     * @type VersionCreateRequest
     * @memberof WAFVersionsApicreateWafVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export interface WAFVersionsApiDeleteWafVersionRequest {
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApideleteWafVersion
     */
    versionId: string
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApideleteWafVersion
     */
    wafId: number
}

export interface WAFVersionsApiListWafVersionsRequest {
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApilistWafVersions
     */
    wafId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApilistWafVersions
     */
    fields?: string
}

export interface WAFVersionsApiPartialUpdateWafVersionRequest {
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApipartialUpdateWafVersion
     */
    versionId: string
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApipartialUpdateWafVersion
     */
    wafId: number
    /**
     * 
     * @type PatchedVersionCreateRequest
     * @memberof WAFVersionsApipartialUpdateWafVersion
     */
    patchedVersionCreateRequest?: PatchedVersionCreateRequest
}

export interface WAFVersionsApiRetrieveWafVersionRequest {
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApiretrieveWafVersion
     */
    versionId: string
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApiretrieveWafVersion
     */
    wafId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApiretrieveWafVersion
     */
    fields?: string
}

export interface WAFVersionsApiUpdateWafVersionRequest {
    /**
     * The identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFVersionsApiupdateWafVersion
     */
    versionId: string
    /**
     * The ID of the WAF resource.
     * Defaults to: undefined
     * @type number
     * @memberof WAFVersionsApiupdateWafVersion
     */
    wafId: number
    /**
     * 
     * @type VersionCreateRequest
     * @memberof WAFVersionsApiupdateWafVersion
     */
    versionCreateRequest?: VersionCreateRequest
}

export class ObjectWAFVersionsApi {
    private api: ObservableWAFVersionsApi

    public constructor(configuration: Configuration, requestFactory?: WAFVersionsApiRequestFactory, responseProcessor?: WAFVersionsApiResponseProcessor) {
        this.api = new ObservableWAFVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a WAF version
     * @param param the request object
     */
    public archiveWafVersionWithHttpInfo(param: WAFVersionsApiArchiveWafVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWafVersionWithHttpInfo(param.versionId, param.wafId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a WAF version
     * @param param the request object
     */
    public archiveWafVersion(param: WAFVersionsApiArchiveWafVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveWafVersion(param.versionId, param.wafId, param.versionArchiveRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a WAF version
     * @param param the request object
     */
    public buildWafVersionWithHttpInfo(param: WAFVersionsApiBuildWafVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.buildWafVersionWithHttpInfo(param.versionId, param.wafId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a WAF version
     * @param param the request object
     */
    public buildWafVersion(param: WAFVersionsApiBuildWafVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.buildWafVersion(param.versionId, param.wafId, param.versionBuildRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a WAF version build
     * @param param the request object
     */
    public cancelWafVersionBuildWithHttpInfo(param: WAFVersionsApiCancelWafVersionBuildRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelWafVersionBuildWithHttpInfo(param.versionId, param.wafId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a WAF version build
     * @param param the request object
     */
    public cancelWafVersionBuild(param: WAFVersionsApiCancelWafVersionBuildRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelWafVersionBuild(param.versionId, param.wafId, param.versionCancelRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new WAF version
     * @param param the request object
     */
    public createWafVersionWithHttpInfo(param: WAFVersionsApiCreateWafVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createWafVersionWithHttpInfo(param.wafId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new WAF version
     * @param param the request object
     */
    public createWafVersion(param: WAFVersionsApiCreateWafVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createWafVersion(param.wafId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a WAF version
     * @param param the request object
     */
    public deleteWafVersionWithHttpInfo(param: WAFVersionsApiDeleteWafVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteWafVersionWithHttpInfo(param.versionId, param.wafId,  options).toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a WAF version
     * @param param the request object
     */
    public deleteWafVersion(param: WAFVersionsApiDeleteWafVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteWafVersion(param.versionId, param.wafId,  options).toPromise();
    }

    /**
     * List all versions of a specific WAF.
     * List WAF versions
     * @param param the request object
     */
    public listWafVersionsWithHttpInfo(param: WAFVersionsApiListWafVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.listWafVersionsWithHttpInfo(param.wafId, param.fields,  options).toPromise();
    }

    /**
     * List all versions of a specific WAF.
     * List WAF versions
     * @param param the request object
     */
    public listWafVersions(param: WAFVersionsApiListWafVersionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.listWafVersions(param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a WAF version
     * @param param the request object
     */
    public partialUpdateWafVersionWithHttpInfo(param: WAFVersionsApiPartialUpdateWafVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.partialUpdateWafVersionWithHttpInfo(param.versionId, param.wafId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a WAF version
     * @param param the request object
     */
    public partialUpdateWafVersion(param: WAFVersionsApiPartialUpdateWafVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.partialUpdateWafVersion(param.versionId, param.wafId, param.patchedVersionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a WAF version
     * @param param the request object
     */
    public retrieveWafVersionWithHttpInfo(param: WAFVersionsApiRetrieveWafVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.retrieveWafVersionWithHttpInfo(param.versionId, param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a WAF version
     * @param param the request object
     */
    public retrieveWafVersion(param: WAFVersionsApiRetrieveWafVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.retrieveWafVersion(param.versionId, param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a WAF version
     * @param param the request object
     */
    public updateWafVersionWithHttpInfo(param: WAFVersionsApiUpdateWafVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateWafVersionWithHttpInfo(param.versionId, param.wafId, param.versionCreateRequest,  options).toPromise();
    }

    /**
     * Update a draft version.
     * Update a WAF version
     * @param param the request object
     */
    public updateWafVersion(param: WAFVersionsApiUpdateWafVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateWafVersion(param.versionId, param.wafId, param.versionCreateRequest,  options).toPromise();
    }

}

import { ObservableWAFsApi } from "./ObservableAPI";
import { WAFsApiRequestFactory, WAFsApiResponseProcessor} from "../apis/WAFsApi";

export interface WAFsApiCloneWafRequest {
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsApicloneWaf
     */
    wafId: number
    /**
     * 
     * @type CloneWAFRequest
     * @memberof WAFsApicloneWaf
     */
    cloneWAFRequest: CloneWAFRequest
}

export interface WAFsApiCreateWafRequest {
    /**
     * 
     * @type WAFRequest
     * @memberof WAFsApicreateWaf
     */
    wAFRequest: WAFRequest
}

export interface WAFsApiDeleteWafRequest {
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsApideleteWaf
     */
    wafId: number
}

export interface WAFsApiListWafsRequest {
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsApilistWafs
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof WAFsApilistWafs
     */
    id?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WAFsApilistWafs
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsApilistWafs
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsApilistWafs
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsApilistWafs
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsApilistWafs
     */
    search?: string
}

export interface WAFsApiPartialUpdateWafRequest {
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsApipartialUpdateWaf
     */
    wafId: number
    /**
     * 
     * @type PatchedWAFRequest
     * @memberof WAFsApipartialUpdateWaf
     */
    patchedWAFRequest?: PatchedWAFRequest
}

export interface WAFsApiRetrieveWafRequest {
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsApiretrieveWaf
     */
    wafId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsApiretrieveWaf
     */
    fields?: string
}

export interface WAFsApiUpdateWafRequest {
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsApiupdateWaf
     */
    wafId: number
    /**
     * 
     * @type WAFRequest
     * @memberof WAFsApiupdateWaf
     */
    wAFRequest: WAFRequest
}

export class ObjectWAFsApi {
    private api: ObservableWAFsApi

    public constructor(configuration: Configuration, requestFactory?: WAFsApiRequestFactory, responseProcessor?: WAFsApiResponseProcessor) {
        this.api = new ObservableWAFsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new WAF by performing a deep copy of an existing WAF, including its Exceptions.
     * Clone a Web Application Firewall (WAF)
     * @param param the request object
     */
    public cloneWafWithHttpInfo(param: WAFsApiCloneWafRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        return this.api.cloneWafWithHttpInfo(param.wafId, param.cloneWAFRequest,  options).toPromise();
    }

    /**
     * Create a new WAF by performing a deep copy of an existing WAF, including its Exceptions.
     * Clone a Web Application Firewall (WAF)
     * @param param the request object
     */
    public cloneWaf(param: WAFsApiCloneWafRequest, options?: ConfigurationOptions): Promise<WAFResponse> {
        return this.api.cloneWaf(param.wafId, param.cloneWAFRequest,  options).toPromise();
    }

    /**
     * Create a new WAF for your account.
     * Create a Web Application Firewall (WAF)
     * @param param the request object
     */
    public createWafWithHttpInfo(param: WAFsApiCreateWafRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        return this.api.createWafWithHttpInfo(param.wAFRequest,  options).toPromise();
    }

    /**
     * Create a new WAF for your account.
     * Create a Web Application Firewall (WAF)
     * @param param the request object
     */
    public createWaf(param: WAFsApiCreateWafRequest, options?: ConfigurationOptions): Promise<WAFResponse> {
        return this.api.createWaf(param.wAFRequest,  options).toPromise();
    }

    /**
     * Delete a specific WAF in your account.
     * Delete a Web Application Firewall (WAF)
     * @param param the request object
     */
    public deleteWafWithHttpInfo(param: WAFsApiDeleteWafRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteWafWithHttpInfo(param.wafId,  options).toPromise();
    }

    /**
     * Delete a specific WAF in your account.
     * Delete a Web Application Firewall (WAF)
     * @param param the request object
     */
    public deleteWaf(param: WAFsApiDeleteWafRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteWaf(param.wafId,  options).toPromise();
    }

    /**
     * List all WAFs owned by your account.
     * List Web Application Firewalls (WAFs)
     * @param param the request object
     */
    public listWafsWithHttpInfo(param: WAFsApiListWafsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedWAFList>> {
        return this.api.listWafsWithHttpInfo(param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all WAFs owned by your account.
     * List Web Application Firewalls (WAFs)
     * @param param the request object
     */
    public listWafs(param: WAFsApiListWafsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedWAFList> {
        return this.api.listWafs(param.fields, param.id, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing WAF without affecting other fields.
     * Partially update a Web Application Firewall (WAF)
     * @param param the request object
     */
    public partialUpdateWafWithHttpInfo(param: WAFsApiPartialUpdateWafRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        return this.api.partialUpdateWafWithHttpInfo(param.wafId, param.patchedWAFRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing WAF without affecting other fields.
     * Partially update a Web Application Firewall (WAF)
     * @param param the request object
     */
    public partialUpdateWaf(param: WAFsApiPartialUpdateWafRequest, options?: ConfigurationOptions): Promise<WAFResponse> {
        return this.api.partialUpdateWaf(param.wafId, param.patchedWAFRequest,  options).toPromise();
    }

    /**
     * Retrieve details from a specific WAF in your account.
     * Retrieve details from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public retrieveWafWithHttpInfo(param: WAFsApiRetrieveWafRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        return this.api.retrieveWafWithHttpInfo(param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details from a specific WAF in your account.
     * Retrieve details from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public retrieveWaf(param: WAFsApiRetrieveWafRequest, options?: ConfigurationOptions): Promise<WAFResponse> {
        return this.api.retrieveWaf(param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing WAF. This replaces the entire WAF with the new data provided.
     * Update a Web Application Firewall (WAF)
     * @param param the request object
     */
    public updateWafWithHttpInfo(param: WAFsApiUpdateWafRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        return this.api.updateWafWithHttpInfo(param.wafId, param.wAFRequest,  options).toPromise();
    }

    /**
     * Update an existing WAF. This replaces the entire WAF with the new data provided.
     * Update a Web Application Firewall (WAF)
     * @param param the request object
     */
    public updateWaf(param: WAFsApiUpdateWafRequest, options?: ConfigurationOptions): Promise<WAFResponse> {
        return this.api.updateWaf(param.wafId, param.wAFRequest,  options).toPromise();
    }

}

import { ObservableWAFsExceptionsApi } from "./ObservableAPI";
import { WAFsExceptionsApiRequestFactory, WAFsExceptionsApiResponseProcessor} from "../apis/WAFsExceptionsApi";

export interface WAFsExceptionsApiCreateWafExceptionRequest {
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApicreateWafException
     */
    wafId: number
    /**
     * 
     * @type WAFRuleRequest
     * @memberof WAFsExceptionsApicreateWafException
     */
    wAFRuleRequest: WAFRuleRequest
}

export interface WAFsExceptionsApiCreateWafException2Request {
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApicreateWafException2
     */
    versionId: string
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApicreateWafException2
     */
    wafId: number
    /**
     * 
     * @type WAFRuleRequest
     * @memberof WAFsExceptionsApicreateWafException2
     */
    wAFRuleRequest: WAFRuleRequest
}

export interface WAFsExceptionsApiDeleteWafExceptionRequest {
    /**
     * A unique integer value identifying the WAF exception.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApideleteWafException
     */
    exceptionId: number
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApideleteWafException
     */
    wafId: number
}

export interface WAFsExceptionsApiDeleteWafException2Request {
    /**
     * A unique integer value identifying the WAF exception.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApideleteWafException2
     */
    exceptionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApideleteWafException2
     */
    versionId: string
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApideleteWafException2
     */
    wafId: number
}

export interface WAFsExceptionsApiListWafExceptionsRequest {
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    wafId: number
    /**
     * Filter by creation date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    createdAtGte?: Date
    /**
     * Filter by creation date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    createdAtLte?: Date
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    lastModifiedLte?: Date
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    pageSize?: number
    /**
     * Filter by path (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    path?: string
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions
     */
    search?: string
}

export interface WAFsExceptionsApiListWafExceptions2Request {
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    versionId: string
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    wafId: number
    /**
     * Filter by creation date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    createdAtGte?: Date
    /**
     * Filter by creation date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    createdAtLte?: Date
    /**
     * Filter by description (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    description?: string
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    id?: number
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    lastModifiedLte?: Date
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    pageSize?: number
    /**
     * Filter by path (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    path?: string
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApilistWafExceptions2
     */
    search?: string
}

export interface WAFsExceptionsApiPartialUpdateWafExceptionRequest {
    /**
     * A unique integer value identifying the WAF exception.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApipartialUpdateWafException
     */
    exceptionId: number
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApipartialUpdateWafException
     */
    wafId: number
    /**
     * 
     * @type PatchedWAFRuleRequest
     * @memberof WAFsExceptionsApipartialUpdateWafException
     */
    patchedWAFRuleRequest?: PatchedWAFRuleRequest
}

export interface WAFsExceptionsApiPartialUpdateWafException2Request {
    /**
     * A unique integer value identifying the WAF exception.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApipartialUpdateWafException2
     */
    exceptionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApipartialUpdateWafException2
     */
    versionId: string
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApipartialUpdateWafException2
     */
    wafId: number
    /**
     * 
     * @type PatchedWAFRuleRequest
     * @memberof WAFsExceptionsApipartialUpdateWafException2
     */
    patchedWAFRuleRequest?: PatchedWAFRuleRequest
}

export interface WAFsExceptionsApiRetrieveWafExceptionRequest {
    /**
     * A unique integer value identifying the WAF exception.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApiretrieveWafException
     */
    exceptionId: number
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApiretrieveWafException
     */
    wafId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApiretrieveWafException
     */
    fields?: string
}

export interface WAFsExceptionsApiRetrieveWafException2Request {
    /**
     * A unique integer value identifying the WAF exception.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApiretrieveWafException2
     */
    exceptionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApiretrieveWafException2
     */
    versionId: string
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApiretrieveWafException2
     */
    wafId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApiretrieveWafException2
     */
    fields?: string
}

export interface WAFsExceptionsApiUpdateWafExceptionRequest {
    /**
     * A unique integer value identifying the WAF exception.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApiupdateWafException
     */
    exceptionId: number
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApiupdateWafException
     */
    wafId: number
    /**
     * 
     * @type WAFRuleRequest
     * @memberof WAFsExceptionsApiupdateWafException
     */
    wAFRuleRequest: WAFRuleRequest
}

export interface WAFsExceptionsApiUpdateWafException2Request {
    /**
     * A unique integer value identifying the WAF exception.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApiupdateWafException2
     */
    exceptionId: number
    /**
     * The ULID identifier of the version.
     * Defaults to: undefined
     * @type string
     * @memberof WAFsExceptionsApiupdateWafException2
     */
    versionId: string
    /**
     * A unique integer value identifying the WAF.
     * Defaults to: undefined
     * @type number
     * @memberof WAFsExceptionsApiupdateWafException2
     */
    wafId: number
    /**
     * 
     * @type WAFRuleRequest
     * @memberof WAFsExceptionsApiupdateWafException2
     */
    wAFRuleRequest: WAFRuleRequest
}

export class ObjectWAFsExceptionsApi {
    private api: ObservableWAFsExceptionsApi

    public constructor(configuration: Configuration, requestFactory?: WAFsExceptionsApiRequestFactory, responseProcessor?: WAFsExceptionsApiResponseProcessor) {
        this.api = new ObservableWAFsExceptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Exception for a specific WAF in your account.
     * Create an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public createWafExceptionWithHttpInfo(param: WAFsExceptionsApiCreateWafExceptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        return this.api.createWafExceptionWithHttpInfo(param.wafId, param.wAFRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Exception for a specific WAF in your account.
     * Create an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public createWafException(param: WAFsExceptionsApiCreateWafExceptionRequest, options?: ConfigurationOptions): Promise<WAFRuleResponse> {
        return this.api.createWafException(param.wafId, param.wAFRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Exception for a specific WAF in your account.
     * Create an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public createWafException2WithHttpInfo(param: WAFsExceptionsApiCreateWafException2Request, options?: ConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        return this.api.createWafException2WithHttpInfo(param.versionId, param.wafId, param.wAFRuleRequest,  options).toPromise();
    }

    /**
     * Create a new Exception for a specific WAF in your account.
     * Create an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public createWafException2(param: WAFsExceptionsApiCreateWafException2Request, options?: ConfigurationOptions): Promise<WAFRuleResponse> {
        return this.api.createWafException2(param.versionId, param.wafId, param.wAFRuleRequest,  options).toPromise();
    }

    /**
     * Remove a specific Exception from a WAF in your account.
     * Delete an Exception from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public deleteWafExceptionWithHttpInfo(param: WAFsExceptionsApiDeleteWafExceptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteWafExceptionWithHttpInfo(param.exceptionId, param.wafId,  options).toPromise();
    }

    /**
     * Remove a specific Exception from a WAF in your account.
     * Delete an Exception from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public deleteWafException(param: WAFsExceptionsApiDeleteWafExceptionRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteWafException(param.exceptionId, param.wafId,  options).toPromise();
    }

    /**
     * Remove a specific Exception from a WAF in your account.
     * Delete an Exception from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public deleteWafException2WithHttpInfo(param: WAFsExceptionsApiDeleteWafException2Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteWafException2WithHttpInfo(param.exceptionId, param.versionId, param.wafId,  options).toPromise();
    }

    /**
     * Remove a specific Exception from a WAF in your account.
     * Delete an Exception from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public deleteWafException2(param: WAFsExceptionsApiDeleteWafException2Request, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteWafException2(param.exceptionId, param.versionId, param.wafId,  options).toPromise();
    }

    /**
     * List all Exceptions associated with a specific WAF owned by your account.
     * List Exceptions for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public listWafExceptionsWithHttpInfo(param: WAFsExceptionsApiListWafExceptionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedWAFRuleList>> {
        return this.api.listWafExceptionsWithHttpInfo(param.wafId, param.createdAtGte, param.createdAtLte, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.ordering, param.page, param.pageSize, param.path, param.search,  options).toPromise();
    }

    /**
     * List all Exceptions associated with a specific WAF owned by your account.
     * List Exceptions for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public listWafExceptions(param: WAFsExceptionsApiListWafExceptionsRequest, options?: ConfigurationOptions): Promise<PaginatedWAFRuleList> {
        return this.api.listWafExceptions(param.wafId, param.createdAtGte, param.createdAtLte, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.ordering, param.page, param.pageSize, param.path, param.search,  options).toPromise();
    }

    /**
     * List all Exceptions associated with a specific WAF owned by your account.
     * List Exceptions for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public listWafExceptions2WithHttpInfo(param: WAFsExceptionsApiListWafExceptions2Request, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedWAFRuleList>> {
        return this.api.listWafExceptions2WithHttpInfo(param.versionId, param.wafId, param.createdAtGte, param.createdAtLte, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.ordering, param.page, param.pageSize, param.path, param.search,  options).toPromise();
    }

    /**
     * List all Exceptions associated with a specific WAF owned by your account.
     * List Exceptions for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public listWafExceptions2(param: WAFsExceptionsApiListWafExceptions2Request, options?: ConfigurationOptions): Promise<PaginatedWAFRuleList> {
        return this.api.listWafExceptions2(param.versionId, param.wafId, param.createdAtGte, param.createdAtLte, param.description, param.fields, param.id, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.ordering, param.page, param.pageSize, param.path, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing exception for a WAF without affecting other fields.
     * Partially update an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public partialUpdateWafExceptionWithHttpInfo(param: WAFsExceptionsApiPartialUpdateWafExceptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        return this.api.partialUpdateWafExceptionWithHttpInfo(param.exceptionId, param.wafId, param.patchedWAFRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing exception for a WAF without affecting other fields.
     * Partially update an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public partialUpdateWafException(param: WAFsExceptionsApiPartialUpdateWafExceptionRequest, options?: ConfigurationOptions): Promise<WAFRuleResponse> {
        return this.api.partialUpdateWafException(param.exceptionId, param.wafId, param.patchedWAFRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing exception for a WAF without affecting other fields.
     * Partially update an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public partialUpdateWafException2WithHttpInfo(param: WAFsExceptionsApiPartialUpdateWafException2Request, options?: ConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        return this.api.partialUpdateWafException2WithHttpInfo(param.exceptionId, param.versionId, param.wafId, param.patchedWAFRuleRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing exception for a WAF without affecting other fields.
     * Partially update an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public partialUpdateWafException2(param: WAFsExceptionsApiPartialUpdateWafException2Request, options?: ConfigurationOptions): Promise<WAFRuleResponse> {
        return this.api.partialUpdateWafException2(param.exceptionId, param.versionId, param.wafId, param.patchedWAFRuleRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Exception from a WAF in your account.
     * Retrieve details of an Exception from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public retrieveWafExceptionWithHttpInfo(param: WAFsExceptionsApiRetrieveWafExceptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        return this.api.retrieveWafExceptionWithHttpInfo(param.exceptionId, param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Exception from a WAF in your account.
     * Retrieve details of an Exception from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public retrieveWafException(param: WAFsExceptionsApiRetrieveWafExceptionRequest, options?: ConfigurationOptions): Promise<WAFRuleResponse> {
        return this.api.retrieveWafException(param.exceptionId, param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Exception from a WAF in your account.
     * Retrieve details of an Exception from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public retrieveWafException2WithHttpInfo(param: WAFsExceptionsApiRetrieveWafException2Request, options?: ConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        return this.api.retrieveWafException2WithHttpInfo(param.exceptionId, param.versionId, param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Exception from a WAF in your account.
     * Retrieve details of an Exception from a Web Application Firewall (WAF)
     * @param param the request object
     */
    public retrieveWafException2(param: WAFsExceptionsApiRetrieveWafException2Request, options?: ConfigurationOptions): Promise<WAFRuleResponse> {
        return this.api.retrieveWafException2(param.exceptionId, param.versionId, param.wafId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.
     * Update an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public updateWafExceptionWithHttpInfo(param: WAFsExceptionsApiUpdateWafExceptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        return this.api.updateWafExceptionWithHttpInfo(param.exceptionId, param.wafId, param.wAFRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.
     * Update an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public updateWafException(param: WAFsExceptionsApiUpdateWafExceptionRequest, options?: ConfigurationOptions): Promise<WAFRuleResponse> {
        return this.api.updateWafException(param.exceptionId, param.wafId, param.wAFRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.
     * Update an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public updateWafException2WithHttpInfo(param: WAFsExceptionsApiUpdateWafException2Request, options?: ConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        return this.api.updateWafException2WithHttpInfo(param.exceptionId, param.versionId, param.wafId, param.wAFRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.
     * Update an Exception for a Web Application Firewall (WAF)
     * @param param the request object
     */
    public updateWafException2(param: WAFsExceptionsApiUpdateWafException2Request, options?: ConfigurationOptions): Promise<WAFRuleResponse> {
        return this.api.updateWafException2(param.exceptionId, param.versionId, param.wafId, param.wAFRuleRequest,  options).toPromise();
    }

}

import { ObservableWorkloadDeploymentsApi } from "./ObservableAPI";
import { WorkloadDeploymentsApiRequestFactory, WorkloadDeploymentsApiResponseProcessor} from "../apis/WorkloadDeploymentsApi";

export interface WorkloadDeploymentsApiCreateWorkloadDeploymentRequest {
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApicreateWorkloadDeployment
     */
    workloadId: number
    /**
     * 
     * @type WorkloadDeploymentRequest
     * @memberof WorkloadDeploymentsApicreateWorkloadDeployment
     */
    workloadDeploymentRequest: WorkloadDeploymentRequest
}

export interface WorkloadDeploymentsApiDeleteWorkloadDeploymentRequest {
    /**
     * A unique integer value identifying the deployment.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApideleteWorkloadDeployment
     */
    deploymentId: number
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApideleteWorkloadDeployment
     */
    workloadId: number
}

export interface WorkloadDeploymentsApiListWorkloadDeploymentsRequest {
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    workloadId: number
    /**
     * Filter by current status.
     * Defaults to: undefined
     * @type boolean
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    current?: boolean
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    id?: number
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    search?: string
    /**
     * Filter by tag (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadDeploymentsApilistWorkloadDeployments
     */
    tag?: string
}

export interface WorkloadDeploymentsApiPartialUpdateWorkloadDeploymentRequest {
    /**
     * A unique integer value identifying the deployment.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApipartialUpdateWorkloadDeployment
     */
    deploymentId: number
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApipartialUpdateWorkloadDeployment
     */
    workloadId: number
    /**
     * 
     * @type PatchedWorkloadDeploymentRequest
     * @memberof WorkloadDeploymentsApipartialUpdateWorkloadDeployment
     */
    patchedWorkloadDeploymentRequest?: PatchedWorkloadDeploymentRequest
}

export interface WorkloadDeploymentsApiRetrieveWorkloadDeploymentRequest {
    /**
     * A unique integer value identifying the deployment.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApiretrieveWorkloadDeployment
     */
    deploymentId: number
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApiretrieveWorkloadDeployment
     */
    workloadId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadDeploymentsApiretrieveWorkloadDeployment
     */
    fields?: string
}

export interface WorkloadDeploymentsApiUpdateWorkloadDeploymentRequest {
    /**
     * A unique integer value identifying the deployment.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApiupdateWorkloadDeployment
     */
    deploymentId: number
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadDeploymentsApiupdateWorkloadDeployment
     */
    workloadId: number
    /**
     * 
     * @type WorkloadDeploymentRequest
     * @memberof WorkloadDeploymentsApiupdateWorkloadDeployment
     */
    workloadDeploymentRequest: WorkloadDeploymentRequest
}

export class ObjectWorkloadDeploymentsApi {
    private api: ObservableWorkloadDeploymentsApi

    public constructor(configuration: Configuration, requestFactory?: WorkloadDeploymentsApiRequestFactory, responseProcessor?: WorkloadDeploymentsApiResponseProcessor) {
        this.api = new ObservableWorkloadDeploymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Workload Deployment in your account.
     * Create a Workload Deployment
     * @param param the request object
     */
    public createWorkloadDeploymentWithHttpInfo(param: WorkloadDeploymentsApiCreateWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkloadDeploymentResponse>> {
        return this.api.createWorkloadDeploymentWithHttpInfo(param.workloadId, param.workloadDeploymentRequest,  options).toPromise();
    }

    /**
     * Create a new Workload Deployment in your account.
     * Create a Workload Deployment
     * @param param the request object
     */
    public createWorkloadDeployment(param: WorkloadDeploymentsApiCreateWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<WorkloadDeploymentResponse> {
        return this.api.createWorkloadDeployment(param.workloadId, param.workloadDeploymentRequest,  options).toPromise();
    }

    /**
     * Delete a specific Workload Deployment in your account.
     * Delete a Workload Deployment
     * @param param the request object
     */
    public deleteWorkloadDeploymentWithHttpInfo(param: WorkloadDeploymentsApiDeleteWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteWorkloadDeploymentWithHttpInfo(param.deploymentId, param.workloadId,  options).toPromise();
    }

    /**
     * Delete a specific Workload Deployment in your account.
     * Delete a Workload Deployment
     * @param param the request object
     */
    public deleteWorkloadDeployment(param: WorkloadDeploymentsApiDeleteWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteWorkloadDeployment(param.deploymentId, param.workloadId,  options).toPromise();
    }

    /**
     * List all Workload Deployments related to your account\'s Workloads.
     * List Workload Deployments
     * @param param the request object
     */
    public listWorkloadDeploymentsWithHttpInfo(param: WorkloadDeploymentsApiListWorkloadDeploymentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedWorkloadDeploymentList>> {
        return this.api.listWorkloadDeploymentsWithHttpInfo(param.workloadId, param.current, param.fields, param.id, param.ordering, param.page, param.pageSize, param.search, param.tag,  options).toPromise();
    }

    /**
     * List all Workload Deployments related to your account\'s Workloads.
     * List Workload Deployments
     * @param param the request object
     */
    public listWorkloadDeployments(param: WorkloadDeploymentsApiListWorkloadDeploymentsRequest, options?: ConfigurationOptions): Promise<PaginatedWorkloadDeploymentList> {
        return this.api.listWorkloadDeployments(param.workloadId, param.current, param.fields, param.id, param.ordering, param.page, param.pageSize, param.search, param.tag,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Workload Deployment without affecting other fields.
     * Partially update a Workload Deployment
     * @param param the request object
     */
    public partialUpdateWorkloadDeploymentWithHttpInfo(param: WorkloadDeploymentsApiPartialUpdateWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkloadDeploymentResponse>> {
        return this.api.partialUpdateWorkloadDeploymentWithHttpInfo(param.deploymentId, param.workloadId, param.patchedWorkloadDeploymentRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Workload Deployment without affecting other fields.
     * Partially update a Workload Deployment
     * @param param the request object
     */
    public partialUpdateWorkloadDeployment(param: WorkloadDeploymentsApiPartialUpdateWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<WorkloadDeploymentResponse> {
        return this.api.partialUpdateWorkloadDeployment(param.deploymentId, param.workloadId, param.patchedWorkloadDeploymentRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Workload Deployment in your account.
     * Retrieve details of a Workload Deployment
     * @param param the request object
     */
    public retrieveWorkloadDeploymentWithHttpInfo(param: WorkloadDeploymentsApiRetrieveWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkloadDeploymentResponse>> {
        return this.api.retrieveWorkloadDeploymentWithHttpInfo(param.deploymentId, param.workloadId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Workload Deployment in your account.
     * Retrieve details of a Workload Deployment
     * @param param the request object
     */
    public retrieveWorkloadDeployment(param: WorkloadDeploymentsApiRetrieveWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<WorkloadDeploymentResponse> {
        return this.api.retrieveWorkloadDeployment(param.deploymentId, param.workloadId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Workload Deployment. This replaces the entire Workload Deployment with the new data provided.
     * Update a Workload Deployment
     * @param param the request object
     */
    public updateWorkloadDeploymentWithHttpInfo(param: WorkloadDeploymentsApiUpdateWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkloadDeploymentResponse>> {
        return this.api.updateWorkloadDeploymentWithHttpInfo(param.deploymentId, param.workloadId, param.workloadDeploymentRequest,  options).toPromise();
    }

    /**
     * Update an existing Workload Deployment. This replaces the entire Workload Deployment with the new data provided.
     * Update a Workload Deployment
     * @param param the request object
     */
    public updateWorkloadDeployment(param: WorkloadDeploymentsApiUpdateWorkloadDeploymentRequest, options?: ConfigurationOptions): Promise<WorkloadDeploymentResponse> {
        return this.api.updateWorkloadDeployment(param.deploymentId, param.workloadId, param.workloadDeploymentRequest,  options).toPromise();
    }

}

import { ObservableWorkloadsApi } from "./ObservableAPI";
import { WorkloadsApiRequestFactory, WorkloadsApiResponseProcessor} from "../apis/WorkloadsApi";

export interface WorkloadsApiCreateWorkloadRequest {
    /**
     * 
     * @type WorkloadRequest
     * @memberof WorkloadsApicreateWorkload
     */
    workloadRequest: WorkloadRequest
}

export interface WorkloadsApiDeleteWorkloadRequest {
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApideleteWorkload
     */
    workloadId: number
}

export interface WorkloadsApiListWorkloadsRequest {
    /**
     * Filter by active status.
     * Defaults to: undefined
     * @type boolean
     * @memberof WorkloadsApilistWorkloads
     */
    active?: boolean
    /**
     * Filter by digital certificate id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApilistWorkloads
     */
    digitalCertificateId?: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadsApilistWorkloads
     */
    fields?: string
    /**
     * Filter by id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApilistWorkloads
     */
    id?: number
    /**
     * Filter by infrastructure (accepts comma-separated values).
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadsApilistWorkloads
     */
    infrastructure?: string
    /**
     * Filter by last editor (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadsApilistWorkloads
     */
    lastEditor?: string
    /**
     * Filter by last modified date (greater than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WorkloadsApilistWorkloads
     */
    lastModifiedGte?: Date
    /**
     * Filter by last modified date (less than or equal).
     * Defaults to: undefined
     * @type Date
     * @memberof WorkloadsApilistWorkloads
     */
    lastModifiedLte?: Date
    /**
     * Filter by map name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadsApilistWorkloads
     */
    mapName?: string
    /**
     * Filter by mTLS trusted CA certificate id (accepts comma-separated values).
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApilistWorkloads
     */
    mtlsTrustedCaCertificateId?: number
    /**
     * Filter by name (case-insensitive, partial match).
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadsApilistWorkloads
     */
    name?: string
    /**
     * Which field to use when ordering the results.
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadsApilistWorkloads
     */
    ordering?: string
    /**
     * A page number within the paginated result set.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApilistWorkloads
     */
    page?: number
    /**
     * A numeric value that indicates the number of items per page.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApilistWorkloads
     */
    pageSize?: number
    /**
     * A search term.
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadsApilistWorkloads
     */
    search?: string
}

export interface WorkloadsApiPartialUpdateWorkloadRequest {
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApipartialUpdateWorkload
     */
    workloadId: number
    /**
     * 
     * @type PatchedWorkloadRequest
     * @memberof WorkloadsApipartialUpdateWorkload
     */
    patchedWorkloadRequest?: PatchedWorkloadRequest
}

export interface WorkloadsApiRetrieveWorkloadRequest {
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApiretrieveWorkload
     */
    workloadId: number
    /**
     * Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * Defaults to: undefined
     * @type string
     * @memberof WorkloadsApiretrieveWorkload
     */
    fields?: string
}

export interface WorkloadsApiUpdateWorkloadRequest {
    /**
     * A unique integer value identifying the workload.
     * Defaults to: undefined
     * @type number
     * @memberof WorkloadsApiupdateWorkload
     */
    workloadId: number
    /**
     * 
     * @type WorkloadRequest
     * @memberof WorkloadsApiupdateWorkload
     */
    workloadRequest: WorkloadRequest
}

export class ObjectWorkloadsApi {
    private api: ObservableWorkloadsApi

    public constructor(configuration: Configuration, requestFactory?: WorkloadsApiRequestFactory, responseProcessor?: WorkloadsApiResponseProcessor) {
        this.api = new ObservableWorkloadsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Workload in your account.
     * Create an Workload
     * @param param the request object
     */
    public createWorkloadWithHttpInfo(param: WorkloadsApiCreateWorkloadRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkloadResponse>> {
        return this.api.createWorkloadWithHttpInfo(param.workloadRequest,  options).toPromise();
    }

    /**
     * Create a new Workload in your account.
     * Create an Workload
     * @param param the request object
     */
    public createWorkload(param: WorkloadsApiCreateWorkloadRequest, options?: ConfigurationOptions): Promise<WorkloadResponse> {
        return this.api.createWorkload(param.workloadRequest,  options).toPromise();
    }

    /**
     * Delete a specific Workload in your account.
     * Delete an Workload
     * @param param the request object
     */
    public deleteWorkloadWithHttpInfo(param: WorkloadsApiDeleteWorkloadRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteWorkloadWithHttpInfo(param.workloadId,  options).toPromise();
    }

    /**
     * Delete a specific Workload in your account.
     * Delete an Workload
     * @param param the request object
     */
    public deleteWorkload(param: WorkloadsApiDeleteWorkloadRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteWorkload(param.workloadId,  options).toPromise();
    }

    /**
     * List all Workloads owned by your account.
     * List Workloads
     * @param param the request object
     */
    public listWorkloadsWithHttpInfo(param: WorkloadsApiListWorkloadsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedWorkloadList>> {
        return this.api.listWorkloadsWithHttpInfo(param.active, param.digitalCertificateId, param.fields, param.id, param.infrastructure, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.mapName, param.mtlsTrustedCaCertificateId, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * List all Workloads owned by your account.
     * List Workloads
     * @param param the request object
     */
    public listWorkloads(param: WorkloadsApiListWorkloadsRequest = {}, options?: ConfigurationOptions): Promise<PaginatedWorkloadList> {
        return this.api.listWorkloads(param.active, param.digitalCertificateId, param.fields, param.id, param.infrastructure, param.lastEditor, param.lastModifiedGte, param.lastModifiedLte, param.mapName, param.mtlsTrustedCaCertificateId, param.name, param.ordering, param.page, param.pageSize, param.search,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Workload without affecting other fields.
     * Partially update an Workload
     * @param param the request object
     */
    public partialUpdateWorkloadWithHttpInfo(param: WorkloadsApiPartialUpdateWorkloadRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkloadResponse>> {
        return this.api.partialUpdateWorkloadWithHttpInfo(param.workloadId, param.patchedWorkloadRequest,  options).toPromise();
    }

    /**
     * Update one or more fields of an existing Workload without affecting other fields.
     * Partially update an Workload
     * @param param the request object
     */
    public partialUpdateWorkload(param: WorkloadsApiPartialUpdateWorkloadRequest, options?: ConfigurationOptions): Promise<WorkloadResponse> {
        return this.api.partialUpdateWorkload(param.workloadId, param.patchedWorkloadRequest,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Workload in your account.
     * Retrieve details of an Workload
     * @param param the request object
     */
    public retrieveWorkloadWithHttpInfo(param: WorkloadsApiRetrieveWorkloadRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkloadResponse>> {
        return this.api.retrieveWorkloadWithHttpInfo(param.workloadId, param.fields,  options).toPromise();
    }

    /**
     * Retrieve details of a specific Workload in your account.
     * Retrieve details of an Workload
     * @param param the request object
     */
    public retrieveWorkload(param: WorkloadsApiRetrieveWorkloadRequest, options?: ConfigurationOptions): Promise<WorkloadResponse> {
        return this.api.retrieveWorkload(param.workloadId, param.fields,  options).toPromise();
    }

    /**
     * Update an existing Workload. This replaces the entire Workload with the new data provided.
     * Update an Workload
     * @param param the request object
     */
    public updateWorkloadWithHttpInfo(param: WorkloadsApiUpdateWorkloadRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkloadResponse>> {
        return this.api.updateWorkloadWithHttpInfo(param.workloadId, param.workloadRequest,  options).toPromise();
    }

    /**
     * Update an existing Workload. This replaces the entire Workload with the new data provided.
     * Update an Workload
     * @param param the request object
     */
    public updateWorkload(param: WorkloadsApiUpdateWorkloadRequest, options?: ConfigurationOptions): Promise<WorkloadResponse> {
        return this.api.updateWorkload(param.workloadId, param.workloadRequest,  options).toPromise();
    }

}
